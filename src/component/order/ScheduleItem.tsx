import * as React from 'react'
import styled from 'styled-components'
import { IOrderItem } from '../../typedef/model/OrderItem'

interface IProps {
  item: IOrderItem
}

const ScheduleItem = (props: IProps) => {
  const { item } = props
  const { startTime, endTime, event } = item
  return (
    <Wrapper>
      <TimeText>{startTime}</TimeText>
      <TimeSpan>-</TimeSpan>
      <TimeText>{endTime}</TimeText>
      <EventText> {event}</EventText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  font-size: 18px;
  font-family: 'Caveat', cursive;
`

const TimeText = styled.span`
  margin-right: 8px;
  margin-left: 8px;
`

const TimeSpan = styled.span``
const EventText = styled.span`
  margin-left: 24px;
`
const MemoizedScheduleItem = React.memo(
  ScheduleItem,
  (p, n) =>
    p.item.startTime === n.item.startTime &&
    p.item.endTime === n.item.endTime &&
    p.item.event === n.item.event
)

export { MemoizedScheduleItem }
