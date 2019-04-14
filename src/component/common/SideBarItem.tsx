import * as React from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  onClick?: any;
  name: string;
}

const SideBarItem = (props: IProps) => {
  const { className, name } = props;
  return <Wrapper className={className}>{name}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70px;
`;

export { SideBarItem };
