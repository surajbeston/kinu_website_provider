import { SitemapStream, streamToPromise } from "sitemap";
import { generateSitemap } from "../../utils/sitemap";

export default defineEventHandler(async (event) => {
  const url = getRequestURL(event);

  const links = await generateSitemap(`${url.protocol}//${url.host}`);
  console.log(links);
  const sitemap = new SitemapStream({
    hostname: `${url.protocol}//${url.host}`,
  });

  // for (const link of links) {
  //   sitemap.write({
  //     url: link,
  //   });
  // }
  sitemap.write({
    url: "kinu.com.np",
  });
  sitemap.end();
  return streamToPromise(sitemap);
});
