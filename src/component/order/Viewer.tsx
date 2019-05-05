import * as React from 'react'
import styled from 'styled-components'
import { IOrderItem } from '../../typedef/model/OrderItem'
import { MemoizedScheduleItem } from './ScheduleItem'

interface IProps {
  schedule: IOrderItem[]
}

const Viewer = (props: IProps) => {
  return (
    <Wrapper>
      {props.schedule.map((item, idx) => (
        <MemoizedScheduleItem item={item} key={idx} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 12px;
  border: solid 1px gray;
  height: 100%;
  > * {
    margin-bottom: 24px;
  }
`

export { Viewer }
