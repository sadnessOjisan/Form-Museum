import * as React from 'react'
import styled from 'styled-components'
import { COLOR } from '../../../const/color'

interface Props {
  children: React.ReactNode
  color?: string
}

const PageTitle = (props: Props) => {
  return <SText color={props.color}>{props.children}</SText>
}

const SText = styled.h2<{ color?: string }>`
  font-size: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
  color: ${props => (props.color ? props.color : COLOR.black)};
  font-weight: normal;
`

export { PageTitle }
