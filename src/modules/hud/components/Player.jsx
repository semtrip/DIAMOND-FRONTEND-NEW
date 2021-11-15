/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import Draggable from '../Draggable';

import MicrophoneOff from '../img/mic-off.svg'
import MicrophoneOn from '../img/mic_on.svg'

import HungerIcon from '../img/hunger_icon.svg';
import ThirstIcon from '../img/thirst_icon.svg';

const { EventManager: em } = window;

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            microphone: false,
            drink: 50,
            eat: 60,
            wallet: "12.400.000$",
            card: "12.400$",
            color: '#48B9F2',
            background: 0.5,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Player.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        em.addHandler('hudp', value => {
            if (value.type === 'show') {
                this.setState({ show: true })
            } else if (value.type === 'hide') {
                this.setState({ show: false })
            } else if (value.type === 'updateValues') {
                this.setState({ microphone: value.microphone });
                this.setState({ drink: value.drink });
                this.setState({ eat: value.eat });
                this.setState({ wallet: value.wallet });
                this.setState({ card: value.card });
                this.setState({ background: value.background });
            } else return;
        })
    }

    componentWillUnmount() {
        em.removeHandler('hudp');
    }

    formatCurrency(num) {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="player-hud">
                    <div className="player-hud__box">
                        <div className="player-hud__box__row">
                            <Draggable id="player-mic" className="phud-mic">
                                <img src={this.state.microphone ? MicrophoneOn : MicrophoneOff} width="18" />
                                <div className="help">B</div>
                            </Draggable>

                            {/* <Draggable id="player-needs" className="phud-needs">
                                <div className="needs-box">
                                    <img src={ThirstIcon} width='8' />
                                    <svg width='30' height='30' fill='none' className='svg-circle'>
                                        <circle stroke='#0093FD' strokeWidth='4' r='13' cx='15' cy='15' strokeDasharray={`${82 * (this.state.drink / 100)} 82`} />
                                    </svg>
                                </div>
                                <div className="needs-box">
                                    <img src={HungerIcon} width='12' />
                                    <svg width='30' height='30' fill='none' className='svg-circle'>
                                        <circle stroke='#FD7900' strokeWidth='4' r='13' cx='15' cy='15' strokeDasharray={`${82 * (this.state.eat / 100)} 82`} />
                                    </svg>
                                </div>
                            </Draggable> */}
                        </div>

                    </div>
                </div>
                <Draggable id="player-money" className="phud-money">
                    <div className="wallet-text">{this.state.wallet}</div>
                </Draggable>
            </React.Fragment>
        )
    }
}

export default Player;
