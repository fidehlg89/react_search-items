import { combineReducers } from "redux";
import items from "./ItemsReducer";
import cart from "./CartReducer";

// to combine all reducers together
const appReducer = combineReducers({
  items,
  cart
});

export default appReducer;
