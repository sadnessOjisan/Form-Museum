import * as React from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  onClick: () => void;
  name: string;
  selected: boolean;
}

const SideBarItem = (props: IProps) => {
  const { className, name, onClick, selected } = props;
  return (
    <Wrapper className={className} onClick={onClick} selected={selected}>
      {name}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70px;
  color: white;
  background-color: ${props => (props.selected ? "red" : "initial")};
`;

export { SideBarItem };
