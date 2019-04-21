import * as React from "react";
import styled from "styled-components";
import { SideBarItem } from "./SideBarItem";
import { withRouter, RouteComponentProps } from "react-router";

interface IProps extends RouteComponentProps {
  className?: string;
}

const SideBar = (props: IProps) => {
  const { className, history, location } = props;
  const { push } = history;
  const { pathname } = location;
  return (
    <Wrapper className={className} data-testid="sidebar">
      <SideBarItem
        name="kuso"
        onClick={() => push("/kuso")}
        selected={pathname === "/kuso"}
      />
      <SideBarItem
        name="masi"
        onClick={() => push("/masi")}
        selected={pathname === "/masi"}
      />
      <SideBarItem
        name="with-button"
        onClick={() => push("/with-button")}
        selected={pathname === "/with-button"}
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

const SideBarr = withRouter(SideBar);

export { SideBarr as SideBar };
