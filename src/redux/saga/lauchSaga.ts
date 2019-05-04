import { takeEvery, Effect, put } from "redux-saga/effects";
import { actions as userActions } from "../module/user";

function* initSaga(): Iterable<Effect> {
  yield put(userActions.startFetchData());
}

export default function* launchSaga() {
  yield takeEvery("APP/INIT", initSaga);
}
