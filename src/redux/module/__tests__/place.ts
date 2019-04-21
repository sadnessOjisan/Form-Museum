import reducer, { initialState, actions } from "../place";

describe("Redux", () => {
  describe("place", () => {
    it("should be init state", () => {
      const expected = reducer(
        undefined,
        actions.startFetchData({ ParticipantNum: 1, budget: 3 })
      );
      expect(expected).toBe({ initialState });
    });
  });
});
