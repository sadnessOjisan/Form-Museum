import * as React from 'react'
import styled from 'styled-components'
import { IOrderItem } from '../../typedef/model/OrderItem'
import { MemoizedScheduleItem } from './ScheduleItem'
import { COLOR } from '../../const/color'

interface IProps {
  schedule: IOrderItem[]
}

const Viewer = (props: IProps) => {
  return (
    <Wrapper>
      <Outline>
        <WhiteSpace>
          <Title>Happy Wedding</Title>
          {props.schedule.map((item, idx) => (
            <MemoizedScheduleItem item={item} key={idx} />
          ))}
          <HotelName>GINZA HOGE HOTEL</HotelName>
          <HotelAddress>東京都千代田区ほげほげビル12F</HotelAddress>
        </WhiteSpace>
      </Outline>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 12px;
  border: solid 1px ${COLOR.darkGray};
  background-color: ${COLOR.white};
  height: 100%;
  overflow-y: scroll;
  > * {
    margin-bottom: 24px;
  }
`

const WhiteSpace = styled.div`
  height: calc(100% - 16px);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Outline = styled.div`
  width: 100%;
  height: 100%;
  border-left: 8px solid ${COLOR.apricotOrange};
  border-right: 8px solid ${COLOR.apricotYellow};
  ::after {
    content: '';
    display: block;
    height: 8px;
    width: 100%;
    background: -webkit-gradient(
      linear,
      left top,
      right bottom,
      from(${COLOR.apricotOrange}),
      to(${COLOR.apricotYellow})
    );
    background: -moz-linear-gradient(
      left,
      ${COLOR.apricotOrange},
      ${COLOR.apricotYellow}
    );
    background: linear-gradient(
      left,
      ${COLOR.apricotOrange},
      ${COLOR.apricotYellow}
    );
  }
  ::before {
    content: '';
    display: block;
    height: 8px;
    width: 100%;
    background: -webkit-gradient(
      linear,
      left top,
      right bottom,
      from(${COLOR.apricotOrange}),
      to(${COLOR.apricotYellow})
    );
    background: -moz-linear-gradient(
      left,
      ${COLOR.apricotOrange},
      ${COLOR.apricotYellow}
    );
    background: linear-gradient(
      left,
      ${COLOR.apricotOrange},
      ${COLOR.apricotYellow}
    );
  }
`

const Title = styled.h3`
  color: ${COLOR.apricotOrange};
  font-size: 28px;
  font-family: 'Homemade Apple', cursive;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 24px;
`

const HotelName = styled.p`
  color: ${COLOR.apricotOrange};
  font-size: 24px;
  margin-top: auto;
  margin-bottom: 12px;
`

const HotelAddress = styled.p`
  color: ${COLOR.apricotOrange};
  font-size: 12px;
  margin-bottom: 12px;
`

export { Viewer }
