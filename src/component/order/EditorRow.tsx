import * as React from "react";
import styled from "styled-components";
import { IOrderItem } from "../../typedef/model/OrderItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface IProps {
  handleChange: any;
  handleRowRemove: any;
  index: number;
  name: string;
  value: IOrderItem;
}

const InputRow = (props: IProps) => {
  const { handleChange, index, name, value, handleRowRemove } = props;
  const { startTime, endTime, item } = value;
  return (
    <Draggable draggableId={String(index)} index={index} isDragDisabled={false}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Wrapper>
            <input
              name={`${name}.${index}.startTime`}
              onChange={handleChange}
              value={startTime}
            />
            <span>-</span>
            <input
              name={`${name}.${index}.endTime`}
              onChange={handleChange}
              value={endTime}
            />
            <span>-</span>
            <input
              name={`${name}.${index}.item`}
              onChange={handleChange}
              value={item}
            />
            <button onClick={() => handleRowRemove(index)} type="button">
              削除
            </button>
          </Wrapper>
        </div>
      )}
    </Draggable>
  );
};

const Wrapper = styled.div``;

const MemoizedInputRow = React.memo(InputRow, (p, n) => {
  return (
    p.value.startTime === n.value.startTime &&
    p.value.endTime === n.value.endTime &&
    p.value.item === n.value.item
  );
});

export { MemoizedInputRow };
