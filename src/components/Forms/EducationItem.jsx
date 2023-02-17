import React from 'react';

export default function EducationItem({id, educationItem, onChange, onDelete}){
    return(
        <section>
            <input
                onChange={((e) => onChange(e, id))}
                type='text'
                name='university'
                placeholder='University Name'
                value={educationItem.university}
            />
            <input 
                onChange={((e) => onChange(e, id))}
                type='text'
                name='city'
                placeholder='City'
                value={educationItem.city}
            />
            <input
                onChange={((e) => onChange(e, id))}
                type='text'
                name='degree'
                placeholder='Degree'
                value={educationItem.degree}
            />
            <input
                onChange={((e) => onChange(e, id))}
                type='text'
                name='subject'
                placeholder='Subject'
                value={educationItem.subject}
            />
            <input
                onChange={((e) => onChange(e,id))}
                type='text'
                name='schoolStart'
                placeholder='School start date'
                value={educationItem.schoolStart}
            />
            <input
                onChange={((e) => onChange(e, id))}
                type='text'
                name='schoolEnd'
                placeholder='School end date'
                value={educationItem.schoolEnd}
            />
            <button onClick={() => onDelete(id)}>Delete</button>
        </section>
    )
}