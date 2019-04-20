import * as React from "react";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}
const FooterLayout = (props: IProps) => {
  const { children } = props;
  return <Wrapper>{children}</Wrapper>;
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 70px;
  padding: 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: white;
`;

export { FooterLayout };
