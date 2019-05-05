import { ITracker } from "../../typedef/Tracker";

// Action types
export const SET_TK: "logging/SET_TK" = "logging/SET_TK";
export const TRACK: "logging/TRACK" = "logging/TRACK";

export const types = {
    SET_TK,
    TRACK
};

interface ISetTkAction {
    readonly type: typeof SET_TK;
    readonly payload: string;
}

export interface ITrackAction {
    readonly type: typeof TRACK;
    readonly meta: ITracker;
}

export type Action = ISetTkAction | ITrackAction;

// Action creators
export const setTk = (tk: string): ISetTkAction => {
    return { type: SET_TK, payload: tk };
};

export const track = (log: ITracker): ITrackAction => {
    return { type: TRACK, meta: log };
};

export const actions = {
    setTk,
    track
};

export interface IState {
    tk: string;
}

export const initialState: IState = {
    tk: ""
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
