import { SitemapStream, streamToPromise } from "sitemap";
import { generateSitemap } from "../../utils/sitemap";

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event);

  const links = await generateSitemap(`https://${url.host}`);
  console.log(links);
  const sitemap = new SitemapStream({
    hostname: `https://${url.host}`,
  });

  //   for (const link of links) {
  if (links) {
    sitemap.write({
      url: `kinu.com.${links.length} https://${url.host}`,
    });
  } else {
    sitemap.write({
      url: `kinu.com.${links} https://${url.host}`,
    });
  }
  //   }
  sitemap.end();
  return streamToPromise(sitemap);
});
