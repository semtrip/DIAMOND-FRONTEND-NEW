import React from "react";
import { observer } from "mobx-react-lite";

import bussines_img from '../../../img/bussines_example.png'

import store from "../../../store_AccountMenu";


const Bussines = observer(()=>{
    const state = store.stateBussines
    return(
        <div className='bussines'>
        {
            state.id.length > 0 ? (
                <>
                    <span className="name">Бизнес #{state.id}</span>
                    <div className="imgBlock">
                        <img src={bussines_img} alt="" />
                    </div> 
                    <div className="info">
                        <span>Информация о бизнес:</span>
                        <span className='infoItem'>Адрес<b>{state.address}</b></span>
                        <span className='infoItem'>Налог<b className="active">{state.tax}$</b></span>
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
                </>
            ):<>
                <h1>У вас нет бизнеса</h1>
            </>
        }
        </div>
    )
})

export default Bussines 