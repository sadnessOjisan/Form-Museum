import * as React from 'react'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { withFormik, FormikProps, FieldArray } from 'formik'
import {
  actions as orderActions,
  initialState as orderState,
} from '../../redux/module/order'
import { IOrderItem } from '../../typedef/model/OrderItem'
import { IStore } from '../../redux/module'
import { Viewer } from './Viewer'
import { MemoizedInputRow } from './EditorRow'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import Button from '../common/Button'

interface StateProps {
  isSending: typeof orderState.isSending
  isSent: typeof orderState.isSent
  error: typeof orderState.error
}

interface DispatchProps {
  startPostData: typeof orderActions.startPostData
}

interface OwnProps {
  handleOutput: () => void
}

interface FormValues {
  schedule: IOrderItem[]
}

type IProps = StateProps & DispatchProps & OwnProps & FormikProps<FormValues>

const Form = (props: IProps) => {
  const { values, handleChange } = props
  const { schedule } = values
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
              onDragEnd={result => {
                const { source, destination } = result
                const sourceIndex = source.index
                const destinationIndex = destination ? destination.index : 0
                arrayHelpers.move(sourceIndex, destinationIndex)
              }}
            >
              <Droppable droppableId="droppable-items" type="ITEM">
                {(provided, snapshot) => (
                  <DrappableArea
                    ref={provided.innerRef}
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
                    <AddButton
                      type="button"
                      onClick={() =>
                        arrayHelpers.push({
                          startTime: '',
                          endTime: '',
                          item: '',
                        })
                      }
                    >
                      ADD
                    </AddButton>
                    <SubmitButton />
                    {snapshot.isDraggingOver && (
                      <DragCover>
                        変更したい箇所でカーソルを離してください
                      </DragCover>
                    )}
                  </DrappableArea>
                )}
              </Droppable>
            </DragDropContext>
          )}
        />
      </Editor>
    </FormWrapper>
  )
}

const FormWrapper = styled.form`
  width: 100%;
  /* 高さ分を引き算 */
  height: calc(100% - 40px);
  display: flex;
`

const ViewerWrapper = styled.div`
  width: 50%;
  height: 100%;
  overflow-y: scroll;
`

const Editor = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const DrappableArea = styled.div`
  border: 1px solid lightgrey;
  overflow-y: scroll;
  height: 100%;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  width: 100%;
`

const DragCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`

const AddButton = styled(Button.Cute)`
  margin: auto;
  margin-top: 24px;
  margin-bottom: 24px;
`

const SubmitButton = styled(Button.Circle)`
  position: absolute;
  right: 8px;
  bottom: 8px;
`

type MyFormProps = OwnProps & StateProps & DispatchProps

const mapStateToProps = (state: IStore): StateProps => ({
  isSending: state.order.isSending,
  isSent: state.order.isSent,
  error: state.order.error,
})

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  startPostData: (query: any) => dispatch(orderActions.startPostData(query)),
})

const ConnectedForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withFormik<MyFormProps, FormValues>({
    mapPropsToValues: () => {
      const dummy = new Array(10).fill(0)
      const dummy2 = dummy.map(() => {
        return { startTime: '11', endTime: '12', item: 'hoge' }
      })
      return { schedule: dummy2 }
    },
    handleSubmit: (values, formikBag) => {
      const { props } = formikBag
      const { startPostData } = props
      startPostData(values)
      alert('submit')
    },
  })(Form)
)

export { ConnectedForm as Form }
