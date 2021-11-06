import React from 'react'
import '../css/general.css'

const Card = ({ icon, title, subtitle }) => {
    return (
        <div className="accountmenu__content__cards__finance__card">
            <div className="accountmenu__content__cards__finance__card__icon_title">
                <img src={icon === 'card' ? `https://gta-5.ru/server/client/images/icons/components/accountmenu/img/card.svg` : `https://gta-5.ru/server/client/images/icons/components/accountmenu/img/wallet-alt.svg`} alt="" className="accountmenu__card__icon" />
                <span className="accountmenu__content__cards__finance__card__title">
                    {title}
                </span>
            </div>
            <span className="accountmenu__content__cards__finance__card__subtitle">
                {subtitle}
            </span>
        </div>
    )
}

export default Card