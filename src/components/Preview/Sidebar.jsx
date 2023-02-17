import React from 'react';

export default function Sidebar({personalInfo}) {
    return(
        <section>
            <img src={personalInfo.photo} />
            <section>
                <h4 name='Address'>{personalInfo.address}</h4>
                <h4 name='Phone'>{personalInfo.phone}</h4>
                <h4 name='Email'>{personalInfo.email}</h4>
                <h4 name='Description'>{personalInfo.description}</h4>
            </section>
        </section>
    )
}