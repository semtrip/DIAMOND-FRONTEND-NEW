import React, {useState} from "react";
import { observer } from "mobx-react-lite";

import '../../css/mission.css'

//import img from 'img/mission_exsaple.png'

import store from "../../store_AccountMenu";


const Mission = observer(() => {
    const state = store.state
    const [path, setPath] = useState(null)
    return(
        <div className="mission">
            {
                path !== null ?
                <span className="back" onClick={()=>{setPath(null)}}/>
                :null
            }
            {
                path === null ?
                <div className="head">
                    <h1>Квестовая линия</h1>
                    <span>Общее количество квестов: <b>{state.mission.length}</b></span>
                </div>:null
            }
            {
                path !== null ?
                <div className="head">
                    <h1>{state.mission[path].title}</h1>
                    <span>Общее количество заданий: <b>{state.mission[path].attachments.length}</b></span>
                </div>:null
            }

            <div className="container">
                {
                    path === null ? 
                    state.mission.map((item, i)=> (
                        <div className={item.attachments !== undefined ? 'task active': 'task'} key={i} id={i}>
                            <div className="content">
                                <div className="image">
                                    <img src="img/mission_exsaple.png" alt="" />
                                    <div className="line"></div>
                                </div>
                                <div className="text">
                                    <span className="title">{item.title}</span>
                                    <span className="descriptor">{item.discriptor}</span>
                                    <span className="count">
                                        Количество заданий:
                                        <span><b>{item.attachments.length}</b>шт</span>
                                    </span>
                                </div>
                            </div>
                            <div className="btn" onClick={() => {setPath(i)}}>К заданиям</div>
                        </div>
                     )
                    ):null
                }
                {
                    path !== null ? 
                    state.mission[path].attachments.map((item, i) => (
                        <div className='task' key={i} id={i}>
                            <div className="content">
                                <div className="image">
                                    <img src="img/mission_exsaple.png" alt="" />
                                    <div className="line"></div>
                                </div>
                                <div className="text">
                                    <span className="title">{item.title}</span>
                                    <span className="descriptor">{item.discriptor}</span>
                                    <span className="price">
                                        Награда за выполнение:
                                        <span>{ store.moneyFormat(item.price)}<b>₽</b></span>
                                    </span>
                                </div>

                            </div>
                            <div className="btn" onClick={() => {store.clickTask(path, i)}}>Начать задание</div>
                        </div>
                    )):null
                }
            </div>
        </div>
    )
})
export default Mission
