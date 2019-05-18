import * as React from 'react'
import { cleanup, fireEvent } from 'react-testing-library'
import 'jest-dom/extend-expect'
import { WithButton } from '../WithButton'
import { renderWithReduxRouter } from '../../helper/testUtil'

afterEach(cleanup)

const setup = () => {
  const { getByLabelText, getByTestId } = renderWithReduxRouter(<WithButton />)
  const input = getByLabelText('予算')
  return {
    input,
    getByLabelText,
    getByTestId,
  }
}

describe('budget-input', () => {
  it('初期状態は0', () => {
    const { input } = setup()
    expect(input.value).toEqual('¥0')
  })
  it('入力値に単位がつく', () => {
    const { input, getByTestId } = setup()
    fireEvent.change(input, { target: { value: 100000 } })
    expect(input.value).toEqual('¥100,000')
  })
  it('値が0じゃないとき、focusを当てると単位が消える', () => {
    const { input, getByTestId } = setup()
    fireEvent.change(input, { target: { value: 100000 } })
    fireEvent.focus(getByTestId('budget-input'))
    expect(input.value).toEqual('100000')
  })
  it('プラスボタンを1回クリックすると、¥100,000円加算される', () => {
    const { input, getByTestId } = setup()
    fireEvent.click(getByTestId('budget-plus-stepper'))
    expect(input.value).toEqual('¥100,000')
  })
  it('プラスボタンを2回クリックすると、¥200,000円加算される', () => {
    const { input, getByTestId } = setup()
    fireEvent.click(getByTestId('budget-plus-stepper'))
    fireEvent.click(getByTestId('budget-plus-stepper'))
    expect(input.value).toEqual('¥200,000')
  })
  it('100000未満の数字から100000を引くと負の数字にならずに0になる', () => {
    const { input, getByTestId } = setup()
    fireEvent.change(input, { target: { value: 99999 } })
    fireEvent.click(getByTestId('budget-minus-stepper'))
    fireEvent.click(getByTestId('budget-minus-stepper'))
    expect(input.value).toEqual('¥0')
  })
})

describe('cost-input', () => {
  it.todo('初期状態は0')
  it.todo('入力値に単位がつく')
  it.todo('値が0のとき、focusを当てると数値が消える')
  it.todo('値が0じゃないとき、focusを当てると数値が消える')
  it.todo('プラスボタンを1回クリックすると、¥100,000円加算される')
  it.todo('プラスボタンを2回クリックすると、¥200,000円加算される')
  it.todo('100000未満の数字から100000を引くと負の数字にならずに0になる')
})
