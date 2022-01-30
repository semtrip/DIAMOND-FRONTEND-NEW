import React from "react";
import { observer } from "mobx-react-lite";

import store from "../../../store_AccountMenu";


const Button = observer(() => {
    const state = store.stateSettings.button
    return (
        <div className="button-settings">
            {state.item.length > 0 ? state.item.map((item, i)=> 
                (
                    <div className="item-button" key={i} id={i}>
                        <div className="key" onClick={store.clickKeyButton}>{item.data}</div>
                        <div className="name">{item.name}</div>
                    </div>
                )
                
            ): null}
        </div>
    )
})

export default Button 