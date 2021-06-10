import * as type from "../types";

export function toogleModalForm(boolean, id) {
  return {
    type: type.TOOGLE_MODAL_FORM,
    boolean: boolean,
    id: id,
  };
}
