import { observer } from "mobx-react-lite";
import React, {useState} from "react";
import storeCharacterEditor from "../store.characterEditor";

const maxTypeHairstyl = 72


const colorHair = ['#1c1f21', '#272a2c', '#312e2c', '#35261c', '#4b321f', '#5c3b24', '#6d4c35', '#6b503b', '#765c45', '#7f684e', '#99815d', '#a79369', '#af9c70', '#bba063', '#d6b97b', '#dac38e', '#9f7f59', '#845039', '#682b1f', '#61120c', '#640f0a', '#7c140f', '#a02e19', '#b64b28', '#a2502f', '#aa4e2b', '#626262', '#808080', '#aaaaaa', '#c5c5c5', '#463955', '#5a3f6b', '#763c76', '#ed74e3', '#eb4b93', '#f299bc', '#04959e', '#025f86', '#023974', '#3fa16a', '#217c61', '#185c55', '#b6c034', '#70a90b', '#439d13', '#dcb857', '#e5b103', '#e69102', '#f28831', '#fb8057', '#e28b58', '#d1593c', '#ce3120', '#ad0903', '#880302', '#1f1814', '#291f19', '#2e221b', '#37291e', '#2e2218', '#231b15', '#020202', '#706c66', '#9d7a50']

const Haris = observer(()=>{
    const state = storeCharacterEditor.state
    const [hairstyleId, setHairstyleId] = useState(0);
    const [hairstyleOptionId, setHairstyleOptionId] = useState(0);
    const setHairstyl = (type) => {
        let id = 0
        switch (type) {
            case 'back':
                if (hairstyleId === 0) {
                    id = maxTypeHairstyl
                    setHairstyleId(id)
                    state.input_editor_face_last[0].value = id
                    storeCharacterEditor.setCustomization()
                } else {
                    id = hairstyleId - 1
                    setHairstyleId(id)
                    state.input_editor_face_last[0].value = id
                    storeCharacterEditor.setCustomization()
                }
                break;
            case 'next':
                if (hairstyleId === maxTypeHairstyl) {
                    id = 0
                    setHairstyleId(id)
                    state.input_editor_face_last[0].value = id
                    storeCharacterEditor.setCustomization()
                } else {
                    id = hairstyleId + 1
                    setHairstyleId(id)
                    state.input_editor_face_last[0].value = id
                    storeCharacterEditor.setCustomization()
                }
                break;
            default:
                break;
        }
    }
    const setHairstylOption = (type) => {
        let id = 0
        switch (type) {
            case 'back':
                if (hairstyleOptionId === 0) {
                    id = maxTypeHairstyl
                    setHairstyleOptionId(id)
                    state.input_editor_face_last[1].value = id
                    storeCharacterEditor.setCustomization()
                } else {
                    id = hairstyleOptionId - 1
                    setHairstyleOptionId(id)
                    state.input_editor_face_last[1].value = id
                    storeCharacterEditor.setCustomization()
                }
                break;
            case 'next':
                if (hairstyleOptionId === maxTypeHairstyl) {
                    id = 0
                    setHairstyleOptionId(id)
                    state.input_editor_face_last[1].value = id
                    storeCharacterEditor.setCustomization()
                } else {
                    id = hairstyleOptionId + 1
                    setHairstyleOptionId(id)
                    state.input_editor_face_last[1].value = id
                    storeCharacterEditor.setCustomization()
                }
                break;
            default:
                break;
        }
    }
    return (
        <div className="hair-box">
            <div className="content">
                <div className="select-box">
                    <div className="title">Hairstyle</div>
                    <div className="select">
                        <div className="back" onClick={()=>{setHairstyl('back')}}/>
                        <span>Option {hairstyleId}</span>
                        <div className="next" onClick={()=>{setHairstyl('next')}}/>
                    </div>
                </div>
                <div className="select-box">
                    <div className="title">Hairstyle style</div>
                    <div className="select">
                        <div className="back" onClick={()=>{setHairstylOption('back')}}/>
                        <span>Option {hairstyleOptionId}</span>
                        <div className="next" onClick={()=>{setHairstylOption('next')}}/>
                    </div>
                </div>
                <div className="color-box">
                    <div className="title">Hair color</div>
                    <div className="color">
                    {   
                        colorHair.map((item, i)=>(
                            <div className="item" style={{background: item, 'box-shadow': '0px 0px 3px' + item}} onClick={()=>{{state.input_editor_face_last[2].index_help = i}; {storeCharacterEditor.setCustomization()}}}/>
                        ))
                    }
                    </div>
                </div>
                <div className="color-box">
                    <div className="title">Highlighting of hair</div>
                    <div className="color">
                    {   
                        colorHair.map((item, i)=>(
                            <div className="item" style={{background: item, 'box-shadow': '0px 0px 3px' + item}} onClick={()=>{{state.input_editor_face_last[3].index_help = i}; {storeCharacterEditor.setCustomization()}}}/>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    ) //Hairstyle style
})
export default Haris
