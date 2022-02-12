import { observer } from "mobx-react-lite";
import React, {useState} from "react";

import '../css/info.scss'

import storeCharacterEditor from "../store.characterEditor";

const CharacterInfo = observer(()=>{
    const state = storeCharacterEditor.state
    const [gender, setGender] = useState(false);
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorSurname, setErrorSurname] = useState('');
    const [errorAge, setErrorAge] = useState('');

    let valid = {
        name: false,
        surname: false,
        age: false
    }


    const validText = (e)=>{
        let data = e.target.value
        let id =  e.target.dataset.name
        const reg = /^[a-z]+$/i
        if(id === 'name') {
            setName(data)
            if (data === '') {
                setErrorName('')
                valid.name = false
                state.validInfo = valid
            } else if(!reg.test(data)) {
                    setErrorName('The name must contain only Latin letters')
                    valid.name = false
                    state.validInfo = valid
            } else {
                setErrorName('')
                valid.name = true
                state.info_character.first_name = data
                state.validInfo = valid
            } 
        }
        if(id === 'surname') {
            setSurname(data)
            if (data === '') {
                setErrorSurname('')
                valid.surname = false
                state.validInfo = valid
            } else if(!reg.test(data)) {
                setErrorSurname('The surname must contain only Latin letters')
                valid.surname = false
                state.validInfo = valid
            } else {
                setErrorSurname('')
                valid.surname = true
                state.info_character.last_name = data
                state.validInfo = valid
            }
        }
    }
    const validAge = (e) =>{
        let data = e.target.value
        if (data === '') {
            setErrorAge('')
            valid.age = false
            state.validInfo = valid
        } else if(data >= 18 && data <= 90) {
            setErrorAge('')
            valid.age = true
            state.info_character.age = data
            state.validInfo = valid
        } else {
            setErrorAge('The age must be between 18 and 90')
            valid.age = false
            state.validInfo = valid
        }
    }
    return (
        <div className="characterInfoBox">
            <div className="logo"/>
            <div className="inputs">
                <div className="title">Gender selection</div>
                <div className="gender">
                    <div className={gender ? 'man' : 'man active'} onClick={()=>{{setGender(false)}; {state.cheked_sex = false}; {storeCharacterEditor.setSex()}}}/>
                    <div className={!gender ? 'wooman' : 'wooman active'} onClick={()=>{{setGender(true)}; {state.cheked_sex = true}; {storeCharacterEditor.setSex()}}}/>
                </div>
                <div className="title">Personal data</div>
                <div className={errorName.length === 0 ? 'input' : 'input error'}>
                    <i>{errorName}</i>
                    <span>Name</span>
                    <input type="text" placeholder="Input..." maxLength='15' data-name="name" onChange={validText}/>
                </div>
                <div className={errorSurname.length === 0 ? 'input' : 'input error'}>
                    <i>{errorSurname}</i>
                    <span>Surname</span>
                    <input type="text" placeholder="Input..." maxLength='15' data-name="surname" onChange={validText}/>
                </div>
                <div className={errorAge.length === 0 ? 'input' : 'input error'}>
                    <i>{errorAge}</i>
                    <span>Age</span>
                    <input type="number" placeholder="Input..."  onChange={validAge}/>
                </div>
            </div>
        </div>
    )
})

export default CharacterInfo    