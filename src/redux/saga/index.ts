import { fork, all } from "redux-saga/effects";
import kintaiSaga from "./kintaiSaga";

function* rootSaga() {
  yield all([fork(kintaiSaga)]);
}

export default rootSaga;
