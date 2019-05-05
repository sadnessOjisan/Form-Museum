import * as React from "react";
import styled from "styled-components";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import { SideBarItem } from "./SideBarItem";
import { withRouter, RouteComponentProps } from "react-router";
import { track } from "../../redux/module/logging";
import { ITracker } from "../../typedef/Tracker";
import { genClickLog } from "../../helper/util";
interface DispatchProps {
    track: typeof track;
}

interface IProps extends RouteComponentProps {
    className?: string;
}

const TEST_OR_TRACK_TARGET = {
    sidebar: "sidebar",
    kuso: "sidebar-item-kuso",
    masi: "sidebar-item-masi",
    withButton: "sidebar-item-with-button",
    order: "sidebar-item-order"
};

const SideBar = (props: IProps & DispatchProps) => {
    const { className, history, location, track } = props;
    const { push } = history;
    const { pathname } = location;
    return (
        <Wrapper className={className} data-testid={TEST_OR_TRACK_TARGET.sidebar}>
            <SideBarItem
                name="kuso"
                onClick={() => {
                    track(
                        genClickLog("sidebar-click", TEST_OR_TRACK_TARGET.kuso, undefined)
                    );
                    push("/kuso");
                }} // 遷移を全部sagaにやらせてもよかったかも？
                selected={pathname === "/kuso"}
                dataTestId={TEST_OR_TRACK_TARGET.kuso}
            />
            <SideBarItem
                name="masi"
                onClick={() => {
                    track(
                        genClickLog("sidebar-click", TEST_OR_TRACK_TARGET.masi, undefined)
                    );
                    push("/masi");
                }}
                selected={pathname === "/masi"}
                dataTestId={TEST_OR_TRACK_TARGET.masi}
            />
            <SideBarItem
                name="with-button"
                onClick={() => {
                    track(
                        genClickLog(
                            "sidebar-click",
                            TEST_OR_TRACK_TARGET.withButton,
                            undefined
                        )
                    );
                    push("/with-button");
                }}
                selected={pathname === "/with-button"}
                dataTestId={TEST_OR_TRACK_TARGET.withButton}
            />
            <SideBarItem
                name="order"
                onClick={() => {
                    track(genClickLog("order", TEST_OR_TRACK_TARGET.order, undefined));
                    push("/order");
                }}
                selected={pathname === "/order"}
                dataTestId={TEST_OR_TRACK_TARGET.order}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100%;
  background-color: navy;
`;

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
    track: (log: ITracker) => dispatch(track(log))
});

const ConnectedSidebar = connect(
    undefined,
    mapDispatchToProps
)(withRouter(SideBar));

export { ConnectedSidebar as SideBar };
