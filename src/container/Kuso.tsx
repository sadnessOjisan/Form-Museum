import * as React from "react";
import styled from "styled-components";
import { withFormik, FormikProps } from "formik";
import { Header } from "../component/common/Header";
import { SideBar } from "../component/common/Sidebar";

interface FormValues {
  name: string;
  sales: number;
  cost: number;
}

interface IProps {}

const Kuso = (props: IProps & FormikProps<FormValues>) => {
  const { errors, handleSubmit, handleChange } = props;
  return (
    <Wrapper>
      <Header />
      <ContentsBox>
        <SideBar />
        <MainContentsWrapper onSubmit={handleSubmit}>
          <h1>kUSO</h1>
          <div>
            <label>今日の日付</label>
            <input name="name" onChange={handleChange} />
          </div>
          <div>
            <label>売り上げ</label>
            <input name="sales" onChange={handleChange} />
          </div>
          <div>
            <label>人件費</label>
            <input name="cost" onChange={handleChange} />
          </div>
          <button type="submit">送信</button>
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
`;

interface MyFormProps {
  name: string;
  sales: number;
  cost: number;
}

const KusoForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    name: props.name,
    sales: props.sales,
    cost: props.cost
  }),
  handleSubmit: values => {
    console.log(values);
    alert("submit");
  }
})(Kuso);

export { KusoForm as Kuso };
