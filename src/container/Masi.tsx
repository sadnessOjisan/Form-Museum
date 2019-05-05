import * as React from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import { withFormik, FormikProps } from 'formik'
import * as Yup from 'yup'
import { Dispatch, Action } from 'redux'
import { connect } from 'react-redux'
import { Header } from '../component/common/Header'
import { SideBar } from '../component/common/Sidebar'
import { track } from '../redux/module/logging'
import { genLoadLog } from '../helper/util'
import { ITracker } from '../typedef/Tracker'
import { InputItem } from '../component/common/InputItem'

interface DispatchProps {
  track: typeof track
}

interface FormValues {
  sales: number
  cost: number
}

type IProps = DispatchProps

const Masi = (props: IProps & FormikProps<FormValues>) => {
  const {
    track,
    errors,
    handleSubmit,
    handleChange,
    values,
    touched,
    handleBlur,
  } = props
  useEffect(() => {
    track(genLoadLog('load_masi'))
  }, [])
  return (
    <Wrapper>
      <Header />
      <ContentsBox>
        <SideBar />
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
          <button
            type="submit"
            disabled={Object.keys(errors).length !== 0 ? true : false}
          >
            送信
          </button>
        </MainContentsWrapper>
      </ContentsBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100%;
`

const ContentsBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

const MainContentsWrapper = styled.form`
  width: calc(100% - 200px);
  height: 100%;
  position: relative;
  padding: 8px;
`

type MyFormProps = {
  name: string
  sales: number
  cost: number
} & DispatchProps

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
})

const MasiForm = connect(
  undefined,
  mapDispatchToProps
)(
  withFormik<MyFormProps, FormValues>({
    mapPropsToValues: props => ({
      sales: props.sales,
      cost: props.cost,
    }),
    handleSubmit: () => {
      alert('submit')
    },
    validationSchema: MasiSchema,
    isInitialValid: true,
  })(Masi)
)

export { MasiForm as Masi }
