// generateSitemap.ts

import puppeteer from "puppeteer";

export async function generateSitemap(websiteUrl) {
  try {
    console.log(websiteUrl);
    const browser = await puppeteer.launch({ headless: "new" });
    console.log(browser);
    const page = await browser.newPage();

    await page.goto(websiteUrl, { waitUntil: "networkidle0" });

    const links = await page.evaluate(() =>
      Array.from(document.querySelectorAll("a"), (each) => each.href)
    );

    browser.close();
    return links;
  } catch (error) {
    console.log("something went wrong sorry");
  }
}
