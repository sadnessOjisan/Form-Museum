import * as React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../../const/color'

interface Props {
  className?: string
  children: string
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
      <span style={{ fontSize: '28px' }}>{children}</span>
    </Wrapper>
  )
}

const SIZE = 50

const Wrapper = styled.button`
  background-color: ${COLOR.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${SIZE}px;
  width: ${SIZE}px;
  outline: 0;
  border: 0;
  border-radius: ${SIZE / 2}px;
  color: ${COLOR.black};

  border: solid 1px ${COLOR.darkGray};
  cursor: pointer;
  :hover {
    background-color: ${COLOR.darkGray};
  }
`

export { Input }
