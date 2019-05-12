import * as React from 'react'
import { cleanup, waitForElement } from 'react-testing-library'
import 'jest-dom/extend-expect'
import { Order } from '../Order'
import axios from 'axios'
import { renderWithReduxRouter } from '../../helper/testUtil'

jest.mock('axios')
afterEach(cleanup)

it('setup', async () => {
  const returnData = [
    { id: 1, name: '2', place: '2', number: 4 },
    { id: 2, name: '2', place: '2', number: 4 },
  ]
  ;(axios.get as any).mockResolvedValue({ data: returnData })
  const { getAllByTestId } = renderWithReduxRouter(<Order />)

  const Places = await waitForElement(() => getAllByTestId('place-item'))
  expect(returnData.length).toBe(Places.length)
})
