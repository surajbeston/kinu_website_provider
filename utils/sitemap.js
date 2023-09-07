// generateSitemap.ts

import fs from "fs";
import puppeteer from "puppeteer";

export async function generateSitemap(websiteUrl) {
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(websiteUrl, { waitUntil: "networkidle0" });

    const links = await page.evaluate(() =>
      Array.from(document.querySelectorAll("a"), (each) => each.href)
    );
    const sitemap =
      '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
      links.map((url) => `  <url><loc>${url}</loc></url>`).join("\n") +
      "\n</urlset>";
    fs.writeFile("./public/sitemap.xml", sitemap, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("file created");
      }
    });
    browser.close();
  } catch (error) {
    console.log("something went wrong sorry");
  }
}
