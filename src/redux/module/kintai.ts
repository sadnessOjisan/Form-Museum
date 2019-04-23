import { ITracker } from "../../typedef/Tracker";

export type ModalType = "WORKING_TIME" | "WEATHER" | "THANKS";

const OPEN_MODAL: "KINTAI/OPEN_MODAL" = "KINTAI/OPEN_MODAL";
const CLOSE_MODAL: "KINTAI/CLOSE_MODAL" = "KINTAI/CLOSE_MODAL";
const SELECT_MODAL: "KINTAI/SELECT_MODAL" = "KINTAI/SELECT_MODAL";
const RESET: "KINTAI/RESET" = "KINTAI/RESET";

export const types = {
  OPEN_MODAL,
  CLOSE_MODAL,
  SELECT_MODAL,
  RESET
};

interface IOpenModalAction {
  readonly type: typeof OPEN_MODAL;
  readonly meta: ITracker;
}

interface ICloseModalAction {
  readonly type: typeof CLOSE_MODAL;
  readonly meta: ITracker;
}

interface ISelectModalAction {
  readonly type: typeof SELECT_MODAL;
  readonly payload: ModalType;
  readonly meta: ITracker;
}

interface IResetAction {
  readonly type: typeof RESET;
}

export type Action =
  | IOpenModalAction
  | ICloseModalAction
  | ISelectModalAction
  | IResetAction;

export const actions = {
  openModal: (log: ITracker): IOpenModalAction => ({
    type: types.OPEN_MODAL,
    meta: log
  }),
  closeModal: (log: ITracker): ICloseModalAction => ({
    type: types.CLOSE_MODAL,
    meta: log
  }),
  selectModal: (
    selectedModal: ModalType,
    log: ITracker
  ): ISelectModalAction => ({
    type: types.SELECT_MODAL,
    payload: selectedModal,
    meta: log
  }),
  reset: (): IResetAction => ({
    type: types.RESET
  })
};

export interface IState {
  isOpenModal: boolean;
  selectedModal: ModalType;
}

const initialState: IState = {
  isOpenModal: false,
  selectedModal: "WORKING_TIME"
};

const reducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case types.OPEN_MODAL:
      return { ...state, isOpenModal: true };
    case types.CLOSE_MODAL:
      return {
        ...state,
        isOpenModal: false
      };
    case types.SELECT_MODAL:
      return { ...state, selectedModal: action.payload };
    case types.RESET:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
