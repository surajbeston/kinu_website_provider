import { SitemapStream, streamToPromise } from "sitemap";
import { generateSitemap } from "../../utils/sitemap";

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event);
  const links = await generateSitemap(`https://${url.host}`);
  const sitemap = new SitemapStream({
    hostname: `https://${url.host}`,
  });
  if (links.length > 0) {
    for (const link of links) {
      sitemap.write({
        url: link,
      });
    }
  }
  sitemap.end();
  return streamToPromise(sitemap);
});
