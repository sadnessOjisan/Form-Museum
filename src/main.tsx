import * as React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history' // eslint-disable-line
import { Provider } from 'react-redux'
import { App } from './container/App'
import configureStore from './redux'
import './asset/css/reset.css'

const store = configureStore()
const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
