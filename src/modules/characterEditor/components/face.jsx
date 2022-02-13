import { observer } from "mobx-react-lite";
import React, {useState} from "react";

import '../css/module.scss'
import storeCharacterEditor from "../store.characterEditor";


const colorHair = ['#1c1f21', '#272a2c', '#312e2c', '#35261c', '#4b321f', '#5c3b24', '#6d4c35', '#6b503b', '#765c45', '#7f684e', '#99815d', '#a79369', '#af9c70', '#bba063', '#d6b97b', '#dac38e', '#9f7f59', '#845039', '#682b1f', '#61120c', '#640f0a', '#7c140f', '#a02e19', '#b64b28', '#a2502f', '#aa4e2b', '#626262', '#808080', '#aaaaaa', '#c5c5c5', '#463955', '#5a3f6b', '#763c76', '#ed74e3', '#eb4b93', '#f299bc', '#04959e', '#025f86', '#023974', '#3fa16a', '#217c61', '#185c55', '#b6c034', '#70a90b', '#439d13', '#dcb857', '#e5b103', '#e69102', '#f28831', '#fb8057', '#e28b58', '#d1593c', '#ce3120', '#ad0903', '#880302', '#1f1814', '#291f19', '#2e221b', '#37291e', '#2e2218', '#231b15', '#020202', '#706c66', '#9d7a50']

const colorsEyes = ['#465534','#2b573f','#31617c','#2d4069','#633c32','#5c3928','#ac6c13','#273f63','#2b5580','#99268e','#a52798','#351f96','#286685','#233d57','#795b24','#808d1a','#3f4e6b','#721315','#752f1a','#545962','#617380','#47742d','#812e23','#3f4a8f','#806d3b','#c0911a','#434377','#8a0b0d','#3d5a86','#31598d','#415985','#3c487c','#21251d']


const maxTypeEyebrows = 31
const maxTypeFreckles = 17

