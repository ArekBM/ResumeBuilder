import React from 'react';
import Experience from './ExperienceList';
import Personal from './Personal'


export default function CVForm ({
    cv, 
    onChangePersonal,
    onChangeExperience,
    onAddExperience,
    onDeleteExperience
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
        </section>
    )
} 