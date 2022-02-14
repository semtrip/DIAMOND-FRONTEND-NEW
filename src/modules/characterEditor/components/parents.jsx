import { observer } from "mobx-react-lite";
import React, {useState} from "react";
import { action } from "mobx";

import '../css/module.scss'

import storeCharacterEditor from "../store.characterEditor";

const father = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,42,43,44]
const mother = [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,45]


const fatherName = ['Benjamin','Daniel', 'Joshua', 'Noah', 'Andrew', 'Juan', 'Alex', 'Isaac', 'Evan', 'Ethan', 'Vincent', 'Angel', 'Diego', 'Adrian', 'Gabriel', 'Michael', 'Santiago','Kevin', 'Louis', 'Samuel', 'Anthony', 'Claude', 'Niko', 'John']
const motherName = ['Hannah','Audrey','Jasmine','Giselle','Amelia','Isabella','Zoe','Ava','Camila','Violet','Sophia','Evelyn','Nicole','Ashley','Grace','Brianna','Natalie','Olivia','Elizabeth','Charlotte','Emma','Misty']

console.log('length array 1 ', fatherName.length)
console.log('length array 2 ', motherName.length)
const Parents = observer(()=>{
    const state = storeCharacterEditor.state
    const [fatherId, setFatherId] = useState(state.slider[1].index_help);
    const [motherId, setMotherId] = useState(state.slider[0].index_help);

    const setFather = (data) => {
        let id = 0
        switch (data) {
            case 'back':
                if (fatherId === 0) {
                    id = father.length - 1
                    setFatherId(id)
                    state.slider[1].index_help = id

                } else {
                    id = fatherId - 1
                    setFatherId(id)
                    state.slider[1].index_help = id
                }
                break;
            case 'next':
                if (fatherId === father.length - 1) {
                    id = 0
                    setFatherId(id)
                    state.slider[1].index_help = id
                } else {
                    id = fatherId + 1
                    setFatherId(id)
                    state.slider[1].index_help = id
                    
                }
                break;
            default:
                break;
        }
        storeCharacterEditor.setCustomization()
    }
    const setMother = (data) => {
        let id = 0
        switch (data) {
            case 'back':
                if (motherId === 0) {
                    id = mother.length - 1
                    setMotherId(id)
                    state.slider[0].index_help = id
                } else {
                    id = motherId - 1
                    setMotherId(id)
                    state.slider[0].index_help = id
                }
                break;
            case 'next':
                if (motherId === mother.length - 1) {
                    id = 0
                    setMotherId(id)
                    state.slider[0].index_help = id
                } else {
                    id = motherId + 1
                    setMotherId(id)
                    state.slider[0].index_help = id
                }
                break;
            default:
                break;
        }
        storeCharacterEditor.setCustomization()
    }

    return (
        <div className="parents">
            <span className="title">Parents' choice</span>
            <div className="selection">
                <div className="father">
                    <img src={`img/create_character/parents/parent_${father[fatherId]}.png`} alt="" />
                    <div className="select">
                        <div className="back" onClick={()=>{setFather('back')}}/>
                        <span>{fatherName[fatherId]}</span>
                        <div className="next" onClick={()=>{setFather('next')}}/>
                    </div>
                </div>
                <div className="mother">
                <img src={`img/create_character/parents/parent_${mother[motherId]}.png`} alt="" />
                    <div className="select">
                        <div className="back" onClick={()=>{setMother('back')}}/>
                        <span>{motherName[motherId]}</span>
                        <div className="next" onClick={()=>{setMother('next')}}/>
                    </div>
                </div>
            </div>
            <div className="range">
                <div className="title">Similarity with parents</div>
                <input type="range" step={1} min={0} max={20}  
                defaultValue={state.slider[2].index_help}
                onChange={action(e => {
                    state.slider[2].index_help = e.target.value
                    storeCharacterEditor.setCustomization()
                })} />
                <div className="text">
                    <span>Mother</span>
                    <span>Father</span>
                </div>
            </div>
            <div className="range">
                <div className="title">Skin color</div>
                <input type="range" step={1} min={0} max={20}  
                defaultValue={state.slider[3].index_help}
                onChange={action(e => {
                    state.slider[3].index_help = e.target.value
                    storeCharacterEditor.setCustomization()
                })} />
                <div className="text">
                    <span>Darker</span>
                    <span>Lighter</span>
                </div>
            </div>
        </div>
    )
})

export default Parents