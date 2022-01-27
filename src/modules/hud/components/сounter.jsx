import React from "react";
import { observer } from "mobx-react-lite";

import '../css/counter.css'

import store from "../Hud-store";


const Counter = observer(() => {

const state = store.state
return state.showGang ? (
    <React.Fragment>
        <div className="counter-block">
            <div className="counter-att">

            </div>
            <div className="counter-timer">
                    {state.timer}
            </div>
            <div className="counter-def">

            </div>
        </div>
    </React.Fragment>
):null
})
export default Counter