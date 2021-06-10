import { call, put, takeEvery } from "redux-saga/effects";

const apiUrl = "http://localhost:3001/api/v1/incidents";

function getApi() {
  return fetch(apiUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchIncidents() {
  try {
    const incidents = yield call(getApi);
    yield put({ type: "GET_INCIDENTS_SUCCESS", incidents: incidents });
  } catch (e) {
    yield put({ type: "GET_INCIDENTS_FAILED", message: e.message });
  }
}

function* getIncidents() {
  yield takeEvery("GET_INCIDENTS_REQUESTED", fetchIncidents);
}

export default getIncidents;
