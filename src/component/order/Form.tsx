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
import { Viewer } from "./Viewer";
import { MemoizedInputRow } from "./EditorRow";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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
  const { schedule } = values;
  return (
    <FormWrapper>
      <ViewerWrapper>
        <Viewer schedule={schedule} />
      </ViewerWrapper>
      <Editor>
        <FieldArray
          name="schedule"
          render={arrayHelpers => (
            <DragDropContext
              onBeforeDragStart={() => {}}
              onDragStart={() => {}}
              onDragUpdate={() => {}}
              onDragEnd={(result, provided) => {
                const { source, destination } = result;
                const sourceIndex = source.index;
                const destinationIndex = destination ? destination.index : 0;
                arrayHelpers.move(sourceIndex, destinationIndex);
              }}
            >
              <Droppable droppableId="droppable-items" type="ITEM">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={{
                      backgroundColor: snapshot.isDraggingOver ? "blue" : "grey"
                    }}
                    {...provided.droppableProps}
                  >
                    {values.schedule.map((item, idx) => (
                      <MemoizedInputRow
                        handleChange={handleChange}
                        handleRowRemove={(rowIndex: number) =>
                          arrayHelpers.remove(rowIndex)
                        }
                        index={idx}
                        name="schedule"
                        value={item}
                        key={idx}
                      />
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
                      ADD
                    </button>
                  </div>
                )}
              </Droppable>
            </DragDropContext>
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

const ViewerWrapper = styled.div`
  width: 50%;
`;

const Editor = styled.div`
  width: 50%;
`;

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
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
