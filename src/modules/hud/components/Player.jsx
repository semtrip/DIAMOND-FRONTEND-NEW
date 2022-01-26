import React from "react";
import { observer } from "mobx-react-lite";

import '../css/player.css'

import store from "../Hud-store";


const Player = observer(() => {

const state = store.state

const eat = {
    width: state.eat + '%'
}
const drink = {
    width: state.drink + '%'
}
return state.showPlayer ? (
    <React.Fragment>
        <div className="player-block">
            <div className={state.microphone ? 'micro active' : 'micro'}>
                <div className="text">
                    Voice chat
                    {
                        state.microphone ?
                        <span>Active</span>
                        :<span>No active</span>
                    }
                    
                </div>
            </div>
            <div className="eat">
                <div className="line">
                    <div className="progres" style={eat}></div>
                </div>
            </div>
            <div className="drink">
                <div className="line">
                    <div className="progres" style={drink}></div>
                </div>
            </div>
            <div className="cash"><span>{state.wallet}</span></div>
            <div className="bank"><span>{state.card}</span></div>
        </div>
    </React.Fragment>
):null
})
export default Player