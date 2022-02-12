import React from "react"


//Баг в СМС текст выходит за поле

import store from "./phone-store";

import '../phone/css/phone.css'
import '../phone/css/app-ico.css'
import {
    BrowserRouter as Router,
    Route,
    NavLink
  } from 'react-router-dom';

import Call from "./components/call/call";
import Msg from "./components/msg/msg";
import Music from "./components/music/music";
import Settings from "./components/settings/settings";
import Blaine from "./components/blaine/blaine";
import Fleeca from "./components/fleeca/fleeca";
import MazeBank from "./components/mazeBank/mazeBank";
import Gps from "./components/gps/gps";
import Pasific from "./components/pasific/pasific";
import Transport from "./components/transport/transport";
import News from "./components/news/news";
import IncomingCall from "./components/callScreen/incomingCall";
import { observer } from "mobx-react-lite";

const Phone = observer(() => {

    const state = store.state
    return state.show ? (
                <Router>
                    <div className={state.active ? 'phone active': 'phone'}>
                        <div className="screen">
                            <div className={state.path === 'news' || state.path === 'bank' ? 'top-bar active' : 'top-bar'}>
                                <div className='time'>
                                    <span>09:41</span>
                                </div>
                                <div className='info'></div>
                            </div>
                            <div className="apps-ico">
                                <NavLink className="app-ico" id="app_gps" to='/gps' onClick={()=> { state.back = true; state.path = ''}}>
                                    <span>GPS</span>
                                </NavLink>
                                <NavLink className="app-ico" id="app_transport" to='/transport' onClick={()=> { state.back = true; state.path = ''}}>
                                    <span>Transport</span>
                                </NavLink>
                                <NavLink className="app-ico" id="app_news" to='/news' onClick={()=> { state.back = true; state.path = 'news'}}>
                                    <span>News</span>
                                </NavLink>
                                <NavLink className="app-ico" id="app_MazeBank" to='/mazebank' onClick={()=> { state.back = true; state.path = 'bank'}}>
                                    <span>Maze Bank</span>
                                </NavLink>
                                <NavLink className="app-ico" id="app_FleecaBank" to='/fleeca' onClick={()=> { state.back = true; state.path = 'bank'}}>
                                    <span>Fleeca Bank</span>
                                </NavLink>
                                <NavLink className="app-ico" id="app_PasificBank" to='/pasific' onClick={()=> { state.back = true; state.path = 'bank'}}>
                                    <span>Pasific Bank</span>
                                </NavLink>
                                <NavLink className="app-ico" id="app_BlaineCounte" to='/blaine' onClick={()=> { state.back = true; state.path = 'bank'}}>
                                    <span>Blaine Count</span>
                                </NavLink>
                            </div>
                            <div className="botton-bar">
                                <NavLink className="app-ico" id="app_message" to='/msg' onClick={()=> {state.back = true; state.path = ''}}/>
                                <NavLink className="app-ico" id="app_music" to='/music' onClick={()=> {state.back = true; state.path = ''}}/>
                                <NavLink className="app-ico" id="app_phone" to='/call' onClick={()=> {state.back = true; state.path = ''}}/>
                                <NavLink className="app-ico" id="app_settings" to='/settings' onClick={()=> {state.back = true; state.path = ''}}/>
                            </div>
                            {
                                state.path === 'news' || state.path === 'bank' ?
                                <NavLink className={state.back ? "back-line black yes" : "back-line black"} to='/' onClick={()=> {state.back = false; state.path = ''; state.active = false}}/>:
                                <NavLink className={state.back ? "back-line yes" : "back-line"} to='/' onClick={()=> {state.back = false; state.path = ''; state.active = false}}/> 
                            }
                            <div className="apps">
                                {/* main app */}
                                <Route exact path='/gps' component={Gps}/>
                                <Route exact path='/transport' component={Transport}/>
                                <Route exact path='/news' component={News}/>
                                <Route exact path='/mazebank' component={MazeBank}/>
                                <Route exact path='/fleeca' component={Fleeca}/>
                                <Route exact path='/pasific' component={Pasific}/>
                                <Route exact path='/blaine' component={Blaine}/>

                                {/* botton-bar */}
                                <Route exact path='/msg' component={Msg}/>
                                <Route exact path='/music' component={Music}/>
                                <Route exact path='/call' component={Call}/>
                                <Route exact path='/settings' component={Settings}/>
                                
                                {/*Call sreen*/}
                                {
                                    state.incomingCall ?
                                        <IncomingCall/>
                                    :null
                                }
                            </div>
                            <div className="wallpaper">
                                {
                                    state.phoneSetting.wallpaper !== null ?
                                    state.phoneSetting.wallpaper.map((item, i)=>(
                                        item.active ? 
                                        <img src={item.url} key={i}  onError={(e)=>{e.target.onerror = null; e.target.src='https://i.imgur.com/AmXWx27.png'}} alt="wallpaper" />:null
                                    )):null
                                }
                            </div>
                        </div>
                        <div className="blocking-btn" onClick={store.blockingClick} />
                        <div className={state.phoneSetting.volume ? "volume-btn" : "volume-btn active"} onClick={store.volumeClick} />
                    </div>
                </Router>
    ):null
})

export default Phone