import React from 'react'
import '../css/reports.css'

import Ticket from '../img/ticket.svg';
import Show from '../img/show.svg';
import Circle from '../img/circle.svg';

const ReportItemList = ({ type, number, time, active, index, text, setReportData, status }) => {
    return (
        <div className="accountmenu__content__reports__item__list" onClick={setReportData}>
            <span className={status === 0 ? "accountmenu__content__reports__list__header__status" : "accountmenu__content__reports__list__header__status closed"}> <img src={Circle} alt="" style={{width: '1.8rem'}} /></span>
            <div className="accountmenu__content__reports__item__list__header">
                <img
                    src={Ticket}
                    alt=""
                    className="accountmenu__content__reports__list__header__icon"
                />
                <span className="accountmenu__content__reports__list__header__num">{`Запрос №${number}`}</span>
                <span className="accountmenu__content__reports__item__list__open"> <img src={Show} alt="" /> </span>
            </div>
        </div>
    )
}

export default ReportItemList