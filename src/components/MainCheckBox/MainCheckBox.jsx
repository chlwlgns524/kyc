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
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &:before {
        content: '\\2713';
        font-size: 20px;
        color: gray;
    }

    &:checked {
        border: 2px solid var(--primaryColor);
        background-color: #fff;
    }

    &:checked::before {
        color: var(--primaryColor);
    }
`