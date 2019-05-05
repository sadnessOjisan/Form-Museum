import { call, takeEvery, put, Effect } from 'redux-saga/effects'
import { types, actions, IStartPostDataAction } from '../module/order'
import { IScheduleRequest } from '../../typedef/request/OrderQuery'
import { IOrderResponse } from '../../typedef/response/OrderResponse'
import { IError } from '../../typedef/Error'
import { API } from '../../service/API'
import { assert } from '../../helper/util'

function* fetchOrderSaga(): Iterable<Effect> {
  const {
    payload,
    error,
  }: { payload: IOrderResponse; error: IError } = yield call(API.fetchSchedule)
  if (payload && !error) {
    yield put(actions.successFetchData(payload))
  } else if (!payload && error) {
    yield put(actions.failFetchData(error))
  } else {
    assert('ありえない')
  }
}

function* postOrderSaga(action: IStartPostDataAction): Iterable<Effect> {
  const query: IScheduleRequest = action.payload
  const { payload, error }: { payload: {}; error: IError } = yield call(
    API.postSchedule,
    query
  )
  if (payload && !error) {
    yield put(actions.successPostData())
  } else if (!payload && error) {
    yield put(actions.failPostData(error))
  } else {
    assert('ありえない')
  }
}

export default function* placeSaga() {
  yield takeEvery(types.START_POST_DATA, postOrderSaga)
  yield takeEvery(types.START_FETCH_DATA, fetchOrderSaga)
}
