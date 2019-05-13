import * as React from 'react'
import { fireEvent, cleanup } from 'react-testing-library'
import 'jest-dom/extend-expect'
import { renderWithReduxRouter } from '../../helper/testUtil'
import { KusoFormPage } from '../Kuso'

afterEach(cleanup)

jest.mock('../../asset/video/rain.mp4')
jest.mock('../../asset/video/hare.mp4')

describe('Header', () => {
  it('必要なヘッダがある', () => {
    // const { getByTestId, queryByTestId } = renderWithReduxRouter(
    //   <KusoFormPage />
    // )
    // fireEvent.click(getByTestId('kintai-modal-opener'))
    // expect(queryByTestId('kintai-modal')).toBeInTheDocument()
  })
})
