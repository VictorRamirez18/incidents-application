import { combineReducers } from "redux";
import incidents from "./incidents.reducer";
import modal from "./modal.reducer";
import filters from "./filters.reducer";

const rootReducer = combineReducers({
  incidents: incidents,
  modal: modal,
  filters: filters,
});

export default rootReducer;
