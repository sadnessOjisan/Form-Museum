import { fork, all, takeEvery, Effect, put } from 'redux-saga/effects'
import { types, actions } from '../module/kintai'

function* closeModalSaga(): Iterable<Effect> {
  yield put(actions.reset())
}

export default function* kintaiSaga() {
  yield takeEvery(types.CLOSE_MODAL, closeModalSaga)
}
