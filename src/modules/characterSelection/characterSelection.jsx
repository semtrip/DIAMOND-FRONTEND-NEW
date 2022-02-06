import { observer } from "mobx-react-lite";
import React, {useState, useEffect} from "react";

import './css/main.scss'

import store from "./store.characterSelection";

const { EventManager: em } = window;

const characterSelection = observer(()=> {
    const state = store.state
    const [idPage, setIdPage] = useState(0);
    const [modal, setModal] = useState(false);
    const [show, setShow] = useState(false);
    let id = 0
    useEffect(() => {
        
        em.addHandler('ChangePlayer', value => {
            if (value.type === 'show') {
                setShow(true)
            } else if (value.type === 'hide') {
                setShow(false)
            } else if (value.type === 'switch') {
                setShow(!show)
            } else if (value.type === 'updatePlayers') {
                store.state.info_player = value.players
            }
        })
        document.onkeydown = function(e) {
            if (e.keyCode === 37) {
                if(id === 0) {
                    setIdPage(2)
                    id = 2
                } else {
                    id = id - 1
                    setIdPage(id)
                }
            }
            if (e.keyCode === 39) {
                if(id === 2) {
                    id = 0
                    setIdPage(0)
                } else {
                    id = id + 1
                    setIdPage(id)
                }
            }  
        };
    }, []);
    return show ? (
        <div className="characterSelection">
            <div className="character-box">
                {
                    state.info_player[idPage] !== undefined ? 
                    <>
                    <div className="name">{state.info_player[idPage].name} <b>#{state.info_player[idPage].id}</b></div>
                    <div className="info">
                        <div className="item">
                            <div className="ico"/>
                            <div className="text">
                                <span>Time in the game</span>
                                <b>{state.info_player[idPage].timePlay}</b>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ico"/>
                            <div className="text">
                                <span>Money on hand</span>
                                <b><span>$</span>{state.info_player[idPage].money}</b>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ico"/>
                            <div className="text">
                                <span>Organization</span>
                                <b>{state.info_player[idPage].fraction}</b>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ico"/>
                            <div className="text">
                                <span>Last day in the game</span>
                                <b>{state.info_player[idPage].date}</b>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ico"/>
                            <div className="text">
                                <span>Spawn place</span>
                                <div className="select" onClick={() => {setModal(!modal)}}>
                                    <b>{state.info_player[idPage].spawn[state.info_player[idPage].index_spawn]}</b>
                                    <div className={modal ? 'open active': 'open'}/>
                                    <div className={modal ? 'modal active': 'modal'}>
                                        {
                                            state.info_player[idPage].spawn.map((item, i) => (
                                                <div className="item" data-name={i} onClick={()=>{store.setPage(idPage, i)}}>{item}</div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ico"/>
                            <div className="text">
                                <span>Exit location</span>
                                <b>{state.info_player[idPage].exitLocation}</b>
                            </div>
                        </div>
                    </div>    
                    </>:
                    <span className="nullSlot">Empty slot</span>
                }
                {
                    state.info_player[idPage] !== undefined ?
                    <div className="btn" onClick={()=>{store.selectCharacter(idPage)}}>Log in to the game</div>
                    :
                    <div className="btn" onClick={store.createCharacter}>Create character</div>
                }
                <div className="help">To move between characters, use</div>
            </div>
        </div>
    ) : null
})
export default characterSelection           