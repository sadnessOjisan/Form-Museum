import * as React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../../const/color'

interface Props {
  className?: string
  children: React.ReactNode
  onClick?: (e: React.MouseEvent) => void
  type?: 'submit' | 'button'
  primary?: boolean
  dataTestId?: string
}

const Input = (props: Props) => {
  const { className, children, onClick, type, dataTestId } = props
  return (
    <Wrapper
      className={className}
      onClick={onClick}
      type={type}
      data-testid={dataTestId}
    >
      {children}
    </Wrapper>
  )
}

const SIZE = 20

const Wrapper = styled.button`
  background-color: ${COLOR.peachPink};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${SIZE}px;
  width: ${SIZE}px;
  outline: 0;
  border: 0;
  border-radius: ${SIZE / 2}px;
  padding: 2px 24px;
  color: white;
  font-size: 20px;
  cursor: pointer;
`

export { Input }
