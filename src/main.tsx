import * as React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Router } from "react-router";
import { createBrowserHistory } from "history"; // eslint-disable-line
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import configureStore from "./redux";
import { SideBar } from "./component/common/Sidebar";
import "./asset/css/reset.css";
import { Header } from "./component/common/Header";
import { Kuso } from "./container/Kuso";
import { Masi } from "./container/Masi";

const store = configureStore();
const history = createBrowserHistory();

const App = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentsBox>
        <SideBar />
        <MainContentsWrapper>
          <Switch>
            <Route path="/" component={() => <span>home</span>} exact />
            <Route path="/kuso" component={Kuso} exact />
            <Route path="/masi" component={Masi} exact />
          </Switch>
        </MainContentsWrapper>
      </ContentsBox>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const MainContentsWrapper = styled.div`
  width: 100%;
`;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
