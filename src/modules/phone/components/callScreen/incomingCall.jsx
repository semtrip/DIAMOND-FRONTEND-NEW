import React from "react";

import '../callScreen/css/incomungCall.css'

import store from "../../phone-store";
import { observer } from "mobx-react-lite";

const IncomingCall = observer(()=>{
    const state = store.state

    return (
        <React.Fragment >
            <div className="incomingCall">
                <span className="number">{state.number}</span>
                <div className="btns">
                    
                </div>
            </div>
        </React.Fragment>
    )

})

export default IncomingCall