import React from "react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import './css/main.css'

import store from "./store_AccountMenu";

import logo from './img/logo.png'

import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Redirect
  } from 'react-router-dom';

import playerStats from "./components/playerStats/playerStats";
import property from "./components/property/property";
import reports from "./components/reports/reports";
import Mission from "./components/mission/mission";
import settings from "./components/settings/settings";


const AccountMenu = observer(() => {
    const state = store.state
    const stateHouse = store.stateHouse
    const stateCars = store.stateCars
    const stateBussines = store.stateBussines
    const stateReports = store.stateReports
    const stateSettings = store.stateSettings
    const { EventManager: em } = window;
    useEffect(() => {
        em.addHandler('accountMenu', value => {
            if (value.type === 'show') {
                state.show = true
            } else if (value.type === 'hide') {
                state.show = false
            } else return;
        })
        em.addHandler('accountMenu', value => {
            if (value.type === 'updatePlayer') {
                state.name = value.name
                state.id = value.id
                state.fraction = value.fraction
                state.sex = value.sex
                state.birth = value.birth
                state.reg = value.reg
                state.spouse = value.spouse
                state.playTime = value.playTime
                state.lastLogin = value.lastLogin
                state.dateRegistation = value.dateRegistation
                state.cash = value.cash
                state.bank = value.bank
                state.stats = value.stats
            }
        })
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateMission') {
                state.mission = value.mission
            }
        })
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateHouse') {
                stateHouse.id = value.id
                stateHouse.address = value.address
                stateHouse.tax = value.tax
                stateHouse.places = value.places
                stateHouse.garage = value.garage
                stateHouse.rent = value.rent
                stateHouse.price = value.price
            }
        })
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateCars') {
                stateCars.cars = value.cars
                stateCars.slots = value.slots
            }
        })
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateBussines') {
                stateBussines.id = value.id
                stateBussines.address = value.address
                stateBussines.tax = value.tax
                stateBussines.price = value.price
            }
        })
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateReports') {
                stateReports.reports = value.reports
                stateReports.path = value.path
            }
        })
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateSettingButton') {
                stateSettings.button.item = value.item
            }
        })
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateSettingChat') {
                stateSettings.chat.item = value.item
            }
        })
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateSettingInterface') {
                stateSettings.interface.item = value.item
            }
        })
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateSettingMain') {
                stateSettings.main.item = value.item
            }
        })
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateSettingVoice') {
                stateSettings.voice.item = value.item
            }
        })
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateSettingMap') {
                stateSettings.map.item = value.item
            }
        })
        if(state.path === '/reports') {
            document.getElementById('messagePole').scrollTop = 9999
        }
    })
    return state.show ? (
        <React.Fragment >
            <Router>
                <div className='window'>
                    <div className="mainMenu">
                        <div className="navBar">
                            <div className="logo menuBlock"><img src={logo} alt="" /></div>
                            <div className="mainNav menuBlock">
                                <NavLink className={({ isActive }) => isActive ? "" : "navButton"} id='b_player' to='/player'/>
                                <NavLink className={({ isActive }) => isActive ? "" : "navButton"} id='b_property' to={{pathname: '/property',}} />
                                {/* <NavLink className={({ isActive }) => isActive ? "" : "navButton"} id='b_reports' to='/reports'/> */}
                                <NavLink className={({ isActive }) => isActive ? "" : "navButton"} id='b_mission' to='/mission'/>
                            </div>
                            <NavLink className={({ isActive }) => isActive ? "" : "settings menuBlock"} to='/settings'/>
                        </div>
                        <div className="pages">
                                <Route exact path='/player' component={playerStats}/>
                                <Route exact path='/property' component={property}/>
                                <Route path='/reports' component={reports}/>
                                <Route path="/mission" component={Mission}/>
                                <Route path='/settings' component={settings}/>
                                <Redirect to={state.path} state={state.property_path}/>
                        </div>
                        <div className="close" onClick={store.closeMenu}></div>
                    </div>
                </div>
            </Router>
        </React.Fragment>
    ):null
})


export default AccountMenu
