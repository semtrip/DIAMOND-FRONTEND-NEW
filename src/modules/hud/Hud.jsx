import React from "react";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import store from "./Hud-store";

import './css/hud.css'

import Logo from "./components/logo";
import Player from "./components/player";
import Gps from "./components/gps";
import Car from "./components/car";
import Hints from "./components/hints";
import MainMenu from "./components/mainMenu";
import Chat from "./components/chat";
import Notification from "./components/Notification/Notification";


const Hud = observer(() => {
    const state = store.state
    useEffect(() => {
        const { EventManager: em } = window;
        em.addHandler('hud', value => {
            if (value.type === 'show') {
                state.show = true
            } else if (value.type === 'hide') {
                state.show = false
            } else return;
        })
        em.addHandler('hudl', value => {
            if (value.type === 'show') {
                state.showLogo = true
            } else if (value.type === 'hide') {
                state.showLogo = false
            } else if (value.type === 'updateValues') {
                state.date = value.date
                state.time = value.time
                state.online = value.online
                state.max_player = value.max_player
                state.id = value.id
                state.showAmmo = value.showAmmo
                state.ammoCount = true
                state.ammoMode = value.ammoMode
                state.background = value.background
                state.status = value.status
            } else if (value.type === 'updateQuest') {
                state.showQuest = value.showQuest
                state.questTitle = value.questTitle
                state.questText = value.questText
                state.questDesc = value.questDesc
            } else if (value.type === 'updateQuestAnim') {
                state.questAnim = value.questAnim
            } else return;
        })
        em.addHandler('hudp', value => {
            if (value.type === 'show') {
                state.showPlayer = true
            } else if (value.type === 'hide') {
                state.showPlayer = false
            } else if (value.type === 'updateValues') {
                state.microphone = value.microphone
                state.drink = value.drink
                state.eat = value.eat
                state.wallet = value.wallet
                state.card = value.card
                state.background = value.background
            } else return;
        })
        em.addHandler('hudk', value => {
            if (value.type === 'show') {
                state.showHints = true
            } else if (value.type === 'hide') {
                state.showHints = false
            } else if (value.type === 'updateValues') {
                state.hints = value.hints
            } else return;
        })
        em.addHandler('hudg', value => {
            if (value.type === 'show') {
                state.showGps = true
            } else if (value.type === 'hide') {
                state.showGps = false
            } else if (value.type === 'updateValues') {
                state.showGps = value.isShow
                state.district = value.district 
                state.street = value.street 
                state.background = value.background 
                state.showGreen = value.showGreen 
                state.showYellow = value.showYellow
                state.distance = value.distance  
            }
            else if (value.type === 'updateGangInfo') {
                state.att = value.top1 
                state.def = value.top2 
                state.timer = value.timerCounter 
            }
            else if (value.type === 'showGangInfo') {
                state.showGang = true
            }
            else if (value.type === 'hideGangInfo') {
                state.showGang = false
            }
            else if (value.type === 'updateMafiaInfo') {
                state.att = value.top1 
                state.def = value.top2
                state.tre = value.top3  
                state.timer = value.timerCounter 
            }
            else if (value.type === 'showMafiaInfo') {
                state.showMafia = true
            }
            else if (value.type === 'hideMafiaInfo') {
                state.showMafia = false
            }
            else return;
        })
        em.addHandler('hudc', value => {
            if (value.type === 'show') {
                state.showSpeed = true
            } else if (value.type === 'hide') {
                state.showSpeed = false
            } else if (value.type === 'updateValues') {
                state.showSpeed = value.isShow
                state.isShowSmall = value.isShowSmall
                state.light = value.light
                state.door = value.door
                state.engine = value.engine
                state.fuel = value.fuel
                state.fuelType = value.fuelType
                state.max_fuel = value.max_fuel
                state.speed = value.speed
                state.speedLabel = value.speedLabel
                state.background = value.background
                state.carname = value.carname
                state.turnLeft = value.turnLeft
                state.turnRight = value.turnRight
            } else if (value.type === 'updateRadarValues') {
                state.showRadar = value.showRadar
                state.radarRearSpeed = value.radarRearSpeed
                state.radarRearSpeedMax = value.radarRearSpeedMax
                state.radarFrontSpeed = value.radarFrontSpeed
                state.radarFrontSpeedMax = value.radarFrontSpeedMax
                state.radarPatrolSpeed = value.radarPatrolSpeed
            } else return;
        })
        em.addHandler('hudm', value => {
            if (value.type === 'show') {
                state.showMenu = true
            } else if (value.type === 'hide') {
                state.showMenu = false
            } else if (value.type === 'switch') {
                state.showMenu = !state.showMenu
            } else if (value.type === 'updateInfo') {
                state.showMenu = true
                state.headerMenu = value.header
                state.headerText = value.headerText
                state.headerDesc = value.headerDesc
                state.banner = value.banner
                state.menuList = value.menuList
                state.menuName = value.menuName
            } else return;
        })
    });

return state.show ? (
    <React.Fragment>
        <div className="hud-main">
            <div className='leftop'>
                <div className="chat-block">
                    <Chat/>
                </div>
            </div>
            <div className='righttop'>
                <Logo/>
                <MainMenu/>
            </div>
            <div className='leftbottom'>
                <Player/>
                <Gps/>
            </div>
            <div className="rightbottom">
                <Car/>
                <Hints/>
            </div>
            <Notification/>
        </div>
    </React.Fragment>
):null
})
export default Hud
