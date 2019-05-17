import * as React from 'react'
import styled from 'styled-components'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { withFormik, FormikProps } from 'formik'
import { track } from '../../redux/module/logging'
import { genBlurLog } from '../../helper/util'
import { ITracker } from '../../typedef/Tracker'
import { TextInputItem } from './TextInputItem'
import { TextAreaItem } from './TextAreaItem'
import Text from '../common/text'
import { COLOR } from '../../const/color'
import Button from '../common/Button'
interface FormValues {
  sales: number | null
  cost: number | null
  comment: string | null
}

interface DispatchProps {
  track: typeof track
}

const TEST_OR_TRACK_TARGET = {
  inputSales: 'input-sales',
  inputCost: 'input-cost',
  inputComment: 'input-comment',
}

const Form = (props: FormikProps<FormValues> & DispatchProps) => {
  const { handleSubmit, handleChange, values, track } = props
  return (
    <MainContentsWrapper onSubmit={() => handleSubmit()}>
      <Text.PageTitle>悪い例フォーム</Text.PageTitle>
      <FormWrapper>
        <TextInputItem
          label="売上"
          name="sales"
          handleChange={handleChange}
          handleBlur={() =>
            track(
              genBlurLog('input-kuso-form', TEST_OR_TRACK_TARGET.inputSales, {
                inputValue: values.sales,
              })
            )
          }
          dataTestId={TEST_OR_TRACK_TARGET.inputSales}
        />
        <TextInputItem
          label="人件費"
          name="cost"
          handleChange={handleChange}
          handleBlur={() =>
            track(
              genBlurLog('input-kuso-form', TEST_OR_TRACK_TARGET.inputCost, {
                inputValue: values.cost,
              })
            )
          }
          dataTestId={TEST_OR_TRACK_TARGET.inputCost}
        />
        <TextAreaItem
          label="コメント"
          name="comment"
          handleChange={handleChange}
          handleBlur={() =>
            track(
              genBlurLog('input-kuso-form', TEST_OR_TRACK_TARGET.inputComment, {
                inputValue: values.comment,
              })
            )
          }
          dataTestId={TEST_OR_TRACK_TARGET.inputComment}
        />
        <Button.Submit />
      </FormWrapper>
    </MainContentsWrapper>
  )
}

const MainContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.lightGray};
  padding: 20px;
`

const FormWrapper = styled.form`
  background-color: ${COLOR.white};
  border: solid 1px ${COLOR.gray};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  > div {
    width: 80%;
    margin-bottom: 24px;
  }
`

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  track: (log: ITracker) => dispatch(track(log)),
})

const KusoForm = connect(
  undefined,
  mapDispatchToProps
)(
  withFormik<DispatchProps, FormValues>({
    mapPropsToValues: () => ({
      sales: null,
      cost: null,
      comment: null,
    }),
    handleSubmit: () => {
      alert('submit')
    },
  })(Form)
)

export { KusoForm as Kuso }
