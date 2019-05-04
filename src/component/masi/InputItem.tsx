import * as React from "react";
import styled from "styled-components";
import { Balloon } from "../common/Balloon";

interface IProps {
  label: string;
  name: string;
  value: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<any>) => void;
  errorMessage?: string;
  touched: boolean;
}

const InputItem = (props: IProps) => {
  const {
    label,
    name,
    handleChange,
    value,
    errorMessage,
    handleBlur,
    touched
  } = props;
  const isValid = errorMessage ? false : true;
  return (
    <Wrapper>
      <Label>{label}</Label>
      <InputWrapper>
        {touched && !isValid && <ValidationBalloon message={errorMessage} />}
        <Input
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          shouldBeRed={!isValid && touched}
        />
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
const InputWrapper = styled.div`
  position: relative;
`;
const Label = styled.label``;

const Input = styled.input<{ shouldBeRed: boolean }>`
  border: solid 1px gray;
  border-color: ${props => props.shouldBeRed && "red"};
`;

const ValidationBalloon = styled(Balloon)`
  position: absolute;
`;

// DEMOのときはMemoizeしない方を見せる
// const MemoizedInputItem = React.memo(InputItem, (n, p) => {
//   return n.value === p.value;
// });

export { InputItem };
