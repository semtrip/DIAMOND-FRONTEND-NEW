import React from 'react'
import './css/style.css'

const { EventManager: em } = window;

class CarRent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            banner: '',
            title: 'Аренда транспорта',
            bgcolor: '#252525',
            cars: [
                {
                    price: 200,
                    name: 'Elegy',
                    sale: -1,
                    type: 'Автомобиль'
                },
                {
                    price: 444,
                    name: 'Elegy2',
                    sale: 13,
                    type: 'Автомобиль'
                },
                {
                    price: 200,
                    name: 'Toros',
                    sale: 60,
                    type: 'Автомобиль'
                },
                {
                    price: 444,
                    name: 'Thrax',
                    sale: 0,
                    type: 'Автомобиль'
                },
                {
                    price: 200,
                    name: 'Nexus',
                    sale: 0,
                    type: 'Автомобиль'
                },
                {
                    price: 444,
                    name: 'Faggio',
                    sale: 0,
                    type: 'Автомобиль'
                },
                {
                    price: 200,
                    name: 'Faggio2',
                    sale: 13,
                    type: 'Автомобиль'
                },
                {
                    price: 444,
                    name: 'Faggio3',
                    type: 'Автомобиль'
                }
            ]
        }
    }

    componentDidMount() {
        em.addHandler('carrent', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateItems') {
                try {
                    this.setState({show: true})
                    this.setState({title: value.title})
                    this.setState({banner: value.banner})
                    this.setState({bgcolor: value.bgColor})
                    this.setState({cars: value.items})
                }
                catch (e) {

                }
            }
        })
    }

    componentWillUnmount() {
        em.removeHandler('carrent');
    }

    setHide = () => {
        this.setState({
            show: false
        })

        try {
            mp.trigger('client:carRent:hide'); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <div className="rentBlock">
                <div className="rentCar">
                    <div className="head">
                        <div className="title">
                            <span>{this.state.title}</span>
                        </div>
                        <div className="exit" onClick={this.setHide}>Close</div>
                    </div>
                    <div className="content">
                    {
                        this.state.cars.map((item, i) => (
                            <div className="item">
                                <div className="img">
                                    <img src={`https://gta-5.ru/server/client/images/carsv/1080/${item.name.toLowerCase()}.jpg`} alt="img car" />
                                    {
                                        item.sale > 0 ?
                                        <div className="sale">-{item.sale}%</div>
                                        :null 
                                    }
                                </div>
                                <div className="info">
                                    <div className="text">
                                        <div className="name">{item.name}</div>
                                        <div className="price">Price {item.price}$</div>
                                    </div>
                                    <div className="btns">
                                    {
                                        item.sale > 0 ?
                                        <>
                                            <span className='card' onClick={() => {
                                                    try {
                                                        mp.trigger('client:carRent:buyCard', item.name, JSON.stringify(item.params)); // eslint-disable-line
                                                    } catch (e) {
                                                        console.log(e);
                                                    }
                                                }}>
                                                    Card
                                            </span>
                                            <span className='cash' onClick={() => {
                                                    try {
                                                        mp.trigger('client:carRent:buyCash', item.name, JSON.stringify(item.params)); // eslint-disable-line
                                                    } catch (e) {
                                                        console.log(e);
                                                    }
                                                }}>
                                                    Cash
                                            </span>
                                        </>
                                        :
                                        <span className='cash' onClick={() => {
                                                try {
                                                    mp.trigger('client:carRent:takeCar', item.name, JSON.stringify(item.params)); // eslint-disable-line
                                                } catch (e) {
                                                    console.log(e);
                                                }
                                            }}>
                                                Rent
                                        </span>
                                    }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        )
    }
}

export default CarRent