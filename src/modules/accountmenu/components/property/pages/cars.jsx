import React from "react";

import { observer } from "mobx-react-lite";

import car_img from '../../../img/car_example.png'

import store from "../../../store_AccountMenu";


const Cars = observer(()=>{
    const state = store.stateCars
    function nullSlots() {
        if(!state.cars.length > 0) {
            return (<div className="nullBlock">У Вас нет транспорта<br/> свободных слотов: {state.slots}</div>)
        } 
        else {
            let arr = []
            for (var i = 0; i < state.slots - state.cars.length; i++) {
                arr.push(<div className="item_block" />)
            }
            return arr 
        }

    }
    return(
        <div className="cars">
        {state.cars.length > 0 ? state.cars.map((item, i)=> 
            (
                <div className="item_block car" key={i}>
                    <div className="imgBlock">
                        <img src={car_img} alt="" />
                    </div> 
                    <div className="option">
                        <b>Информация о транспорте:</b>
                        <span>Марка:<b>{item.name}</b></span>
                        <span>Модель:<b>{item.model}</b></span>
                        <span>Налог:<b className='active'>{item.tax}$</b></span>
                        <span>Штраф:<b>{item.fine}</b></span>
                        <span>Топливо:<b>{item.fuel}</b></span>
                        <span>Номер:<b className='active'>{item.number}</b></span>
                    </div>
                </div>
            )
            
        ): null}
        {nullSlots()}
        </div>
    )
})

export default Cars
