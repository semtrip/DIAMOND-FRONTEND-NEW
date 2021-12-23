import React from "react";
import '../../css/player.css'

import ico from '../../img/player_ico.svg'

const { EventManager: em } = window;

export default class playerStats extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Maneskin Harding',
            id: '490',
            fraction: 'Los-Santos Police',
            sex: 'Мужской',
            birth: '13.12.1997',
            spouse: 'Gr0zvill Harding',
            playTime: {hourse: '12', mines: '30'},
            lastLogin: '13.12.2021',
            dateRegistation: '10:45 13.12.2021',
            cash: '100.100.100',
            bank: '100.100.100',
            stats: [
                {name: 'Репутация', data: 'Положительная', color: 'ffffff'},
                {name: 'Репутация', data: 'Положительная', color: 'fff000'},
                {name: 'Репутация', data: 'Положительная'}
            ]
        }
    }
    componentDidCatch() {
        mp.trigger() // eslint-disable-line
    }    

    componentDidMount() {
        em.addHandler('accountMenu', value => {
            if (value.type === 'updatePlayer') {
                this.setState({
                    name: value.name, //'Maneskin Harding'
                    id: value.id, //490
                    fraction: value.fraction, //'Los-Santos Police'
                    sex: value.sex, //'Мужской'
                    birth: value.birth, //'13.12.1997'
                    spouse: value.spouse, //'Gr0zvill Harding'
                    playTime: value.playTime, //{hourse: '12', mines: '30'}
                    lastLogin: value.lastLogin, //'13.12.2021'
                    dateRegistation: value.dateRegistation, //'10:45 13.12.2021'
                    cash: value.cash, //'100.100.100'
                    bank: value.bank, //'100.100.100'
                    stats: value.stats // [{name: 'Репутация', data: 'Положительная', color: 'ffffff'}]
                })
            }
        })
    }
    componentWillUnmount() {
        em.removeHandler('accountMenu');
    }
    clickBtn = (e) => {
        let el = e.target
        try {
            mp.trigger('clickBtnReport', el.id) // eslint-disable-line
        } catch (error) {
            console.log(el.id)
        }        
    }
    render () {
        return(
            <div className="player">
                <div className="head">
                    <div className="playerName">
                        <div className="icon"><img src={ico} alt="" /></div>
                        <span><b>{this.state.name}</b>#{this.state.id}</span>
                    </div>
                    <div className="buttonBlock">
                        <div className="button" onClick={this.clickBtn} id="report">Жалоба</div>
                        <div className="button button_two" onClick={this.clickBtn} id="ask">Задать вопрос</div>
                    </div>
                </div>
                <div className="stats">
                    <div className="generalInfo block_s">
                        <h1>Общая информация</h1>
                        <div className="column">
                            <div className="line">Имя:<b className="active">{this.state.name}</b></div>
                            <div className="line">Фракция:<b>{this.state.fraction}</b></div>
                            <div className="line">Пол:<b>{this.state.sex}</b></div>
                            <div className="line">Дата рождения:<b>{this.state.birth}</b></div>
                            <div className="line">Супруг(а):<b className="active">{this.state.spouse}</b></div>
                            <div className="line">Часов в игре:<b>{this.state.playTime.hourse}ч {this.state.playTime.mines} мин</b></div>
                            <div className="line">Последний вход:<b>{this.state.lastLogin}</b></div>
                            <div className="line">Дата регистрации:<b>{this.state.dateRegistation}</b></div>
                        </div>
                    </div>
                    <div className="finance block_s">
                        <h1>Ваши финансы</h1>
                        <div className="w_block">
                            <div className="cash">
                                <div className="ico">Наличные</div>
                                <div className="text">${this.state.cash}</div>
                            </div>
                            <div className="bank">
                            <div className="ico">Банковский счет</div>
                                <div className="text">${this.state.bank}</div>
                            </div>
                            <div className="docs"></div>
                            <div className="registration"><img src={ico} alt="" />Временная регистрация</div>
                            <span>Чтобы получить официальное гражданство, пройдитев “Мэрию” и заполните ряд документов!</span>
                        </div>
                    </div>
                    <div className="statistics block_s">
                        <h1>Статистика</h1>
                        <div className="w_block">
                            <div className="content">
                            {this.state.stats.length > 0 ? this.state.stats.map((item, i)=> 
                                (
                                    <div className="line" key={i}>{item.name}:<b style={{color: '#'+item.color}}>{item.data}</b></div>
                                )
                            ): null}
                        
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )    
    }
}