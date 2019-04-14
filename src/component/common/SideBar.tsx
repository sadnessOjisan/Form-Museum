import * as React from "react";
import styled from "styled-components";
import { SideBarItem } from "./SideBarItem";

interface IProps {
  className?: string;
}

const SideBar = (props: IProps) => {
  const { className } = props;
  return (
    <Wrapper className={className}>
      <SideBarItem name="kuso" />
      <SideBarItem name="masi" />
      <SideBarItem name="good" />
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

export { SideBar };
