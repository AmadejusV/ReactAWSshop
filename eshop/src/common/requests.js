const fakeStoreApiUrl = "https://fakestoreapi.com";

export const getProducts = {
  method: "GET",
  url: `${fakeStoreApiUrl}/products`,
};

// export function getProductES5(id) {
//   return { method: "GET", url: `https://fakestoreapi.com/products/${id}` };
// }

export const getProduct = (id) => ({
  method: "GET",
  url: `${fakeStoreApiUrl}/products/${id}`,
});

export const addToCart = (productId, quantity) => ({
  method: "POST",
  url: `${fakeStoreApiUrl}/carts`,
  data: {
    userId: 5,
    products: [{ productId: productId, quantity }],
  },
});
