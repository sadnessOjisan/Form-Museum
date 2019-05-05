import { call, takeEvery, Effect, put } from "redux-saga/effects";
import { types, actions } from "../module/user";
import { API } from "../../service/API";
import { IUserResponse } from "../../typedef/response/User";
import { IError } from "../../typedef/Error";
import { assert } from "../../helper/util";

function* fetchUserDataSaga(): Iterable<Effect> {
    const {
        payload,
        error
    }: { payload: IUserResponse; error: IError } = yield call(API.fetchUser);
    if (payload && !error) {
        yield put(actions.successFetchData(payload));
    } else if (!payload && error) {
        yield put(actions.failFetchData(error));
    } else {
        assert("ありえない");
    }
}

export default function* userSaga() {
    yield takeEvery(types.START_FETCH_DATA, fetchUserDataSaga);
}
