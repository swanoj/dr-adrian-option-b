import fs from "node:fs/promises";
import path from "node:path";
import { chromium, devices } from "playwright";

const BASE_URL = "https://yorryconcepts.wixstudio.com/drad-c2-v25-2";
const OUT_DIR = path.resolve("artifacts/parity-check/wix-reference");

const TARGETS = [
  { key: "home", path: "/", selectorHints: ["text=Book", "text=About", "footer"] },
  { key: "book", path: "/book-online", selectorHints: ["text=Book", "button", "form"] },
  { key: "condition", path: "/service-page/acupuncture-1", selectorHints: ["text=Pain", "h1", "footer"] },
];

function normalizeNumber(value) {
  const n = Number.parseFloat(String(value).replace("px", ""));
  if (Number.isNaN(n)) {
    return null;
  }
  return Math.round(n * 100) / 100;
}

async function captureTarget(page, mode, target) {
  const url = target.path === "/" ? BASE_URL : `${BASE_URL}${target.path}`;
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.waitForTimeout(2500);

  const pageName = `${target.key}-${mode}`;
  await page.screenshot({
    path: path.join(OUT_DIR, `${pageName}.png`),
    fullPage: true,
  });

  const navLink = page.locator("a,button").filter({ hasText: /book|consultation|learn more/i }).first();
  let interaction = null;
  if ((await navLink.count()) > 0) {
    const before = await navLink.evaluate((el) => {
      const s = window.getComputedStyle(el);
      return {
        color: s.color,
        backgroundColor: s.backgroundColor,
        borderColor: s.borderColor,
        transform: s.transform,
        transition: s.transitionDuration,
      };
    });
    let after = null;
    try {
      await navLink.hover({ force: true });
      await page.waitForTimeout(220);
      after = await navLink.evaluate((el) => {
        const s = window.getComputedStyle(el);
        return {
          color: s.color,
          backgroundColor: s.backgroundColor,
          borderColor: s.borderColor,
          transform: s.transform,
          transition: s.transitionDuration,
        };
      });
    } catch {
      after = before;
    }
    interaction = { before, after };
  }

  const styles = await page.evaluate(() => {
    const body = document.body;
    const html = document.documentElement;
    const header =
      document.querySelector("header") ||
      document.querySelector('[class*="header"]') ||
      document.querySelector('[data-testid*="header"]');
    const footer =
      document.querySelector("footer") ||
      document.querySelector('[class*="footer"]') ||
      document.querySelector('[data-testid*="footer"]');
    const h1 = document.querySelector("h1");
    const cta = Array.from(document.querySelectorAll("a,button")).find((el) =>
      /book|learn|consultation|contact/i.test((el.textContent || "").trim()),
    );
    const card =
      document.querySelector('[class*="card"]') ||
      document.querySelector('[data-testid*="card"]') ||
      document.querySelector("article");
    const section = document.querySelector("section");
    const containerCandidate = Array.from(document.querySelectorAll("main, section, div"))
      .filter((el) => {
        const r = el.getBoundingClientRect();
        return r.width > window.innerWidth * 0.5 && r.height > 40;
      })
      .sort((a, b) => b.getBoundingClientRect().width - a.getBoundingClientRect().width)[0];

    function pick(el) {
      if (!el) return null;
      const s = window.getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        fontFamily: s.fontFamily,
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        lineHeight: s.lineHeight,
        letterSpacing: s.letterSpacing,
        color: s.color,
        backgroundColor: s.backgroundColor,
        borderRadius: s.borderRadius,
        border: s.border,
        boxShadow: s.boxShadow,
        padding: s.padding,
        margin: s.margin,
        width: r.width,
        height: r.height,
        transitionDuration: s.transitionDuration,
        transitionTimingFunction: s.transitionTimingFunction,
      };
    }

    const rootVars = {};
    const rootStyle = window.getComputedStyle(html);
    for (const key of rootStyle) {
      if (key.startsWith("--")) {
        const value = rootStyle.getPropertyValue(key).trim();
        if (value) rootVars[key] = value;
      }
    }

    const breakpoints = {
      width: window.innerWidth,
      heroColumns:
        h1?.closest("section,div,main")?.computedStyleMap?.()?.get("grid-template-columns")?.toString?.() || null,
    };

    return {
      viewport: { width: window.innerWidth, height: window.innerHeight },
      body: pick(body),
      header: pick(header),
      footer: pick(footer),
      h1: pick(h1),
      cta: pick(cta),
      card: pick(card),
      section: pick(section),
      container: pick(containerCandidate),
      rootVars,
      breakpoints,
    };
  });

  return {
    target: target.key,
    mode,
    url,
    styles,
    interaction,
  };
}

async function run() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const contextDesktop = await browser.newContext({ viewport: { width: 1512, height: 982 } });
  const contextMobile = await browser.newContext({
    ...devices["iPhone 13"],
    viewport: { width: 390, height: 844 },
  });

  const desktopPage = await contextDesktop.newPage();
  const mobilePage = await contextMobile.newPage();

  const results = [];
  for (const target of TARGETS) {
    results.push(await captureTarget(desktopPage, "desktop", target));
    results.push(await captureTarget(mobilePage, "mobile", target));
  }

  const normalized = results.map((result) => {
    const clone = structuredClone(result);
    const fields = ["body", "header", "footer", "h1", "cta", "card", "section", "container"];
    for (const field of fields) {
      const value = clone.styles?.[field];
      if (!value) continue;
      if (value.width != null) value.width = normalizeNumber(value.width);
      if (value.height != null) value.height = normalizeNumber(value.height);
    }
    return clone;
  });

  await fs.writeFile(path.join(OUT_DIR, "wix-metrics.json"), JSON.stringify(normalized, null, 2), "utf8");

  const manifest = normalized
    .map((entry) => `${entry.mode.toUpperCase()} ${entry.target}: ${entry.url}`)
    .join("\n");
  await fs.writeFile(path.join(OUT_DIR, "manifest.txt"), `${manifest}\n`, "utf8");

  await contextDesktop.close();
  await contextMobile.close();
  await browser.close();
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
