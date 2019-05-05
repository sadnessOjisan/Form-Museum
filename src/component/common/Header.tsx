import * as React from "react";
import styled from "styled-components";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import { actions as kintaiActions } from "../../redux/module/kintai";
import { ITracker } from "../../typedef/Tracker";
import { genLog } from "../../helper/util";
import { EVENT_TYPE } from "../../const/event";

interface OwnProps {
    readonly className?: string;
    readonly onClick?: any;
}

interface DispatchProps {
    openModal: typeof kintaiActions.openModal;
}

type IProps = OwnProps & DispatchProps;

const TEST_OR_TRACK_TARGET = {
    kintaiModalOpener: "kintai-modal-opener"
};

const Header = (props: IProps) => {
    const { className, openModal } = props;
    return (
        <Wrapper className={className} data-testid="header">
            <LeftArea>
                <div>logo</div>
            </LeftArea>
            <RightArea>
                <div
                    onClick={() => openModal(openModalLog)}
                    data-testid={TEST_OR_TRACK_TARGET.kintaiModalOpener}
                >
          kintai
                </div>
            </RightArea>
        </Wrapper>
    );
};

const openModalLog = genLog({
    eventType: EVENT_TYPE.click,
    target: TEST_OR_TRACK_TARGET.kintaiModalOpener,
    eventName: "openModal"
});

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
