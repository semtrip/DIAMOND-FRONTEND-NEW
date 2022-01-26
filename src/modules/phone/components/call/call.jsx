import React from "react";

import store from "../../phone-store";

import '../call/css/call.css'
import '../call/css/recent.css'
import '../call/css/contacts.css'
import { observer } from "mobx-react-lite";

const Call = observer(() => {
    const state = store.state
    return(
        <React.Fragment >
            <div className="app-screen">
                {
                    state.appCall.page === 'recent' ?
                    <div className="recent-screen">
                        <div className="top">
                            <div className="switch">
                                <span className={state.appCall.recentPage === 'all' ? 'active' : ''} onClick={store.recentPage} id="all">All</span>
                                <span className={state.appCall.recentPage === 'missed' ? 'active' : ''} onClick={store.recentPage} id="missed">Missed</span>
                            </div>
                            {
                                !state.appCall.recentEdit ?
                                <span className="editBtn" onClick={store.editRecentList}>Edit</span>:
                                <span className="editBtn" onClick={store.editRecentList}>Done</span> 
                            }
                            
                        </div>
                        <div className="content">
                            <span>Recent</span>
                            <div className="items">
                            {   
                                state.appCall.recentPage === 'all' ?
                                state.appCall.recent.map((item, i)=> (
                                    <div className={!state.appCall.recentEdit? 'item': 'item active'} key={i}>
                                    <div className='item-block' id={i} onClick={store.recentClick}>
                                        <span className={!item.missed ? '': 'active'}>{store.checkContact(item.number)!== undefined ? store.checkContact(item.number) : item.number}</span>
                                        <span>Сell phone</span>
                                    </div>
                                        {
                                            state.appCall.recentEdit?
                                            <div className="del" onClick={store.delRecent} data-name={i}>-</div>:null
                                        }
                                    </div>
                                )
                                ):null
                            }
                            {
                                state.appCall.recentPage === 'missed' ?
                                state.appCall.recent.map((item, i)=> ( 
                                    
                                       item.missed ? 
                                            <div className={!state.appCall.recentEdit? 'item': 'item active'} key={i}>
                                                <div className='item-block' id={i} onClick={store.recentClick}>
                                                    <span className={!item.missed ? '': 'active'}>{item.number}</span>
                                                    <span>Сell phone</span>
                                                </div>
                                                    {
                                                        state.appCall.recentEdit?
                                                        <div className="del" onClick={store.delRecent} data-name={i}>-</div>:null
                                                    } 
                                            </div> 
                                        :null
                                )
                                ):null
                            }

                            </div>
                        </div>
                    </div>:null
                }
                {
                    state.appCall.page === 'contacts' ?
                    <div className="contacts-screen">
                        <div className="top">
                            <span>Contacts</span>
                            <div className="search">
                                <input type="text" placeholder="Search" onChange={store.searchContact}/>
                            </div>
                        </div>
                        <div className="player-info">
                            <div className="avatar">
                                <img src={state.appCall.player.avatar} alt="" />
                            </div>
                            <div className="text">
                                <span className="playerName">{state.appCall.player.name}</span>
                                <span className="playerNumber">{state.appCall.player.number}</span>
                            </div>
                        </div>
                        <div className="contacts">
                            {
                                state.appCall.contacts.slice().sort((a, b)=>{let name = a.name.toLowerCase(), number = b.name.toLowerCase(); if(name < number) return -1; if(name > number) return 1;}).map((item, i) => (
                                    item.name.toLowerCase().includes(state.appCall.contactSearchData) ?
                                    <div className="item" key={i} id={i} onClick={store.contactClick} data-name={item.number}>
                                        {item.name}
                                    </div>:null
                                ))
                            }
                        </div>
                    </div>:null
                }
                {
                    state.appCall.page === 'phone' ?
                    <div className="call-screen">
                        <div className="call-number">
                            {state.appCall.number}
                            {
                                state.appCall.addContactActive ?
                                <span className="addContact" onClick={store.openCreateContact}>Create contact</span> :null                                
                            }
                        </div>
                        <div className="call-keyboard">
                            <div className="keyboard">
                                <div className="key" data-name="1" onClick={store.keyboardClick}><span>1</span></div>
                                <div className="key" data-name="2" onClick={store.keyboardClick}><span>2</span><span>ABC</span></div>
                                <div className="key" data-name="3" onClick={store.keyboardClick}><span>3</span><span>DEF</span></div>
                                <div className="key" data-name="4" onClick={store.keyboardClick}><span>4</span><span>GHI</span></div>
                                <div className="key" data-name="5" onClick={store.keyboardClick}><span>5</span><span>JKL</span></div>
                                <div className="key" data-name="6" onClick={store.keyboardClick}><span>6</span><span>MNO</span></div>
                                <div className="key" data-name="7" onClick={store.keyboardClick}><span>7</span><span>PQRS</span></div>
                                <div className="key" data-name="8" onClick={store.keyboardClick}><span>8</span><span>TUV</span></div>
                                <div className="key" data-name="9" onClick={store.keyboardClick}><span>9</span><span>WXYZ</span></div>
                                <div className="key" data-name="*" onClick={store.keyboardClick}><span>*</span></div>
                                <div className="key" data-name="0" onMouseDown={store.keyonMouseDown} onMouseUp={store.keyonMouseUp}><span>0</span><span>+</span></div>
                                <div className="key" data-name="#" onClick={store.keyboardClick}><span>#</span></div>
                            </div>
                            <div className="call-btn" onClick={store.callClick} />
                            <div className="del-btn" onClick={store.delClick} />
                        </div>
                            <div className={state.appCall.createContactModal ? 'create-contact-modal active': 'create-contact-modal'}>
                                    <div className="top">
                                        <span onClick={store.closeCreateContact}>Cancel</span>
                                        <b>Contact</b>
                                        <span onClick={store.createContact}>Apply</span>
                                    </div>
                                    <div className="avatar">
                                        <span>{state.appCall.avatar}</span>
                                    </div>
                                    <div className="input">
                                        <input type="text" placeholder="Name" id="name" maxLength={20} onChange={store.createAvatar}/>
                                        <input type="text" placeholder="Surname" id="surname" maxLength={20} onChange={store.createAvatar}/>
                                        <input type="text" placeholder="Conpany" id="company" maxLength={20} onChange={store.createAvatar}/>
                                    </div>
                                    <div className="number">
                                        <span>Сell phone</span>
                                        <span>{state.appCall.number}</span>
                                    </div>
                            </div>                            
                </div>:null 
                }
                <div className="call-navigation">
                        <div className={state.appCall.page === 'recent' ? 'nav recent active' : 'nav recent'} id="recent" onClick={store.setPage} />
                        <div className={state.appCall.page === 'contacts' ? 'nav contacts active' : 'nav contacts'} id="contacts" onClick={store.setPage} />
                        <div className={state.appCall.page === 'phone' ? 'nav keys active' : 'nav keys'} id="phone" onClick={store.setPage} />
                </div>
            </div>
        </React.Fragment>
    )
}) 

export default Call