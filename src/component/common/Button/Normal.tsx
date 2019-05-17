import * as React from 'react'
import styled from 'styled-components'
interface Props {
  className?: string
  children: React.ReactNode
  onClick?: () => void
  type?: 'submit' | 'button'
  primary?: boolean
  dataTestId: string
}

const Normal = (props: Props) => {
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

const Wrapper = styled.button`
  width: 70px;
  height: 50px;
  cursor: pointer;
`

export { Normal }
