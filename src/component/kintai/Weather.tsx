import * as React from 'react'
import styled from 'styled-components'

const Weather = () => {
  return (
    <Wrapper>
      <Layer>
        <h1>今日の天気を選んでください</h1>
        <input type="radio" name="weather" value="晴れ" />
        晴れ
        <input type="radio" name="weather" value="曇り" />
        曇り
        <input type="radio" name="weather" value="雨" />雨
      </Layer>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  word-break: break-word;
  position: relative;
`

const Layer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export { Weather }
