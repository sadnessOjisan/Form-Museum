import * as React from 'react'
import styled from 'styled-components'
import { IOrderItem } from '../../typedef/model/OrderItem'
import { COLOR } from '../../const/color'
interface IProps {
  item: IOrderItem
}

const ScheduleItem = (props: IProps) => {
  const { item } = props
  const { startTime, event } = item
  return (
    <Wrapper>
      <TimeText>{startTime}</TimeText>
      <EventText> {event}</EventText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: ${COLOR.apricotOrange};
  font-size: 18px;
  font-weight: bold;
  font-family: 'Teko', sans-serif;
  width: 80%;
`

const TimeText = styled.span`
  color: ${COLOR.apricotOrange};
  margin-right: 8px;
  margin-left: 8px;
`
const EventText = styled.span`
  color: ${COLOR.apricotOrange};
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
