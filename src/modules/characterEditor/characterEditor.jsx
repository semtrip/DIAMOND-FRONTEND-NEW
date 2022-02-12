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
    const store = storeCharacterEditor
    const [path, setPath] = useState('parents');
    useEffect(() => {
        em.addHandler('customization', value => { // Скрыть/Показать кастомку, переходы по страницам
            if (value.type === 'show') {
                store.show = true
            } else if (value.type === 'hide') {
                store.show = false
            } else if (value.type === 'switch') {
                store.show = !store.show
            } else return;
        })
    });
    return store.show ? (
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
                    <div className="btn random" onClick={storeCharacterEditor.randomize()}/>
                    <div className="btn create" onClick={storeCharacterEditor.saveCustomization()}/>
                    <div className="btn exit" onClick={storeCharacterEditor.resetDefaut()}/>
                </div>
            </div>
        </div>
    ):null
})
export default CharacterEditor