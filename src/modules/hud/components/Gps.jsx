import React from "react";
import { observer } from "mobx-react-lite";

import '../css/gps.css'

import store from "../Hud-store";


const Gps = observer(() => {

const state = store.state
return state.showGps ? (
    <React.Fragment>
        <div className="gps-block">
            <div className="text">
                {state.district}
                <span>{state.street}</span>
            </div>
            {
                state.distance !== '' ?
                <div className="distance">
                    <span>{state.distance} M</span>
                </div> :null
            }

        </div>
    </React.Fragment>
):null
})
export default Gps