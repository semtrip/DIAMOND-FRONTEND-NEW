import React from 'react'
import '../css/navpanel.css'

const NavigationPanel = ({ bgcolor, catalog, selected, setHide, setActive, banner, activecolor }) => {  
    return (
        <div className="hmenu__gunshop__navpanel">
            <div className="tatoo__content__img__container">
                <img src={`https://gta-5.ru/server/client/images/banners/${banner}.png`} alt="" className="tatoo__content__header__img" />
            </div>
            <div className="hmenu__gunshop__navpanel__list">
                {catalog.map((item, index) => (
                    <div tabindex="-1" style={{outline: 'none'}}>
                        <div
                            key={`hmenu__gunshop__navpanel-${index}`}
                            className={selected === index ? "tatoo__content__list__item hmenu__gunshop__navpanel__list__item_active" : "tatoo__content__list__item hmenu__gunshop__navpanel__item"}
                            onClick={() => setActive(index)}
                        >
                            <span className="tatoo__content__list__item__name">
                                {item.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="tatoo__content__exitbtn__container">
                    <span className="tatoo__content__exitbtn" onClick={setHide}>
                        Закрыть
                    </span>
            </div>
        </div>
    )
}

export default NavigationPanel