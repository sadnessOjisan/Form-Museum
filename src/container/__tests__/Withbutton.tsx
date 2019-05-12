import * as React from 'react'
import { cleanup, waitForElement, fireEvent } from 'react-testing-library'
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
  it('click plus once', () => {
    const { input, getByTestId } = setup()
    fireEvent.click(getByTestId('budget-plus-stepper'))
    expect(input.value).toEqual('¥100,000')
  })
  it('click plus twice', () => {
    const { input, getByTestId } = setup()
    fireEvent.click(getByTestId('budget-plus-stepper'))
    fireEvent.click(getByTestId('budget-plus-stepper'))
    expect(input.value).toEqual('¥200,000')
  })
})
