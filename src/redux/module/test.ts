const START_FETCH_DATA: "SAMPLE/START_FETCH_DATA" = "SAMPLE/START_FETCH_DATA";
const SUCCESS_FETCH_DATA: "SAMPLE/SUCCESS_FETCH_DATA" =
  "SAMPLE/SUCCESS_FETCH_DATA";
const FAIL_FETCH_DATA: "SAMPLE/FAIL_FETCH_DATA" = "SAMPLE/FAIL_FETCH_DATA";

export const types = {
  START_FETCH_DATA,
  SUCCESS_FETCH_DATA,
  FAIL_FETCH_DATA
};

interface IStartFetchDataAction {
  readonly type: typeof START_FETCH_DATA;
}

interface ISuccessFetchDataAction {
  readonly type: typeof SUCCESS_FETCH_DATA;
  readonly payload: any;
}

interface IFailFetchDataAction {
  readonly type: typeof FAIL_FETCH_DATA;
  readonly payload: any;
}

type Action =
  | IStartFetchDataAction
  | ISuccessFetchDataAction
  | IFailFetchDataAction;

export const actions = {
  startFetchData: (): IStartFetchDataAction => ({
    type: types.START_FETCH_DATA
  }),
  successFetchData: (data: any): ISuccessFetchDataAction => ({
    type: types.SUCCESS_FETCH_DATA,
    payload: data
  }),
  failFetchData: (err: any): IFailFetchDataAction => ({
    type: types.FAIL_FETCH_DATA,
    payload: err
  })
};

export interface IState {
  isLoading: boolean;
  isLoaded: boolean;
  data: any | null;
  error: any | null;
}

const initialState: IState = {
  isLoading: false,
  isLoaded: false,
  data: null,
  error: null
};

const reducer = (state: IState = initialState, action: Action): IState => {
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
