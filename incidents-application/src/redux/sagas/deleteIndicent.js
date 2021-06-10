import { call, put, takeEvery } from "redux-saga/effects";

let apiUrl = "";
let newIncident = {};

function getApi() {
  return fetch(apiUrl, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newIncident),
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchIncident(action) {
  newIncident = action.incident;
  apiUrl = `http://localhost:3001/api/v1/incidents/${newIncident.id}`;

  try {
    const incident = yield call(getApi);
    yield put({ type: "DELETE_INCIDENT_SUCCESS", incident: incident });
  } catch (e) {
    yield put({ type: "DELETE_INCIDENT_FAILED", message: e.message });
  }
}

function* deleteIncident() {
  yield takeEvery("DELETE_INCIDENT_REQUESTED", fetchIncident);
}

export default deleteIncident;
