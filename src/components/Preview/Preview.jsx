import React, {Component} from 'react';
import HeaderPreview from './HeaderPreview'
import Sidebar from './Sidebar';

class CVPreview extends Component {
    render(){
        const { cv } = this.props;

        return (
            <section>
                <HeaderPreview personalInfo={cv.personalInfo} />
                <Sidebar personalInfo={cv.personalInfo} />
            </section>
        )
    }
}

export default CVPreview