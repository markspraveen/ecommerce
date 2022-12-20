import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  } else {
    return applyMiddleware(...middleware);
  }
};

const makeStore = () => {
  return createStore(
    rootReducer,
    process.env.NODE_ENV === "development"
      ? bindMiddleware([thunk, logger])
      : bindMiddleware([thunk])
  );
};

export const wrapper = createWrapper(makeStore, { debug: false });
