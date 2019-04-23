import * as React from "react";
import styled from "styled-components";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import { actions as kintaiActions } from "../../redux/module/kintai";
import { ITracker } from "../../typedef/Tracker";

interface OwnProps {
  readonly className?: string;
  readonly onClick?: any;
}

interface DispatchProps {
  openModal: typeof kintaiActions.openModal;
}

type IProps = OwnProps & DispatchProps;

const Header = (props: IProps) => {
  const { className, openModal } = props;
  return (
    <Wrapper className={className}>
      <LeftArea>
        <div>logo</div>
        <div>kensaku</div>
      </LeftArea>
      <RightArea>
        <div>loginaddress</div>
        <div>osirasebox</div>
        <div>notify</div>
        <div onClick={() => openModal(log)}>kintai</div>
      </RightArea>
    </Wrapper>
  );
};

const log = {
  url: window.location.pathname,
  page: "kintai",
  eventType: "click",
  target: "hoge"
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  openModal: (log: ITracker) => dispatch(kintaiActions.openModal(log))
});

const ConnectedHeader = connect(
  undefined,
  mapDispatchToProps
)(Header);

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  background-color: pink;
  padding: 12px;
`;

const LeftArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const RightArea = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export { ConnectedHeader as Header };
