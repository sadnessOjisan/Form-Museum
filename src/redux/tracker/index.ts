import uuidv1 from "uuid/v1";
import { ITracker, ILog } from "../../typedef/Tracker";
import { IStore } from "../module";
import { Action } from "../module";

const trackerMiddleware = (store: IStore) => (next: any) => (
  action: Action
) => {
  const metaData = action.meta;
  if (!metaData) {
    next(action);
    return;
  }
  console.log("tracker action: ", action);
  const log = _genLog(metaData);
  fetch("https://example.com/posts", {
    method: "POST",
    body: log
  });
  next(action);
  // 後の state
};

const _genLog = (tracker: ITracker): ILog => {
  return {
    version: "0.0.1",
    pk: uuidv1(),
    tk: state.logging.tk ? state.logging.tk : "-",
    timeStamp: moment()
  };
};

export default trackerMiddleware;
