import * as type from "../types";

const initialState = {
  search: "",
  order: "",
  status: "",
};

export default function filters(state = initialState, action) {
  switch (action.type) {
    case type.FILTER_SEARCH:
      return {
        ...state,
        search: action.search,
      };
    case type.FILTER_DATE:
      return {
        ...state,
        order: action.order,
      };
    case type.FILTER_STATUS:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
}
