import * as React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../const/color'

interface Props {
  name: string
  handleChange: (e: React.ChangeEvent<any>) => void
  handleBlur: () => void
  label: string
  dataTestId: string
}

const TextInputItem = (props: Props) => {
  const { name, handleChange, handleBlur, label, dataTestId } = props
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        data-testid={dataTestId}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
`

const Input = styled.input`
  height: 30px;
  border: solid 1px ${COLOR.darkGray};
`

export { TextInputItem }
