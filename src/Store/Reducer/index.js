import { combineReducers } from "redux";
import carousel from "./Reducer";
import category from "./Category";
import product from "./Product";
export default combineReducers({
  carousel,
  category,
  product,
});
