import React from "react";
import { observer } from "mobx-react-lite";

import '../css/banner.css'
import '../css/menu.css'

import panel from '../img/ico/panel.png'

import store from "../Hud-store";

import { COLORS, SPECIAL } from '../const'

const MainMenu= observer(() => {

const state = store.state

const img = {
    test__icon__inverted: panel
}

function parseText(str) {
    let htmlResult = str
    const matchColors = /~([\s\S]+?)~/gi
    const match = htmlResult.match(matchColors)
    if (match !== null) {
        for (let i = 0; i < match.length; i++) {
            const nowColor = match[i].slice(1, -1)
            let clr = COLORS[nowColor]
            if (clr) {
                htmlResult = htmlResult.replace(match[i], '<span style="color: ' + clr + '">')
            } else  {
                const specChar = match[i].slice(1, -1)
                let special = SPECIAL[specChar]
                htmlResult = htmlResult.replace(match[i], special)
            }
        }
    }
    return htmlResult
}

return state.showMenu ? (
    <React.Fragment>
        <div className="mainMenu-block">
        {
            state.headerMenu ? 
            <div className={state.banner.length > 0 ? `head ${state.banner}` : 'head'}>
            {
                state.banner.length > 0 ?
                 null
                :
                <div className="info">
                    <span className="title" dangerouslySetInnerHTML={{__html: parseText(state.headerText)}}/>
                    <span className="descriptor" dangerouslySetInnerHTML={{__html: parseText(state.headerDesc)}}/>
                </div>
            }

                <div className="close-mainMenu" onClick={store.closeMenu}/>
            </div>:null
        }
            <div className="list">
                <div className="items">
                {
                    state.menuList.map((item, i) => (
                        <div className={item.subtitle !== undefined ? 'item _hint' : 'item'} key={i}>
                            <div className={item.icon !== undefined ? 'info img' : 'info'} data-name={i} onClick={store.clickMenuBtn}>
                                {
                                    item.icon !== undefined ? 
                                    <div className="img">
                                        {
                                            item.icon.substring(0,4) === 'http' ?
                                            <img src={item.icon} alt="img menu" />
                                            :
                                            <img src={img[item.icon]} alt="img menu" />
                                        }
                                    </div>:null
                                }
                                {
                                    item.icon !== undefined ? 
                                    <span className="text .text-img" dangerouslySetInnerHTML={{__html: parseText(item.title)}}/>
                                    :
                                    item.checked !== undefined ?
                                    <span className="text .text-checkbox" dangerouslySetInnerHTML={{__html: parseText(item.title)}}/>
                                    : 
                                    <span className="text" dangerouslySetInnerHTML={{__html: parseText(item.title)}}/>
                                }
                                {
                                    item.rl !== undefined ? 
                                    <span className="text-rl" dangerouslySetInnerHTML={{__html: parseText(item.rl)}}/>
                                    :null
                                }
                                {   
                                    item.items !== undefined ?
                                    item.items.length > 0 ? 
                                    <div className="select">
                                        <div className="back" data-name={i} onClick={store.changeMenuSelectBack}/>
                                        <span dangerouslySetInnerHTML={{__html: parseText(item.items[item.index])}} />
                                        <div className="next" data-name={i} onClick={store.changeMenuSelectNext}/>
                                    </div>:null :null
                                }
                                {
                                    item.checked !== undefined ?
                                    <div className={item.checked ? 'checkbox active' : 'checkbox'} data-name={i} onClick={store.changeMenuChackbox}/>
                                    :null
                                }
                            </div>
                            {
                                item.subtitle !== undefined ?
                                <div className="hint"dangerouslySetInnerHTML={{__html: parseText(item.subtitle)}} />:null
                            }

                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    </React.Fragment>
):null
})
export default MainMenu