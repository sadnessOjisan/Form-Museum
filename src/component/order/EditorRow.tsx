import * as React from 'react'
import styled from 'styled-components'
import { IOrderItem } from '../../typedef/model/OrderItem'
import { Draggable } from 'react-beautiful-dnd'
import Button from '../common/Button'
import { DragPoint } from '../common/DragPoint'
import { COLOR } from '../../const/color'

interface IProps {
  handleChange: any
  handleRowRemove: any
  index: number
  name: string
  value: IOrderItem
}

const InputRow = (props: IProps) => {
  const { handleChange, index, name, value, handleRowRemove } = props
  const { startTime, endTime, item } = value
  return (
    <Draggable draggableId={String(index)} index={index} isDragDisabled={false}>
      {(provided, snapshot) => (
        <Wrapper
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <DragPoint />
          <InputItems>
            <TimeInput
              type="number"
              name={`${name}.${index}.startTime`}
              onChange={handleChange}
              value={startTime}
            />
            <span>-</span>
            <TimeInput
              type="number"
              name={`${name}.${index}.endTime`}
              onChange={handleChange}
              value={endTime}
            />
            <span>-</span>
            <TextInput
              type="text"
              name={`${name}.${index}.item`}
              onChange={handleChange}
              value={item}
            />
          </InputItems>
          <TrashButton onClick={() => handleRowRemove(index)} type="button" />
        </Wrapper>
      )}
    </Draggable>
  )
}

const Wrapper = styled.div<{ isDragging: boolean }>`
  padding: 8px 12px;
  border-left: solid 1px black;
  border-right: solid 1px black;
  border-bottom: solid 1px black;
  :first-child {
    border-top: solid 1px black;
  }
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > *:first-child {
    margin-right: 24px;
  }
  background-color: ${props => props.isDragging && COLOR.blue};
  position: relative;
  width: 100%;
  &:hover {
    background-color: yellow;
  }
`

const InputItems = styled.div`
  width: calc(100% - 82px);
`

const Input = styled.input`
  height: 18px;
  padding-left: 4px;
  border-radius: 4px;
  &:focus {
    outline: 0;
    border-color: ${COLOR.blue};
  }
`

const TimeInput = styled(Input)`
  width: 40px;
`

const TextInput = styled(Input)`
  width: 120px;
`

const TrashButton = styled(Button.Trash)``

// styled componentsに注意。memoizeしたものをs-cでかこうと、再計算が走る
const MemoizedInputRow = React.memo(InputRow, (p, n) => {
  return (
    p.value.startTime === n.value.startTime &&
    p.value.endTime === n.value.endTime &&
    p.value.item === n.value.item
  )
})

export { MemoizedInputRow }
