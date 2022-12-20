import { combineReducers } from "redux";
import productReducers from "./products";
import cartReducers from "./cart";

const rootReducer = combineReducers({
  products: productReducers,
  cart: cartReducers,
});

export default rootReducer;
