import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer, { IStore } from "./module";
import rootSaga from "./saga";
import tracker from "./tracker";

const env = process.env.REACT_APP_ENV;
const sagaMiddleware = createSagaMiddleware();

const middlewares: any[] = [];

switch (env) {
  case "local":
    middlewares.push(tracker);
    middlewares.push(sagaMiddleware);
    middlewares.push(logger);
    break;
  case "development":
    middlewares.push(tracker);
    middlewares.push(sagaMiddleware);
    middlewares.push(logger);
    break;
  case "staging":
    middlewares.push(tracker);
    middlewares.push(sagaMiddleware);
    break;
  case "production":
    middlewares.push(tracker);
    middlewares.push(sagaMiddleware);
    break;
  case "test":
    middlewares.push(sagaMiddleware);
    break;
  default:
    middlewares.push(tracker);
    middlewares.push(sagaMiddleware);
    break;
}

const configureStore = (initialState?: IStore) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
