import React from 'react';
import styled, {css} from 'styled-components';

export default function Section({
    padding,
    title,
    children,
    titlePadding,
    contrastTitle,
    direction,
    icon,
}) {
    return(
        <SectionWrapper padding={padding}>
            <Title padding={titlePadding} contrast={contrastTitle}>
                {icon} {title}
            </Title>
            <Children direction={direction}>{children}</Children>
        </SectionWrapper>
    )
}

const SectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: ${(props) => props.padding};
    margin-bottom: 2rem;
`

const Title = styled.h3`
    padding: ${(props) => props.padding};
    color: #143E72;
    border-bottom: 1px solid #ccc;
    color: #143E72;
    
`

const Children = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction === 'column' && 'column'};
    gap: 1rem;
`