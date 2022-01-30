import React from "react";
import { observer } from "mobx-react-lite";

import '../../css/mission.css'

import img from '../../img/mission_exsaple.png'

import store from "../../store_AccountMenu";


const Mission = observer(() => {
    const state = store.state
    return(
        <div className="mission">
            <div className="head">
                <h1>Квестовая линия</h1>
                <span>Общее количество квестов: <b>{state.mission.length}</b></span>
            </div>
            <div className="container">
            {state.mission.map((item, i)=> (
                <div className={item.attachments !== undefined ? 'task active': 'task'} key={i} id={i} onClick={store.clickTask}>
                    <div className="content">
                        <div className="image">
                            <img src={img} alt="" />
                            <div className="line"></div>
                        </div>
                        <div className="text">
                            <span className="title">{item.title}</span>
                            <span className="descriptor">{item.discriptor}</span>
                            {
                            item.attachments !== undefined ?
                            (
                            <span className="count">
                                Количество заданий:
                                <span><b>{item.attachments.length}</b>шт</span>
                            </span>
                            ):null
                        }
                        {
                            item.attachments === undefined ?
                            (
                            <span className="price">
                                Награда за выполнение:
                                <span>{ store.moneyFormat(item.price)}<b>₽</b></span>
                            </span>
                            ):null
                        }
                        </div>
                    </div>
                    <div className="btn">Начать квест</div>
                </div>
            )
            )}
            </div>
        </div>
    )
})
export default Mission
