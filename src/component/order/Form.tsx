import * as React from "react";
import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { withFormik, FormikProps, FieldArray } from "formik";
import {
  actions as orderActions,
  initialState as orderState
} from "../../redux/module/order";
import { IOrderItem } from "../../typedef/model/OrderItem";
import { IStore } from "../../redux/module";

interface StateProps {
  isSending: typeof orderState.isSending;
  isSent: typeof orderState.isSent;
  error: typeof orderState.error;
}

interface DispatchProps {
  startPostData: typeof orderActions.startPostData;
}

interface FormValues {
  schedule: IOrderItem[];
}

type IProps = StateProps & DispatchProps & FormikProps<FormValues>;

const Form = (props: IProps) => {
  const { values, handleChange } = props;
  return (
    <FormWrapper>
      <Viewer>
        {values.schedule.map(d => (
          <p>
            {d.item}-{d.startTime}-{d.endTime}
          </p>
        ))}
      </Viewer>
      <Editor>
        <FieldArray
          name="schedule"
          render={arrayHelpers => (
            <div>
              {values.schedule.map((item, idx) => (
                <div>
                  <input
                    name={`schedule.${idx}.startTime`}
                    onChange={handleChange}
                    value={item.startTime}
                  />
                  -
                  <input
                    name={`schedule.${idx}.endTime`}
                    onChange={handleChange}
                    value={item.endTime}
                  />
                  :
                  <input
                    name={`schedule.${idx}.item`}
                    onChange={handleChange}
                    value={item.item}
                  />
                  <button
                    onClick={() => arrayHelpers.remove(idx)}
                    type="button"
                  >
                    削除
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() =>
                  arrayHelpers.push({
                    startTime: "11",
                    endTime: "12",
                    item: "hoge"
                  })
                }
              >
                push
              </button>
            </div>
          )}
        />
      </Editor>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  width: 100%;
  display: flex;
`;

const Viewer = styled.div`
  width: 50%;
`;

const Editor = styled.div`
  width: 50%;
`;

type MyFormProps = StateProps & DispatchProps;

const mapStateToProps = (state: IStore): StateProps => ({
  isSending: state.order.isSending,
  isSent: state.order.isSent,
  error: state.order.error
});

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  startPostData: (query: any) => dispatch(orderActions.startPostData(query))
});

const ConnectedForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => ({
      schedule: [{ startTime: "11", endTime: "12", item: "hoge" }]
    }),
    handleSubmit: (values, formikBag) => {
      const { props } = formikBag;
      const { startPostData } = props;
      startPostData(values);
      alert("submit");
    }
  })(Form)
);

export { ConnectedForm as Form };
