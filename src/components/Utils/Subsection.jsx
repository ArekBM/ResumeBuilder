import React from 'react';
import styled from 'styled-components';

export default function Subsection({title, children, titlePadding}){
    return(
        <SubsectionWrapper padding={titlePadding}>
            <Title>{title}</Title>
            {children}
        </SubsectionWrapper>
    )
}

const SubsectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
`

const Title = styled.h4`
    padding: ${(props) => props.padding};
    line-height: 1.6;
`;