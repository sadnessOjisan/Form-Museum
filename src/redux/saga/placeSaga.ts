import { call, takeEvery, put, Effect } from "redux-saga/effects";
import { types, actions, IStartFetchDataAction } from "../module/place";
import { IPlaceQuery } from "../../typedef/request/PlaceQuery";
import { IPlacesResponse } from "../../typedef/response/Place";
import { IError } from "../../typedef/Error";
import { API } from "../../service/API";
import { assert } from "../../helper/util";

function* fetchPlaceDataSaga(action: IStartFetchDataAction): Iterable<Effect> {
    const query: IPlaceQuery = action.payload;
    const {
        payload,
        error
    }: { payload: IPlacesResponse; error: IError } = yield call(
        API.fetchPlaces,
        query
    );

    if (payload && !error) {
        yield put(actions.successFetchData(payload));
    } else if (!payload && error) {
        yield put(actions.failFetchData(error));
    } else {
        assert("ありえない");
    }
}

export default function* placeSaga() {
    yield takeEvery(types.START_FETCH_DATA, fetchPlaceDataSaga);
}
