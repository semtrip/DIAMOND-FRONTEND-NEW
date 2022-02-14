import { observer } from "mobx-react-lite";
import React, {useState, useEffect}  from "react";

import './css/main.scss'

import storeCharacterEditor from "./store.characterEditor";

import CharacterInfo from "./components/characterInfo";
import Parents from "./components/parents";
import Face from "./components/face";
import Make from "./components/make";
import Clothes from "./components/clothes";
import Haris from "./components/haris";

const { EventManager: em } = window;

const CharacterEditor = observer(()=>{
    const state = storeCharacterEditor.state
    const [show, setShow] = useState(false);
    const [path, setPath] = useState('parents');
    useEffect(() => {
        em.addHandler('customization', value => { // Скрыть/Показать кастомку, переходы по страницам
            if (value.type === 'show') {
                setShow(true)
            } else if (value.type === 'hide') {
                setShow(false)
            } else if (value.type === 'switch') {
                setShow(!show)
            } else return;
        })
    });
    const getRandomArbitrary = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    const randomize = () => {
        for (let i = 0; i < state.input_editor_face.length; i++) {
            state.input_editor_face[i].value = getRandomArbitrary(-100, 100)
        };
        for (let i = 0; i < state.input_editor_nose.length; i++) {
            state.input_editor_nose[i].value = getRandomArbitrary(-100, 100)
        };
        for (let i = 0; i < state.input_editor_eyes_lips.length; i++) {
            state.input_editor_eyes_lips[i].value = getRandomArbitrary(-100, 100)
        };
        for (let i = 0; i < state.input_editor_face_last.length; i++) {
            state.input_editor_face_last[i].index_help = getRandomArbitrary(0, state.input_editor_face_last[i].maxVal)
        };
        state.slider[0].index_help = getRandomArbitrary(0, 21)
        state.slider[1].index_help = getRandomArbitrary(0, 23)
        state.slider[2].index_help = getRandomArbitrary(0, 20)
        state.slider[3].index_help = getRandomArbitrary(0, 20)
        let pathLocal = path
        setPath('render')
        setTimeout(()=>{
            setPath(pathLocal)
        }, 1)
        setTimeout(()=>{
            storeCharacterEditor.setCustomization()
        }, 40)
    }
    const resetEditorCharacter = (i) => {
        let copy;
        switch (i) {
            case 1:
                copy = state.input_editor_face;
                for (i = 0; i < copy.length; i++) {
                    copy[i].value = 0
                }
                state.input_editor_face =copy
                break;
            case 2:
                copy = state.input_editor_nose;
                for (i = 0; i < copy.length; i++) {
                    copy[i].value = 0
                }
                state.input_editor_nose = copy
                copy = state.input_editor_eyes_lips;
                for (i = 0; i < copy.length; i++) {
                    copy[i].value = 0
                }
                state.input_editor_eyes_lips = copy
                break;
            case 3:
                copy = state.input_editor_face_last;
                for (i = 0; i < copy.length; i++) {
                    copy[i].index_help = 0
                }
                state.input_editor_face_last = copy
                break;
            case 4:
                state.slider[0].index_help = 0
                state.slider[1].index_help = 0
                state.slider[2].index_help = 10
                state.slider[3].index_help = 10
                break;
            default:
                break;
        }
        let pathLocal = path
        setPath('render')
        setTimeout(()=>{
            setPath(pathLocal)
        }, 1)
        setTimeout(()=>{
            storeCharacterEditor.setCustomization()
        }, 40)
    }
    const resetDefaut = () => {
        resetEditorCharacter(1)
        resetEditorCharacter(2)
        resetEditorCharacter(3)
        resetEditorCharacter(4)
    }
    const saveCustomization = () => {
        console.log(state.validInfo.name, state.validInfo.surname, state.validInfo.age)
        if(state.validInfo.name && state.validInfo.surname && state.validInfo.age) {
            try {
                mp.trigger('client:events:custom:set' , JSON.stringify(state.input_editor_face), JSON.stringify(state.input_editor_nose), JSON.stringify(state.input_editor_eyes_lips), JSON.stringify(state.input_editor_face_last), state.cheked_sex, state.slider[0].index_help, state.slider[1].index_help, state.slider[2].index_help, state.slider[3].index_help, true) // eslint-disable-line

                mp.trigger('client:events:custom:save', state.stats.endurance, state.stats.driving, state.stats.flying, state.stats.psychics, state.stats.shooting, state.stats.stealth, state.stats.strength, state.info_character); // eslint-disable-line
                
                mp.trigger('client:events:custom:choiceRole', 0) // eslint-disable-line
            } catch (e) {
                console.log('save', e);
            }
        }
    }
    return show ? (
        <div className="editorBox">
            <CharacterInfo/>
            <div className="editor">
            {   
            path === 'parents' ? <Parents/> 
            :
            path === 'face' ? <Face/>
            :
            path === 'make' ? <Make/>
            :
            path === 'clothes' ? <Clothes/>
            :
            path === 'haris' ? <Haris/>
            :null
            }
                <div className="nav">
                    <div className= {path === 'parents' ? 'link parents active': 'link parents'} onClick={()=>{setPath('parents')}}/>
                    <div className= {path === 'face' ? 'link face active': 'link face'} onClick={()=>{setPath('face')}}/>
                    {/* <div className= {path === 'make' ? 'link make active': 'link make'} onClick={()=>{setPath('make')}}/> */}
                    {/* <div className= {path === 'clothes' ? 'link clothes active': 'link clothes'} onClick={()=>{setPath('clothes')}}/> */}
                    <div className= {path === 'haris' ? 'link haris active': 'link haris'} onClick={()=>{setPath('haris')}}/>
                </div>
                <div className="btns">
                    <div className="btn random" onClick={randomize}/>
                    <div className="btn create" onClick={saveCustomization}/>
                    <div className="btn exit" onClick={resetDefaut}/>
                </div>
            </div>
        </div>
    ):null
})
export default CharacterEditor