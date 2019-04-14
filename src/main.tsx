import * as React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory"; // eslint-disable-line
import { Provider } from "react-redux";
import configureStore from "./redux";

const store = configureStore();
const history = createBrowserHistory();

const App = () => {
  return <div>Hello App</div>;
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
