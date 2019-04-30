import * as React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { withFormik, FormikProps } from "formik";
import { ChasingDots } from "styled-spinkit";
import { Header } from "../component/common/Header";
import { SideBar } from "../component/common/Sidebar";
import { FooterLayout } from "../component/common/Footer";
import { track } from "../redux/module/logging";
import { genLoadLog } from "../helper/util";
import { ITracker } from "../typedef/Tracker";
import { Form } from "../component/order/Form";

type IProps = {};

const Order = (props: IProps) => {
  const {} = props;
  useEffect(() => {}, []);
  return (
    <Wrapper>
      <Header />
      <ContentsBox>
        <SideBar />
        <MainContentsWrapper>
          <h1>order</h1>
          <Form />
        </MainContentsWrapper>
      </ContentsBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 70px);
`;

const MainContentsWrapper = styled.form`
  width: calc(100% - 200px);
  height: 100%;
  position: relative;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export { Order };
