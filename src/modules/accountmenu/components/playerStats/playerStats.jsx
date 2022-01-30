import React from "react";
import { observer } from "mobx-react-lite";

import '../../css/player.css'

import ico from '../../img/player_ico.svg'

import store from "../../store_AccountMenu";


const playerStats = observer(()=>{
    const state = store.state
    return(
        <div className="player">
            <div className="head">
                <div className="playerName">
                    <div className="icon"><img src={ico} alt="" /></div>
                    <span><b>{state.name}</b>#{state.id}</span>
                </div>
                <div className="buttonBlock">
                    <div className="button" onClick={store.clickBtnPlayer} id="report">Жалоба</div>
                    <div className="button button_two" onClick={store.clickBtnPlayer} id="ask">Задать вопрос</div>
                </div>
            </div>
            <div className="stats">
                <div className="generalInfo block_s">
                    <h1>Общая информация</h1>
                    <div className="column">
                        <div className="line">Имя:<b className="active">{state.name}</b></div>
                        <div className="line">Фракция:<b>{state.fraction}</b></div>
                        <div className="line">Пол:<b>{state.sex}</b></div>
                        <div className="line">Дата рождения:<b>{state.birth}</b></div>
                        <div className="line">Супруг(а):<b className="active">{state.spouse}</b></div>
                        <div className="line">Часов в игре:<b>{state.playTime.hourse}ч {state.playTime.mines} мин</b></div>
                        <div className="line">Последний вход:<b>{state.lastLogin}</b></div>
                        <div className="line">Дата регистрации:<b>{state.dateRegistation}</b></div>
                    </div>
                </div>
                <div className="finance block_s">
                    <h1>Ваши финансы</h1>
                    <div className="w_block">
                        <div className="cash">
                            <div className="ico">Наличные</div>
                            <div className="text">${state.cash}</div>
                        </div>
                        <div className="bank">
                        <div className="ico">Банковский счет</div>
                            <div className="text">${state.bank}</div>
                        </div>
                        <div className="docs"></div>
                        <div className="registration"><img src={ico} alt="" />Временная регистрация</div>
                        <span>Чтобы получить официальное гражданство, пройдитев “Мэрию” и заполните ряд документов!</span>
                    </div>
                </div>
                <div className="statistics block_s">
                    <h1>Статистика</h1>
                    <div className="w_block">
                        <div className="content">
                        {state.stats.length > 0 ? state.stats.map((item, i)=> 
                            (
                                <div className="line" key={i}>{item.name}:<b style={{color: '#'+item.color}}>{item.data}</b></div>
                            )
                        ): null}
                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )    
})

export default playerStats 