export const apiAuthority = "https://api.kinu.app";

export const locationFormatter = (location) => {
  const { city, district, province, nation, street, ward } = location;
  let fullLocation = "";
  if (street) fullLocation += ` ${street}-`;
  if (ward) fullLocation += `${ward}, `;
  if (city) fullLocation += `${city}, `;
  if (district) fullLocation += `${district}, `;
  if (province) fullLocation += `${province}, `;
  if (nation) fullLocation += `${nation}, `;

  return fullLocation;
};

export const productsGrouper = (products) => {
  const groupedProducts = {};
  for (const product of products) {
    const categoryName = product.category.name;
    if (groupedProducts[categoryName]) {
      groupedProducts[categoryName].push(product);
    } else {
      groupedProducts[categoryName] = [product];
    }
  }
  return groupedProducts;
};
