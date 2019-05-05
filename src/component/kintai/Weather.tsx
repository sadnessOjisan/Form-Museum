import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
// @ts-ignore あとでちゃんとする
import Rain from "../../asset/video/rain.mp4";
// @ts-ignore あとでちゃんとする
import Hare from "../../asset/video/hare.mp4";

type TWeather = "晴れ" | "曇り" | "雨";

const Weather = () => {
    const [selectedWeather, set] = useState();
    let videoPath: string | null;
    switch (selectedWeather) {
        case "晴れ":
            videoPath = Hare;
            break;
        case "曇り":
            videoPath = "";
            break;
        case "雨":
            videoPath = Rain;
            break;
        default:
            videoPath = null;
    }
    return (
        <Wrapper>
            <Layer>
                {videoPath && (
                    <Video src={videoPath}>
                        <source />
                    </Video>
                )}
            </Layer>
            <Layer>
                <h1>今日の天気を選んでください</h1>
                <input
                    type="radio"
                    name="weather"
                    value="晴れ"
                    onClick={() => set("晴れ")}
                />
        晴れ
                <input
                    type="radio"
                    name="weather"
                    value="曇り"
                    onClick={() => set("曇り")}
                />
        曇り
                <input
                    type="radio"
                    name="weather"
                    value="雨"
                    onClick={() => set("雨")}
                />
        雨
            </Layer>
        </Wrapper>
    );
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  word-break: break-word;
  position: relative;
`;

const Layer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Video = styled.video.attrs({
    autoPlay: true,
    loop: true
})`
  width: 100%;
`;

export { Weather };
