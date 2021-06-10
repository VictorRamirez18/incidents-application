import * as type from "../types";

const initialState = {
  incidents: [],
  loading: false,
  code: 0,
};

export default function incidents(state = initialState, action) {
  switch (action.type) {
    case type.POST_INCIDENT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.POST_INCIDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        code: action.incident.code,
      };
    case type.POST_INCIDENT_FAILED:
      return {
        ...state,
        loading: false,
      };

    case type.GET_INCIDENTS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.GET_INCIDENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        incidents: action.incidents.data,
      };
    case type.GET_INCIDENTS_FAILED:
      return {
        ...state,
        loading: false,
      };

    case type.PUT_INCIDENT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.PUT_INCIDENT_SUCCESS:
      const id = action.incident.data.id;
      let updatingProduct = state.incidents.find((prop) => prop.id === id);
      for (let i in updatingProduct) {
        updatingProduct[i] = action.incident.data[i];
      }
      return {
        ...state,
        loading: false,
      };
    case type.PUT_INCIDENT_FAILED:
      return {
        ...state,
        loading: false,
      };

    case type.DELETE_INCIDENT_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case type.DELETE_INCIDENT_SUCCESS:
      const deletedIncident = action.incident.data;
      const filteredIncidents = state.incidents.filter(
        (i) => i.id !== deletedIncident.id
      );
      return {
        ...state,
        loading: false,
        incidents: filteredIncidents,
      };
    case type.DELETE_INCIDENT_FAILED:
      return {
        ...state,
        loading: false,
      };

    case type.CLEAR_CODE:
      return {
        ...state,
        code: 0,
      };

    default:
      return state;
  }
}
