const baseUrl = "https://test2.sionic.ru/api";

export function getCategories() {
  return fetch(`${baseUrl}/Categories`).then(handleResult);
}

export function getProducts() {
  return fetch(`${baseUrl}/Products?range=[0,11]  `).then(handleResult);
}

export function getProductImages(productID) {
  return fetch(`${baseUrl}/ProductImages?filter={"product_id":${productID}}`).then(handleResult);
}

export function getSelectCategoryProducts(categorID) {
  return fetch(`${baseUrl}/Products?filter={"category_id":${categorID}}`).then(handleResult);
}

export function getProductVariations(productID) {
  return fetch(`${baseUrl}/ProductVariations?filter={"product_id":${productID}}`).then(handleResult);
}

function handleResult(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Статут ошибки: ${res.status}`);
}
