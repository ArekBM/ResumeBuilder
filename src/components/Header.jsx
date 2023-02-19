import React from 'react';
import styled from 'styled-components';
import Button from '../components/Utils/Button';

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderWrapper>
                <h1>Build-A-Resume</h1>
            </HeaderWrapper>

        </HeaderContainer>
    )
}



const HeaderContainer = styled.div`
    background-color: #333;

`

const HeaderWrapper = styled.div`
    font-family: 'Zen Tokyo Zoo', cursive;
    display: flex;
    align-items: center;
    max-width: 1800px;
    padding: 3rem 8rem;
    margin: 0 auto;
    color: #eee;
    font-size: 2.2rem;

    @media (max-width: 1600px) {
        justify-content: center;
    }
`
