import React from "react";

import '../callScreen/css/incomungCall.css'

import store from "../../phone-store";
import { observer } from "mobx-react-lite";

const IncomingCall = observer(()=>{
    const state = store.state

    return (
        <React.Fragment >
            <div className="incomingCall">
                <span className="number">+7 (800) 255 35 35</span>
                <div className="btns">
                    
                </div>
            </div>
        </React.Fragment>
    )

})

export default IncomingCall