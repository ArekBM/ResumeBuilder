import React from 'react';

export default function Personal({personalInfo, handleChange}){
    return (
        <section>
            <input
                onChange={(e) => handleChange(e)}
                type='text'
                name='firstName'
                placeholder='First name'
                value={personalInfo.firstName}
            />
            <input 
                onChange={(e) => handleChange(e)}
                type='text'
                name='lastName'
                placeholder='Last name'
                value={personalInfo.lastName}
            />
            <input
                onChange={(e) => handleChange(e)}
                type='text'
                name='title'
                placeholder='Title'
                value={personalInfo.title}
            />
            <input 
                onChange={(e) => handleChange(e)}
                type='text'
                name='address'
                placeholder='Address'
                value={personalInfo.address}
            />
            <input
                onChange={(e) => handleChange(e)}
                name='photo'
                label='Photo'
                value={personalInfo.photo}
            />
            <input 
                onChange={(e) => handleChange(e)}
                type='text'
                name='phone'
                placeholder='Phone number'
                value={personalInfo.phone}
            />
            <input 
                onChange={(e) => handleChange(e)}
                type='text'
                name='email'
                placeholder='Email'
                value={personalInfo.email}
            />
            <textarea
                onChange={(e) => handleChange(e)}
                name='description'
                placeholder='Description'
                value={personalInfo.description}
            />
        </section>
    )
}