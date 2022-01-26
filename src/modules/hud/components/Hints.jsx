import React from "react";
import { observer } from "mobx-react-lite";

import '../css/hints.css'

import store from "../Hud-store";


const Hints = observer(() => {

const state = store.state
const ico = ['micro', 'engine', 'bug', 'panel', 'game']
return state.showHints ? (
    <React.Fragment>
        <div className="hints-block">
            <div className="items">
            {
                state.hints.map((item, i)=>(
                    <div className="item" key={i}>
                        <div className="text">
                            <span>{item.text}</span> 
                        </div>
                        <div className="key">
                            <span>{item.key}</span>
                            <div className={item.ico !== undefined ? 'ico ' + ico[item.ico -1] : 'ico'} />
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </React.Fragment>
):null
})
export default Hints