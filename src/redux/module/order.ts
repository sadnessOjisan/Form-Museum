import { Action as ReduxAction } from 'redux'
import { ISchedule } from '../../typedef/request/OrderQuery'
import { IError } from '../../typedef/Error'

const START_POST_DATA: 'ORDER/START_POST_DATA' = 'ORDER/START_POST_DATA'
const SUCCESS_POST_DATA: 'ORDER/SUCCESS_POST_DATA' = 'ORDER/SUCCESS_POST_DATA'
const FAIL_POST_DATA: 'ORDER/FAIL_POST_DATA' = 'ORDER/FAIL_POST_DATA'

export const types = {
  START_POST_DATA,
  SUCCESS_POST_DATA,
  FAIL_POST_DATA,
}

export interface IStartPostDataAction {
  readonly type: typeof START_POST_DATA
  readonly payload: ISchedule
}

export interface ISuccessPostDataAction {
  readonly type: typeof SUCCESS_POST_DATA
}

interface IFailPostDataAction {
  readonly type: typeof FAIL_POST_DATA
  readonly payload: IError
}

export type Action =
  | IStartPostDataAction
  | ISuccessPostDataAction
  | IFailPostDataAction

export const actions = {
  startPostData: (query: ISchedule): IStartPostDataAction => ({
    type: types.START_POST_DATA,
    payload: query,
  }),
  successPostData: (): ISuccessPostDataAction => ({
    type: types.SUCCESS_POST_DATA,
  }),
  failPostData: (err: IError): IFailPostDataAction => ({
    type: types.FAIL_POST_DATA,
    payload: err,
  }),
}

export interface IState {
  isSending: boolean
  isSent: boolean
  error: IError | null
}

export const initialState: IState = {
  isSending: false,
  isSent: false,
  error: null,
}

const reducer = (
  state: IState = initialState,
  action: Action | ReduxAction<'@@redux/INIT'>
): IState => {
  switch (action.type) {
    case types.START_POST_DATA:
      return { ...state, isSending: true, error: null }
    case types.SUCCESS_POST_DATA:
      return {
        ...state,
        isSending: false,
        isSent: true,
      }
    case types.FAIL_POST_DATA:
      return {
        ...state,
        isSending: false,
        isSent: true,
        error: action.payload,
      }
    default:
      return state
  }
}

export default reducer
