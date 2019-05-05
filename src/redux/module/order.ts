import { Action as ReduxAction } from 'redux'
import { IScheduleRequest } from '../../typedef/request/OrderQuery'
import { IOrderResponse } from '../../typedef/response/OrderResponse'
import { IError } from '../../typedef/Error'

const START_FETCH_DATA: 'ORDER/START_FETCH_DATA' = 'ORDER/START_FETCH_DATA'
const SUCCESS_FETCH_DATA: 'ORDER/SUCCESS_FETCH_DATA' =
  'ORDER/SUCCESS_FETCH_DATA'
const FAIL_FETCH_DATA: 'ORDER/FAIL_FETCH_DATA' = 'ORDER/FAIL_FETCH_DATA'
const START_POST_DATA: 'ORDER/START_POST_DATA' = 'ORDER/START_POST_DATA'
const SUCCESS_POST_DATA: 'ORDER/SUCCESS_POST_DATA' = 'ORDER/SUCCESS_POST_DATA'
const FAIL_POST_DATA: 'ORDER/FAIL_POST_DATA' = 'ORDER/FAIL_POST_DATA'

export const types = {
  START_FETCH_DATA,
  SUCCESS_FETCH_DATA,
  FAIL_FETCH_DATA,
  START_POST_DATA,
  SUCCESS_POST_DATA,
  FAIL_POST_DATA,
}

export interface IStartFetchDataAction {
  readonly type: typeof START_FETCH_DATA
}

export interface ISuccessFetchDataAction {
  readonly type: typeof SUCCESS_FETCH_DATA
  readonly payload: IOrderResponse
}

interface IFailFetchDataAction {
  readonly type: typeof FAIL_FETCH_DATA
  readonly payload: IError
}

export interface IStartPostDataAction {
  readonly type: typeof START_POST_DATA
  readonly payload: IScheduleRequest
}

export interface ISuccessPostDataAction {
  readonly type: typeof SUCCESS_POST_DATA
}

interface IFailPostDataAction {
  readonly type: typeof FAIL_POST_DATA
  readonly payload: IError
}

export type Action =
  | IStartFetchDataAction
  | ISuccessFetchDataAction
  | IFailFetchDataAction
  | IStartPostDataAction
  | ISuccessPostDataAction
  | IFailPostDataAction

export const actions = {
  startFetchData: (): IStartFetchDataAction => ({
    type: types.START_FETCH_DATA,
  }),
  successFetchData: (data: IOrderResponse): ISuccessFetchDataAction => ({
    type: types.SUCCESS_FETCH_DATA,
    payload: data,
  }),
  failFetchData: (err: IError): IFailFetchDataAction => ({
    type: types.FAIL_FETCH_DATA,
    payload: err,
  }),
  startPostData: (query: IScheduleRequest): IStartPostDataAction => ({
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
  isLoading: boolean
  isLoaded: boolean
  data: IOrderResponse | null
  error: IError | null
}

export const initialState: IState = {
  isSending: false,
  isSent: false,
  isLoading: false,
  isLoaded: false,
  data: null,
  error: null,
}

const reducer = (
  state: IState = initialState,
  action: Action | ReduxAction<'@@redux/INIT'>
): IState => {
  switch (action.type) {
    case types.START_FETCH_DATA:
      return { ...state, isLoading: true, error: null }
    case types.SUCCESS_FETCH_DATA:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: action.payload,
      }
    case types.FAIL_FETCH_DATA:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        error: action.payload,
      }
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
