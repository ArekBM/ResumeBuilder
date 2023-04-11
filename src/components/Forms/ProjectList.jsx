import React from 'react';
import ProjectItem from './ProjectItem';
import Section from '../Utils/Section';
import Button from '../Utils/Button';

export default function Projects({projects, onChange, onAdd, onDelete }){
    const projectItems = projects.map((projectItem) => (
        <ProjectItem 
            key={projectItem.id}
            id={projectItem.id}
            projectItem={projectItem}
            onChange={onChange}
            onDelete={onDelete}
        />
    ))
    return(
        <Section title='Projects' titlePadding='0.5rem' direction='column'>
            {projectItems}
            <Button text='Add' onClick={onAdd}></Button>
        </Section>
    )
}