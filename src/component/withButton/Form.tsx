import * as React from 'react'
import styled from 'styled-components'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { withFormik, FormikProps } from 'formik'
import { track } from '../../redux/module/logging'
import { ITracker } from '../../typedef/Tracker'
import { COLOR } from '../../const/color'
import Text from '../common/text'
import Button from '../../component/common/Button'
import { InputGroup } from './InputGroup'

interface DispatchProps {
  track: typeof track
}

interface FormValues {
  budget: number
  number: number
}

type Props = DispatchProps & FormikProps<FormValues>

const BUDGET_STEP = 100000
const NUM_STEP = 1

const Form = (props: Props) => {
  const {
    handleChange,
    handleSubmit,
    track,
    values,
    setFieldValue,
    touched,
    errors,
  } = props
  return (
    <MainContentsWrapper>
      <Text.PageTitle>式場シミュレーター</Text.PageTitle>
      <FormWrapper onSubmit={handleSubmit}>
        <InputGroup
          name="budget"
          label="予算"
          handleChange={handleChange}
          track={track}
          setFieldValue={setFieldValue}
          value={values.budget}
          touched={touched.budget ? true : false}
          type="number"
          placeholder="¥1,000,000"
          handlePlusButtonClick={() => {
            setFieldValue(
              'budget',
              Number(values.budget) > 0
                ? Number(values.budget) + BUDGET_STEP
                : 0 + BUDGET_STEP
            )
          }}
          handleMinusButtonClick={() => {
            setFieldValue(
              'budget',
              Number(values.budget) > 0
                ? Number(values.budget) - BUDGET_STEP > 0
                  ? Number(values.budget) - BUDGET_STEP
                  : 0
                : 0 - BUDGET_STEP > 0
                ? 0 - BUDGET_STEP
                : 0
            )
          }}
        />
        <InputGroup
          name="number"
          label="何人"
          handleChange={handleChange}
          value={values.number}
          touched={touched.budget ? true : false}
          track={track}
          setFieldValue={setFieldValue}
          type="number"
          placeholder="2,000人"
          handlePlusButtonClick={() => {
            setFieldValue(
              'number',
              Number(values.number) > 0
                ? Number(values.number) + NUM_STEP
                : 0 + NUM_STEP
            )
          }}
          handleMinusButtonClick={() => {
            setFieldValue(
              'number',
              Number(values.number) > 0
                ? Number(values.number) - NUM_STEP > 0
                  ? Number(values.number) - NUM_STEP
                  : 0
                : 0 - NUM_STEP > 0
                ? 0 - NUM_STEP
                : 0
            )
          }}
        />

        <Button.Submit
          disabled={Object.keys(errors).length !== 0 ? true : false}
        />
      </FormWrapper>
    </MainContentsWrapper>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  track: (log: ITracker) => dispatch(track(log)),
})

type MyFormProps = DispatchProps

const ConnectedForm = connect(
  undefined,
  mapDispatchToProps
)(
  withFormik<MyFormProps, FormValues>({
    mapPropsToValues: () => ({
      budget: 0,
      number: 0,
    }),
    handleSubmit: () => {
      alert('submit')
    },
  })(Form)
)

const MainContentsWrapper = styled.form`
  width: 100%;
  height: 100%;
  background-color: ${COLOR.lightGray};
  padding: 20px;
`

const FormWrapper = styled.form`
  background-color: ${COLOR.white};
  border: solid 1px ${COLOR.darkGray};
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

const Afff = styled.div`
  display: flex;
  flex-direction: column;
`

export { ConnectedForm as WithButtonForm }
