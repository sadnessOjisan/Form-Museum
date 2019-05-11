import * as React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../const/color'

interface IProps {
  className?: string
  onClick: () => void
  name: string
  selected: boolean
  dataTestId: string
}

const SideBarItem = (props: IProps) => {
  const { className, name, onClick, selected, dataTestId } = props
  return (
    <Wrapper
      className={className}
      onClick={onClick}
      selected={selected}
      data-testid={dataTestId}
    >
      {name}
    </Wrapper>
  )
}

const Wrapper = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-direction: column;
  width: 100%;
  height: 70px;
  color: ${props => (props.selected ? COLOR.peachPink : COLOR.black)};
  cursor: pointer;
  &:hover {
    background-color: ${COLOR.lightGray};
  }
`

export { SideBarItem }
