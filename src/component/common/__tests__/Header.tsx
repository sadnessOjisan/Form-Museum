import React from 'react'
import { cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
import { Header } from '../Header'
import { renderWithRedux } from '../../../helper/testUtil'

afterEach(cleanup)

describe('Header', () => {
  it('必要なヘッダがある', () => {
    const { getByTestId } = renderWithRedux(<Header />)
    expect(getByTestId('header')).toHaveTextContent('logo')
    expect(getByTestId('header')).toHaveTextContent('kensaku')
    expect(getByTestId('header')).toHaveTextContent('loginaddress')
    expect(getByTestId('header')).toHaveTextContent('osirasebox')
    expect(getByTestId('header')).toHaveTextContent('notify')
    expect(getByTestId('header')).toHaveTextContent('kintai')
  })
  it('わけわからんヘッダが入ってる', () => {
    const { getByTestId } = renderWithRedux(<Header />)
    expect(getByTestId('header')).toHaveTextContent('logo')
    expect(getByTestId('header')).toHaveTextContent('kensaku')
    expect(getByTestId('header')).toHaveTextContent('loginaddress')
    expect(getByTestId('header')).toHaveTextContent('osirasebox')
    expect(getByTestId('header')).toHaveTextContent('notify')
    // これが含まれないというテストはどう書けばいいのか
    expect(getByTestId('header')).not.toHaveTextContent(
      'ああああああああああああああ'
    )
  })
  it.todo('hoge')
})
