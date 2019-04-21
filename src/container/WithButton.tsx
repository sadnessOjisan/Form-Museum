import * as React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import { withFormik, FormikProps } from "formik";
import { ChasingDots } from "styled-spinkit";
import { Button } from "../component/common/Button";
import { Header } from "../component/common/Header";
import { SideBar } from "../component/common/Sidebar";
import { FooterLayout } from "../component/common/Footer";
import {
  actions as placeActions,
  initialState as placeState
} from "../redux/module/place";
import { IStore } from "../redux/module";

interface StateProps {
  isLoading: typeof placeState.isLoading;
  isLoaded: typeof placeState.isLoaded;
  data: typeof placeState.data;
  error: typeof placeState.error;
}

interface DispatchProps {
  startFetchData: typeof placeActions.startFetchData;
}

interface FormValues {
  name: string;
  sales: number;
  cost: number;
}

type IProps = StateProps & DispatchProps & FormikProps<FormValues>;

const WithButton = (props: IProps) => {
  const {
    handleSubmit,
    handleChange,
    isLoading,
    isLoaded,
    data,
    startFetchData
  } = props;
  useEffect(() => {
    startFetchData({ budget: 100, ParticipantNum: 399 });
  }, []);
  return (
    <Wrapper>
      <Header />
      <ContentsBox>
        <SideBar />
        <MainContentsWrapper>
          <h1>
            with-button・シミュレーションに適する。（面談シートから生成する）
          </h1>
          <div style={{ display: "flex" }}>
            <div>
              <InputGroup>
                <label>予算</label>
                <input name="budget" onChange={handleChange} />
                <button type="button">+</button>
                <button type="button">-</button>
              </InputGroup>
              <InputGroup>
                <label>何人</label>
                <input name="number" onChange={handleChange} />
                <button type="button">+</button>
                <button type="button">-</button>
              </InputGroup>
              <InputGroup>
                <label>場所</label>
                <select name="place">
                  <option value="東京">東京</option>
                  <option value="大阪">大阪</option>
                  <option value="福岡">福岡</option>
                </select>
              </InputGroup>
              <InputGroup>
                <label>式場はどれにする</label>
                <input name="sales" onChange={handleChange} />
              </InputGroup>
            </div>
            <div style={{ width: "40%" }}>
              {!isLoading && isLoaded && data ? (
                data.length === 0 ? (
                  <p>データが存在しません</p>
                ) : (
                  data.map(d => d.name)
                )
              ) : (
                <ChasingDots />
              )}
            </div>
          </div>
          <FooterLayout>
            <div>残り予算は ??? 円</div>
            <Button type="submit" onClick={handleSubmit} primary={true}>
              見積もり詳細をDLする
            </Button>
          </FooterLayout>
        </MainContentsWrapper>
      </ContentsBox>
    </Wrapper>
  );
};

interface MyFormProps {
  name: string;
  sales: number;
  cost: number;
}

const WithButtonForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    name: props.name,
    sales: props.sales,
    cost: props.cost
  }),
  handleSubmit: values => {
    console.log(values);
    alert("submit");
  }
})(WithButton);

const mapStateToProps = (state: IStore): StateProps => ({
  isLoading: state.place.isLoading,
  isLoaded: state.place.isLoaded,
  data: state.place.data,
  error: state.place.error
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  startFetchData: (budget: number, ParticipantNum: number) =>
    dispatch(placeActions.startFetchData({ budget, ParticipantNum }))
});

const ConnectedForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(WithButtonForm);

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
