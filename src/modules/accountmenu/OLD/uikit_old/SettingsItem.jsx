import React from 'react'
import Icon from '../../hud/components/MainMenu/uikit/Icon'
import '../css/settings.css'
import Button from './Button'

const SettingsItem = ({ name, type, active, setCheckbox, listmenu, prevVal, nextVal, params, btntext, index }) => {
    return (
        <div className={`accountmenu__content__cards__setting__item ${type === 3 ? 'bind__keys' : ''}`}>
            {type === 3 && (
                <div className="accountmenu__content__cards__setting__key">
                    <Button text={btntext} onPress={() => {
                        try {
                            mp.trigger('client:mainMenu:settings:btn', params); // eslint-disable-line
                        }
                        catch (e) { }
                    }} />
                </div>
            )}
            <span className="accountmenu__content__cards__setting__name">{name}</span>
            {type === 0 && (
                <div className="accountmenu__content__cards__setting__checkbox" >
                    <input type="checkbox" value="None" id={`checkbox_${index}`} name="check" checked={active === 1 ? true : false} />
                    <label htmlFor={`checkbox_${index}`} onClick={() => setCheckbox()}></label>
                </div>
            )}
            {type === 1 && (
                <div className="accountmenu__content__cards__setting__listmenu">
                    <div style={{ cursor: 'pointer', justifyContent: 'center' }} onClick={() => prevVal()}>
                        <Icon className="list-arrow-icon" arrow={true} name="arrow_left" />
                    </div>
                    <span className="accountmenu__content__cards__setting__listmenu__name">{listmenu}</span>
                    <div style={{ cursor: 'pointer', justifyContent: 'center' }} onClick={() => nextVal()}>
                        <Icon className="list-arrow-icon" arrow={true} name="arrow_right" />
                    </div>
                </div>
            )}
            {type === 2 && (
                <Button text={btntext} onPress={() => {
                    try {
                        mp.trigger('client:mainMenu:settings:btn', params); // eslint-disable-line
                    }
                    catch (e) { }
                }} />
            )}
        </div>
    )
}

export default SettingsItem