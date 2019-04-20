import * as React from "react";
import styled from "styled-components";
// @ts-ignore air-kitの型定義ファイルをゲットする
import { Button } from "@air-kit/air-kit";

interface Props {
  className?: string;
  children: React.ReactNode;
  onClick?: any;
  type?: "submit" | "button";
}

const StyeldButton = (props: Props) => {
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

const Wrapper = styled(Button)``;

export { StyeldButton as Button };
