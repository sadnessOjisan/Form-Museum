import { Action as ReduxAction } from "redux";
import { IUserResponse } from "../../typedef/response/User";
import { IError } from "../../typedef/Error";

const START_FETCH_DATA: "USER/START_FETCH_DATA" = "USER/START_FETCH_DATA";
const SUCCESS_FETCH_DATA: "USER/SUCCESS_FETCH_DATA" = "USER/SUCCESS_FETCH_DATA";
const FAIL_FETCH_DATA: "USER/FAIL_FETCH_DATA" = "USER/FAIL_FETCH_DATA";

export const types = {
    START_FETCH_DATA,
    SUCCESS_FETCH_DATA,
    FAIL_FETCH_DATA
};

export interface IStartFetchDataAction {
    readonly type: typeof START_FETCH_DATA;
}

export interface ISuccessFetchDataAction {
    readonly type: typeof SUCCESS_FETCH_DATA;
    readonly payload: IUserResponse;
}

interface IFailFetchDataAction {
    readonly type: typeof FAIL_FETCH_DATA;
    readonly payload: IError;
}

export type Action =
  | IStartFetchDataAction
  | ISuccessFetchDataAction
  | IFailFetchDataAction;

export const actions = {
    startFetchData: (): IStartFetchDataAction => ({
        type: types.START_FETCH_DATA
    }),
    successFetchData: (data: IUserResponse): ISuccessFetchDataAction => ({
        type: types.SUCCESS_FETCH_DATA,
        payload: data
    }),
    failFetchData: (err: IError): IFailFetchDataAction => ({
        type: types.FAIL_FETCH_DATA,
        payload: err
    })
};

export interface IState {
    isLoading: boolean;
    isLoaded: boolean;
    data: IUserResponse | null;
    error: IError | null;
}

export const initialState: IState = {
    isLoading: false,
    isLoaded: false,
    data: null,
    error: null
};

const reducer = (
    state: IState = initialState,
    action: Action | ReduxAction<"@@redux/INIT">
): IState => {
    switch (action.type) {
        case types.START_FETCH_DATA:
            return { ...state, isLoading: true, error: null };
        case types.SUCCESS_FETCH_DATA:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                data: action.payload
            };
        case types.FAIL_FETCH_DATA:
            return {
                ...state,
                isLoading: false,
                isLoaded: true,
                error: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
