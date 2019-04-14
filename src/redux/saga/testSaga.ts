import { call, takeEvery, put, Effect } from "redux-saga/effects";

function* sampleSaga(): Iterable<Effect> {}

export default function* emploueeSaga() {
  yield takeEvery("types.START_FETCH_DATA", sampleSaga);
}
