import { fork, all } from "redux-saga/effects";
import testSaga from "./testSaga";

function* rootSaga() {
  yield all([fork(testSaga)]);
}

export default rootSaga;
