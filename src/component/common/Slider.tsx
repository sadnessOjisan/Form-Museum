import * as React from "react";
import styled from "styled-components";
import { debounce } from "throttle-debounce";
interface Props {
  value: number;
  min: number;
  max: number;
}

interface State {
  value: number;
  min: number;
  max: number;
}

class Slider extends React.Component<Props, State> {
  sliderThumb: React.RefObject<HTMLInputElement>;
  constructor(props: Props) {
    super(props);
    this.state = {
      value: props.value,
      min: props.min,
      max: props.max
    };
    this.sliderThumb = React.createRef() as any;
  }

  componentDidMount() {
    if (!this.sliderThumb.current) return;
    this.sliderThumb.current.addEventListener("input", (e: any) => {
      this.setState({
        value: e.target.value
      });
      if (!this.sliderThumb.current) return;
      this.sliderThumb.current.style.background =
        "linear-gradient(to right, #20aee5 0%, #20aee5 " +
        (e.target.value / 255) * 100 +
        "%, #dddddd " +
        (e.target.value / 255) * 100 +
        "%, dddddd 100%)";
    });
  }

  handleChange(value: number) {}
  handleBlur(value: number) {
    console.log("value:", value);
  }
  render() {
    const { value, min, max } = this.state;
    return (
      <Range
        value={value}
        min={min}
        max={max}
        ref={this.sliderThumb}
        onblur={() => this.handleBlur(value)}
      />
    );
  }
}

const Range = styled.input.attrs(() => ({
  type: "range"
}))`
  -webkit-appearance: none;
  margin: 0;
  width: 100%;
  &:focus {
    outline: none;
  }
  /* WebKit・Blink向け 溝のスタイル */
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 12px;
    cursor: pointer;
    animate: 0.2s;
    border-radius: 1.3px;
    background: ${props => `linear-gradient(
    to right,
    #20aee5 0%,
    #20aee5 ${(props.value / props.max) * 100}%,
    #dddddd ${(props.value / props.max) * 100}%,
    #dddddd 100%
  )`};
  }
  /* WebKit・Blink向け つまみのスタイル */
  &::-webkit-slider-thumb {
    background-color: #20aee5;
    height: 36px;
    width: 36px;
    border-radius: 50%;
    cursor: pointer;
    -webkit-appearance: none;
    /* 以下は つまみの縦位置調整 */
    margin-top: -14px; /* (つまみの高さ - トラックの高さ) / 2 。つまみの高さは border を含む */
  }
  /* 何故か上の margin-top 指定が Edge に効いてしまうので、Edge向けに設定をリセット */
  @supports (-ms-ime-align: auto) {
    &::-webkit-slider-thumb {
      margin-top: 0 !important;
    }
  }
  /* Firefox向け 溝のスタイル */
  &::-moz-range-track {
    width: 100%;
    height: 12px;
    cursor: pointer;
    animate: 0.2s;
    border-radius: 1.3px;
    background: ${props => `linear-gradient(
    to right,
    #20aee5 0%,
    #20aee5 ${(props.value / props.max) * 100}%,
    #dddddd ${(props.value / props.max) * 100}%,
    #dddddd 100%
  )`};
  }
  /* Firefox向け つまみのスタイル */
  &::-moz-range-thumb {
    height: 36px;
    width: 36px;
    border: none;
    border-radius: 50%;
    background: #20aee5;
    cursor: pointer;
  }
  /* Edge・IE向け 溝のスタイル */
  &::-ms-track {
    width: 100%;
    height: 12px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  /* Edge・IE向け 溝の色（つまみより左側） */
  &::-ms-fill-lower {
    border: 0.2px solid #010101;
    background: #20aee5;
    border-radius: 2.6px;
  }
  /* Edge・IE向け 溝の色（つまみより右側） */
  &::-ms-fill-upper {
    border: 0.2px solid #010101;
    border-radius: 2.6px;
  }
  /* Edge・IE向け つまみのスタイル */
  &::-ms-thumb {
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background: #20aee5;
    cursor: pointer;
  }
  /* Edge・IE向け focus時の色（つまみより左側） */
  &:focus::-ms-fill-lower {
    background: #20aee5;
  }
  /* Edge・IE向け focus時の色（つまみより右側） */
  &:focus::-ms-fill-upper {
    background: #999999;
  }
  /* Edge・IE向け ポップアップを非表示に */
  &::-ms-tooltip {
    display: none;
  }
`;

export { Slider };
