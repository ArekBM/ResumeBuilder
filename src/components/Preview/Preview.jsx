import React, {Component} from 'react';
import HeaderPreview from './HeaderPreview'
import Sidebar from './Sidebar';
import Content from './ContentPreview'
import styled from 'styled-components'

class CVPreview extends Component {
    render(){
        const { cv } = this.props;

        return (
            <CVPreviewWrapper>
                <HeaderPreview personalInfo={cv.personalInfo} />
                <Content
                    personalInfo={cv.personalInfo}
                    experience={cv.experience}
                    education={cv.education}
                />
                <Sidebar personalInfo={cv.personalInfo} />
            </CVPreviewWrapper>
        )
    }
}

export default CVPreview;

const CVPreviewWrapper = styled.div`
    width: 210mm;
    height: 297mm;
    position: sticky;
    top: 10px;
    display: grid;
    grid-template-columns: 150mm 60mm;
    grid-template-rows: 35mm 262mm;
    box-shadow: rgba(0,0,0, 0.35) 0px 5px 15px

`