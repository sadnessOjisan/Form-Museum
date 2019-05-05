import * as React from "react";
import styled from "styled-components";
import { track } from "../../redux/module/logging";
import { genClickLog } from "../../helper/util";

interface IProps {
    label: string;
    name: string;
    value: string;
    errorMessage?: string;
    options: string[];
    setFieldValue: (field: string, value: any) => void;
    track: typeof track;
}

const CheckBox = (props: IProps) => {
    const { label, name, options, value, setFieldValue, track } = props;
    const TEST_OR_TRACK_TARGET = {
        checkbox: `checkbox_${value}`
    };
    return (
        <Wrapper>
            <Input
                name={name}
                id={value}
                checked={options.includes(value)}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const clickedValue = e.target.value;
                    if (options.includes(clickedValue)) {
                        const nextOptions = options.filter(
                            option => option !== clickedValue
                        );
                        setFieldValue("options", nextOptions);
                        track(
                            genClickLog(
                                `uncheck_${TEST_OR_TRACK_TARGET.checkbox}`,
                                TEST_OR_TRACK_TARGET.checkbox,
                                { from: options.includes(value), to: !options.includes(value) }
                            )
                        );
                    } else {
                        const nextOptions = [...options, clickedValue];
                        setFieldValue("options", nextOptions);
                        track(
                            genClickLog(
                                `check_${TEST_OR_TRACK_TARGET.checkbox}`,
                                TEST_OR_TRACK_TARGET.checkbox,
                                { from: options.includes(value), to: !options.includes(value) }
                            )
                        );
                    }
                }}
                value={value}
            />
            <Label for={value}>{label}</Label>
        </Wrapper>
    );
};

const Wrapper = styled.div``;

const Label = styled.label<{ for: string }>``;

const Input = styled.input.attrs({ type: "checkbox" })`
  border: solid 1px gray;
`;

export { CheckBox };
