import React from 'react';
import styled from 'styled-components';


export default function CVHeader({personalInfo}){
    const {firstName, lastName, title} = personalInfo;

    const getHeight = () => {
        return this.headerRef.current.clientHeight
    }

    return(
        <CVHeaderWrapper ref={this.headerRef}>
            <h1>{firstName} {lastName}</h1>
            <p>{title}</p>
        </CVHeaderWrapper>
    )
}

export function getHeight() {
    return getHeight()
}

const CVHeaderWrapper = styled.header`
    grid-column: span 2;
    padding: 2rem;
    background-color: #143E72;
    color: #eee;
`
// #517a69
// #9d94ba
// #055b87
