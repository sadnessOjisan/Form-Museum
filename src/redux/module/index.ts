import { combineReducers } from "redux";
import test, { IState as ITestState } from "./test";
import kintai, { IState as IKintaiState } from "./kintai";

export interface IStore {
  test: ITestState;
  kintai: IKintaiState;
}

const rootReducer = combineReducers<IStore>({
  test,
  kintai
});

export default rootReducer;
