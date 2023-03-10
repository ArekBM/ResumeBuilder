import avatar from '../../assets/pic.jpeg'
import {v4 as uuidv4} from 'uuid';

const emptyCV = {
    personalInfo: {
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        photo: avatar,
        phone: '',
        email: '',
        description: ''
    },
    experience: [
        {
            id: uuidv4(),
            position: '',
            company: '',
            city: '',
            startDate: '',
            endDate: '',
            workDescription: '',
        }
    ],
    education: [
        {
            id: uuidv4(),
            university: '',
            city: '',
            degree: '',
            subject: '',
            schoolStart: '',
            schoolEnd: ''
        }
    ]
}

export default emptyCV;