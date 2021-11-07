import React from 'react'
import '../css/item.css'

const CatalogItem = ({ name, setSelected, sale, desc, selected, index }) => (
    <div className={selected === index ? "tatoo__content__list__item__active" : "tatoo__content__list__item"} onClick={setSelected} >
        <span className="tatoo__content__list__item__name">
            {name}
            {desc && (
                <span className="tatoo__content__list__item__desc">
                    <br />{`${desc}`}
                </span>
            )}
        </span>
        {sale > 0 && (
            <span className="tatoo__content__list__item__sale">
                {`-${sale}%`}
            </span>
        )}
    </div>
)

export default CatalogItem