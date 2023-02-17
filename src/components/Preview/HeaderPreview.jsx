import React from 'react';


export default function CVHeader({personalInfo}){
    const {firstName, lastName, title} = personalInfo;

    return(
        <section>
            <h1>{firstName} {lastName}</h1>
            <p>{title}</p>
        </section>
    )
}