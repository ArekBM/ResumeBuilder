import React from 'react';
import Input from '../Utils/Input'
import Section from '../Utils/Section'
import Button from '../Utils/Button';
import TextArea from '../Utils/TextArea';

export default function ExperienceItem({ id, experienceItem, onChange, onDelete}){
    return(
        <>
            <Input
                onChange={(e) => onChange(e, id)}
                type='text'
                name='position'
                placeholder='Position'
                value={experienceItem.position}
            />
            <Input
                onChange={(e) => onChange(e, id)}
                type='text'
                name='company'
                placeholder='Company'
                value={experienceItem.company}
            />
            <Input
                onChange={(e) => onChange(e, id)}
                type='text'
                name='city'
                placeholder='City'
                value={experienceItem.city}
            />
            <Input
                onChange={(e) => onChange(e, id)}
                type='text'
                name='startDate'
                placeholder='Start date'
                value={experienceItem.startDate}
            />
            <Input 
                onChange={(e) => onChange(e, id)}
                type='text'
                name='endDate'
                placeholder='End Date'
                value={experienceItem.endDate}
            />
            <TextArea
                onChange={(e) => onChange(e, id)}
                name='workDescription'
                placeholder='Description'
                value={experienceItem.workExperience}
            />
                
            <Button text='Delete' onClick={() => onDelete(id)}></Button>
        </>
    )
}