const Face = observer(()=>{
    const state = storeCharacterEditor.state
    const [path, setPath] = useState('nose');
    const [eyebrowsId, setEyebrowsId] = useState(0);
    const [frecklesId, setFrecklesId] = useState(0);

    const setEyebrows = (type) => {
        let id = 0
        switch (type) {
            case 'back':
                if (eyebrowsId === 0) {
                    id = maxTypeEyebrows
                    setEyebrowsId(id)
                    state.input_editor_face_last[4].value = id
                    storeCharacterEditor.setCustomization()
                } else {
                    id = eyebrowsId - 1
                    setEyebrowsId(id)
                    state.input_editor_face_last[4].value = id
                    storeCharacterEditor.setCustomization()
                }
                break;
            case 'next':
                if (eyebrowsId === maxTypeEyebrows) {
                    id = 0
                    setEyebrowsId(id)
                    state.input_editor_face_last[4].value = id
                    storeCharacterEditor.setCustomization()
                } else {
                    id = eyebrowsId + 1
                    setEyebrowsId(id)
                    state.input_editor_face_last[4].value = id
                    storeCharacterEditor.setCustomization()
                }
                break;
            default:
                break;
        }
    }
    const setFreckles = (type) => {
        let id = 0
        switch (type) {
            case 'back':
                if (frecklesId === 0) {
                    id = maxTypeFreckles
                    setFrecklesId(id)
                    state.input_editor_face_last[7].value = id
                    storeCharacterEditor.setCustomization()
                } else {
                    id = frecklesId - 1
                    setFrecklesId(id)
                    state.input_editor_face_last[7].value = id
                    storeCharacterEditor.setCustomization()
                }
                break;
            case 'next':
                if (frecklesId === maxTypeFreckles) {
                    id = 0
                    setFrecklesId(id)
                    state.input_editor_face_last[7].value = id
                    storeCharacterEditor.setCustomization()
                } else {
                    id = frecklesId + 1
                    setFrecklesId(id)
                    state.input_editor_face_last[7].value = id
                    storeCharacterEditor.setCustomization()
                }
                break;
            default:
                break;
        }
    }

    return (
        <div className="face-box">
            <div className="nav-box">
                <div className={path === 'nose' ? 'link-box nose active' : 'link-box nose'} onClick={()=>{setPath('nose')}}><span>Nose</span></div>
                <div className={path === 'eyebrows' ? 'link-box eyebrows active' : 'link-box eyebrows'} onClick={()=>{setPath('eyebrows')}}><span>Eyebrows</span></div>
                <div className={path === 'eyes' ? 'link-box eyes active' : 'link-box eyes'}  onClick={()=>{setPath('eyes')}}><span>Eyes</span></div>
                <div className={path === 'lips' ? 'link-box lips active' : 'link-box lips'} onClick={()=>{setPath('lips')}}><span>Lips</span></div>
                <div className={path === 'chin' ? 'link-box chin active' : 'link-box chin'} onClick={()=>{setPath('chin')}}><span>The chin</span></div>
            </div>
            <div className="content">
            {
                path === 'nose' ? 
                <>
                    <div className="range">
                        <div className="title">Nose width</div>
                        <input type="range" step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_nose[0].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Nose height</div>
                        <input type="range" step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_nose[1].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Nose tip length</div>
                        <input type="range" step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_nose[2].value = e.target.value};{storeCharacterEditor.setCustomization()}}} />
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Nose tip height</div>
                        <input type="range"  step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_nose[3].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Below</span>
                            <span>Higher</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Nose Bridge depth</div>
                        <input type="range"  step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_nose[4].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Broken nose</div>
                        <input type="range"  step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_nose[5].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                </>
                :
                path === 'eyebrows' ?
                <>
                    <div className="select-box">
                        <div className="title">Type of eyebrows</div>
                        <div className="select">
                            <div className="back" onClick={()=>{setEyebrows('back')}}/>
                            <span>Option {eyebrowsId}</span>
                            <div className="next" onClick={()=>{setEyebrows('next')}}/>
                        </div>
                    </div>
                    <div className="color-box">
                        <div className="title">Eyebrow color</div>
                        <div className="color">
                        {   
                            colorHair.map((item, i)=>(
                                <div className="item" style={{background: item, 'box-shadow': '0px 0px 3px' + item}} onClick={()=>{{state.input_editor_face_last[5].index_help = i}; {storeCharacterEditor.setCustomization()}}}/>
                            ))
                        }
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Eyebrow height</div>
                        <input type="range"  step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_face[0].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Below</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Eyebrow depth</div>
                        <input type="range" step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_face[1].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Darker</span>
                            <span>Lighter</span>
                        </div>
                    </div>
                </>
                :
                path === 'eyes' ?
                <>
                    <div className="range">
                        <div className="title">Epicanthus</div>
                        <input type="range" step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_eyes_lips[0].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="color-box">
                        <div className="title">Eyes color</div>
                        <div className="color">
                        {   
                            colorsEyes.map((item, i)=>(
                                <div className="item" style={{background: item, 'box-shadow': '0px 0px 3px' + item}} onClick={()=>{{state.input_editor_face_last[6].index_help = i}; {storeCharacterEditor.setCustomization()}}}/>
                            ))
                        }
                        </div>
                    </div>
                </>
                :
                path === 'lips' ?
                <>
                    <div className="range">
                        <div className="title">Lip thickness</div>
                        <input type="range" step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_eyes_lips[1].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Cheekbone height</div>
                        <input type="range" step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_face[2].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Cheekbone width</div>
                        <input type="range" step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_face[3].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Cheek depth</div>
                        <input type="range"step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_face[4].value = e.target.value};{storeCharacterEditor.setCustomization()}}} />
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                </>
                :
                path === 'chin' ?
                <>
                    <div className="range">
                        <div className="title">Jaw width</div>
                        <input type="range" step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_face[5].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Jaw shape</div>
                        <input type="range" step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_face[6].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Chin height</div>
                        <input type="range" step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_face[7].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Chin width</div>
                        <input type="range" step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_face[8].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Chin depth</div>
                        <input type="range"  step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_face[9].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Chin padding</div>
                        <input type="range"  step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_face[10].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="range">
                        <div className="title">Neck girth</div>
                        <input type="range"  step={1} min={-100}  max={100} onChange={(e)=>{{state.input_editor_face[11].value = e.target.value};{storeCharacterEditor.setCustomization()}}}/>
                        <div className="text">
                            <span>Less</span>
                            <span>More</span>
                        </div>
                    </div>
                    <div className="select-box">
                        <div className="title">Freckles</div>
                        <div className="select">
                            <div className="back" onClick={()=>{setFreckles('back')}}/>
                            <span>Option {frecklesId}</span>
                            <div className="next" onClick={()=>{setFreckles('next')}}/>
                        </div>
                    </div>
                </>
                :null
            }
            </div>
        </div>
    )
})
export default Face
    