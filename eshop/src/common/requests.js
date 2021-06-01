export const getProducts = {
  method: "GET",
  url: "https://fakestoreapi.com/products",
};

// export function getProductES5(id) {
//   return { method: "GET", url: `https://fakestoreapi.com/products/${id}` };
// }

export const getProduct = (id) => ({
  method: "GET",
  url: `https://fakestoreapi.com/products/${id}`,
});
