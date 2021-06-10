import * as type from "../types";

export function filterSearch(search) {
  return {
    type: type.FILTER_SEARCH,
    search: search,
  };
}

export function filterDate(order) {
  return {
    type: type.FILTER_DATE,
    order: order,
  };
}

export function filterStatus(status) {
  return {
    type: type.FILTER_STATUS,
    status: status,
  };
}
