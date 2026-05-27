import fs from "node:fs/promises";
import path from "node:path";
import { chromium, devices } from "playwright";

const BASE_URL = process.env.BASE_URL || "http://localhost:3001";
const STAGE = process.env.STAGE || "before";
const OUT_DIR = path.resolve(`artifacts/parity-check/local-${STAGE}`);

const TARGETS = [
  { key: "home", path: "/" },
  { key: "book", path: "/book" },
  { key: "condition", path: "/conditions/pain-musculoskeletal" },
];

async function capture(page, mode, target) {
  const url = `${BASE_URL}${target.path}`;
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.waitForTimeout(1200);
  await page.screenshot({
    path: path.join(OUT_DIR, `${target.key}-${mode}.png`),
    fullPage: true,
  });
}

async function run() {
  await fs.mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const desktop = await browser.newContext({ viewport: { width: 1512, height: 982 } });
  const mobile = await browser.newContext({
    ...devices["iPhone 13"],
    viewport: { width: 390, height: 844 },
  });
  const pDesk = await desktop.newPage();
  const pMob = await mobile.newPage();

  for (const target of TARGETS) {
    await capture(pDesk, "desktop", target);
    await capture(pMob, "mobile", target);
  }

  await desktop.close();
  await mobile.close();
  await browser.close();
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
