import React from 'react';
import styled from 'styled-components';
import {FaGithub} from 'react-icons/fa';

export default function Footer() {
    return (
        <FooterWrapper>
            <p>Copyright © 2023 ericmiyake</p>
            <Link href='https://github.com/ArekBM'>
                <FaGithub />
            </Link>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0.5rem;
    background-color: #333;
    color: #eee;
`

const Link = styled.a`
    position: relative;
    top: 0.2rem;
    margin-left: 1rem;
    font-size: 2rem;
    color: #eee;

    &:hover {
        color: #ccc;
    }

    &:active {
        color: #aaa;
    }
`