import * as React from 'react'
import styled from 'styled-components'
import { Kuso } from '../component/kuso/Form'
import Layout from '../component/common/layout'

const KusoFormPage = () => {
  return (
    <Wrapper>
      <ContentsBox>
        <Layout.MainContent pageTitle="やばいForm">
          <Kuso />
        </Layout.MainContent>
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
  height: 100%;
`

const MainContentsWrapper = styled.form`
  width: calc(100% - 200px);
  height: 100%;
  position: relative;
  padding: 8px;
`

export { KusoFormPage }
