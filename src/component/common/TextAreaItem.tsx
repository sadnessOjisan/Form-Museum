import * as React from 'react'
import styled from 'styled-components'
import { Balloon } from './Balloon'
import { COLOR } from '../../const/color'

interface IProps {
  label: string
  name: string
  value: string | null
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void
  onFocus?: () => void
  errorMessage?: string
  touched: boolean
  placeholder: string
  dataTestId: string
}

const TextAreaItem = (props: IProps) => {
  const {
    label,
    name,
    handleChange,
    value,
    errorMessage,
    handleBlur,
    touched,
    placeholder,
    dataTestId,
  } = props
  const isValid = errorMessage ? false : true
  return (
    <Wrapper>
      <Label for={name}>{label}</Label>
      <InputWrapper>
        {touched && !isValid && <ValidationBalloon message={errorMessage} />}
        <Input
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value ? value : undefined}
          shouldBeRed={!isValid && touched}
          id={name}
          placeholder={!touched ? placeholder : ''}
          data-testid={dataTestId}
        />
      </InputWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const InputWrapper = styled.div`
  position: relative;
`
const Label = styled.label<{ for: string }>`
  margin-bottom: 8px;
`

const Input = styled.textarea<{ shouldBeRed: boolean }>`
  width: 100%;
  border: 1px solid ${props => (props.shouldBeRed ? COLOR.red : COLOR.darkGray)};
  height: 140px;
  padding-left: 4px;
  border-radius: 4px;
  &:focus {
    outline: 0;
    border-color: ${COLOR.blue};
  }
`

const ValidationBalloon = styled(Balloon)`
  position: absolute;
`

// DEMOのときはMemoizeしない方を見せる
// const MemoizedInputItem = React.memo(InputItem, (n, p) => {
//   return n.value === p.value;
// });

export { TextAreaItem }
