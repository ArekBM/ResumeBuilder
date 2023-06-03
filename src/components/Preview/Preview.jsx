import React, {Component} from 'react';
import HeaderPreview from './HeaderPreview'
import Sidebar from './Sidebar';
import Content from './ContentPreview'
import styled from 'styled-components'

class CVPreview extends Component {
    state = {
        viewHeight: 0
    }

    getTotalHeight = () => {
        const headerHeight = this.headerRef.current.clientHeight
        const sidebarHeight = this.sidebarRef.current.clientHeight
        const contentHeight = this.contentRef.current.clientHeight
        return headerHeight + sidebarHeight + contentHeight
    }

    componentDidMount() {
        const totalHeight = this.getTotalHeight()
        this.setState({viewHeight: totalHeight})
    }

    render(){
        const { cv } = this.props;

        return (
            <CVPreviewWrapper style={{height: this.state.viewHeight}}>
                <HeaderPreview ref={this.headerRef} personalInfo={cv.personalInfo} />
                <Content ref={this.contentRef}
                    personalInfo={cv.personalInfo}
                    experience={cv.experience}
                    education={cv.education}
                    projects={cv.projects}
                />
                <Sidebar ref={this.sidebarRef} personalInfo={cv.personalInfo} />
            </CVPreviewWrapper>
        )
    }
}

export default CVPreview;

const CVPreviewWrapper = styled.div`
    width: 210mm;
    position: relative;
    top: 10px;
    display: grid;
    grid-template-columns: 150mm 60mm;
    grid-template-rows: 35mm 262mm;
    box-shadow: rgba(0,0,0, 0.35) 0px 5px 15px;

`
