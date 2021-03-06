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
import { PageTitle } from '../common/Text/PageTitle'
import { COLOR } from '../../const/color'
import { genBlurLog } from '../../helper/util'

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
    track,
  } = props
  return (
    <MainContentsWrapper>
      <PageTitle>利益計算</PageTitle>
      <FormWrapper onSubmit={handleSubmit}>
        <InputItem
          name="sales"
          handleChange={handleChange}
          handleBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            handleBlur(e)
            track(
              genBlurLog('input-masi-form', TEST_OR_TRACK_TARGET.inputSales, {
                inputValue: values.sales,
              })
            )
          }}
          value={values.sales}
          label="売り上げ"
          errorMessage={errors.sales}
          touched={touched.sales ? true : false}
          type="number"
          placeholder="¥1000000"
          dataTestId={TEST_OR_TRACK_TARGET.inputSales}
        />
        <InputItem
          name="cost"
          handleChange={handleChange}
          handleBlur={(e: React.FocusEvent<HTMLInputElement>) => {
            handleBlur(e)
            track(
              genBlurLog('input-masi-form', TEST_OR_TRACK_TARGET.inputCost, {
                inputValue: values.cost,
              })
            )
          }}
          value={values.cost}
          label="人件費"
          errorMessage={errors.cost}
          touched={touched.cost ? true : false}
          type="number"
          placeholder="¥2000"
          dataTestId={TEST_OR_TRACK_TARGET.inputCost}
        />
        <TextAreaItem
          name="comment"
          handleChange={handleChange}
          handleBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => {
            handleBlur(e)
            track(
              genBlurLog('input-masi-form', TEST_OR_TRACK_TARGET.inputComment, {
                inputValue: values.comment,
              })
            )
          }}
          value={values.comment}
          label="コメント"
          errorMessage={errors.comment}
          touched={touched.comment ? true : false}
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

type MyFormProps = {} & DispatchProps

const mapDispatchToProps = (dispatch: Dispatch<Action>): DispatchProps => ({
  track: (log: ITracker) => dispatch(track(log)),
})

const MasiSchema = Yup.object().shape({
  sales: Yup.number()
    .typeError('数値を入力してください')
    .max(1000000, '最大値は100000です')
    .positive('正数を入れてください')
    .required('Required'),
  cost: Yup.number()
    .typeError('数値を入力してください')
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
