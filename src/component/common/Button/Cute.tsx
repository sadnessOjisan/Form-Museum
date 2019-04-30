import * as React from "react";
import styled from "styled-components";
import { COLOR } from "../../../const/color";

interface Props {
  className?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  type?: "submit" | "button";
  primary?: boolean;
}

const Cute = (props: Props) => {
  const { className, children, onClick, type } = props;
  return (
    <Wrapper
      className={className}
      onClick={onClick}
      type={type}
      style={{ backgroundColor: "pink" }}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  background: ${`linear-gradient(90deg, ${COLOR.peachYellow}, ${
    COLOR.peachPink
  })`};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  outline: 0;
  border: 0;
  border-radius: 21px;
  padding: 8px 24px;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

export { Cute };
