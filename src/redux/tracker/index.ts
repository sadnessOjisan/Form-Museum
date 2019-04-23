import uuidv1 from "uuid/v1";
import moment from "moment";
import { Store } from "redux";
import { ITracker, ILog } from "../../typedef/Tracker";
import { IStore } from "../module";
import { Action } from "../module";
import { setTk } from "../module/logging";

const trackerMiddleware = (store: Store<IStore, Action>) => (next: any) => (
  action: Action
) => {
  const metaData = action.meta;
  if (!metaData) {
    next(action);
    return;
  }
  const state: IStore = store.getState();
  const log = _genLog(metaData, state);
  fetch("https://example.com/posts", {
    method: "POST",
    body: log
  });
  store.dispatch(setTk(log.pk));
  next(action);
  console.log("send log: ", log);
};

const _genLog = (tracker: ITracker, store: IStore): ILog => {
  console.log(store);
  return {
    version: "0.0.1",
    pk: uuidv1(),
    tk: store.logging.tk ? store.logging.tk : "-",
    timeStamp: moment().format(),
    userId: "store.user.id",
    userAgent: "",
    ...tracker
  };
};

export default trackerMiddleware;
