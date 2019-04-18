import * as React from "react";
import styled from "styled-components";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { useSpring, animated, useTransition } from "react-spring";
import { Button } from "../component/common/Button";
import { blue } from "../const/color";
import { IStore } from "../redux/module";
import { actions as kintaiActions, ModalType } from "../redux/module/kintai";
import KintaiModal from "../component/kintai";

interface StateProps {
  readonly selectedModal: ModalType;
}

interface DispatchProps {
  closeModal: typeof kintaiActions.closeModal;
  selectModal: typeof kintaiActions.selectModal;
}

type IProps = DispatchProps & StateProps;

const HEADER_HEIGHT = 40;

const Kintai = (props: IProps) => {
  const { closeModal, selectedModal, selectModal } = props;
  const pages = {
    WORKING_TIME: ({ style }) => (
      <Body style={{ ...style }}>
        <KintaiModal.WorkingTime />
        <Button onClick={() => selectModal("WEATHER")}>次へ</Button>
      </Body>
    ),
    WEATHER: ({ style }) => (
      <Body style={{ ...style }}>
        <KintaiModal.Weather />
        <Button onClick={() => selectModal("THANKS")}>次へ</Button>
      </Body>
    ),
    THANKS: ({ style }) => (
      <Body style={{ ...style }}>
        <KintaiModal.Thanks />
      </Body>
    )
  };
  const transitions = useTransition(selectedModal, p => p, {
    from: { opacity: 0, transform: "translate3d(30%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(0%,0,0)" }
  });
  return (
    <Wrapper>
      <Content>
        <Header>
          <CloseButton onClick={closeModal}>閉じる</CloseButton>
          <ModalTitle>勤怠</ModalTitle>
        </Header>
        {transitions.map(({ item, props, key }) => {
          const Page = pages[selectedModal];
          return <Page key={key} style={props} />;
        })}
        <Footer>
          <Button>eee</Button>
        </Footer>
      </Content>
    </Wrapper>
  );
};

const mapStateToProps = (state: IStore) => ({
  selectedModal: state.kintai.selectedModal
});

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
  closeModal: () => dispatch(kintaiActions.closeModal()),
  selectModal: (modal: ModalType) => dispatch(kintaiActions.selectModal(modal))
});

const ConnectedKintai = connect(
  mapStateToProps,
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
  height: ${HEADER_HEIGHT}px;
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

const Body = styled(animated.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: ${HEADER_HEIGHT}px;
`;

const Footer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
`;

export { ConnectedKintai as Kintai };
