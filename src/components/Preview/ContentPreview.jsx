import React, { useRef, useEffect } from 'react';
import EducationItemPreview from './EducationPreview';
import ExperienceItemPreview from './ExperiencePreview';
import ProjectItemPreview from './ProjectPreview';
import styled from 'styled-components';
import Section from '../Utils/Section';
import { FaUniversity } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsFillPersonBadgeFill } from 'react-icons/bs';
import { MdOutlineWeb } from 'react-icons/md'

const contentRef = useRef(null);

export default function Content({ personalInfo, experience, education, projects }){

useEffect(() => {
  contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;  
}, [experience, education, projects]);

useEffect(() => {
  contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
}, [experience, education, projects]);

    const experienceItems = experience.map(experienceItem => (
        <ExperienceItemPreview key={experienceItem.id} experienceItem={experienceItem} />
    ))
    
    const educationItems = education.map(educationItem => (
        <EducationItemPreview key={educationItem.id} educationItem={educationItem} />
    ))

    const projectItems = projects.map(projectItem => (
        <ProjectItemPreview key={projectItem.id} projectItem={projectItem} />
    ))

    return(
        <ContentWrapper ref={contentRef}>
            <Section title='Description' icon={ <BsFillPersonLinesFill /> }>
                <Description>{personalInfo.description}</Description>
            </Section>
            <Section title='Education' direction='column' icon={ <FaUniversity /> } contrastTitle>
                {educationItems}
            </Section>
            <Section title='Personal Projects' direction='column' icon={ <MdOutlineWeb /> } contrastTitle>
                {projectItems}
            </Section>
            <Section title='Experience' direction ='column' icon={ <BsFillPersonBadgeFill /> } contrastTitle>
                {experienceItems}
            </Section>
        </ContentWrapper>
    )
}

const ContentWrapper = styled.div`
    padding: 2rem;
    background-color: #eee;
`

const Description = styled.div`
    font-style: italic;
`
