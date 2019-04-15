import * as React from "react";
import styled from "styled-components";
import { withFormik, FormikProps, FormikErrors } from "formik";
import { Button } from "../component/common/Button";

interface FormValues {
  name: string;
}

interface IProps {}

const Kuso = (props: IProps & FormikProps<FormValues>) => {
  const { errors, handleSubmit, handleChange } = props;
  return (
    <Wrapper>
      <Input name="name" onChange={handleChange} />
      <Button type="submit" onClick={handleSubmit}>
        送信
      </Button>
      {JSON.stringify(errors)}
    </Wrapper>
  );
};

const Wrapper = styled.form``;

interface MyFormProps {
  name?: string;
}

const KusoForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: props => {
    return {
      name: props.name
    };
  },
  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    console.log(values);
    if (!values.name) {
      errors.name = "Required";
    }
    return errors;
  },
  handleSubmit: values => {
    console.log(values);
    alert("submit");
  }
})(Kuso);

const Input = styled.input``;

export { KusoForm as Kuso };
