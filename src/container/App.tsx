import * as React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { Kuso } from "./Kuso";
import { Masi } from "./Masi";
import { IStore } from "../redux/module";

interface DispatchProps {
  isOpenModal: boolean;
}

type Props = DispatchProps;

const App = (props: Props) => {
  const { isOpenModal } = props;
  return (
    <PageWrapper>
      <Switch>
        <Route path="/" component={() => <span>home</span>} exact />
        <Route path="/kuso" component={Kuso} exact />
        <Route path="/masi" component={Masi} exact />
      </Switch>
      {isOpenModal && <p>hoge</p>}
    </PageWrapper>
  );
};

const mapStateToProps = (state: IStore) => ({
  isOpenKintaiModal: state.kintai.isOpenModal
});

const ConnectedApp = connect(mapStateToProps)(App);

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export { ConnectedApp as App };