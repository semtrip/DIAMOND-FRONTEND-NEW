import React from "react";
import house_img from '../../../img/house_example.png'

const { EventManager: em } = window;

export default class House extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '371',
            address: 'Бульвар Алгонквин',
            tax: '4.500',
            places: '0',
            garage: 'Есть',
            rent: '5',
            price: '13.000.000',
        }
    }
    componentDidCatch() {
        mp.trigger() // eslint-disable-line
    }    

    componentDidMount() {
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateHouse') {
                this.setState({
                    id: value.id, // '371'
                    address: value.address, // 'Бульвар Алгонквин'
                    tax: value.tax, // '4.500'
                    places: value.places, // '0'
                    garage: value.garage, // 'Есть'
                    rent: value.rent, // '5'
                    price: value.price, // '13.000.000'
                })
            }
        })
    }
    componentWillUnmount() {
        em.removeHandler('accountMenu');
    }
    render() {
        return(
            <div className='house'>
                    <span className="name">Дом #{this.state.id}</span>
                    <div className="imgBlock">
                        <img src={house_img} alt="" />
                    </div> 
                    <div className="info">
                        <span>Информация о доме:</span>
                        <span className='infoItem'>Адрес<b>{this.state.address}</b></span>
                        <span className='infoItem'>Налог<b>{this.state.tax}</b></span>
                        <span className='infoItem'>Жилых мест<b>{this.state.places}</b></span>
                        <span className='infoItem'>Гараж<b>{this.state.garage}</b></span>
                        <span className='infoItem'>Срок аренды<b>{this.state.rent}</b></span>
                    </div>
                    <div className="button">
                        <div className="sell">
                            <div className="sell_b">Продать</div>
                            <div className="price">
                                Гос.цена:
                                <span>{this.state.price}$</span>
                            </div>
                        </div>
                        <div className="rent">Продлить срок аренды</div>
                    </div>
            </div>
        )
    }
}