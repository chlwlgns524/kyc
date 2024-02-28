import styled from "styled-components";

export const MainCheckBox = styled.input.attrs({type: 'checkbox'})`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    border: 2px solid gray;
    border-radius: ${props => props.borderRadius || '50%'};
    width: ${props => props.width || '20px'};
    height: ${props => props.height || '20px'};
    cursor: pointer;

    &:before {
        content: '\\2713';
        font-size: 20px;
        color: gray;
        position: relative;
        left: 20%;
        bottom: 20%;
    }

    &:checked {
        border: 2px solid var(--primaryColor);
        background-color: #fff;
    }

    &:checked::before {
        color: var(--primaryColor);
    }
`