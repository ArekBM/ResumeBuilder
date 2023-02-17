import React from 'react';

export default function EducationItemPreview({educationItem}){
    return(
        <section>
            <title>
                {educationItem.schoolStart} - {educationItem.schoolEnd}
            </title>
            <section>
                <h2>{educationItem.university}, {educationItem.city}</h2>
                <p>Degree: {educationItem.degree}</p>
                <p>Subject: {educationItem.subject}</p>
            </section>
        </section>
    )
}