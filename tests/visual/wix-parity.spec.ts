import { expect, test } from "@playwright/test";

test.describe("Wix Parity Visuals", () => {
  test("hero and first fold match baseline", async ({ page }) => {
    await page.goto("/wix-parity", { waitUntil: "networkidle" });
    await expect(page).toHaveScreenshot("wix-parity-hero-first-fold.png");
  });
});
