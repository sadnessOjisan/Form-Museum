import { combineReducers } from "redux";
import test, { IState as ITestState } from "./place";
import kintai, { IState as IKintaiState } from "./kintai";
import place, { IState as IPlaceState } from "./place";

export interface IStore {
  test: ITestState;
  kintai: IKintaiState;
  place: IPlaceState;
}

const rootReducer = combineReducers<IStore>({
  test,
  kintai,
  place
});

export default rootReducer;
