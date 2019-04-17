import * as React from "react";
import styled from "styled-components";
import { withFormik, FormikProps } from "formik";
import { Button } from "../component/common/Button";

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
      <Button type="submit" onClick={handleSubmit} primary={true}>
        送信
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.form``;

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
