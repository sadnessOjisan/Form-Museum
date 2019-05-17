import * as React from 'react'
import styled from 'styled-components'

const WorkingTime = () => {
  return (
    <Wrapper>
      <h1>労働時間申請</h1>
      <input />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  word-break: break-word;
`

export { WorkingTime }
