import React from 'react';

import Draggable from '../Draggable'
import Pointer from '../img/pointer.svg';

const { EventManager: em } = window;

class Gps extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            showGreen: true,
            showYellow: false,
            district: 'Del Pero...',
            street: 'Загрузка...',
            showGang: false,
            showMafia: false,
            att: 0,
            def: 0,
            tre: 0,
            timer: 0,
            color: '#FFC107',
            background: 0.5,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Gps.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        em.addHandler('hudg', value => {
            if (value.type === 'show') {
                this.setState({ show: true })
            } else if (value.type === 'hide') {
                this.setState({ show: false })
            } else if (value.type === 'updateValues') {
                this.setState({ show: value.isShow });
                this.setState({ district: value.district });
                this.setState({ street: value.street });
                this.setState({ background: value.background });
                this.setState({ showGreen: value.showGreen });
                this.setState({ showYellow: value.showYellow });
                this.setState({ background: value.background });
            }
            else if (value.type === 'updateGangInfo') {
                this.setState({ att: value.top1 });
                this.setState({ def: value.top2 });
                this.setState({ timer: value.timerCounter });
            }
            else if (value.type === 'showGangInfo') {
                this.setState({ showGang: true });
            }
            else if (value.type === 'hideGangInfo') {
                this.setState({ showGang: false });
            }
            else if (value.type === 'updateMafiaInfo') {
                this.setState({ att: value.top1 });
                this.setState({ def: value.top2 });
                this.setState({ tre: value.top3 });
                this.setState({ timer: value.timerCounter });
            }
            else if (value.type === 'showMafiaInfo') {
                this.setState({ showMafia: true });
            }
            else if (value.type === 'hideMafiaInfo') {
                this.setState({ showMafia: false });
            }
            else return;
        })
    }

    componentWillUnmount() {
        em.removeHandler('hudg');
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>

                <Draggable id="gps" className="gps-main">
                    <Draggable id="zone" className="zone-box">
                        <img src={Pointer} alt='' width='20px' className='zone-pointer'/>
                        <div className={this.state.showGreen ? 'time-img-greenzone' : 'hide'}>
                        </div>
                        <div className={this.state.showYellow ? 'time-img-yellowzone' : 'hide'}></div>
                    </Draggable>
                    <div className="gps-text">
                        <div className="gps-title">{this.state.district}</div>
                        <div className="gps-txt">{this.state.street}</div>
                    </div>
                </Draggable>

                <Draggable id="gang" className={this.state.showGang ? 'gang-war-info' : 'hide'} style={{ backgroundColor: 'rgba(0, 0, 0, ' + this.state.background + ')' }}>
                    <div className="war-att" style={this.state}>Война за территорию</div>
                    <div className="war-att">Атака: {this.state.att}</div>
                    <div className="war-def">Оборона: {this.state.def}</div>
                    <div className="war-timer">Таймер: {this.state.timer} сек</div>
                </Draggable>

                <Draggable id="mafia" className={this.state.showMafia ? 'gang-war-info' : 'hide'} style={{ backgroundColor: 'rgba(0, 0, 0, ' + this.state.background + ')' }}>
                    <div className="war-att" style={this.state}>Война за территорию</div>
                    <div className="war-att">Cosa Nostra: {this.state.att}</div>
                    <div className="war-def">Russian Mafia: {this.state.def}</div>
                    <div className="war-def">Yakuza: {this.state.tre}</div>
                    <div className="war-timer">Таймер: {this.state.timer} сек</div>
                </Draggable>

            </React.Fragment>
        )
    }
}

export default Gps;