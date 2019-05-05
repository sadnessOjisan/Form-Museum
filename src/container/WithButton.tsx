import * as React from "react";
import styled from "styled-components";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import { withFormik, FormikProps } from "formik";
import { Header } from "../component/common/Header";
import { SideBar } from "../component/common/Sidebar";
import Button from "../component/common/Button";
import {
  actions as placeActions,
  initialState as placeState
} from "../redux/module/place";
import { IStore } from "../redux/module";
import { track } from "../redux/module/logging";
import { genBlurLog, genClickLog } from "../helper/util";
import { ITracker } from "../typedef/Tracker";
import { CheckBox } from "../component/withButton/CheckBox";
import { InputItem } from "../component/common/InputItem";

interface StateProps {
  isLoading: typeof placeState.isLoading;
  isLoaded: typeof placeState.isLoaded;
  data: typeof placeState.data;
  error: typeof placeState.error;
}

interface DispatchProps {
  track: typeof track;
}

interface FormValues {
  budget: number;
  number: number;
  options: string[];
}

type IProps = StateProps & DispatchProps & FormikProps<FormValues>;

const TEST_OR_TRACK_TARGET = {
  inputBudget: "input-budget",
  BudgetPlusStepper: "budget-plus-stepper",
  BudgetMinusStepper: "budget-minus-stepper",
  NumberPlusStepper: "number-plus-stepper",
  NumberMinusStepper: "number-minus-stepper",
  inputNumber: "input-number",
  inputPlace: "input-place"
};

const BUDGET_STEP = 100000;
const NUM_STEP = 1;

const WithButton = (props: IProps) => {
  const {
    handleChange,
    handleSubmit,
    track,
    values,
    setFieldValue,
    touched
  } = props;
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
                <InputItem
                  name="budget"
                  label="予算"
                  handleChange={handleChange}
                  handleBlur={() =>
                    track(
                      genBlurLog(
                        "input-budget",
                        TEST_OR_TRACK_TARGET.inputBudget,
                        { inputValue: values.budget }
                      )
                    )
                  }
                  onFocus={() =>
                    values.budget === 0 && setFieldValue("budget", "")
                  }
                  data-testid={TEST_OR_TRACK_TARGET.inputBudget}
                  value={values.budget}
                  touched={touched.budget ? true : false}
                  type="number"
                />
                <Button.Input
                  type="button"
                  onClick={() => {
                    setFieldValue(
                      "budget",
                      Number(values.budget) > 0
                        ? Number(values.budget) + BUDGET_STEP
                        : 0 + BUDGET_STEP
                    );
                    track(
                      genClickLog(
                        "budget-stepper-click-plus",
                        TEST_OR_TRACK_TARGET.inputBudget
                      )
                    );
                  }}
                  dataTestId={TEST_OR_TRACK_TARGET.BudgetPlusStepper}
                >
                  +
                </Button.Input>
                <Button.Input
                  type="button"
                  onClick={() => {
                    setFieldValue(
                      "budget",
                      Number(values.budget) > 0
                        ? Number(values.budget) - BUDGET_STEP > 0
                          ? Number(values.budget) - BUDGET_STEP
                          : 0
                        : 0 - BUDGET_STEP > 0
                        ? 0 - BUDGET_STEP
                        : 0
                    );
                    track(
                      genClickLog(
                        "budget-stepper-click-minus",
                        TEST_OR_TRACK_TARGET.inputBudget
                      )
                    );
                  }}
                  dataTestId={TEST_OR_TRACK_TARGET.BudgetMinusStepper}
                >
                  -
                </Button.Input>
              </InputGroup>
              <InputGroup>
                <InputItem
                  name="number"
                  label="何人"
                  handleChange={handleChange}
                  handleBlur={() =>
                    track(
                      genBlurLog(
                        "input-number",
                        TEST_OR_TRACK_TARGET.inputNumber,
                        { inputValue: values.number }
                      )
                    )
                  }
                  onFocus={() =>
                    values.number === 0 && setFieldValue("number", "")
                  }
                  value={values.number}
                  data-testid={TEST_OR_TRACK_TARGET.inputNumber}
                  touched={touched.budget ? true : false}
                  type="number"
                />
                <Button.Input
                  type="button"
                  onClick={() => {
                    setFieldValue(
                      "number",
                      Number(values.number) > 0
                        ? Number(values.number) + NUM_STEP
                        : 0 + NUM_STEP
                    );
                    track(
                      genClickLog(
                        "budget-stepper-click-minus",
                        TEST_OR_TRACK_TARGET.inputBudget
                      )
                    );
                  }}
                  dataTestId={TEST_OR_TRACK_TARGET.NumberPlusStepper}
                >
                  +
                </Button.Input>
                <Button.Input
                  type="button"
                  onClick={() => {
                    setFieldValue(
                      "number",
                      Number(values.number) > 0
                        ? Number(values.number) - NUM_STEP > 0
                          ? Number(values.number) - NUM_STEP
                          : 0
                        : 0 - NUM_STEP > 0
                        ? 0 - NUM_STEP
                        : 0
                    );
                    track(
                      genClickLog(
                        "budget-stepper-click-minus",
                        TEST_OR_TRACK_TARGET.inputBudget
                      )
                    );
                  }}
                  dataTestId={TEST_OR_TRACK_TARGET.NumberMinusStepper}
                >
                  -
                </Button.Input>
              </InputGroup>
              <InputGroup>
                <label>オプションはどれにする</label>
                <CheckBox
                  name="options"
                  label="hoge"
                  value="hoge"
                  options={values.options}
                  setFieldValue={setFieldValue}
                  track={track}
                />
                <CheckBox
                  name="options"
                  label="fuga"
                  value="fuga"
                  options={values.options}
                  setFieldValue={setFieldValue}
                  track={track}
                />
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
  track: (log: ITracker) => dispatch(track(log))
});

const ConnectedForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik<MyFormProps, FormValues>({
    mapPropsToValues: () => ({
      budget: 0,
      number: 0,
      options: []
    }),
    handleSubmit: (values, formikBag) => {
      console.log(values);
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
  padding: 8px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export { ConnectedForm as WithButton };
