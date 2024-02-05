import styled, {css} from "styled-components"

export const Day = styled.div`
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

    ${(props) => props.state === "selected" && css`
        background: #4d7c0f;
        color: #f7fee7;
    `};

    ${(props) => props.state === "noPertenceMonth" && css`
        opacity: 0.3;
        cursor: default;
    `}
`;