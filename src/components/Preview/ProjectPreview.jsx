import React from 'react';
import styled from 'styled-components';
import Subsection from '../Utils/Subsection';

export default function ProjectItemPreview({ projectItem }){
    return(
        <ProjectItemWrapper>
            <Title>
                <Subsection title={projectItem.title} >
                </Subsection>
            </Title>
            <Info>
                {projectItem.projectDescription}
            </Info>

        </ProjectItemWrapper>
    )
}

const ProjectItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
const Title = styled.div`
    width: 23%;
`

const Info = styled.div`
    width: 70%;
    margin-left: 45px;
    border-top: 1px solid $ccc;
`