import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { InputItem } from '../common/InputItem'
import Button from '../../component/common/Button'
import { genBlurLog, genClickLog } from '../../helper/util'
import { track } from '../../redux/module/logging'

interface IProps {
  label: string
  name: string
  value: string | number | undefined
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  errorMessage?: string
  touched: boolean
  type: 'number' | 'string'
  placeholder: string
  handlePlusButtonClick: () => void
  handleMinusButtonClick: () => void
  track: typeof track
  setFieldValue: any
  unit: '¥' | '人'
}

const InputGroup = (props: IProps) => {
  const {
    label,
    name,
    handleChange,
    value,
    errorMessage,
    touched,
    placeholder,
    handlePlusButtonClick,
    handleMinusButtonClick,
    track,
    setFieldValue,
    unit,
  } = props
  const [isFocused, setFocus] = useState(false)
  const TEST_OR_TRACK_TARGET = {
    input: `${name}-input`,
    plusStepper: `${name}-plus-stepper`,
    minusStepper: `${name}-minus-stepper`,
  }
  const formattedValue =
    unit === '¥'
      ? `¥${Number(value).toLocaleString()}`
      : unit === '人'
      ? `${Number(value).toLocaleString()}人`
      : Number(value).toLocaleString()
  return (
    <Wrapper>
      <Input
        name={name}
        label={label}
        handleChange={handleChange}
        handleBlur={() => {
          setFocus(false)
          if (value === '') {
            setFieldValue(name, 0)
          }
          track(
            genBlurLog('input-budget', TEST_OR_TRACK_TARGET.input, {
              inputValue: value,
            })
          )
        }}
        handleFocus={() => {
          setFocus(true)
          if (value === 0) {
            setFieldValue(name, '')
          }
        }}
        dataTestId={TEST_OR_TRACK_TARGET.input}
        value={isFocused ? value : formattedValue}
        touched={touched ? true : false}
        type={isFocused ? 'number' : 'text'}
        placeholder={placeholder}
        errorMessage={errorMessage}
      />
      <StepperButton
        type="button"
        onClick={() => {
          handlePlusButtonClick()
          track(
            genClickLog(
              `${name}-stepper-click-plus`,
              TEST_OR_TRACK_TARGET.plusStepper
            )
          )
        }}
        dataTestId={TEST_OR_TRACK_TARGET.plusStepper}
      >
        +
      </StepperButton>
      <StepperButton
        type="button"
        onClick={() => {
          handleMinusButtonClick()
          track(
            genClickLog(
              `${name}-stepper-click-minus`,
              TEST_OR_TRACK_TARGET.minusStepper
            )
          )
        }}
        dataTestId={TEST_OR_TRACK_TARGET.minusStepper}
      >
        -
      </StepperButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Input = styled(InputItem)`
  width: 80%;
`

const StepperButton = styled(Button.Input)`
  margin-top: auto;
  margin-left: 12px;
  margin-right: 8px;
`

export { InputGroup }
