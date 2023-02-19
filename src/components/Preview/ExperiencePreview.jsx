import React from 'react';
import styled from 'styled-components';
import Subsection from '../Utils/Subsection';

export default function ExperienceItemPreview({experienceItem}){
    return(
        <ExperienceItemWrapper>
            <Period>
                {experienceItem.startDate} - {experienceItem.endDate}
            </Period>
            <Info>
                <Subsection title={experienceItem.position}>
                    <div>
                        {experienceItem.company}, {experienceItem.city}
                    </div>
                </Subsection>
            </Info>
        </ExperienceItemWrapper>
    )
}

const ExperienceItemWrapper = styled.div`
    display: flex;
`

const Period = styled.div`
    width: 50%;
    font-weight: bold;
    margin-right: 2rem;
`

const Info = styled.div`
    width: 70%;
`

