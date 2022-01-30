import { observer } from "mobx-react-lite";
import React from "react";

import store from "../../../store_AccountMenu";

const Voice = observer(()=>{
    const state = store.stateSettings.voice
    return (
        <div className="voice-settings">
        {state.item.length > 0 ? state.item.map((item, i)=> 
        (
            <div className="item" key={i}>
                <span>{item.name}</span>
                {
                    item.type === 'btn' ?
                    (
                        <div className="btn" id={i} onClick={store.clickBtnVoice}>{item.data}</div>
                    ):null
                }
                {
                    item.type === 'select'  ? 
                (
                    <div className="select" onClick={store.clickSelectVoice} id={i}>
                        <div className="back" name="back">&#60;</div>
                        <span>{item.data[item.index]}</span>
                        <div className="next" name="next">&#62;</div>
                    </div>
                ):null
                }
                {
                    item.type === 'checkbox' ? 
                (
                    <div className={item.data ? 'checkbox active': 'checkbox'} onClick={store.clickCheckboxVoice} id={i}/>
                ):null
                }
            </div>
        )
    ): null}
    </div>
    )
})

export default Voice