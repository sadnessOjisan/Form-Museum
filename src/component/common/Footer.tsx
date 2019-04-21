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
  width: calc(100% - 200px);
  height: 70px;
  padding: 12px;
  position: fixed;
  bottom: 0;
  left: 200px;
  background-color: white;
  border-top: solid 1px gray;
`;

export { FooterLayout };
