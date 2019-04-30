import { combineReducers } from "redux";
import test, { IState as ITestState } from "./place";
import kintai, {
  IState as IKintaiState,
  Action as kintaiAction
} from "./kintai";
import place, { IState as IPlaceState, Action as placeAction } from "./place";
import order, { IState as IOrderState, Action as orderAction } from "./order";
import logging, {
  IState as ILoggingState,
  Action as logingAction
} from "./logging";

export interface IStore {
  test: ITestState;
  kintai: IKintaiState;
  place: IPlaceState;
  logging: ILoggingState;
  order: IOrderState;
}

export type Action = kintaiAction | placeAction | logingAction | orderAction;

const rootReducer = combineReducers<IStore>({
  test,
  kintai,
  place,
  logging,
  order
});

export default rootReducer;
