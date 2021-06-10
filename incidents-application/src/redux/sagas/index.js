import { all } from "redux-saga/effects";
import postIncident from "./postIncident";
import getIncidents from "./getIncidents";
import putIncident from "./putIncident";
import deleteIncident from "./deleteIndicent";

export default function* rootSaga() {
  yield all([postIncident(), getIncidents(), putIncident(), deleteIncident()]);
}
