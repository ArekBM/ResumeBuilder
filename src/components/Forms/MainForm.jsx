import React from 'react';
import Education from './EducationList';
import Experience from './ExperienceList';
import Personal from './Personal';
import styled from 'styled-components';
import Button from '../Utils/Button';


export default function CVForm ({
    cv, 
    onChangePersonal,
    onChangeExperience,
    onAddExperience,
    onDeleteExperience,
    onChangeEducation, 
    onAddEducation,
    onDeleteEducation,
    onPrint,
    onReset,
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
            <Button text='Generate PDF' onClick={onPrint} primary></Button>
            <Button text='Reset' onClick={onReset}></Button>
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
    background-color: #eee;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
