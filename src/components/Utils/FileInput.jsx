import React from 'react';
import styled from 'styled-components';

export default function FileInput({label, name, onChange}){
    return(
        <Label>
            <FileInputWrapper type='file' onChange={onChange} name={name} />
            {label}
        </Label>
    )
}

const FileInputWrapper = styled.input`
    justify-content: center;
    align-items: center;
    display: none;
`;

const Label = styled.label`
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid transparent;
    background-color: #fff;

    &:active {
        border: 1px solid #aaa;
    }
`;