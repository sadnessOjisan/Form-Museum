import * as React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../../const/color'

interface Props {
  className?: string
  disabled?: boolean
}

const Submit = (props: Props) => {
  const { className, disabled } = props
  return (
    <Wrapper className={className} type="submit" disabled={disabled}>
      送信
    </Wrapper>
  )
}

const Wrapper = styled.button`
  width: 320px;
  height: 50px;
  cursor: pointer;
  color: ${COLOR.white};
  background: ${`linear-gradient(90deg, ${COLOR.peachYellow}, ${
    COLOR.peachPink
  })`};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.3);
  border: none;
`

export { Submit }
