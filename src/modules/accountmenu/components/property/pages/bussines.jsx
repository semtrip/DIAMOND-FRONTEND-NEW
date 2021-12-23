import React from "react";
import bussines_img from '../../../img/bussines_example.png'

const { EventManager: em } = window;

export default class Bussines extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '471',
            address: 'Бульвар Алгонквин',
            tax: '4.500',
            price: '13.000.000',
        }
    }
    componentDidCatch() {
        mp.trigger() // eslint-disable-line
    }    

    componentDidMount() {
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateBussines') {
                this.setState({id: value.id, address: value.address, tax: value.tax, price: value.price})
            }
        })
    }
    componentWillUnmount() {
        em.removeHandler('accountMenu');
    }
    render() {
        return(
            <div className='bussines'>
            {
                this.state.id.length > 0 ? (
                    <>
                        <span className="name">Бизнес #{this.state.id}</span>
                        <div className="imgBlock">
                            <img src={bussines_img} alt="" />
                        </div> 
                        <div className="info">
                            <span>Информация о бизнес:</span>
                            <span className='infoItem'>Адрес<b>{this.state.address}</b></span>
                            <span className='infoItem'>Налог<b className="active">{this.state.tax}$</b></span>
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
                    </>
                ):<>
                    <h1>У вас нет бизнеса</h1>
                </>
            }
            </div>
        )
    }
}
