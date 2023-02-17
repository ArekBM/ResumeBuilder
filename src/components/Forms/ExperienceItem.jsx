import React from 'react';

export default function ExperienceItem({ id, experienceItem, onChange, onDelete}){
    return(
        <section>
            <input
                onChange={(e) => onChange(e, id)}
                type='text'
                name='position'
                placeholder='Position'
                value={experienceItem.position}
            />
            <input
                onChange={(e) => onChange(e, id)}
                type='text'
                name='company'
                placeholdeer='Company'
                value={experienceItem.company}
            />
            <input
                onChange={(e) => onChange(e, id)}
                type='text'
                name='city'
                placeholder='City'
                value={experienceItem.city}
            />
            <input
                onChange={(e) => onChange(e, id)}
                type='text'
                name='startDate'
                placeholder='Start date'
                value={experienceItem.startDate}
            />
            <input 
                onChange={(e) => onChange(e, id)}
                type='text'
                name='endDate'
                placeholder='End Date'
                value={experienceItem.endDate}
            />
            <button onClick={() => onDelete(id)}>Delete</button>
        </section>
    )
}