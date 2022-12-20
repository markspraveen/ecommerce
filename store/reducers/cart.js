import TYPES from "../constants/cart.types";

const initialState = {
  products: [],
  showCart: false,
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.MODIFY_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {
            return {
              ...product,
              quantity: action.payload.quantity,
            };
          }
          return product;
        }),
      };

    case TYPES.ADD_ITEM:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case TYPES.REMOVE_ITEM:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.id
        ),
      };

    case TYPES.CLEAR_CART:
      return {
        ...state,
        products: [],
      };

    case TYPES.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        showCart: !state.showCart,
      };

    default:
      return state;
  }
};

export default cartReducers;
