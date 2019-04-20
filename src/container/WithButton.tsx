import * as React from "react";
import styled from "styled-components";
import { withFormik, FormikProps } from "formik";
import { Button } from "../component/common/Button";
import { Header } from "../component/common/Header";
import { SideBar } from "../component/common/Sidebar";
import { FooterLayout } from "../component/common/Footer";

interface FormValues {
  name: string;
  sales: number;
  cost: number;
}

interface IProps {}

const WithButton = (props: IProps & FormikProps<FormValues>) => {
  const { errors, handleSubmit, handleChange } = props;
  return (
    <Wrapper>
      <Header />
      <ContentsBox>
        <SideBar />
        <MainContentsWrapper>
          <h1>
            with-button・シミュレーションに適する。（面談シートから生成する）
          </h1>
          <div style={{ display: "flex" }}>
            <div style={{ width: "40%" }}>ここに候補</div>
            <div>
              <div>
                <label>予算</label>
                <input name="budget" onChange={handleChange} />
              </div>
              <div>
                <label>何人</label>
                <input name="number" onChange={handleChange} />
              </div>
              <div>
                <label>場所</label>
                <input name="person" onChange={handleChange} />
              </div>
              <div>
                <label>式場はどれにする</label>
                <input name="sales" onChange={handleChange} />
              </div>
            </div>
          </div>
          <FooterLayout>
            <div>残り予算は ??? 円</div>
            <Button type="submit" onClick={handleSubmit} primary={true}>
              見積もり詳細をDLする
            </Button>
          </FooterLayout>
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
  width: 100%;
  position: relative;
`;

interface MyFormProps {
  name: string;
  sales: number;
  cost: number;
}

const WithButtonForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    name: props.name,
    sales: props.sales,
    cost: props.cost
  }),
  handleSubmit: values => {
    console.log(values);
    alert("submit");
  }
})(WithButton);

export { WithButtonForm as WithButton };
