import React from "react";
import { observer } from "mobx-react-lite";

import '../../css/property.css'

import Home from "./pages/house";
import Cars from "./pages/cars";
import Bussines from "./pages/bussines";

import store from "../../store_AccountMenu";

const Property = observer(()=>{
    const state = store.state
    return(
        <div className="property">
            <div className="nav">
                <div className={state.pageProperty === 'cars' ? 'navButton active': 'navButton'} id='b_cars' onClick={store.setPageProperty}>Транспорт</div>
                <div className={state.pageProperty === 'bussines' ? 'navButton active': 'navButton'} id='b_bussines' onClick={store.setPageProperty}>Бизнес и др.</div>
                <div className={state.pageProperty === 'home' ? 'navButton active': 'navButton'} id='b_home' onClick={store.setPageProperty}>Дом</div>
            </div>
            <div className="content">
                {state.pageProperty === 'cars' ? <Cars />: null}
                {state.pageProperty === 'bussines' ? <Bussines />: null}
                {state.pageProperty === 'home' ? <Home />: null}
            </div>
        </div>
    )
})

export default Property