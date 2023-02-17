import React from 'react';
import Personal from './Personal'


export default function CVForm ({
    cv, 
    onChangePersonal,
}) {
    return (
        <section>
            <Personal personalInfo={cv.personalInfo} handleChange={onChangePersonal} />
        </section>
    )
} 