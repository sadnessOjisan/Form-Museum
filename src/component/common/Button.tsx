import * as React from "react";
import styled from "styled-components";
import { Button } from "@air-kit/air-kit";

const StyeldButton = props => {
  const { className, children, onClick } = props;
  return (
    <Wrapper className={className} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(Button)``;

export { StyeldButton as Button };
