import * as React from 'react'
import styled from 'styled-components'
import { InputItem } from '../../component/common/InputItem'
import { TextAreaItem } from '../../component/common/TextAreaItem'
import Button from '../../component/common/Button'
import { withFormik, FormikProps } from 'formik'
import * as Yup from 'yup'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { track } from '../../redux/module/logging'
import { ITracker } from '../../typedef/Tracker'
import Text from '../common/text'
import { COLOR } from '../../const/color'

interface DispatchProps {
  track: typeof track
}

interface FormValues {
  sales: number | null
  cost: number | null
  comment: string | null
}

const TEST_OR_TRACK_TARGET = {
  inputSales: `sales-input`,
  inputCost: `cost-input`,
  inputComment: `comment-input`,
}

const Form = (props: FormikProps<FormValues>) => {
  const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
  } = props
  return (
    <MainContentsWrapper>
      <Text.PageTitle>売上</Text.PageTitle>
      <FormWrapper onSubmit={handleSubmit}>
        <InputItem
          name="sales"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.sales}
          label="売り上げ"
          errorMessage={errors.sales}
          touched={touched.sales ? true : false}
          type="number"
          placeholder="¥1,000,000"
          dataTestId={TEST_OR_TRACK_TARGET.inputSales}
        />
        <InputItem
          name="cost"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.cost}
          label="人件費"
          errorMessage={errors.cost}
          touched={touched.cost ? true : false}
          type="number"
          placeholder="2,000人"
          dataTestId={TEST_OR_TRACK_TARGET.inputCost}
        />
        <TextAreaItem
          name="comment"
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values.comment}
          label="コメント"
          errorMessage={errors.comment}
          touched={touched.comment ? true : false}
          type="text"
          placeholder="急に人が増えて、大変でした。"
          dataTestId={TEST_OR_TRACK_TARGET.inputComment}
        />
        <Button.Submit
          disabled={Object.keys(errors).length !== 0 ? true : false}
        />
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

type MyFormProps = {} & DispatchProps

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  track: (log: ITracker) => dispatch(track(log)),
})

const MasiSchema = Yup.object().shape({
  sales: Yup.number()
    .max(1000000, '最大値は100000です')
    .positive('正数を入れてください')
    .required('Required'),
  cost: Yup.number()
    .max(1000000, '最大値は100000です')
    .positive('正数を入れてください')
    .required('Required'),
  comment: Yup.string().required('Required'),
})

const MasiForm = connect(
  undefined,
  mapDispatchToProps
)(
  withFormik<MyFormProps, FormValues>({
    mapPropsToValues: () => ({
      sales: null,
      cost: null,
      comment: null,
    }),
    handleSubmit: () => {
      alert('submit')
    },
    validationSchema: MasiSchema,
    isInitialValid: true,
  })(Form)
)

export { MasiForm }
