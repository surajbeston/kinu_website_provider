import { SitemapStream, streamToPromise } from "sitemap";
import { generateSitemap } from "../../utils/sitemap";
import puppeteer from "puppeteer";

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event);

  let links;
  //   const links = await generateSitemap(`https://${url.host}`);
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.goto(`https://${url.host}`, { waitUntil: "networkidle0" });

    links = await page.evaluate(() =>
      Array.from(document.querySelectorAll("a"), (each) => each.href)
    );

    browser.close();
  } catch (error) {
    console.log("something went wrong sorry", error);
  }
  console.log(links);
  const sitemap = new SitemapStream({
    hostname: `https://${url.host}`,
  });

  //   for (const link of links) {
  if (links) {
    sitemap.write({
      url: `kinu.com.${links.length}-https://${url.host}`,
    });
  } else {
    sitemap.write({
      url: `kinu.com.${links}-https://${url.host}`,
    });
  }
  //   }
  sitemap.end();
  return streamToPromise(sitemap);
});
