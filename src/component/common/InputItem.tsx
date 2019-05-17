import * as React from 'react'
import styled from 'styled-components'
import { Balloon } from './Balloon'
import { COLOR } from '../../const/color'

interface IProps {
  label: string
  name: string
  value: string | number | undefined | null
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: () => void
  errorMessage?: string
  touched: boolean
  type: 'number' | 'text'
  placeholder: string
  dataTestId: string
  className?: string
  handleFocus?: () => void
}

const InputItem = (props: IProps) => {
  const {
    label,
    name,
    handleChange,
    value,
    errorMessage,
    handleBlur,
    touched,
    type,
    placeholder,
    dataTestId,
    className,
    handleFocus,
  } = props
  const isValid = errorMessage ? false : true
  return (
    <Wrapper className={className}>
      <Label for={name}>{label}</Label>
      <InputWrapper>
        {touched && !isValid && <ValidationBalloon message={errorMessage} />}
        <Input
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={value ? value : undefined}
          shouldBeRed={!isValid && touched}
          id={name}
          type={type}
          placeholder={placeholder}
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
  font-size: 16px;
  margin-bottom: 8px;
  display: inline-block;
  width: 70px;
`

const Input = styled.input<{ shouldBeRed: boolean }>`
  height: 50px;
  border: 1px solid ${props => (props.shouldBeRed ? COLOR.red : COLOR.darkGray)};
  width: 100%;
  padding-left: 4px;
  border-radius: 4px;
  outline: none;
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

export { InputItem }
