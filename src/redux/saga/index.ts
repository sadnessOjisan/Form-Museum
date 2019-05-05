import { fork, all } from "redux-saga/effects";
import kintaiSaga from "./kintaiSaga";
import placeSaga from "./placeSaga";
import lauchSaga from "./lauchSaga";
import userSaga from "./userSaga";
import orderSaga from "./orderSaga";

function* rootSaga() {
    yield all([
        fork(kintaiSaga),
        fork(placeSaga),
        fork(lauchSaga),
        fork(userSaga),
        fork(orderSaga)
    ]);
}

export default rootSaga;
