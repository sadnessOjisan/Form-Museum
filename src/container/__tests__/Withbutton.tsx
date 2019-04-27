// __tests__/fetch.test.js
import React from "react";
import { Provider, connect } from "react-redux";
import {
  render,
  fireEvent,
  cleanup,
  queryByTestId,
  waitForElement,
  wait
} from "react-testing-library";
import "jest-dom/extend-expect";
import { Router } from "react-router";
import { App } from "../App";
import { createMemoryHistory } from "history";
import axios from "axios";
import configureStore from "../../redux";

jest.mock("axios");
afterEach(cleanup);

jest.mock("../../asset/video/rain.mp4");
jest.mock("../../asset/video/hare.mp4");

const renderWithReduxRouter = (
  ui: React.ReactNode,
  { store = configureStore() } = {},
  {
    route = "/with-button",
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

const placeData = [
  { id: 1, name: "2", place: "2", number: 4 },
  { id: 2, name: "2", place: "2", number: 4 },
  { id: 3, name: "2", place: "2", number: 4 }
];

it("setup", async () => {
  const returnData = [
    { id: 1, name: "2", place: "2", number: 4 },
    { id: 2, name: "2", place: "2", number: 4 },
    { id: 3, name: "2", place: "2", number: 4 }
  ];
  (axios.get as any).mockResolvedValue({ data: returnData });
  const {
    getAllByTestId,
    getByTestId,
    getByText,
    baseElement,
    queryByTestId,
    container,
    rerender,
    debug
  } = renderWithReduxRouter(<App />);

  const Places = await waitForElement(() => getAllByTestId("place-item"));
  // const Places = await waitForElement(() => getByTestId("loader"));
  console.log(Places);
  expect(returnData.length).toBe(Places.length);
});
