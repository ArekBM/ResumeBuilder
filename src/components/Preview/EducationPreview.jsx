import React from 'react';
import styled from 'styled-components';
import Subsection from '../Utils/Subsection';


export default function EducationItemPreview({educationItem}){
    return(
        <EducationItemWrapper>
            <Period>
                {educationItem.schoolStart} - {educationItem.schoolEnd}
            </Period>
            <Info>
                <Subsection
                    title={`${educationItem.university}, ${educationItem.city}`}
                >
                    <p>Degree: {educationItem.degree}</p>
                    <p>Subject: {educationItem.subject}</p>
                </Subsection>
            </Info>
        </EducationItemWrapper>
    )
}

const EducationItemWrapper = styled.div`
    display: flex;
`

const Period = styled.div`
    width: 25%;
    font-weight: bold;
    margin-right: 2rem;
`

const Info = styled.div`
    width: 70%;
`