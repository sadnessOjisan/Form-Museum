import { combineReducers } from "redux";
import test, { IState as ITestState } from "./place";
import kintai, {
  IState as IKintaiState,
  Action as kintaiAction
} from "./kintai";
import place, { IState as IPlaceState, Action as placeAction } from "./place";

export interface IStore {
  test: ITestState;
  kintai: IKintaiState;
  place: IPlaceState;
}

export type Action = kintaiAction | placeAction;

const rootReducer = combineReducers<IStore>({
  test,
  kintai,
  place
});

export default rootReducer;
