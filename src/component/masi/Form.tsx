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

interface DispatchProps {
  track: typeof track
}

interface FormValues {
  sales: number | null
  cost: number | null
  comment: string | null
}

interface Props {}

const Form = (props: Props & FormikProps<FormValues>) => {
  const {
    handleSubmit,
    values,
    handleChange,
    handleBlur,
    errors,
    touched,
  } = props
  return (
    <MainContentsWrapper onSubmit={handleSubmit}>
      <h1>mASI</h1>
      <InputItem
        name="sales"
        handleChange={handleChange}
        handleBlur={handleBlur}
        value={values.sales}
        label="売り上げ"
        errorMessage={errors.sales}
        touched={touched.sales ? true : false}
        type="number"
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
      />
      <Button.Submit
        disabled={Object.keys(errors).length !== 0 ? true : false}
      />
    </MainContentsWrapper>
  )
}

const MainContentsWrapper = styled.form`
  width: calc(100% - 200px);
  height: 100%;
  position: relative;
  padding: 8px;
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
