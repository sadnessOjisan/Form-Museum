import * as React from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  onClick?: any;
}

const Header = (props: IProps) => {
  const { className } = props;
  return (
    <Wrapper className={className}>
      <LeftArea>
        <div>logo</div>
        <div>kensaku</div>
      </LeftArea>
      <RightArea>
        <div>loginaddress</div>
        <div>osirasebox</div>
        <div>notify</div>
        <div>loginicon</div>
      </RightArea>
    </Wrapper>
  );
};

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

export { Header };
