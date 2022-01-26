import { observer } from "mobx-react-lite";
import React from "react";

import '../transport/css/transport.css'

import store from "../../phone-store";

const Transport = observer(() => {
    const state = store.state
    return(
        <React.Fragment >
            <div className="app-screen">
                <div className="transport-screen">
                    <span className="title">Your garage</span>
                    <div className="content">
                    {
                        state.appTransport.map((item, i) => (
                            <div className={item.active ? 'car active': 'car'}>
                                <div className="item" key={i} data-name={i} onClick={store.activeItemTransport}>
                                    <img src={item.img} alt="car" />
                                    <div className="info">
                                        <div className="modelName">
                                            <div className="name">{item.name}</div>
                                            <div className="model">{item.model}</div>
                                        </div>
                                        <span>license plate:</span>
                                        <div className="number">{item.number}</div>
                                    </div>
                                    <div className="price">
                                        <span>State price:</span>
                                        <div className="cash">{item.price}<b>$</b></div>
                                    </div>
                                </div>
                                <div className="btns">
                                    <div className="btn" id="truck" data-name={i} onClick={store.clickEvacuation}>
                                        <span>Call a tow truck</span>
                                        <div className="price">
                                            <span>Price:</span>
                                            <span className="cash">{item.evacuationPrice}<b>$</b></span>
                                        </div>
                                    </div>
                                    <div className="btn" id="gps" data-name={i} onClick={store.clickGpsTransport}><span>Find out the location of the transport</span></div> 
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
})
export default Transport