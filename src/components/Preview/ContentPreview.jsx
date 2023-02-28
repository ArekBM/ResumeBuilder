import React from 'react';
import EducationItemPreview from './EducationPreview';
import ExperienceItemPreview from './ExperiencePreview';
import styled from 'styled-components';
import Section from '../Utils/Section';
import { FaUniversity } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsFillPersonBadgeFill } from 'react-icons/bs';

export default function Content({ personalInfo, experience, education }){
    const experienceItems = experience.map(experienceItem => (
        <ExperienceItemPreview key={experienceItem.id} experienceItem={experienceItem} />
    ))
    
    const educationItems = education.map(educationItem => (
        <EducationItemPreview key={educationItem.id} educationItem={educationItem} />
    ))

    return(
        <ContentWrapper>
            <Section title='Description' icon={ <BsFillPersonLinesFill /> }>
                <Description>{personalInfo.description}</Description>
            </Section>
            <Section title='Experience' direction ='column' icon={ <BsFillPersonBadgeFill /> } contrastTitle>
                {experienceItems}
            </Section>
            <Section title='Education' direction='column' icon={ <FaUniversity /> } contrastTitle>
                {educationItems}
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