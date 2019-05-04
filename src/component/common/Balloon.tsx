import * as React from "react";
import styled from "styled-components";

interface IProps {
  message?: string;
  className?: string;
}

const Balloon = (props: IProps) => {
  const { message, className } = props;
  return (
    <Wrapper className={className}>
      <Box>{message}</Box>
      <Triangle />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Triangle = styled.div`
  border: solid 1px red;
  border-top: none;
  border-right: none;
  width: 10px;
  height: 10px;
  transform: rotate(-45deg);
  background-color: pink;
  top: -15px;
  left: 10px;
  position: absolute;
`;

const Box = styled.div`
  background-color: pink;
  color: red;
  border: solid 1px red;
  bottom: 10px;
  position: absolute;
  width: 200px;
`;

export { Balloon };
