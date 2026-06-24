import { test } from "@playwright/test";
import path from "path";

/**
 * GuideAI Documentation Screenshots
 *
 * Captures full-screen (1920x1080) screenshots for the /docs page.
 *
 * USAGE:
 *   npx playwright test e2e/screenshots.spec.ts
 *
 * PREREQUISITES:
 *   - Dashboard running at http://localhost:5173
 *   - Demo app (with SDK) running at http://localhost:3000
 *
 * OUTPUT:
 *   Screenshots saved to: public/docs/*.png
 */

const SCREENSHOT_DIR = path.join(__dirname, "../public/docs");
const DASHBOARD_URL = "http://localhost:5173";
const DEMO_APP_URL = "http://localhost:3000";

test.describe("Documentation Screenshots", () => {
  test.setTimeout(60000);

  // ============================================
  // DOCS PAGE SECTIONS (landing site)
  // ============================================
  test("capture architecture overview", async ({ page }) => {
    await page.goto(`${DEMO_APP_URL}/docs`, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(3000);

    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "architecture-overview.png"),
      fullPage: false,
    });
  });

  test("capture scanner section", async ({ page }) => {
    await page.goto(`${DEMO_APP_URL}/docs`, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(3000);

    // Click the Scanner sidebar link to scroll there
    const sidebarBtn = page.locator("text=Scanner CLI").first();
    if (await sidebarBtn.isVisible().catch(() => false)) {
      await sidebarBtn.click();
      await page.waitForTimeout(1000);
    }

    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "scanner-terminal-output.png"),
      fullPage: false,
    });
  });

  test("capture scanner dry-run output", async ({ page }) => {
    await page.goto(`${DEMO_APP_URL}/docs`, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(3000);

    // Navigate to scanner and scroll down
    const sidebarBtn = page.locator("text=Scanner CLI").first();
    if (await sidebarBtn.isVisible().catch(() => false)) {
      await sidebarBtn.click();
      await page.waitForTimeout(500);
    }
    // Scroll down more to dry run
    await page.evaluate(() => window.scrollBy(0, 800));
    await page.waitForTimeout(500);

    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "scanner-dry-run-output.png"),
      fullPage: false,
    });
  });

  test("capture showcase section", async ({ page }) => {
    await page.goto(`${DEMO_APP_URL}/docs`, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(3000);

    const sidebarBtn = page.locator("text=Visual Showcase").first();
    if (await sidebarBtn.isVisible().catch(() => false)) {
      await sidebarBtn.click();
      await page.waitForTimeout(1000);
    }

    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "showcase-all-modes.png"),
      fullPage: false,
    });
  });

  // ============================================
  // DASHBOARD SCREENSHOTS
  // ============================================
  test("capture dashboard - main page", async ({ page }) => {
    await page.goto(DASHBOARD_URL, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(3000);

    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "dashboard-api-keys.png"),
      fullPage: false,
    });
  });

  test("capture dashboard - guides", async ({ page }) => {
    await page.goto(DASHBOARD_URL, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2000);

    // Try navigating to guides section (force to bypass SDK overlay)
    const guidesLink = page.locator("text=Guides").first();
    if (await guidesLink.isVisible().catch(() => false)) {
      await guidesLink.click({ force: true });
      await page.waitForTimeout(2000);
    }

    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "dashboard-guides-list.png"),
      fullPage: false,
    });
  });

  test("capture dashboard - analytics", async ({ page }) => {
    await page.goto(DASHBOARD_URL, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2000);

    // Try navigating to analytics section
    const analyticsLink = page.locator("text=Analytics").first();
    if (await analyticsLink.isVisible().catch(() => false)) {
      await analyticsLink.click();
      await page.waitForTimeout(2000);
    }

    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "dashboard-analytics.png"),
      fullPage: false,
    });
  });

  test("capture dashboard - guide editor", async ({ page }) => {
    await page.goto(DASHBOARD_URL, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2000);

    // Look for new guide or editor
    const newGuide = page.locator("text=New Guide").first();
    if (await newGuide.isVisible().catch(() => false)) {
      await newGuide.click();
      await page.waitForTimeout(2000);
    }

    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "guide-builder-editor.png"),
      fullPage: false,
    });
  });

  test("capture dashboard - targeting", async ({ page }) => {
    await page.goto(DASHBOARD_URL, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2000);

    // Navigate to guides then targeting (force to bypass SDK overlay)
    const guidesLink = page.locator("text=Guides").first();
    if (await guidesLink.isVisible().catch(() => false)) {
      await guidesLink.click({ force: true });
      await page.waitForTimeout(1500);
    }

    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "guide-builder-targeting.png"),
      fullPage: false,
    });
  });

  // ============================================
  // SDK IN ACTION (demo app)
  // ============================================
  test("capture bubble on live site", async ({ page }) => {
    await page.goto(DEMO_APP_URL, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(4000);

    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "bubble-on-live-site.png"),
      fullPage: false,
    });
  });

  test("capture bubble modes", async ({ page }) => {
    await page.goto(DEMO_APP_URL, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(5000);

    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "bubble-modes.png"),
      fullPage: false,
    });
  });

  test("capture guide running live", async ({ page }) => {
    await page.goto(DEMO_APP_URL, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(4000);

    // Try to trigger a guide via SDK
    await page.evaluate(() => {
      if ((window as any).guideai) {
        (window as any).guideai.showGuideById("guide_getting_started");
      }
    });
    await page.waitForTimeout(2000);

    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "guide-running-live.png"),
      fullPage: false,
    });
  });

  test("capture copilot chat open", async ({ page }) => {
    await page.goto(DEMO_APP_URL, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(4000);

    // Try clicking the bubble to open chat
    const bubble = page.locator("[data-guideai-bubble]").first();
    if (await bubble.isVisible().catch(() => false)) {
      await bubble.click();
      await page.waitForTimeout(2000);
    }

    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "copilot-chat-open.png"),
      fullPage: false,
    });
  });

  test("capture copilot walkthrough", async ({ page }) => {
    await page.goto(DEMO_APP_URL, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(4000);

    // Open chat and ask question
    const bubble = page.locator("[data-guideai-bubble]").first();
    if (await bubble.isVisible().catch(() => false)) {
      await bubble.click();
      await page.waitForTimeout(1500);

      const chatInput = page.locator("[data-guideai-chat-input]").first();
      if (await chatInput.isVisible().catch(() => false)) {
        await chatInput.fill("How do I export my data?");
        await chatInput.press("Enter");
        await page.waitForTimeout(5000);
      }
    }

    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "copilot-walkthrough-generation.png"),
      fullPage: false,
    });
  });

  // ============================================
  // ANALYTICS
  // ============================================
  test("capture analytics friction heatmap", async ({ page }) => {
    await page.goto(DASHBOARD_URL, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2000);

    const analyticsLink = page.locator("text=Analytics").first();
    if (await analyticsLink.isVisible().catch(() => false)) {
      await analyticsLink.click();
      await page.waitForTimeout(2000);
    }

    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "analytics-friction-heatmap.png"),
      fullPage: false,
    });
  });

  test("capture analytics funnel", async ({ page }) => {
    await page.goto(DASHBOARD_URL, { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(2000);

    const analyticsLink = page.locator("text=Analytics").first();
    if (await analyticsLink.isVisible().catch(() => false)) {
      await analyticsLink.click();
      await page.waitForTimeout(1000);
    }

    // Scroll down to funnel section
    await page.evaluate(() => window.scrollBy(0, 600));
    await page.waitForTimeout(1000);

    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "analytics-funnel-analysis.png"),
      fullPage: false,
    });
  });
});
