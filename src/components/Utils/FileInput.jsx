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
display: none;
`;

const Label = styled.input`
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid transparent;
    background-color: #fff;
`;