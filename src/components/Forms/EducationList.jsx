import React from 'react';
import EducationItem from './EducationItem';
import Section from '../Utils/Section';
import Button from '../Utils/Button';

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
        <Section title='Education' titlePadding='0.5rem' direction='column'>
            {educationItems}
            <Button text='Add' onClick={onAdd}></Button>
        </Section>
    )
}