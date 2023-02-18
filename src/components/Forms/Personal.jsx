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
                placeholder='Address'
                value={personalInfo.address}
            />
            <FileInput
                onChange={(e) => handleChange(e)}
                name='photo'
                label='photo'
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
            <TextArea
                onChange={(e) => handleChange(e)}
                name='description'
                placeholder='Description'
                value={personalInfo.description}
            />
        </Section>
    )
}