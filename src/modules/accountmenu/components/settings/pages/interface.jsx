import { observer } from "mobx-react-lite";
import React from "react";

import store from "../../../store_AccountMenu";

const Interface = observer(()=>{
    const state = store.stateSettings.interface
    return (
        <>
        <div className="interface-setting">
            {state.item.length > 0 ? state.item.map((item, i)=> 
                (
                    <div className="item" key={i}>
                        <span>{item.name}</span>
                        {
                            item.type === 'btn' ?
                            (
                                <div className="btn" id={i} onClick={store.clickBtnInterface}>{item.data}</div>
                            ):null
                        }
                        {
                            item.type === 'select'  ? 
                        (
                            <div className="select" onClick={store.clickSelectInterface} id={i}>
                                <div className="back" name="back">&#60;</div>
                                <span>{item.data[item.index]}</span>
                                <div className="next" name="next">&#62;</div>
                            </div>
                        ):null
                        }
                        {
                            item.type === 'checkbox' ? 
                        (
                            <div className={item.data ? 'checkbox active': 'checkbox'} onClick={store.clickCheckboxInterface} id={i}/>
                        ):null
                        }
                    </div>
                )
                
            ): null}
        </div>
        <div className="interface-button">
                <div className="text">
                    <span>Чтобы изменения вступили в силу, нажмите кнопку “Применить”</span>
                    <span>Чтобы сбросить введеные вами изменения нажмите кнопку “Сбросить”</span>
                </div>
                <div className="btn">
                    <div className="apply" onClick={store.clickApplyInterface}>Применить</div>
                    <div className="throw" onClick={store.clickThrowInterface}>Сбросить</div>
                </div>
         </div>
         </>
    )
})

export default Interface