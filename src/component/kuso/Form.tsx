import * as React from 'react'
import styled from 'styled-components'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { withFormik, FormikProps } from 'formik'
import { track } from '../../redux/module/logging'
import { genBlurLog } from '../../helper/util'
import { ITracker } from '../../typedef/Tracker'

interface FormValues {
  sales: number | null
  cost: number | null
}

interface DispatchProps {
  track: typeof track
}

const TEST_OR_TRACK_TARGET = {
  inputSales: 'input-sales',
  inputCost: 'input-cost',
}

const Form = (props: FormikProps<FormValues> & DispatchProps) => {
  const { handleSubmit, handleChange, values, track } = props
  return (
    <MainContentsWrapper onSubmit={handleSubmit}>
      <h1>kUSO</h1>
      <div>
        <label>売り上げ</label>
        <input
          name="sales"
          onChange={handleChange}
          onBlur={() =>
            track(
              genBlurLog('input-kuso-form', TEST_OR_TRACK_TARGET.inputSales, {
                inputValue: values.sales,
              })
            )
          }
        />
      </div>
      <div>
        <label>人件費</label>
        <input
          name="cost"
          onChange={handleChange}
          onBlur={() =>
            track(
              genBlurLog('input-kuso-form', TEST_OR_TRACK_TARGET.inputCost, {
                inputValue: values.cost,
              })
            )
          }
        />
      </div>
      <button type="submit">送信</button>
    </MainContentsWrapper>
  )
}

const MainContentsWrapper = styled.form`
  width: 100%;
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
    }),
    handleSubmit: values => {
      alert('submit')
    },
  })(Form)
)

export { KusoForm as Kuso }
