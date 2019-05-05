import { Action as ReduxAction } from "redux";
import { IPlaceQuery } from "../../typedef/request/PlaceQuery";
import { IError } from "../../typedef/Error";
import { IPlace } from "../../typedef/model/Place";

const START_FETCH_DATA: "PLACE/START_FETCH_DATA" = "PLACE/START_FETCH_DATA";
const SUCCESS_FETCH_DATA: "PLACE/SUCCESS_FETCH_DATA" =
  "PLACE/SUCCESS_FETCH_DATA";
const FAIL_FETCH_DATA: "PLACE/FAIL_FETCH_DATA" = "PLACE/FAIL_FETCH_DATA";

export const types = {
    START_FETCH_DATA,
    SUCCESS_FETCH_DATA,
    FAIL_FETCH_DATA
};

export interface IStartFetchDataAction {
    readonly type: typeof START_FETCH_DATA;
    readonly payload: IPlaceQuery;
}

export interface ISuccessFetchDataAction {
    readonly type: typeof SUCCESS_FETCH_DATA;
    readonly payload: IPlace[];
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
    startFetchData: (query: IPlaceQuery): IStartFetchDataAction => ({
        type: types.START_FETCH_DATA,
        payload: query
    }),
    successFetchData: (data: IPlace[]): ISuccessFetchDataAction => ({
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
    data: IPlace[] | null;
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
            console.log("place action: ", action);
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
