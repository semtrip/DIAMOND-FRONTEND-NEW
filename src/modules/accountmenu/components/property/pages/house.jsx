import React from "react";
import { observer } from "mobx-react-lite";
//import house_img from 'img/house_example.png'

import store from "../../../store_AccountMenu";


const House = observer(()=>{
    const state = store.stateHouse
    return(
        <div className='house'>
                <span className="name">Дом #{state.id}</span>
                <div className="imgBlock">
                    <img src="img/house_example.png" alt="" />
                </div> 
                <div className="info">
                    <span>Информация о доме:</span>
                    <span className='infoItem'>Адрес<b>{state.address}</b></span>
                    <span className='infoItem'>Налог<b>{state.tax}</b></span>
                    <span className='infoItem'>Жилых мест<b>{state.places}</b></span>
                    <span className='infoItem'>Гараж<b>{state.garage}</b></span>
                    <span className='infoItem'>Срок аренды<b>{state.rent}</b></span>
                </div>
                <div className="button">
                    <div className="sell">
                        <div className="sell_b">Продать</div>
                        <div className="price">
                            Гос.цена:
                            <span>{state.price}$</span>
                        </div>
                    </div>
                    <div className="rent">Продлить срок аренды</div>
                </div>
        </div>
    )
})

export default House 