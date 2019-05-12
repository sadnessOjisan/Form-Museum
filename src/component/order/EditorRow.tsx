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
  className?: string
}

const TEST_OR_TRACK_TARGET = {
  row: 'editRow',
}

const InputRow = (props: IProps) => {
  const { handleChange, index, name, value, handleRowRemove, className } = props
  const { startTime, event } = value
  return (
    <Draggable draggableId={String(index)} index={index} isDragDisabled={false}>
      {(provided, snapshot) => (
        <Wrapper
          isDragging={snapshot.isDragging}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={className}
          data-testid={TEST_OR_TRACK_TARGET.row}
        >
          <DragPoint />
          <InputItems>
            <TimeInput
              type="text"
              name={`${name}.${index}.startTime`}
              onChange={handleChange}
              value={startTime}
            />
            <span>-</span>
            <TextInput
              type="text"
              name={`${name}.${index}.event`}
              onChange={handleChange}
              value={event}
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
  border: solid 1px ${COLOR.darkGray};
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  > *:first-child {
    margin-right: 24px;
  }
  background: ${props =>
    props.isDragging &&
    `${`linear-gradient(90deg, ${COLOR.apricotOrange}, ${
      COLOR.apricotYellow
    })`}`};
  position: relative;
  width: 100%;
  &:hover {
    background-color: ${COLOR.gray};
  }
`

const InputItems = styled.div`
  display: flex;
  width: calc(100% - 80px);
  > * {
    margin-right: 12px;
  }
`

const Input = styled.input`
  height: 40px;
  padding-left: 4px;
  border-radius: 4px;
  border: solid 1px ${COLOR.darkGray};
  &:focus {
    outline: 0;
    border-color: ${COLOR.blue};
  }
`

const TimeInput = styled(Input)`
  width: 20%;
  max-width: 100px;
`

const TextInput = styled(Input)`
  width: 80%;
  max-width: 300px;
`

const TrashButton = styled(Button.Trash)``

// styled componentsに注意。memoizeしたものをs-cでかこうと、再計算が走る
const MemoizedInputRow = React.memo(InputRow, (p, n) => {
  return (
    p.value.startTime === n.value.startTime &&
    p.value.endTime === n.value.endTime &&
    p.value.event === n.value.event
  )
})

export { MemoizedInputRow }
