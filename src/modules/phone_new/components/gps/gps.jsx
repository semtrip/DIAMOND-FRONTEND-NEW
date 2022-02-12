import { observer } from "mobx-react-lite";
import React from "react";

import store from "../../phone-store";

import '../gps/css/gps.css'


const Gps = observer(() => {
    const state = store.state
    return(
        <React.Fragment >
            <div className="app-screen">
                <div className="gps-screen">
                    <div className="top">
                        <span>Navigation</span>
                        <div className="search">
                            <input type="text" placeholder="Search..." maxLength={35} onChange={store.searchGps}/>
                        </div>
                    </div>
                    <div className="text">
                        <span>List of places:</span>
                        <span>{state.appGps.gpsList.length}</span>
                    </div>
                    <div className="list">
                        {
                            state.appGps.gpsList.map((item, i)=>(
                                item.name.toLowerCase().includes(state.appGps.searchData) ?
                                <div className="item" key={i} data-name={i} onClick={store.clickGps}>
                                    {item.name}
                                    <span>{item.distance}km</span>
                                </div>:null
                            ))
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
})
export default Gps