import React from 'react';
import emptyCV from './Utils/emptyCV';
import MainForm from './Forms/MainForm';
import Preview from './Preview/Preview';

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

    return (
        <div>
            <MainForm
                cv={cv}
                onChangePersonal={handleChangePersonal}
            />
            <Preview cv={cv} />
        </div>
    )
}