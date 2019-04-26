// __tests__/fetch.test.js
import React from "react";
import { createStore } from "redux";
import { Provider, connect } from "react-redux";
import reducer from "../../../redux/module";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import "jest-dom/extend-expect";
import axiosMock from "axios";
import { Header } from "../Header";

afterEach(cleanup);

const renderWithRedux = (
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
};

describe("Header", () => {
  it("必要なヘッダがある", () => {
    const { getByTestId } = renderWithRedux(<Header />);
    console.log(getByTestId("header"));
    expect(getByTestId("header")).toHaveTextContent("logo");
    expect(getByTestId("header")).toHaveTextContent("kensaku");
    expect(getByTestId("header")).toHaveTextContent("loginaddress");
    expect(getByTestId("header")).toHaveTextContent("osirasebox");
    expect(getByTestId("header")).toHaveTextContent("notify");
    expect(getByTestId("header")).toHaveTextContent("kintai");
  });
  it("わけわからんヘッダが入ってる", () => {
    const { getByTestId } = renderWithRedux(<Header />);
    expect(getByTestId("header")).toHaveTextContent("logo");
    expect(getByTestId("header")).toHaveTextContent("kensaku");
    expect(getByTestId("header")).toHaveTextContent("loginaddress");
    expect(getByTestId("header")).toHaveTextContent("osirasebox");
    expect(getByTestId("header")).toHaveTextContent("notify");
    // これが含まれないというテストはどう書けばいいのか
    expect(getByTestId("header")).toHaveTextContent(
      "ああああああああああああああ"
    );
  });
  it.todo("「-」ボタンを押すと１つカウントダウンする");
});
