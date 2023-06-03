import React from 'react';
import EducationItemPreview from './EducationPreview';
import ExperienceItemPreview from './ExperiencePreview';
import ProjectItemPreview from './ProjectPreview';
import styled from 'styled-components';
import Section from '../Utils/Section';
import { FaUniversity } from 'react-icons/fa';
import { BsFillPersonLinesFill, BsFillPersonBadgeFill } from 'react-icons/bs';

export default function Content({ personalInfo, experience, education, projects }){

    const getSectionHeight = (section) => {
        return section.current.clientHeight
    }

    const getTotalHeight = () => {
        let totalHeight = 0
        totalHeight += getSectionHeight(this.descriptionSection)
        totalHeight += getSectionHeight(this.experienceSection)
        totalHeight += getSectionHeight(this.educationSection)
        totalHeight += getSectionHeight(this.projectSection)
        return totalHeight
    }

    return(
        <ContentWrapper>
            <Section ref={this.descriptionSection} title='Description' icon={ <BsFillPersonLinesFill /> }>
                <Description>{personalInfo.description}</Description>
            </Section>
            <Section ref={this.experienceSection} title='Experience' direction ='column' icon={ <BsFillPersonBadgeFill /> } contrastTitle>
                {experienceItems}
            </Section>
            {/* <Section title='Education' direction='column' icon={ <FaUniversity /> } contrastTitle>
                {educationItems}
            </Section> */}
            <Section ref={this.projectSection} title='Personal Projects' direction='column' contrastTitle>
                {projectItems}
            </Section>
        </ContentWrapper>
    )
}

export function getHeight() {
    return getTotalHeight()
}

const ContentWrapper = styled.div`
    padding: 2rem;
    background-color: #eee;
`

const Description = styled.div`
    font-style: italic;
`
