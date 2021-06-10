import { call, put, takeEvery } from "redux-saga/effects";

const apiUrl = "http://localhost:3001/api/v1/incidents";
let newIncident = {};

function getApi() {
  return fetch(apiUrl, {
    method: "POST",
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
  newIncident.status = "Open";

  try {
    const incident = yield call(getApi);
    yield put({ type: "POST_INCIDENT_SUCCESS", incident: incident });
  } catch (e) {
    yield put({ type: "POST_INCIDENT_FAILED", message: e.message });
  }
}

function* postIncident() {
  yield takeEvery("POST_INCIDENT_REQUESTED", fetchIncident);
}

export default postIncident;
