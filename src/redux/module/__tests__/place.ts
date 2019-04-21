import reducer, { initialState, actions } from "../place";
import { genAxiosErrorObject } from "../../../helper/util";

describe("Redux", () => {
  describe("place", () => {
    const query = { budget: 100, ParticipantNum: 30 };
    const data = [
      { id: 1, name: "a", place: "f", number: 1 },
      { id: 1, name: "a", place: "g", number: 1 }
    ];

    it("should be init state", () => {
      const result = reducer(undefined, { type: "@@redux/INIT" });
      const expected = initialState;
      expect(expected).toEqual(result);
    });

    it("should be changed to LOADED when START_FETCH_DATA", () => {
      const action = actions.startFetchData(query);
      const result = reducer(initialState, action);
      const expected = {
        ...initialState,
        isLoading: true,
        error: null
      };
      expect(expected).toEqual(result);
    });

    it("should be changed to LOADED when SUCCESS_FETCH_DATA", () => {
      const action = actions.successFetchData(data);
      const result = reducer(initialState, action);
      const expected = {
        ...initialState,
        isLoading: false,
        isLoaded: true,
        data: action.payload
      };
      expect(expected).toEqual(result);
    });

    it("should be changed to LOADED when FAIL_FETCH_DATA", () => {
      const error = genAxiosErrorObject();
      const action = actions.failFetchData({
        error: error
      });
      const result = reducer(initialState, action);
      const expected = {
        ...initialState,
        isLoading: false,
        isLoaded: true,
        error: action.payload
      };
      expect(expected).toEqual(result);
    });
  });
});
