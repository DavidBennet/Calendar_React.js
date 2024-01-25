import styled, {css} from "styled-components"

export const Day = styled.div<{$props}>`
    width: 1.7rem;
    height: 1.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3px;
    transform: scale(0.9);
    transition: all ease 0.2s;
    cursor: pointer;
    border-radius: 20px;
    text-align: center;
    vertical-align: center;
    margin: 1px auto;
`;