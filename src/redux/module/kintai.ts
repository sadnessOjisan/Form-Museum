export type ModalType = "WORKING_TIME" | "WEATHER" | "THANKS";

const OPEN_MODAL: "KINTAI/OPEN_MODAL" = "KINTAI/OPEN_MODAL";
const CLOSE_MODAL: "KINTAI/CLOSE_MODAL" = "KINTAI/CLOSE_MODAL";
const SELECT_MODAL: "KINTAI/SELECT_MODAL" = "KINTAI/SELECT_MODAL";

export const types = {
  OPEN_MODAL,
  CLOSE_MODAL,
  SELECT_MODAL
};

interface IOpenModalAction {
  readonly type: typeof OPEN_MODAL;
}

interface ICloseModalAction {
  readonly type: typeof CLOSE_MODAL;
}

interface ISelectModalAction {
  readonly type: typeof SELECT_MODAL;
  readonly payload: Modal;
}

type Action = IOpenModalAction | ICloseModalAction | ISelectModalAction;

export const actions = {
  openModal: (): IOpenModalAction => ({
    type: types.OPEN_MODAL
  }),
  closeModal: (): ICloseModalAction => ({
    type: types.CLOSE_MODAL
  }),
  selectModal: (selectedModal: Modal): ISelectModalAction => ({
    type: types.SELECT_MODAL,
    payload: selectedModal
  })
};

export interface IState {
  isOpenModal: boolean;
  selectedModal: Modal;
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
    default:
      return state;
  }
};

export default reducer;
