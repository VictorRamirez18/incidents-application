import * as type from "../types";

const initialState = {
  isOpen: false,
  id: 0,
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case type.TOOGLE_MODAL_FORM:
      return {
        ...state,
        isOpen: action.boolean,
        id: action.id,
      };
    default:
      return state;
  }
}
