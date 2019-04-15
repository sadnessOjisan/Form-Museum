import * as React from "react";
import styled from "styled-components";
import { SideBarItem } from "./SideBarItem";
import { withRouter, RouteComponentProps } from "react-router";

interface IProps extends RouteComponentProps {
  className?: string;
}

const SideBar = (props: IProps) => {
  const { className, history } = props;
  const { push } = history;
  return (
    <Wrapper className={className}>
      <SideBarItem name="kuso" onClick={() => push("/kuso")} />
      <SideBarItem name="masi" onClick={() => push("/masi")} />
      <SideBarItem name="good" onClick={() => alert(3)} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  width: 200px;
  height: 100%;
`;

const SideBarr = withRouter(SideBar);

export { SideBarr as SideBar };
