import React from "react";
import { observer } from "mobx-react-lite";

//import bussines_img from 'img/bussines_example.png'

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
                        <img src="img/bussines_example.png" alt="" />
                    </div> 
                    <div className="info">
                        <span>Информация о бизнесе:</span>
                        <span className='infoItem'>Название<b>{state.address}</b></span>
                        <span className='infoItem'>Налог<b className="active">{state.tax}$</b></span>
                    </div>
                    <div className="button">
                        <div className="sell">
                            <div className="price">
                                Гос.цена:
                                <span>{state.price}$</span>
                            </div>
                        </div>
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