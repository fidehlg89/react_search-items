import { combineReducers } from "redux";
import items from "./ItemsReducer";
import car from "./CarReducer";

// to combine all reducers together
const appReducer = combineReducers({
  items,
  car
});

export default appReducer;
