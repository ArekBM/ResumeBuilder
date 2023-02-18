import React from 'react';
import EducationItemPreview from './EducationPreview';
import ExperienceItemPreview from './ExperiencePreview';
import styled from 'styled-components';
import Section from '../Utils/Section';


export default function Content({ personalInfo, experience, education }){
    const experienceItems = experience.map(experienceItem => (
        <ExperienceItemPreview key={experienceItem.id} experienceItem={experienceItem} />
    ))
    
    const educationItems = education.map(educationItem => (
        <EducationItemPreview key={educationItem.id} educationItem={educationItem} />
    ))

    return(
        <ContentWrapper>
            <Section title='Description'>
                <Description>{personalInfo.description}</Description>
            </Section>
            <Section title='Experience' direction ='column' contrastTitle>
                {experienceItems}
            </Section>
            <Section title='Education' direction='column' contrastTitle>
                {educationItems}
            </Section>
        </ContentWrapper>
    )
}

const ContentWrapper = styled.div`
    padding: 2rem;
`

const Description = styled.div`
    font-style: italic;
`