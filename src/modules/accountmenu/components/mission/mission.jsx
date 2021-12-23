import React from "react";
import { matchPath } from "react-router";
import '../../css/mission.css'

import img from '../../img/mission_exsaple.png'

const { EventManager: em } = window;

export default class Mission extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mission: [
                {
                    title: 'Криминальный мир',
                    discriptor: 'Вам предстоит, пройти суровый мир криминала, убивать людей, грабить банки,получить уважение и почет! Не забудьте,вы находитесь в криминальном мире DIAMOND ROLE PLAY',
                    img: 'url',
                    attachments: [
                        {
                            title: 'Криминальный мир',
                            discriptor: 'Вам предстоит, пройти суровый мир криминала, убивать людей, грабить банки,получить уважение и почет! Не забудьте,вы находитесь в криминальном мире DIAMOND ROLE PLAY',
                            img: 'url',
                            price: 100000,
                        },
                        {
                            title: 'Криминальный мир',
                            discriptor: 'Вам предстоит, пройти суровый мир криминала, убивать людей, грабить банки,получить уважение и почет! Не забудьте,вы находитесь в криминальном мире DIAMOND ROLE PLAY',
                            img: 'url',
                            price: 100000,
                        },
                        {
                            title: 'Криминальный мир',
                            discriptor: 'Вам предстоит, пройти суровый мир криминала, убивать людей, грабить банки,получить уважение и почет! Не забудьте,вы находитесь в криминальном мире DIAMOND ROLE PLAY',
                            img: 'url',
                            price: 100000,
                        },
                    ]
                },
                {
                    title: 'Криминальный мир',
                    discriptor: 'Вам предстоит, пройти суровый мир криминала, убивать людей, грабить банки,получить уважение и почет! Не забудьте,вы находитесь в криминальном мире DIAMOND ROLE PLAY',
                    img: 'url',
                    price: 100000,
                },

            ]
        }
    }
    componentDidCatch() {
        mp.trigger() // eslint-disable-line
    }    

    componentDidMount() {
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateMission') {
                this.setState({mission: value.mission})
            }
        })
    }
    componentWillUnmount() {
        em.removeHandler('accountMenu');
    }
    clickTask = (e) => {
        let el = e.target
        let id = el.closest('.task').id
        try {
            mp.trigger('startMission', id) // eslint-disable-line
        } catch (error) {
            console.log('startMission', id)
        }
    }
    moneyFormat(n) {
        return n.toLocaleString()
    }
    render() {
        return(
            <div className="mission">
                <div className="head">
                    <h1>Квестовая линия</h1>
                    <span>Общее количество квестов: <b>{this.state.mission.length}</b></span>
                </div>
                <div className="container">
                {this.state.mission.map((item, i)=> (
                    <div className={item.attachments !== undefined ? 'task active': 'task'} key={i} id={i} onClick={this.clickTask}>
                        <div className="content">
                            <div className="image">
                                <img src={img} alt="" />
                                <div className="line"></div>
                            </div>
                            <div className="text">
                                <span className="title">{item.title}</span>
                                <span className="descriptor">{item.discriptor}</span>
                                {
                                item.attachments !== undefined ?
                                (
                                <span className="count">
                                    Количество заданий:
                                    <span><b>{item.attachments.length}</b>шт</span>
                                </span>
                                ):null
                            }
                            {
                                item.attachments === undefined ?
                                (
                                <span className="price">
                                    Награда за выполнение:
                                    <span>{ this.moneyFormat(item.price)}<b>₽</b></span>
                                </span>
                                ):null
                            }
                            </div>
                        </div>
                        <div className="btn">Начать квест</div>
                    </div>
                )
                )}
                </div>
            </div>
        )
    }
}
