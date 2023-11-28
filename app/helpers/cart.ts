import { CartType } from "../models/product";

const cartProducts = async (cart: Array<CartType>) => {
  const res = await fetch("api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      products: cart,
    }),
  });
  const results = await res.json();
  return results;
};
export { cartProducts };
