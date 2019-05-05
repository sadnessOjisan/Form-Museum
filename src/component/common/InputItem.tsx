import * as React from 'react'
import styled from 'styled-components'
import { Balloon } from './Balloon'
import { COLOR } from '../../const/color'

interface IProps {
  label: string
  name: string
  value: number
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  onFocus?: () => void
  errorMessage?: string
  touched: boolean
  type: 'number' | 'string'
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
          value={value}
          shouldBeRed={!isValid && touched}
          id={name}
          type={type}
        />
      </InputWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div``
const InputWrapper = styled.div`
  position: relative;
`
const Label = styled.label<{ for: string }>``

const Input = styled.input<{ shouldBeRed: boolean }>`
  border: solid 1px gray;
  border-color: ${props => props.shouldBeRed && 'red'};
  height: 40px;
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

export { InputItem }
