import React from "react";
import { observer } from "mobx-react-lite";

import '../../css/reports.css'

import store from "../../store_AccountMenu";


const Reports = observer(()=>{
    const state = store.stateReports
    return (
            <div className="reports">
            <div className="head">
                <h1>Все обращения</h1>
                <span>Зайдайте вопрос по игре или подайте жалобу на игрока</span>
            </div>
            <div className="container">
                <div className="history">
                    <span>История запросов:</span>

                    {state.reports.length > 0 ? state.reports.map((item, i)=> 
                    (
                        <div className={item.status ? (item.new ? 'tiket new active': 'tiket'): 'tiket closed'} onClick={store.clickTiket} key={i} id={i}>
                            <span>Запрос #{item.id}</span>
                        </div>
                    )
                    
                ): null}
                </div>
                <div className="dialog" >
                {state.path > -1 ?
                <>
                    <span>Запрос #{state.reports[state.path].id}</span>
                    <b>Чат с администрацией</b>
                    <div className="messagePole" id='messagePole'>
                        
                        {state.reports[state.path].message.map((item,i) => (
                            item.admin ?
                            <div className="adminMsg" key={i}> 
                                <div className="message">
                                    <span className="tag"><b>Администратор <span className="flare"></span></b>{item.name}<i>{item.time}</i></span>
                                    <div className="text">{item.message}</div>
                                </div>
                            </div>
                            :                            
                            <div className="playerMsg" key={i}>                      
                                <div className="message">
                                    <span className="tag"><i>{item.time}</i>{item.name}<b>Вы</b></span>
                                    <div className="text">{item.message}</div>
                                </div>
                            </div>
                            )
                        )}
                        {!state.reports[state.path].status ?
                            <div className='rep_close'><b>ЗАПРОС ЗАКРЫТ</b><span>Если у Вас остались дополнительные вопросы, создайте новый запрос</span></div>:null
                        }
                        <div ref={store.messagesEndRef} />
                    </div>
                    {state.reports[state.path].status ? 
                    <div className="messageInput" id='area' onClick={store.textareaFocus}>
                        <div id="test" />
                        <textarea name='message' id='message' rows="1" placeholder="Введите сообщение..." onChange={store.resizeTexarea} maxLength='350'/>
                        <div className="send" onClick={store.clickSend}></div>
                    </div>:null 
                    }

                </>:null}
                </div>
            </div>
        </div>
    )
})

export default Reports 