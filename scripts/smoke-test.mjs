import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const baseUrl = process.argv[2] || "http://localhost:3003";
const outDir = process.argv[3] || path.resolve("artifacts/smoke");

const expectedHeadline = "Natural, Evidence-Based Support for Stress, Pain and Women's Health";
const expectedCta = "Book a Consultation";

function nowIso() {
  return new Date().toISOString();
}

async function main() {
  await fs.mkdir(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
    }
  });

  const log = {
    startedAt: nowIso(),
    baseUrl,
    checks: [],
    consoleErrors: [],
    passed: false
  };

  try {
    await page.goto(baseUrl, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForLoadState("networkidle", { timeout: 60000 });
    log.checks.push({ name: "navigate_home", pass: true });

    const headline = page.getByRole("heading", { name: expectedHeadline });
    await headline.waitFor({ state: "visible", timeout: 15000 });
    log.checks.push({ name: "hero_headline_visible", pass: true, expected: expectedHeadline });

    const screenshotPath = path.join(outDir, "homepage-full.png");
    await page.screenshot({ path: screenshotPath, fullPage: true });
    log.checks.push({ name: "screenshot_saved", pass: true, path: screenshotPath });

    const cta = page.getByRole("link", { name: expectedCta }).first();
    await cta.waitFor({ state: "visible", timeout: 15000 });
    log.checks.push({ name: "primary_cta_visible", pass: true, expected: expectedCta });

    await cta.click();
    await page.waitForURL("**/book", { timeout: 15000 });
    log.checks.push({ name: "primary_cta_click_navigates", pass: true, destination: "/book" });

    log.consoleErrors = consoleErrors;
    const fatalConsoleErrors = consoleErrors.length > 0;
    log.checks.push({
      name: "no_fatal_console_errors",
      pass: !fatalConsoleErrors,
      count: consoleErrors.length
    });

    log.passed = log.checks.every((check) => check.pass);
  } catch (error) {
    log.checks.push({ name: "unhandled_exception", pass: false, error: String(error) });
    log.consoleErrors = consoleErrors;
    log.passed = false;
  } finally {
    log.finishedAt = nowIso();
    await browser.close();
  }

  const jsonPath = path.join(outDir, "smoke-result.json");
  const txtPath = path.join(outDir, "smoke-result.txt");
  await fs.writeFile(jsonPath, `${JSON.stringify(log, null, 2)}\n`, "utf8");

  const lines = [
    `startedAt=${log.startedAt}`,
    `finishedAt=${log.finishedAt}`,
    `baseUrl=${log.baseUrl}`,
    `passed=${log.passed}`,
    `checks=${log.checks.length}`,
    ...log.checks.map((c) => `check:${c.name}=pass:${c.pass}`),
    `consoleErrorCount=${log.consoleErrors.length}`
  ];
  await fs.writeFile(txtPath, `${lines.join("\n")}\n`, "utf8");

  if (!log.passed) {
    process.exit(1);
  }
}

await main();
