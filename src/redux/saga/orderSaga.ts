import { call, takeEvery, put, Effect } from "redux-saga/effects";
import { types, actions, IStartPostDataAction } from "../module/order";
import { ISchedule } from "../../typedef/request/OrderQuery";
import { IError } from "../../typedef/Error";
import { API } from "../../service/API";
import { assert } from "../../helper/util";

function* fetchPlaceDataSaga(action: IStartPostDataAction): Iterable<Effect> {
    const query: ISchedule = action.payload;
    const { payload, error }: { payload: {}; error: IError } = yield call(
        API.postSchedule,
        query
    );

    if (payload && !error) {
        yield put(actions.successPostData());
    } else if (!payload && error) {
        yield put(actions.failPostData(error));
    } else {
        assert("ありえない");
    }
}

export default function* placeSaga() {
    yield takeEvery(types.START_POST_DATA, fetchPlaceDataSaga);
}
