import { combineReducers } from "redux";
import city from "./city";
import seat from "./seat";
import date from "./date";

const rootReducer = combineReducers({
  city,
  seat,
  date,
});

export default rootReducer;
