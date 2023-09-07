import { SitemapStream, streamToPromise } from "sitemap";
import { generateSitemap } from "../../utils/sitemap";

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event).host;

  const links = await generateSitemap(`https://${url}`);
  const sitemap = new SitemapStream({
    hostname: `https://${url}`,
  });

  for (const doc of links) {
    sitemap.write({
      url: doc,
    });
  }
  sitemap.end();
  return streamToPromise(sitemap);
});
