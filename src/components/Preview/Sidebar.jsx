import React from 'react';
import styled from 'styled-components';
import Section from '../Utils/Section';
import Subsection from '../Utils/Subsection';

export default function Sidebar({personalInfo}) {
    return(
        <SidebarWrapper>
            <Photo src={personalInfo.photo} />
            <Section title='Personal Details' contrastTitle direction='column'>
                <Subsection title='Address'>{personalInfo.address}</Subsection>
                <Subsection title='Phone'>{personalInfo.phone}</Subsection>
                <Subsection title='Email'>{personalInfo.email}</Subsection>
            </Section>
        </SidebarWrapper>
    )
}

const SidebarWrapper = styled.div`
    padding: 2rem;
    background-color: #ddd;
`

const Photo = styled.img`
margin-bottom: 2rem;
`