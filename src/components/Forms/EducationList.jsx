import React from 'react';
import EducationItem from './EducationItem';

export default function Education({education, onChange, onAdd, onDelete }){
    const educationItems = education.map((educationItem) => (
        <EducationItem 
            key={educationItem.id}
            id={educationItem.id}
            educationItem={educationItem}
            onChange={onChange}
            onDelete={onDelete}
        />
    ))
    return(
        <section title='Education'>
            {educationItems}
            <button onClick={onAdd}>Add</button>
        </section>
    )
}