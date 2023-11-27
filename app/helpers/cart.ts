import { CartType } from "../models/product";

const cartProducts = async (cart: Array<CartType>) => {
  await fetch("/api/cartApi", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      products: cart,
    }),
  });
};
export { cartProducts };
