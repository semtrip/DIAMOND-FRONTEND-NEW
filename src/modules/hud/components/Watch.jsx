import React from 'react';
import Draggable from '../Draggable'

const { EventManager: em } = window;

class Watch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            time: '00:00',
            date: '01.01.1990',
            temp: '12°С',
            color: '#48B9F2',
            transfer: true,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Watch.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        em.addHandler('hudw', value => {
            switch (value.type) {
                case 'show':
                    this.setState({ show: true })
                    break;
                case 'hide':
                    this.setState({ show: false })
                    break;
                case 'updateValues':
                    this.setState({ show: value.isShow });
                    this.setState({ time: value.time });
                    this.setState({ date: value.date });
                    this.setState({ temp: value.temp });
                    break;
                case 'transfer':
                    this.setState({ transfer: value.transfer })
                    break;
                default:
                    return;
            }

            // if (value.type === 'show') {
            //     this.setState({ show: true })
            // } else if (value.type === 'hide') {
            //     this.setState({ show: false })
            // } else if (value.type === 'updateValues') {
            //     this.setState({ show: value.isShow });
            //     this.setState({ time: value.time });
            //     this.setState({ date: value.date });
            //     this.setState({ temp: value.temp });
            // } else if (value.type === 'transfer') {

            // } else return;
        })
    }

    componentWillUnmount() {
        em.removeHandler('hudw');
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <Draggable id="watch" className={this.state.transfer ? "watch-main transfer" : "watch-main"}>
                    <div className="watch-image"></div>
                    <div className="time-box">
                        <div className="time">{this.state.time}</div>
                        <div className="date">{this.state.date}</div>
                        <div className="temp">{this.state.temp}</div>
                    </div>
                </Draggable>
            </React.Fragment>
        )
    }
}

export default Watch;
