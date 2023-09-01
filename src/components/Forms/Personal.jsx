import React from 'react';
import FileInput from '../Utils/FileInput';
import Section from '../Utils/Section';
import Input from '../Utils/Input';
import TextArea from '../Utils/TextArea';

export default function Personal({personalInfo, handleChange}){
    return (
        <Section
            title='Personal Information'
            titlePadding='0.5rem'
            direction='column'
        >
            <Input
                onChange={(e) => handleChange(e)}
                type='text'
                name='firstName'
                placeholder='First name'
                value={personalInfo.firstName}
            />
            <Input 
                onChange={(e) => handleChange(e)}
                type='text'
                name='lastName'
                placeholder='Last name'
                value={personalInfo.lastName}
            />
            <Input
                onChange={(e) => handleChange(e)}
                type='text'
                name='title'
                placeholder='Title'
                value={personalInfo.title}
            />
            <Input 
                onChange={(e) => handleChange(e)}
                type='text'
                name='address'
                placeholder='Location'
                value={personalInfo.address}
            />
            <FileInput
                onChange={(e) => handleChange(e)}
                name='photo'
                label='Photo'
                value={personalInfo.photo}
            />
            <Input 
                onChange={(e) => handleChange(e)}
                type='text'
                name='phone'
                placeholder='Phone number'
                value={personalInfo.phone}
            />
            <Input 
                onChange={(e) => handleChange(e)}
                type='text'
                name='email'
                placeholder='Email'
                value={personalInfo.email}
            />
            <Input 
                onChange={(e) => handleChange(e)}
                type='text'
                name='github'
                placeholder='Github'
                value={personalInfo.github}
            /> 
            <Input 
                onChange={(e) => handleChange(e)}
                type='text'
                name='linkedin'
                placeholder='Linkedin'
                value={personalInfo.linkedin}
            />
            <Input 
                onChange={(e) => handleChange(e)}
                type='text'
                name='website'
                placeholder='website'
                value={personalInfo.website}
            />
            <Input
                onChange={(e) => handleChange(e)}
                name='languages'
                placeholder='Languages'
                value={personalInfo.languages}
            />
            <Input
                onChange={(e) => handleChange(e)}
                name='technologies'
                placeholder='Technologies'
                value={personalInfo.technologies}
            />
            <TextArea
                onChange={(e) => handleChange(e)}
                name='description'
                placeholder='Description'
                value={personalInfo.description}
            />
        </Section>
    )
}