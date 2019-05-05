import axios, { AxiosError } from 'axios'
import { getUrl } from '../helper/util'
import { IPlacesResponse } from '../typedef/response/place'
import { IPlaceQuery } from '../typedef/request/PlaceQuery'
import { IScheduleRequest } from '../typedef/request/OrderQuery'
import { ILog } from '../typedef/Tracker'

const API = {
  fetchPlaces(query: IPlaceQuery) {
    return axios
      .get<IPlacesResponse>(getUrl('places'), { params: query })
      .then(response => ({
        payload: response.data,
      }))
      .catch((error: AxiosError) => ({
        error,
      }))
  },
  saveLog(log: ILog) {
    return axios.post<IPlacesResponse>(getUrl('log'), log)
  },
  fetchUser() {
    return axios
      .get<IPlacesResponse>(getUrl('user'))
      .then(response => ({
        payload: response.data,
      }))
      .catch((error: AxiosError) => ({
        error,
      }))
  },
  fetchSchedule() {
    return axios
      .get<IPlacesResponse>(getUrl('schedule'))
      .then(response => ({
        payload: response.data,
      }))
      .catch((error: AxiosError) => ({
        error,
      }))
  },
  postSchedule(query: IScheduleRequest) {
    return axios
      .post(getUrl('schedule'), query)
      .then(response => ({
        payload: response.data,
      }))
      .catch((error: AxiosError) => ({
        error,
      }))
  },
}

export { API }
