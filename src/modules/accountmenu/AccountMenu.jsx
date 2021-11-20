import React from "react";
import './css/main.css'

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
import mission from "./components/mission/mission";
import settings from "./components/settings/settings";


const { EventManager: em } = window;

export default class AccountMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            path: '/player'
        }
    }

    componentDidCatch() {
        mp.trigger() // eslint-disable-line
    }    

    componentDidMount() {
        
    }
    componentWillUnmount() {
        em.removeHandler('accmain');
    }
    closeMenu = () => {
        this.setState({show: false})
    }
    render() {
        if (!this.state.show) {
            return null;
        }
        return(
            <React.Fragment >
                <Router>
                    <div className='window'>
                        <div className="mainMenu">
                            <div className="navBar">
                                <div className="logo menuBlock"><img src={logo} alt="" /></div>
                                <div className="mainNav menuBlock">
                                    <NavLink className={({ isActive }) => isActive ? "" : "navButton"} id='b_player' to='/player'/>
                                    <NavLink className={({ isActive }) => isActive ? "" : "navButton"} id='b_property' to='/property'/>
                                    <NavLink className={({ isActive }) => isActive ? "" : "navButton"} id='b_reports' to='/reports'/>
                                    <NavLink className={({ isActive }) => isActive ? "" : "navButton"} id='b_mission' to='/mission'/>
                                </div>
                                <NavLink className={({ isActive }) => isActive ? "" : "settings menuBlock"} to='/settings'/>
                            </div>
                            <div className="pages">
                                    <Route exact path='/player' component={playerStats}/>
                                    <Route exact path='/property' component={property}/>
                                    <Route exact path='/reports' component={reports}/>
                                    <Route exact path="/mission" component={mission}/>
                                    <Route exact path='/settings' component={settings}/>
                                    <Redirect to='/player'/>
                            </div>
                            <div className="close" onClick={this.closeMenu}></div>
                        </div>
                    </div>
                </Router>
            </React.Fragment>


            
        )
    }
}