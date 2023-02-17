import React from 'react';
import Education from './EducationList';
import Experience from './ExperienceList';
import Personal from './Personal'


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
        <section>
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
        </section>
    )
} 