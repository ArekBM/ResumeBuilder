import React from 'react';
import styled from 'styled-components';

export default function Button({
    text,
    onClick,
    primary,
    secondary,
    red,
}){
    return (
        <ButtonWrapper
            onClick={onClick}
            primary={primary}
            secondary={secondary}
            red={red}
            >
                {text}
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled.button`
    padding: 1rem;
    border-radius: 5px;
    font-weight: bold;
    background-color: #333;
    color: #eee;

    &:hover {
        background-color: #222;
    }

    &:active {
        background-color: #111;
    }


`