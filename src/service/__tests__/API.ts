import { API } from '../API'
import axios from 'axios'
jest.mock('axios')

describe('main test', () => {
  it('axios return empty value', async () => {
    // @ts-ignore
    ;(axios.get as any).mockResolvedValue({ data: [] })
    const query = { budget: 100, ParticipantNum: 30 }
    const res = await API.fetchPlaces(query)
    expect(res).toEqual({ payload: [] })
  })

  it('axios return 2 length value', async () => {
    const returnData = [
        { id: 1, name: '2', place: '2', number: 4 },
        { id: 2, name: '2', place: '2', number: 4 },
        { id: 3, name: '2', place: '2', number: 4 },
      ]
      // @ts-ignore
    ;(axios.get as any).mockResolvedValue({ data: returnData })
    const query = { budget: 100, ParticipantNum: 30 }
    const res = await API.fetchPlaces(query)
    expect(res).toEqual({ payload: returnData })
  })
})
