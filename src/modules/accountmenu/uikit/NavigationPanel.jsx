import React from 'react'
import '../css/content.css'
import Logo from '../img/logo.svg';
import { useEffect } from 'react'
import { useRef } from 'react'

const NavigationPanel = ({ activePage, onChangePage, handleKeyPress, panels, accountId, nick, setHide }) => {

    const navigationPanel = useRef(null)

    useEffect(() => {
        navigationPanel.current.focus()
    }, [])

    return (
        <div className="accountmenu__content__nav" ref={navigationPanel} tabIndex="-1" >
            <div className="header_nav">
                <div className="header__nav__logo" ><img src={Logo} alt="" /></div>
                {accountId ? (<div className="header__nav__name">{nick} #{accountId}</div>) : ''}
            </div>
            <div className="content__container">
                <div className="accountmenu__content__nav__items">
                    {panels.map((item, index) => (
                        <div key={`nav-panel-` + index} onClick={() => onChangePage(index)} className={activePage === index ? "accountmenu__content__nav__item active" : "accountmenu__content__nav__item"}>
                            <span className="accountmenu__content__nav__item__text" >
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <span onClick={setHide} className="accountmenu__close__btn">
                <p>Закрыть</p>
            </span>
        </div >
    )
}

export default NavigationPanel