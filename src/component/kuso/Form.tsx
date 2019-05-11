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
import { cps } from 'redux-saga/effects'

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
    <MainContentsWrapper onSubmit={handleSubmit}>
      <h1>悪い例フォーム</h1>
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
      <Button type="submit">送信</Button>
    </MainContentsWrapper>
  )
}

const MainContentsWrapper = styled.form`
  width: 100%;
`

const Button = styled.button`
  height: 32px;
  padding: 4px 8px;
  font-size: 16px;
  margin-top: 24px;
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
