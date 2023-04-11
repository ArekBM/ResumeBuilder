import React from 'react';
import styled from 'styled-components';
import Section from '../Utils/Section';
import Subsection from '../Utils/Subsection';
import { VscAccount } from 'react-icons/vsc';
import { AiFillHome, AiFillPhone, AiFillMail } from 'react-icons/ai';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


export default function Sidebar({personalInfo}) {
    return(
        <SidebarWrapper>
            {/* <Photo src={personalInfo.photo} /> */}
            <Section title='Personal Details' contrastTitle direction='column' icon={ <VscAccount /> }>
                <Subsection icon={ <AiFillHome /> } title='Location'>{personalInfo.address}</Subsection>
                <Subsection icon={ <AiFillPhone /> } title='Phone'>{personalInfo.phone}</Subsection>
                <Subsection icon={ <AiFillMail /> } title='Email'>{personalInfo.email}</Subsection>
                <Subsection icon={ <FaGithub /> } title='Github'>{personalInfo.github}</Subsection>
                <Subsection icon={ <FaLinkedin /> } title='Linkedin'>{personalInfo.linkedin}</Subsection>
            </Section>
            <Section title='Skills' contrastTitle direction='column'>
                <Subsection title='Languages:'>{personalInfo.languages}</Subsection>
                <Subsection title='Technologies:'>{personalInfo.technologies}</Subsection>
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