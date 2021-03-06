import uuidv1 from 'uuid/v1'
import moment from 'moment'
import { Store } from 'redux'
import { ITracker, ILog } from '../../typedef/Tracker'
import { IStore } from '../module'
import { Action } from '../module'
import { setTk } from '../module/logging'
import { API } from '../../service/API'

const trackerMiddleware = (store: Store<IStore, Action>) => (next: any) => (
  action: Action
) => {
  // @ts-ignore
  const metaData = action.meta
  if (!metaData) {
    next(action)
    return
  }
  const state: IStore = store.getState()
  const log = _genLog(metaData, state)
  API.saveLog(log)
  store.dispatch(setTk(log.pk))
  next(action)
}

const _genLog = (tracker: ITracker, store: IStore): ILog => {
  return {
    version: '0.0.1',
    pk: uuidv1(),
    tk: store.logging.tk ? store.logging.tk : '-',
    timeStamp: moment().format(),
    userId: store.user.data ? store.user.data.id : '-',
    userAgent: navigator.userAgent.toLowerCase(),
    sessionID: uuidv1(), // 更新するたびに新しい値が作られる
    ...tracker,
  }
}

export default trackerMiddleware
