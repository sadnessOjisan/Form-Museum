import * as React from 'react'
import styled from 'styled-components'

const DragPoint = () => {
  return (
    <Wrapper>
      <Row>
        <Dot>・</Dot>
        <Dot>・</Dot>
      </Row>
      <Row>
        <Dot>・</Dot>
        <Dot>・</Dot>
      </Row>
      <Row>
        <Dot>・</Dot>
        <Dot>・</Dot>
      </Row>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

const Row = styled.div`
  width: 100%;
  display: flex;
`

const Dot = styled.span`
  font-size: 12px;
  font-weight: bold;
`

export { DragPoint }
