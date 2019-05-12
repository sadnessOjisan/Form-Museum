import * as React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { track } from '../redux/module/logging'
import { ITracker } from '../typedef/Tracker'
import Layout from '../component/common/layout'
import { WithButtonForm } from '../component/withButton/Form'
import { genLoadLog } from '../helper/util'

interface DispatchProps {
  track: typeof track
}

type IProps = DispatchProps

const WithButton = (props: IProps) => {
  const { track } = props
  useEffect(() => {
    track(genLoadLog('load_withButton'))
  }, [])
  return (
    <Wrapper>
      <Layout.MainContent pageTitle="親切フォーム">
        <WithButtonForm />
      </Layout.MainContent>
    </Wrapper>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  track: (log: ITracker) => dispatch(track(log)),
})

const ConnectedForm = connect(
  undefined,
  mapDispatchToProps
)(WithButton)

const Wrapper = styled.div`
  height: 100%;
`

export { ConnectedForm as WithButton }
