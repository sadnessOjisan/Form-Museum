import * as React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    className?: string;
    onClick?: (e: React.MouseEvent) => void;
    type?: "submit" | "button";
    primary?: boolean;
}

const Trash = (props: Props) => {
    const { className, onClick, type } = props;
    return (
        <Wrapper className={className} onClick={onClick} type={type}>
            <FontAwesomeIcon icon="trash" />
        </Wrapper>
    );
};

const SIZE = 40;

const Wrapper = styled.button`
  width: ${`${SIZE}px`};
  height: ${`${SIZE}px`};
  border-radius: ${`${SIZE / 2}px`};
  background-color: red;
  color: white;
  cursor: pointer;
`;

export { Trash };
