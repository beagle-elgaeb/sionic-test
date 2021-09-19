const baseUrl = "https://test2.sionic.ru/api";

export async function getCategories() {
  const url = `${baseUrl}/Categories`;
  const categories = await fetch(url);

  return handleResult(categories);
}

export async function getProducts() {
  const url = `${baseUrl}/Products?range=[0,11]`;
  const products = await fetch(url);

  return handleResult(products);
}

export async function getProductImages(productID) {
  const url = `${baseUrl}/ProductImages?filter={"product_id":${productID}}`;
  const productImages = await fetch(url);

  return handleResult(productImages);
}

export async function getSelectCategoryProducts(categorID) {
  const url = `${baseUrl}/Products?filter={"category_id":${categorID}}`;
  const products = await fetch(url);

  return handleResult(products);
}

export async function getProductVariations(productID) {
  const url = `${baseUrl}/ProductVariations?filter={"product_id":${productID}}`;
  const productVariations = await fetch(url);

  return handleResult(productVariations);
}

function handleResult(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Статут ошибки: ${res.status}`);
}
