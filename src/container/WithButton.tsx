import * as React from "react";
import styled from "styled-components";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import { withFormik, FormikProps } from "formik";
import { Header } from "../component/common/Header";
import { SideBar } from "../component/common/Sidebar";
import { FooterLayout } from "../component/common/Footer";
import {
  actions as placeActions,
  initialState as placeState
} from "../redux/module/place";
import { IStore } from "../redux/module";
import { track } from "../redux/module/logging";
import { genBlurLog } from "../helper/util";
import { ITracker } from "../typedef/Tracker";

interface StateProps {
  isLoading: typeof placeState.isLoading;
  isLoaded: typeof placeState.isLoaded;
  data: typeof placeState.data;
  error: typeof placeState.error;
}

interface DispatchProps {
  startFetchData: typeof placeActions.startFetchData;
  track: typeof track;
}

interface FormValues {
  budget: string | null;
  number: number | null;
  options: string[];
}

type IProps = StateProps & DispatchProps & FormikProps<FormValues>;

const TEST_OR_TRACK_TARGET = {
  inputBudget: "input-budget",
  inputNumber: "input-number",
  inputPlace: "input-place"
};

const WithButton = (props: IProps) => {
  const { handleChange, handleSubmit, track, values, setFieldValue } = props;
  return (
    <Wrapper>
      <Header />
      <ContentsBox>
        <SideBar />
        <MainContentsWrapper onSubmit={handleSubmit}>
          <h1>
            with-button・シミュレーションに適する。（面談シートから生成する）
          </h1>
          <div style={{ display: "flex" }}>
            <div>
              <InputGroup>
                <label>予算</label>
                <input
                  name="budget"
                  onChange={handleChange}
                  onBlur={() =>
                    track(
                      genBlurLog(
                        "input-budget",
                        TEST_OR_TRACK_TARGET.inputBudget,
                        { inputValue: values.budget }
                      )
                    )
                  }
                  data-testid={TEST_OR_TRACK_TARGET.inputBudget}
                />
                <button type="button">+</button>
                <button type="button">-</button>
              </InputGroup>
              <InputGroup>
                <label>何人</label>
                <input
                  name="number"
                  onChange={handleChange}
                  onBlur={() =>
                    track(
                      genBlurLog(
                        "input-number",
                        TEST_OR_TRACK_TARGET.inputNumber,
                        { inputValue: values.number }
                      )
                    )
                  }
                  data-testid={TEST_OR_TRACK_TARGET.inputNumber}
                />
                <button type="button">+</button>
                <button type="button">-</button>
              </InputGroup>
              <InputGroup>
                <label>オプションはどれにする</label>
                <input
                  type="checkbox"
                  name="options"
                  value="hoge"
                  checked={values.options.includes("hoge")}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const clickedValue = e.target.value;
                    if (values.options.includes(clickedValue)) {
                      const nextOptions = values.options.filter(
                        option => option !== clickedValue
                      );
                      setFieldValue("options", nextOptions);
                    } else {
                      const nextOptions = [...values.options, clickedValue];
                      setFieldValue("options", nextOptions);
                    }
                  }}
                />
                hoge
                <input
                  type="checkbox"
                  name="options"
                  value="fuga"
                  checked={values.options.includes("fuga")}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const clickedValue = e.target.value;
                    if (values.options.includes(clickedValue)) {
                      const nextOptions = values.options.filter(
                        option => option !== clickedValue
                      );
                      setFieldValue("options", nextOptions);
                    } else {
                      const nextOptions = [...values.options, clickedValue];
                      setFieldValue("options", nextOptions);
                    }
                  }}
                />
                fuga
              </InputGroup>
            </div>
          </div>
          <button type="submit">見積もり詳細をDLする</button>
        </MainContentsWrapper>
      </ContentsBox>
    </Wrapper>
  );
};

type MyFormProps = StateProps & DispatchProps;

const mapStateToProps = (state: IStore): StateProps => ({
  isLoading: state.place.isLoading,
  isLoaded: state.place.isLoaded,
  data: state.place.data,
  error: state.place.error
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  startFetchData: ({ budget, ParticipantNum }) =>
    dispatch(placeActions.startFetchData({ budget, ParticipantNum })),
  track: (log: ITracker) => dispatch(track(log))
});

const ConnectedForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik<MyFormProps, FormValues>({
    mapPropsToValues: () => ({
      budget: null,
      number: null,
      options: []
    }),
    handleSubmit: (values, formikBag) => {
      console.log(values);
      const { props } = formikBag;
      const { startFetchData } = props;
      startFetchData({ budget: 1, ParticipantNum: 3 });
      alert("submit");
    }
  })(WithButton)
);

const Wrapper = styled.div`
  height: 100%;
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

const MainContentsWrapper = styled.form`
  width: calc(100% - 200px);
  height: 100%;
  position: relative;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export { ConnectedForm as WithButton };
