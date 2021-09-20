const baseUrl = "https://test2.sionic.ru/api";

export async function getCategories() {
  const url = `${baseUrl}/Categories`;
  const categories = await fetch(url);

  return handleResult(categories);
}

export async function getProducts(categoryID, start) {
  let url;

  if (start === 0) {
    url = `${baseUrl}/Products?range=[${start},${start + 11}]`;
  } else {
    url = `${baseUrl}/Products?range=[${start},${start + 11}]&filter={"category_id":${categoryID}}`;
  }
  const products = await fetch(url);

  return handleResult(products);
}

export async function getProductImages(productID) {
  const url = `${baseUrl}/ProductImages?filter={"product_id":${productID}}`;
  const productImages = await fetch(url);

  return handleResult(productImages);
}

export async function getSelectCategoryProducts(categorID, start) {
  const url = `${baseUrl}/Products?range=[${start},${
    start + 11
  }]&filter={"category_id":${categorID}}`;
  const products = await fetch(url);

  return handleResult(products);
}

export async function getProductVariations(productID) {
  const url = `${baseUrl}/ProductVariations?filter={"product_id":${productID}}`;
  const productVariations = await fetch(url);

  return handleResult(productVariations);
}

export async function getProductVariationsPropertyValues(variationID) {
  const url = `${baseUrl}/ProductVariationPropertyValues?filter={"product_variation_id":${variationID}}`;
  const values = await fetch(url);

  return handleResult(values);
}

export async function getProductVariationPropertyListValues(variationID) {
  const url = `${baseUrl}/ProductVariationPropertyListValues?filter={"product_variation_property_id":${variationID}}`;
  const values = await fetch(url);

  return handleResult(values);
}

function handleResult(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Статут ошибки: ${res.status}`);
}
