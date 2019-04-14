import * as React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Router } from "react-router";
import createBrowserHistory from "history/createBrowserHistory"; // eslint-disable-line
import { Provider } from "react-redux";
import configureStore from "./redux";
import { SideBar } from "./component/common/Sidebar";
import "./asset/css/reset.css";
import { Header } from "./component/common/Header";

const store = configureStore();
const history = createBrowserHistory();

const App = () => {
  return (
    <PageWrapper>
      <Header />
      <ContentsBox>
        <SideBar />
        <MainContentsWrapper />
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
