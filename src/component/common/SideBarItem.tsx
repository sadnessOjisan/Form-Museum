import * as React from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  onClick: () => void;
  name: string;
}

const SideBarItem = (props: IProps) => {
  const { className, name, onClick } = props;
  return (
    <Wrapper className={className} onClick={onClick}>
      {name}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70px;
`;

export { SideBarItem };
