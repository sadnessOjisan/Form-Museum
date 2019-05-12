import * as React from 'react'
import { cleanup, waitForElement } from 'react-testing-library'
import 'jest-dom/extend-expect'
import { Order } from '../Order'
import axios from 'axios'
import { renderWithReduxRouter } from '../../helper/testUtil'

jest.mock('axios')
jest.mock('@fortawesome/react-fontawesome')
afterEach(cleanup)

it('setup', async () => {
  //   const returnData = [
  //     {
  //       startTime: '09:00',
  //       event: '新郎新婦入場',
  //     },
  //     {
  //       startTime: '09:20',
  //       event: '新郎新婦退場',
  //     },
  //   ]
  //   ;(axios.get as any).mockResolvedValue({ data: returnData })
  //   const { getAllByTestId } = renderWithReduxRouter(<Order />)
  //   const Orders = await waitForElement(() => getAllByTestId('editRow'))
  //   expect(returnData.length).toBe(Orders.length)
})
