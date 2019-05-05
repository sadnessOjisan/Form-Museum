import * as React from 'react'
import styled from 'styled-components'
import { Header } from '../component/common/Header'
import { SideBar } from '../component/common/Sidebar'
import { Form } from '../component/order/Form'

const Order = () => {
  return (
    <Wrapper>
      <Header />
      <ContentsBox>
        <SideBar />
        <MainContentsWrapper>
          <PageTitleRow>
            <PageTitle>スケジュール出力</PageTitle>
          </PageTitleRow>
          <Form />
        </MainContentsWrapper>
      </ContentsBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
`

const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(100% - 70px);
`

const MainContentsWrapper = styled.form`
  width: calc(100% - 200px);
  height: 100%;
  position: relative;
  padding: 8px;
`

const PageTitle = styled.h1``

const PageTitleRow = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export { Order }
