import { observer } from "mobx-react-lite";
import React from "react";

import store from "../../phone-store";

import '../settings/css/settings.css'


const Settings = observer(() => {
    const state = store.state
    return(
        <React.Fragment >
            <div className="app-screen">
            {
                state.phoneSetting.page === undefined || state.phoneSetting.page === '' ?
                <div className="settings-screen">
                    <span className="title">Settings</span>
                    <div className="info">
                            <div className="avatar">
                                {state.appCall.player.avatar !== '' ? 
                                    <img src={state.appCall.player.avatar} alt="avatar" />:null
                                }
                            </div>
                            <div className="text">
                                <div className="name">{state.appNews.name}</div>
                                <div className="tag">{state.appNews.tag}</div>
                            </div>
                    </div>
                    <div className="number">
                        <span>{state.appCall.player.number}</span>
                    </div>
                    <div className="line" />
                    <div className="btns">
                        <div className="btn" id="wallpaper" onClick={store.pageSettings}><span>Wallpaper</span></div>
                        <div className="btn" id="ringtone" onClick={store.pageSettings}><span>Ringtone</span></div>
                    </div>
                </div>:null
            }
            {
                state.phoneSetting.page === 'wallpaper' ?
                <div className="wallpaper-screen">
                    <div className="back" onClick={store.backSettings}/>
                     <div className="top">
                         <span>Wallpaper</span>
                         <div className="btn" onClick={store.showModalWallpaper}>Add</div>
                     </div>
                     <div className="content">
                     {
                         state.phoneSetting.wallpaper.map((item, i)=>(
                            <div className={item.active ? 'item active' : 'item'} key={i} data-name={i} onClick={store.clickWallpaper}>
                                <img src={item.url} alt="wallpaper" />
                                <div className="mark" />
                            </div>
                         ))
                     }
                     </div>
                     <div className="apply" onClick={store.applykWallpaper}>Apply Wallpaper</div>
                     {
                        state.phoneSetting.modal && state.phoneSetting.modal !== undefined  ? 
                        <div className="modal-screen">
                            <div className="top-modal" onClick={store.showModalWallpaper}/>
                            <div className="modal" >
                                <div className="info-mark" />
                                <span>To put your wallpaper on your phone, go to the website https://imgur.com /, upload your picture, then copy the link and paste it into the field below:</span>
                                <div className="input"><input type="text" placeholder="Past link..." onChange={store.addWallpaperStore}/></div>
                                <div className="btn" onClick={store.addWallpaper}>Add</div>
                            </div>
                            <div className="botton-modal" onClick={store.showModalWallpaper}/>
                        </div>:null
                    }
                </div>:null
            }
            {

                state.phoneSetting.page === 'ringtone' ? 
                <div className="ringtone-screen">
                    <div className="back" onClick={store.backSettings}/>
                    <div className="top">
                        <span className="title">Ringtones</span>
                        <div className="info">
                            <span>Your ringtones:</span>
                                {
                                    state.phoneSetting.ringtones.map((item, i)=>(
                                        item.active ?
                                        <div className="installed-ringtone" data-name={item.id} onClick={store.playRingtone}>
                                            <div className="avatar" />
                                            <div className="text" key={i}>
                                                <div className="name">{item.name}</div>
                                                <div className="executor">
                                                    Artist
                                                    <span>{item.artist}</span>
                                                </div>
                                                <div className="time">{item.time}</div>
                                            </div>
                                        </div>:null 
                                    ))
                                }
                            <div className="help">
                                <span>Hint:</span>
                                To set a ringtone, right-click on it
                            </div>
                            <div className="line"/>
                        </div>
                    </div>
                    <div className="content">
                            <span>Available ringtones:</span>
                            <div className="items">
                            {
                                state.phoneSetting.ringtones.map((item, i)=>(
                                    !item.active ?
                                    <div className="item" data-name={item.id} onClick={store.playRingtone} onContextMenu={store.setRingtone}>
                                        <div className="avatar" />
                                        <div className="text">
                                            <div className="name">{item.name}</div>
                                            <div className="executor">
                                                Artist
                                                <span>{item.artist}</span>
                                            </div>
                                            <div className="time">{item.time}</div>
                                        </div>
                                    </div>:null
                                ))
                            }

                            </div>
                        </div>
                </div>:null
            }
            </div>
        </React.Fragment>
    )
})

export default Settings