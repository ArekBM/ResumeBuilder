import React from 'react';
import EducationItemPreview from './EducationPreview';
import ExperienceItemPreview from './ExperiencePreview';


export default function Content({ personalInfo, experience, education }){
    const experienceItems = experience.map(experienceItem => (
        <ExperienceItemPreview key={experienceItem.id} experienceItem={experienceItem} />
    ))
    
    const educationItems = education.map(educationItem => (
        <EducationItemPreview key={educationItem.id} educationItem={educationItem} />
    ))

    return(
        <section title='content'>
            <section title='Description'>
                <div>{personalInfo.description}</div>
            </section>
            <section title='Experience'>
                <div>{experienceItems}</div>
            </section>
            <section title='Education'>
                <div>{educationItems}</div>
            </section>
        </section>
    )
}