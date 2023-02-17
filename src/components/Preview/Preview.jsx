import React, {Component} from 'react';
import HeaderPreview from './HeaderPreview'

class CVPreview extends Component {
    render(){
        const { cv } = this.props;

        return (
            <section>
                <HeaderPreview personalInfo={cv.personalInfo} />
            </section>
        )
    }
}

export default CVPreview