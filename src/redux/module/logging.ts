import { ITracker } from "../../typedef/Tracker";
import moment from 'moment';

// Action types
export const SET_TK:'logging/SET_TK' = 'logging/SET_TK';
export const TRACK:'logging/TRACK' = 'logging/TRACK';

export const types = {
  SET_TK,
  TRACK
};

interface ISetTkAction {
    readonly type: typeof SET_TK;
    readonly payload: string;
  }

export type ITrackAction = {|
    readonly type: typeof TRACK;
    readonly meta: ITracker;
|};

export type Action = SetTkAction | TrackAction;

// Action creators
export const setTk = (tk: string): SetTkAction => {
  return { type: SET_TK, payload: tk };
};

export const track = (log: ITracker): TrackAction => {
  return { type: TRACK, meta: log };
};

export const actions = {
  setTk,
  track
};


  export interface IState {
    tk: string
  }

export const initialState: State = {
  tk: '',
};

const reducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case SET_TK:
      return {
        ...state,
        tk: action.payload
      };
    default:
      return state;
  }
};

export default reducer;