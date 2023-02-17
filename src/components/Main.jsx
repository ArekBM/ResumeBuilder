import React from 'react';
import emptyCV from './Utils/emptyCV';
import MainForm from './Forms/MainForm';
import Preview from './Preview/Preview';
import { v4 as uuidv4 } from 'uuid';

export default function Main() {
    const [cv, setCv] = React.useState(emptyCV)

    function handleChangePersonal(e){
        const {name, value, type} = e.target

        if(type === 'file'){
            handleChangeFile(e)
            return
        }

        setCv((prevState) => ({
            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                [name] : value
            }
        }))
    }
    function handleChangeFile(e) {
        const { name } = e.target
        const file = e.target.files[0]
        if(!file) return

        const reader = new FileReader()
        reader.onload = () => {
            setCv((prevState) => ({
                ...prevState,
                personalInfo: {
                    ...prevState.personalInfo,
                    [name] : reader.result
                }
            }))
        }
        reader.readAsDataURL(file)
    }
    function handleChangeExperience(e, id){
        const { name, value } = e.target
        
        setCv((prevState) => {
            const newExperience = prevState.experience.map((experienceItem) => {
                if(experienceItem.id === id){
                    return { ...experienceItem, [name]: value}
                }
                return experienceItem
            })
            return {...prevState, experience: [...newExperience]}
        })
    }

    function handleAddExperience() {
        setCv((prevState) => ({
            ...prevState,
            experience: [
                ...prevState.experience,
                {
                    id: uuidv4(),
                    position: '',
                    company: '',
                    city: '',
                    startDate: '',
                    endDate: ''
                }
            ]
        }))
    }

    function handleDeleteExperience(id){
        setCv((prevState) => {
            const newExperience = prevState.experience.filter(
                (experienceItem) => experienceItem.id !== id
            )
            return {...prevState, experience: [...newExperience]}
        })
    }

    return (
        <div>
            <MainForm
                cv={cv}
                onChangePersonal={handleChangePersonal}
                onChangeExperience={handleChangeExperience}
                onAddExperience={handleAddExperience}
                onDeleteExperience={handleDeleteExperience}
            />
            <Preview cv={cv} />
        </div>
    )
}