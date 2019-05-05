import * as React from 'react'
import styled from 'styled-components'
import { IOrderItem } from '../../typedef/model/OrderItem'

interface IProps {
  item: IOrderItem
}

const ScheduleItem = (props: IProps) => {
  const { item } = props
  const { startTime, endTime } = item
  return (
    <Wrapper>
      <TimeText>{startTime}</TimeText>
      <TimeText>{endTime}</TimeText>
      {item.item}
    </Wrapper>
  )
}

const Wrapper = styled.div``

const TimeText = styled.span``

const MemoizedScheduleItem = React.memo(
  ScheduleItem,
  (p, n) => p.item.item === n.item.item
)

export { MemoizedScheduleItem }
