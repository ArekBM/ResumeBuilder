import React from 'react';
import FileInput from '../Utils/FileInput';
import Section from '../Utils/Section';
import Input from '../Utils/Input';
import Button from '../Utils/Button';
import TextArea from '../Utils/TextArea';

export default function ProjectItem({ id, projectItem, onChange, onDelete }){
    return(
        <>
            <Input
                onChange={((e) => onChange(e, id))}
                type='text'
                name='title'
                placeholder='Project Title'
                value={projectItem.title}
            />
            <TextArea
                onChange={((e) => onChange(e, id))}
                type='text'
                name='projectDescription'
                placeholder='Description'
                value={projectItem.projectDescription}
            />
            <Button text='Delete' onClick={() => onDelete(id)}></Button>
        </>
    )
}