import * as React from "react";
import styled from "styled-components";
import { IOrderItem } from "../../typedef/model/OrderItem";
import { MemoizedScheduleItem } from "./ScheduleItem";

interface IProps {
  schedule: IOrderItem[];
}

const Viewer = (props: IProps) => {
  return (
    <Wrapper>
      <h2>予定表</h2>
      {props.schedule.map((item, idx) => (
        <MemoizedScheduleItem item={item} key={idx} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export { Viewer };
