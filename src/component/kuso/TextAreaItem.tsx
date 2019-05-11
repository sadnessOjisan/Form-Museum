import * as React from 'react'
import styled from 'styled-components'

interface Props {
  name: string
  handleChange: (e: React.ChangeEvent<any>) => void
  handleBlur: () => void
  label: string
  dataTestId: string
}

const TextAreaItem = (props: Props) => {
  const { name, handleChange, handleBlur, label, dataTestId } = props
  return (
    <Wrapper>
      <Label>{label}</Label>
      <TextArea
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
`

const TextArea = styled.textarea`
  min-height: 100px;
  max-height: 150px;
`

export { TextAreaItem }
