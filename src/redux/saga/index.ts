import { fork, all } from "redux-saga/effects";
import kintaiSaga from "./kintaiSaga";
import placeSaga from "./placeSaga";

function* rootSaga() {
  yield all([fork(kintaiSaga), fork(placeSaga)]);
}

export default rootSaga;
