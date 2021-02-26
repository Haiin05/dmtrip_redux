import { combineReducers } from "redux"; //리듀서들을 합치는 일을 한다.
import city from "./city";
import seat from "./seat";

const rootReducer = combineReducers({
  city,
  seat,
});

export default rootReducer;
