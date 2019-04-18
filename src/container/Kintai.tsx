import * as React from "react";
import styled from "styled-components";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Button } from "../component/common/Button";
import { blue } from "../const/color";
import { actions as kintaiActions } from "../redux/module/kintai";

interface DispatchProps {
  closeModal: typeof kintaiActions.closeModal;
}

type IProps = DispatchProps;

const Kintai = (props: IProps) => {
  const { closeModal } = props;
  return (
    <Wrapper>
      <Content>
        <Header>
          <CloseButton onClick={closeModal}>閉じる</CloseButton>
          <ModalTitle>勤怠</ModalTitle>
        </Header>
        <Body>body</Body>
        <Footer>
          <Button>eee</Button>
        </Footer>
      </Content>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  closeModal: () => dispatch(kintaiActions.closeModal())
});

const ConnectedKintai = connect(
  undefined,
  mapDispatchToProps
)(Kintai);

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgb(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  width: 70%;
  height: 70%;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: center;
`;

const CloseButton = styled.span`
  color: ${blue};
  position: absolute;
  left: 0;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
`;

const Body = styled.div``;

const Footer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
`;

export { ConnectedKintai as Kintai };
