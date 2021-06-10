import * as type from "../types";

export function getIncidents() {
  return {
    type: type.GET_INCIDENTS_REQUESTED,
  };
}

export function postIncident(incident) {
  return {
    type: type.POST_INCIDENT_REQUESTED,
    incident: incident,
  };
}

export function putIncident(incident) {
  return {
    type: type.PUT_INCIDENT_REQUESTED,
    incident: incident,
  };
}

export function deleteIncident(incident) {
  return {
    type: type.DELETE_INCIDENT_REQUESTED,
    incident: incident,
  };
}

export function clearCode() {
  return {
    type: type.CLEAR_CODE,
  };
}
