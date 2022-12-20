import TYPES from "../constants/cart.types";

export const addToCart = (product) => {
  return {
    type: TYPES.ADD_ITEM,
    payload: { ...product, quantity: 1 },
  };
};

export const removeFromCart = (product) => {
  return {
    type: TYPES.REMOVE_ITEM,
    payload: product,
  };
};

export const clearCart = () => {
  return {
    type: TYPES.CLEAR_CART,
  };
};

export const toggleCart = () => {
  return {
    type: TYPES.TOGGLE_CART_HIDDEN,
  };
};

export const modifyProductQuantity = (product) => {
  return {
    type: TYPES.MODIFY_PRODUCT_QUANTITY,
    payload: product,
  };
};
