import * as React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { KusoFormPage } from './Kuso'
import { Masi } from './Masi'
import { IStore } from '../redux/module'
import { Kintai } from './Kintai'
import { Login } from './Login'
import { Order } from './Order'
import { WithButton } from './WithButton'

interface IStateProps {
  isOpenKintaiModal: boolean
}

type Props = IStateProps

library.add(faTrash)

const App = (props: Props) => {
  const { isOpenKintaiModal } = props
  return (
    <PageWrapper>
      <Switch>
        <Route path="/" component={KusoFormPage} exact />
        <Route path="/masi" component={Masi} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/order" component={Order} exact />
        <Route path="/with-button" component={WithButton} exact />
      </Switch>
      {isOpenKintaiModal && <Kintai />}
    </PageWrapper>
  )
}

const mapStateToProps = (state: IStore) => ({
  isOpenKintaiModal: state.kintai.isOpenModal,
})

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const ConnectedApp = connect(mapStateToProps)(App)

export { ConnectedApp as App }
