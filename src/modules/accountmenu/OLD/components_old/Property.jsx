import React, { useEffect } from 'react'
import '../css/property.css'
import LineData from '../uikit/LineData'
import ButtonGps from '../uikit/ButtonGps'
import BusinessCard from '../uikit/BusinessCard'
import CarCard from '../uikit/CarCard'

const Property = ({ house, business, cars }) => {

    const changeTab = (tabId) => {
        let buttons = document.querySelectorAll('.accountmenu__content__property__header_text');
        buttons.forEach((button) => {
            if (button.id === tabId) button.classList.add('active');
            else button.classList.remove('active');
        });

        let tabs = document.querySelectorAll('.accountmenu__content__property__item');
        tabs.forEach((tab) => {
            if (tab.id === tabId) tab.classList.add('active');
            else tab.classList.remove('active');
        });
    }

    useEffect(() => changeTab);

    return (
        <React.Fragment>
            <div className="accountmenu__content__property__header">
                <span className="accountmenu__content__property__header_text active" id='house' onClick={() => changeTab('house')}>Дом</span>
                <span className="accountmenu__content__property__header_text" id='business' onClick={() => changeTab('business')}>Бизнесы и др.</span>
                <span className="accountmenu__content__property__header_text" id='transport' onClick={() => changeTab('transport')}>Транспорт</span>
            </div>
            <div className="accountmenu__content__property__item accountmenu__scrollable active" id='house'>
                <div className="accountmenu__content__cards__item__container">
                    <div className="accountmenu__content__cards__item__house__img__container">
                        <img src={`https://gta-5.ru/server/client/images/icons/components/accountmenu/img/house_img_bg.svg`} alt="" className="accountmenu__content__cards__item__container__house__img" />
                    </div>
                    <div className="accountmenu__content__cards__house">
                        <span className="accountmenu__content__cards__house__type">
                            {house.type}
                        </span>
                        <span className="accountmenu__content__cards__house__name">
                            {house.name}
                        </span>
                        <div className="accountmenu__content__cards__house__address">
                            <span className="accountmenu__content__cards__house__address__text">
                                Адрес
                            </span>
                            <span className="accountmenu__content__cards__house__address__name">
                                {house.address}
                            </span>
                        </div>
                        <LineData
                            leftinfo="Налог"
                            rightinfo={house.doors}
                        />
                        <LineData
                            leftinfo="Жилых мест"
                            rightinfo={house.roommate}
                        />
                        <LineData
                            leftinfo="Гараж"
                            rightinfo={house.carplace}
                        />
                        <div className="accountmenu__content__cards__house__hprice">
                            <div className="accountmenu__content__cards__house__hprice__sell">
                                <div className="accountmenu__content__cards__house__hprice__sell__linebtn">
                                    <div className="accountmenu__content__cards__house__hprice__sell__container">
                                        <div className="accountmenu__content__cards__house__hprice__sell__icon" />
                                        <span className="accountmenu__content__cards__text">
                                            Гос. цена:
                                    </span>
                                    </div>
                                    <span className="accountmenu__content__cards__house__hprice__sell__text">{`${house.gprice.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} $`}</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ButtonGps filled={false} x={house.x} y={house.y} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="accountmenu__content__property__item accountmenu__scrollable" id='business'>
                <div className="accountmenu__content__cards__container">
                    <div className="accountmenu__content__cars__header__container">
                        <span className="accountmenu__content__cards__title_medium">
                            Имущество
                        </span>
                        <span className="accountmenu__content__cards__title__count">
                            {`Кол-во: ${business.length}`}
                        </span>
                    </div>
                    <div className="accountmenu__cards__question__container">
                        {business.map((item, index) => (
                            <BusinessCard
                                {...item}
                                key={`business-list-` + index}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="accountmenu__content__property__item accountmenu__scrollable" id='transport'>
                <div className="accountmenu__content__cards__container">
                    <div className="accountmenu__content__cars__header__container">
                        <span className="accountmenu__content__cards__title_medium">
                            Транспорт
                        </span>
                        <span className="accountmenu__content__cards__title__count">
                            {`Кол-во: ${cars.length} / 10`}
                        </span>
                    </div>
                    <div className="accountmenu__cards__question__container">
                        {cars.map((item, index) => (
                            <CarCard
                                {...item}
                                key={`car-list-` + index}
                            />
                        ))}
                    </div>
                </div>
                {/*<div className="accountmenu__content__cards__headerts" style={{paddingLeft: '3.5rem', paddingRight: '3.5rem', marginTop: '5%', marginBottom: '5%'}}>
                    <span className="accountmenu__content__cards__title">
                        Транспорт
                    </span>
                    <span className="accountmenu__content__cards__title__count">
                        {`кол-во: ${cars.length} / 10`}
                    </span>
                </div>
                <div className="accountmenu__content__cards__cars__list">
                    {cars.map((item, index) => (
                        <CarCard
                            {...item}
                            key={`car-list-` + index}
                        />
                    ))}

                    </div>*/}
            </div>
        </React.Fragment>
    )
}

export default Property