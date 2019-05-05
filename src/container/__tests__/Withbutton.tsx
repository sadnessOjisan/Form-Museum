import * as React from 'react'
import { cleanup, waitForElement } from 'react-testing-library'
import 'jest-dom/extend-expect'
import { WithButton } from '../WithButton'
import axios from 'axios'
import { renderWithReduxRouter } from '../../helper/testUtil'

jest.mock('axios')
afterEach(cleanup)

jest.mock('../../asset/video/rain.mp4')
jest.mock('../../asset/video/hare.mp4')

it('setup', async () => {
  const returnData = [
    { id: 1, name: '2', place: '2', number: 4 },
    { id: 2, name: '2', place: '2', number: 4 },
  ]
  ;(axios.get as any).mockResolvedValue({ data: returnData })
  const { getAllByTestId } = renderWithReduxRouter(<WithButton />)

  const Places = await waitForElement(() => getAllByTestId('place-item'))
  expect(returnData.length).toBe(Places.length)
})
