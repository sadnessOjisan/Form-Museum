import * as React from "react";
import styled from "styled-components";

interface IProps {
  className: string;
  onClick: any;
  children: React.ReactNode;
}

const Button = (props: IProps) => {
  const { children, className } = props;
  return <StyledButton className={className}>{children}</StyledButton>;
};

const StyledButton = styled.button<IProps>``;

export { Button };
