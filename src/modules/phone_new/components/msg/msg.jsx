import React from "react";

import '../msg/css/msg.css'

import store from "../../phone-store";
import { observer } from "mobx-react-lite";


const Msg = observer(()=>{
    const state = store.state
    return(
        <React.Fragment >
            <div className="app-screen">
                    <div className="list-screen">
                        <div className="top">
                            <span>Message</span>
                            <div className="search" onChange={store.searchDialog}>
                                <input type="text" placeholder="Search" onChange={store.searchContact}/>
                            </div>
                        </div>
                        <div className="message">
                            {
                                state.appMsg.message.slice().sort((a, b)=>{return new Date(b.date) - new Date(a.date)}).map((item, i)=>(
                                    //store.checkSearch(store.checkContact(item.number)!= undefined ? store.checkContact(item.number) : item.number) ?
                                <div className="message-item" key={i} data-name={i} onClick={store.showMessage}>
                                    <div className="avatar" />
                                    <div className="text">
                                        <span className="name">{store.checkContact(item.number)!== undefined ? store.checkContact(item.number) : item.number}</span>
                                        <span className="msg">{item.message[item.message.length -1].data}</span>
                                        <span className="date">{item.message[item.message.length -1].date}</span>
                                    </div>
                                </div>//:null
                                ))
                            }
                        </div>
                    </div> 
                    <div className={state.appMsg.page === 'msg' ? 'msg-screen active' : 'msg-screen'}>
                        <div className="top">
                            <div className="back" onClick={store.clickBtnMsg}/>
                            <div className="info">
                                <div className="avatar" />
                                <div className="number">{store.checkContact(state.appMsg.message[state.appMsg.indexMsg].number)!== undefined ? store.checkContact(state.appMsg.message[state.appMsg.indexMsg].number) : state.appMsg.message[state.appMsg.indexMsg].number}</div>
                            </div>
                        </div>
                        <div className='message' id="message_block">
                            {   
                                store.arrayReverse(state.appMsg.message[state.appMsg.indexMsg].message).map((item, i)=>(
                                    <div className={item.author ? 'msg-item active':'msg-item'} key={i}>
                                        <span>{item.date}</span>
                                        <div className="text">{item.data}</div>
                                    </div>
                                )
                                )
                            }
                            <span>iMessage</span>
                        </div>
                        <div className="messagePole">
                                <textarea placeholder="SMS" onChange={store.poleResize}/>
                                <div className="send" onClick={store.sendMessage}/>
                                <div id="pole" />
                        </div>
                    </div>

            </div>
        </React.Fragment>
    )
})

export default Msg