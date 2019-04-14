import { combineReducers } from "redux";
import test, { IState as ITestState } from "./test";

export interface IStore {
  test: ITestState;
}

const rootReducer = combineReducers<IStore>({
  test
});

export default rootReducer;
