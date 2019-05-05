import * as React from 'react'
import configureStore from '../redux'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router'
import { Provider } from 'react-redux'
import { render } from 'react-testing-library'

const renderWithReduxRouter = (
  ui: React.ReactNode,
  { store = configureStore() } = {},
  {
    route = '/with-button',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  return {
    ...render(
      <Router history={history}>
        <Provider store={store}>{ui}</Provider>
      </Router>
    ),
    store,
  }
}

const renderWithRedux = (
  ui: React.ReactNode,
  { store = configureStore() } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

export { renderWithReduxRouter, renderWithRedux }
