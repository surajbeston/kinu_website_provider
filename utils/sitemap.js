export async function generateSitemap(websiteUrl) {
  let links = [];
  const url = new URL(websiteUrl);
  const response = await $fetch(
    `https://api.kinu.app/website/info/get_info_by_domain/`,
    {
      method: "POST",
      body: {
        domain: url.hostname,
      },
    }
  );
  const productResponse = await $fetch(
    `https://api.kinu.app/api/product/?seller=${response.website_info.seller.id}&limit=1000`
  );
  productResponse.results.map((each) => links.push(each.id));
  return links;
}
