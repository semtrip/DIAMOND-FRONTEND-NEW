import React from 'react';

import '../css/clothes.css';
import Logo from '../images/logo.svg';

import SaleImage from '../images/sale-image.png';
import BonusImage from '../images/bonus-image.png';
import Arrow from '../images/arrow.svg';

function Clothes(props) {
  return (
    <React.Fragment>
      <div className="clothes-container">
        <div className="header">
          <div className="sale-container">
            <img src={SaleImage} alt="" />
            <div className="text-container">
              <div className="title">Скидка {props.sale_proc}%</div>
              <div className="subtitle">И так дорогие друзья, спешим вас обрадовать, что у нас действую скидки 50%, на некоторую одежду!<br /><br />Поэтому успейте купить, пока действую скидки, потратив меньше DC!</div>
              <div className="sale-text-container">
                {props.sale_item_names.map((item) => {
                  return <div className="item">{item}</div>
                })}
              </div>
            </div>
          </div>

          <div className="bonus-container">
            <img src={BonusImage} alt="" />
            <div className="text-container">
              <div className="title">Бонус</div>
              <div className="subtitle">Здесь, показан бонус, которые вы можете ввести при пополнение баланса на нашем сайте: <span>www.diamond-rp.com</span></div>
              <div className="bonus-code">DI12AM4</div>
              <div className="button" onClick={props.changeTab}>Пополнить баланс</div>
            </div>
          </div>
        </div>

        <div className="items">
          {props.items.map((item) =>{
            return(
              <React.Fragment>
                <div className="item">
                  <div className="item-header">
                    <div className="text">
                      <div className="title">{item.class}</div>
                      <div className="subtitle">{item.name}</div>
                    </div>
                    <div className="price-container">
                      <div className="price">{item.price}</div>
                      <div className="logo"><img src={Logo} alt="" /></div>
                    </div>
                  </div>

                  <div className="image"><img src={item.image} alt="" /></div>

                  <div className="bottom"  onClick={props.onClick}>
                    <div className="text">Купить</div>
                    <div className="arrow"><img src={Arrow} alt="" /></div>
                  </div>
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Clothes;