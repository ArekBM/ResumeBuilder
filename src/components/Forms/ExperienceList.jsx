import React from 'react';
import ExperienceItem from './ExperienceItem';

export default function Experience({ experience, onChange, onAdd, onDelete}){
    const experienceItems = experience.map((experienceItem) => (
        <ExperienceItem
            key={experienceItem.id}
            id={experienceItem.id}
            experienceItem={experienceItem}
            onChange={onChange}
            onDelete={onDelete}
        />
    ))

    return (
        <section title='Experience'>
            {experienceItems}
            <button onClick={onAdd}>Add</button>
        </section>
    )
}