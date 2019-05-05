import * as React from "react";
import styled from "styled-components";
import { withFormik, FormikProps } from "formik";
import { Header } from "../component/common/Header";
import { SideBar } from "../component/common/Sidebar";
import { Kuso } from "../component/kuso/Form";

interface FormValues {
  name: string | null;
  sales: number | null;
  cost: number | null;
}

interface IProps {}

const KusoFormPage = (props: IProps & FormikProps<FormValues>) => {
  const { errors, handleSubmit, handleChange } = props;
  return (
    <Wrapper>
      <Header />
      <ContentsBox>
        <SideBar />
        <MainContentsWrapper>
          <Kuso />
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
  height: 100%;
`;

const MainContentsWrapper = styled.form`
  width: calc(100% - 200px);
  height: 100%;
  position: relative;
  padding: 8px;
`;

export { KusoFormPage };
