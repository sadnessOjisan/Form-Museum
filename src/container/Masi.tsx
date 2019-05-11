import * as React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { track } from '../redux/module/logging'
import { genLoadLog } from '../helper/util'
import { ITracker } from '../typedef/Tracker'
import Layout from '../component/common/layout'
import { MasiForm } from '../component/masi/Form'

interface DispatchProps {
  track: typeof track
}

type IProps = DispatchProps

const Masi = (props: IProps) => {
  const { track } = props
  useEffect(() => {
    track(genLoadLog('load_masi'))
  }, [])
  return (
    <Wrapper>
      <Layout.MainContent pageTitle="マシなForm">
        <MasiForm />
      </Layout.MainContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
`

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  track: (log: ITracker) => dispatch(track(log)),
})

const ConnectedMasi = connect(
  undefined,
  mapDispatchToProps
)(Masi)

export { ConnectedMasi as Masi }
