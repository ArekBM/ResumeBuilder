import React, {Component} from 'react';
import HeaderPreview from './HeaderPreview'
import Sidebar from './Sidebar';
import Content from './ContentPreview'

class CVPreview extends Component {
    render(){
        const { cv } = this.props;

        return (
            <section>
                <HeaderPreview personalInfo={cv.personalInfo} />
                <Content
                    personalInfo={cv.personalInfo}
                    experience={cv.experience}
                    education={cv.education}
                />
                <Sidebar personalInfo={cv.personalInfo} />
            </section>
        )
    }
}

export default CVPreview