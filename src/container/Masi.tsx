import * as React from "react";
import styled from "styled-components";
import { withFormik, FormikProps } from "formik";
import * as Yup from "yup";
import { Button } from "../component/common/Button";
import { Header } from "../component/common/Header";
import { SideBar } from "../component/common/Sidebar";

interface FormValues {
  name: string;
  sales: number;
  cost: number;
}

interface IProps {}

const Masi = (props: IProps & FormikProps<FormValues>) => {
  const { errors, handleSubmit, handleChange, values } = props;
  console.log(errors);
  return (
    <Wrapper>
      <Header />
      <ContentsBox>
        <SideBar />
        <MainContentsWrapper>
          <h1>mASI</h1>
          <div>
            <label>今日の日付</label>
            <input name="name" onChange={handleChange} value={values.name} />
          </div>
          <div>
            <label>売り上げ</label>
            <input name="sales" onChange={handleChange} value={values.sales} />
          </div>
          <div>
            <label>人件費</label>
            <input name="cost" onChange={handleChange} value={values.cost} />
          </div>
          <Button
            type="submit"
            onClick={handleSubmit}
            primary={true}
            disabled={Object.keys(errors).length !== 0 ? true : false}
          >
            送信
          </Button>
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

const MasiSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  sales: Yup.number()
    .max(1000000, "最大値は100000です")
    .positive("正数を入れてください")
    .required("Required"),
  cost: Yup.number().required("Required")
});

const MasiForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    name: props.name,
    sales: props.sales,
    cost: props.cost
  }),
  handleSubmit: values => {
    console.log(values);
    alert("submit");
  },
  validationSchema: MasiSchema,
  isInitialValid: true
})(Masi);

export { MasiForm as Masi };
