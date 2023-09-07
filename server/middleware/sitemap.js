import { generateSitemap } from "../../utils/sitemap";
let sitemapGenerated = false;
export default defineEventHandler((event) => {
  if (!sitemapGenerated) {
    console.log("callled");
    generateSitemap(getRequestURL(event));
    sitemapGenerated = true;
  }
});
