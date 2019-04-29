import * as React from "react";
import styled from "styled-components";
import { withFormik, FormikProps } from "formik";

interface FormValues {
  name: string | null;
  sales: number | null;
  cost: number | null;
}

interface IProps extends FormikProps<FormValues> {}

const Form = (props: IProps) => {
  const { handleSubmit, handleChange } = props;
  return (
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
  );
};

const MainContentsWrapper = styled.form`
  width: 100%;
`;

const KusoForm = withFormik<null, FormValues>({
  mapPropsToValues: () => ({
    name: null,
    sales: null,
    cost: null
  }),
  handleSubmit: values => {
    console.log(values);
    alert("submit");
  }
})(Form);

export { KusoForm as Kuso };
