import styled, { css } from "styled-components";

const Button = styled.button`
    background-color: #f0f0f0;
    border: none;
    border-radius: 4px;
    color: #000;
    cursor: pointer;
    font-size: 16px;
    padding: 10px 20px;
    transition: all 0.3s ease;
    &:hover {
        background-color: #e0e0e0;
    }

    ${props => props.primary && css`
        background-color: #000;
        color: #fff;
    `}
`;

export default Button;