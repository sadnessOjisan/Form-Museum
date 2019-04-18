const OPEN_MODAL: "KINTAI/OPEN_MODAL" = "KINTAI/OPEN_MODAL";
const CLOSE_MODAL: "KINTAI/CLOSE_MODAL" = "KINTAI/CLOSE_MODAL";

export const types = {
  OPEN_MODAL,
  CLOSE_MODAL
};

interface IOpenModalAction {
  readonly type: typeof OPEN_MODAL;
}

interface ICloseModalAction {
  readonly type: typeof CLOSE_MODAL;
}

type Action = IOpenModalAction | ICloseModalAction;

export const actions = {
  openModal: (): IOpenModalAction => ({
    type: types.OPEN_MODAL
  }),
  closeModal: (): ICloseModalAction => ({
    type: types.CLOSE_MODAL
  })
};

export interface IState {
  isOpenModal: boolean;
}

const initialState: IState = {
  isOpenModal: false
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
    default:
      return state;
  }
};

export default reducer;
