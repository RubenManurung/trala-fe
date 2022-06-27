import { combineReducers } from "redux";
import slidersReducers from "./slidersReducers";
import kelasReducers from "./kelasReducers";
import artikelReducers from "./artikelReducers";
import authReducers from "./authReducers";

// describe reducer in this apps
const rootReducer = combineReducers({
  slidersReducers,
  kelasReducers,
  artikelReducers,
  authReducers,
});

export default rootReducer;
