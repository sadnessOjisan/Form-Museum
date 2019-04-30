import * as React from "react";
import styled from "styled-components";
import { IOrderItem } from "../../typedef/model/OrderItem";

interface IProps {
  item: IOrderItem;
}

const ScheduleItem = (props: IProps) => {
  return <Wrapper>{props.item.item}</Wrapper>;
};

const Wrapper = styled.div``;

const MemoizedScheduleItem = React.memo(
  ScheduleItem,
  (p, n) => p.item.item === n.item.item
);

export { MemoizedScheduleItem };
