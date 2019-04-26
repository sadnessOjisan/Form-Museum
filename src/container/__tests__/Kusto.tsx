// __tests__/fetch.test.js
import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import reducer from "../../redux/module";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
  queryByTestId
} from "react-testing-library";
import "jest-dom/extend-expect";
import axiosMock from "axios";
import { Kuso } from "../Kuso";
import { Router } from "react-router";
import { App } from "../App";
import { createMemoryHistory } from "history";

afterEach(cleanup);

jest.mock("../../asset/video/rain.mp4");
jest.mock("../../asset/video/hare.mp4");

const renderWithReduxRouter = (
  ui,
  { initialState, store = createStore(reducer, initialState) } = {},
  {
    route = "/kuso",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...render(
      <Router history={history}>
        <Provider store={store}>{ui}</Provider>
      </Router>
    ),
    store
  };
};

describe("Header", () => {
  it("必要なヘッダがある", () => {
    const history = jest.fn();
    const location = jest.fn();
    const { getByTestId, queryByTestId } = renderWithReduxRouter(<App />);
    fireEvent.click(getByTestId("kintai-modal-opener"));
    expect(queryByTestId("kintai-modal")).toBeInTheDocument();
  });
  it.todo("hoge");
});
