import React from 'react';
import Education from './EducationList';
import Experience from './ExperienceList';
import Personal from './Personal';
import styled from 'styled-components';


export default function CVForm ({
    cv, 
    onChangePersonal,
    onChangeExperience,
    onAddExperience,
    onDeleteExperience,
    onChangeEducation, 
    onAddEducation,
    onDeleteEducation,
}) {
    return (
        <CVFormWrapper>
            <Personal personalInfo={cv.personalInfo} handleChange={onChangePersonal} />
            <Experience
                experience={cv.experience}
                onChange={onChangeExperience}
                onAdd={onAddExperience}
                onDelete={onDeleteExperience}
            />
            <Education
                education={cv.education}
                onChange={onChangeEducation}
                onAdd={onAddEducation}
                onDelete={onDeleteEducation}
            />
        </CVFormWrapper>
    )
} 

const CVFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 210mm;
    padding: 2rem;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
