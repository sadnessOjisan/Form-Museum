import * as React from 'react'
import styled from 'styled-components'
import { Header } from '../Header'
import { SideBar } from '../SideBar'
import { COLOR } from '../../../const/color'
interface Props {
  children: React.ReactNode
  pageTitle: string
}

const SIDEBAR_WIDTH = 200

const MainContent = (props: Props) => {
  return (
    <Wrapper>
      <SideBar width={SIDEBAR_WIDTH} />
      <ContentWrapper width={SIDEBAR_WIDTH}>
        <Header pageTitle={props.pageTitle} />
        {props.children}
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`

const ContentWrapper = styled.div<Props>`
  width: ${props => `calc(100% - ${props.width}px)`};
  display: flex;
  flex-direction: column;
`

export { MainContent }
