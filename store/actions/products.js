import TYPES from "../constants/products.types";

export const setProducts = (products) => {
  return {
    type: TYPES.SET_PRODUCTS,
    payload: products,
  };
};

export const showCart = (show) => {
  return {
    type: TYPES.SHOW_CART,
    payload: show,
  };
};
