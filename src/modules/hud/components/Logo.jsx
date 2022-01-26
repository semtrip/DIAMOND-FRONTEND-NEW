import React from "react";
import { observer } from "mobx-react-lite";

import '../css/logo.css'

import store from "../Hud-store";


const Logo = observer(() => {

const state = store.state
return state.showLogo ? (
    <React.Fragment>
        <div className="logo-block">
            <div className="info">
                {
                    state.status === 'admin' || state.status === 'helper' ?
                    <div className="status">{state.status}</div>:null
                }
                <div className="playerId">{state.id}</div>
                <div className="logo"></div>
            </div>
            <div className="info">
                <div className="date">
                    <div className="time">{state.time}</div>
                    {state.date}
                </div>
                <div className="online">
                    <div className="text">{state.online}</div>
                    Online
                </div>
            </div>
        </div>
    </React.Fragment>
):null
})
export default Logo