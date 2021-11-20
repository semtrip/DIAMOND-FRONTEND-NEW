import React from 'react'
import '../css/quests.css'
import Circle from '../img/circle.svg';

const QuestMenu = ({ active, index, title, setActive, subtitle, done, children, empty, hidden }) => {
    return (!hidden ? (
        <div className="accountmenu__cards__quest__container">
            <div
                onClick={setActive}
                className={active === index ? "accountmenu__cards__quest active" : "accountmenu__cards__quest"}
            >
                <div className="accounmenu__cards__quest__data__container">
                    <div className="accountmenu__cards__quest__icon__container"><img src={Circle} alt="" className={done ? "accountmenu__cards__questmenu__icon done" : "accountmenu__cards__questmenu__icon"} /></div>
                    <span className="accountmenu__cards__quest__text">
                        {title}
                    </span>
                </div>
            </div>
        </div>
    ) : (<div></div>))
}

export default QuestMenu