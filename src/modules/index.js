import { combineReducers } from "redux"; //리듀서들을 합치는 일을 한다.
import counter from "./counter";
import seat from "./seat";

const rootReducer = combineReducers({
  counter,
  seat,
});

export default rootReducer;
