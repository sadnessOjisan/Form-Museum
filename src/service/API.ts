import axios, { AxiosError } from "axios";
import { getUrl } from "../helper/util";
import { IPlacesResponse } from "../typedef/response/place";
import { IPlaceQuery } from "../typedef/request/PlaceQuery";

const API = {
  fetchPlaces(query: IPlaceQuery) {
    return axios
      .get<IPlacesResponse>(getUrl("places"), { params: query })
      .then(response => ({
        payload: response.data
      }))
      .catch((error: AxiosError) => ({
        error
      }));
  }
};

export { API };
