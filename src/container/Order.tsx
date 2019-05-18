import * as React from 'react'
import styled from 'styled-components'
import { Form } from '../component/order/Form'
import Layout from '../component/common/layout'
import Text from '../component/common/Text'
import { COLOR } from '../const/color'

const Order = () => {
  return (
    <Wrapper>
      <Layout.MainContent pageTitle="再レンダリングやばい">
        <MainContentsWrapper>
          <Text.PageTitle>スケジュールエディタ</Text.PageTitle>
          <Form />
        </MainContentsWrapper>
      </Layout.MainContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
`

const MainContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 8px;
  background-color: ${COLOR.lightGray};
`

export { Order }
