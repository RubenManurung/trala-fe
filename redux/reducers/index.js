import { combineReducers } from "redux";
import slidersReducers from "./slidersReducers";
import kelasReducers from "./kelasReducers";
import artikelReducers from "./artikelReducers";
import signInReducers from "./signInReducers";

// describe reducer in this apps
const rootReducer = combineReducers({
  slidersReducers,
  kelasReducers,
  artikelReducers,
  signInReducers,
});

export default rootReducer;
