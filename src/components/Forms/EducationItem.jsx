import React from 'react';
import Input from '../Utils/Input';
import Button from '../Utils/Button';

export default function EducationItem({id, educationItem, onChange, onDelete}){
    return(
        <>
            <Input
                onChange={((e) => onChange(e, id))}
                type='text'
                name='university'
                placeholder='University'
                value={educationItem.university}
            />
            <Input 
                onChange={((e) => onChange(e, id))}
                type='text'
                name='city'
                placeholder='City'
                value={educationItem.city}
            />
            <Input
                onChange={((e) => onChange(e, id))}
                type='text'
                name='degree'
                placeholder='Degree'
                value={educationItem.degree}
            />
            <Input
                onChange={((e) => onChange(e, id))}
                type='text'
                name='subject'
                placeholder='Subject'
                value={educationItem.subject}
            />
            <Input
                onChange={((e) => onChange(e,id))}
                type='text'
                name='schoolStart'
                placeholder='School start date'
                value={educationItem.schoolStart}
            />
            <Input
                onChange={((e) => onChange(e, id))}
                type='text'
                name='schoolEnd'
                placeholder='School end date'
                value={educationItem.schoolEnd}
            />
            <Button text='Delete' onClick={() => onDelete(id)}></Button>
        </>
    )
}