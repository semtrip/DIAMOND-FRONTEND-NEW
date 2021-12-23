import React from "react";


import car_img from '../../../img/car_example.png'

const { EventManager: em } = window;

export default class Cars extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cars: [{name: 'Mercedes-Benz', model: 'F700',  tax: '1.238', fine: 'Нет', fuel: 'Есть', number: 'U0OUGV7F'}],
            slots: 5,
        }
    }
    componentDidCatch() {
        mp.trigger() // eslint-disable-line
    }    

    componentDidMount() {
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateCars') {
                this.setState({
                    cars: value.cars, //[{name: 'Mercedes-Benz', model: 'F700',  tax: '1.238', fine: 'Нет', fuel: 'Есть', number: 'U0OUGV7F'}]
                    slots: value.slots //5
                })
            }
        })
    }
    componentWillUnmount() {
        em.removeHandler('accountMenu');
    }
    nullSlots() {
        if(this.state.cars.length === 0) {
            return (<div className="nullBlock">У Вас нет транспорта<br/> свободных слотов: {this.state.slots}</div>)
        } 
        else {
            let arr = []
            for (var i = 0; i < this.state.slots - this.state.cars.length; i++) {
                arr.push(<div className="item_block" />)
            }
            return arr 
        }

    }

    render() {
        return(
            <div className="cars">
            {this.state.cars.length > 0 ? this.state.cars.map((item, i)=> 
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
            {this.nullSlots()}
            </div>
        )
        
    }
}
