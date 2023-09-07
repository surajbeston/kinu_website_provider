import { SitemapStream, streamToPromise } from "sitemap";
import { generateSitemap } from "../../utils/sitemap";

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event);

  const links = await generateSitemap(`${url.protocol}//${url.host}`);

  const sitemap = new SitemapStream({
    hostname: `${url.protocol}//${url.host}`,
  });

  for (const doc of links) {
    sitemap.write({
      url: doc,
    });
  }
  sitemap.end();
  return streamToPromise(sitemap);
});
