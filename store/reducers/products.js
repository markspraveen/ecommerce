import TYPES from "../constants/products.types";

const initialState = {
  products: [],
  showCart: false,
};

const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case TYPES.SHOW_CART:
      return {
        ...state,
        showCart: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducers;
