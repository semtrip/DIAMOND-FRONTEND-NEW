import React from 'react'
import './css/theme-noty.css';
import "../../css/animate.css"

import error from './img/error.png'
import warn from './img/warn.png'
import info from './img/info.png'
import success from './img/success.png'
 
const { EventManager: em } = window;

const types = ['info', 'error', 'success', 'warn']
const layouts = ['top', 'topLeft', 'topCenter', 'topRight', 'center', 'centerLeft', 'centerRight', 'bottom', 'bottomLeft', 'bottomCenter', 'bottomRight']


export default class Notifications extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            alertBootom: [],
            alertBottomLeft: [],
            alertBottomRight: [],
            alertTop: [],
            alertTopLeft: [],
            alertTopRight: [],
            alertCenter: [],
            alertCenterLeft: [],
            alertCenterRight: [],
        }       
    }
    componentDidCatch(error, errorInfo) {
        try {
            mp.trigger('client:ui:debug', 'Notifications.jsx', // eslint-disable-line
            error, errorInfo);
        }
        catch {
            console.log(error, errorInfo)
        }
    }

    componentDidMount() {
        em.addHandler('notify', value => {
            var now = new Date().getMilliseconds() + Math.random()
            this.pushAlert({type: types[value.type], layout: layouts[value.layout], message: value.text, time: value.time, id: now})
        });
        console.log('mount')
    }

    componentWillUnmount() {
        em.removeHandler('notify');
        console.log('UnMount')
    }

    pushAlert = (alert) => {
        switch (alert.layout) {
            case 'bottom':
                this.setState((state)=> {
                    let alertCopy = JSON.parse(JSON.stringify(state.alertBootom))
                    alertCopy.push(alert)
                    return {
                        ...state,
                        alertBootom: alertCopy
                    }
                })
                break;
            case 'bottomCenter':
                this.setState((state)=> {
                    let alertCopy = JSON.parse(JSON.stringify(state.alertBootom))
                    alertCopy.push(alert)
                    return {
                        ...state,
                        alertBootom: alertCopy
                    }
                })
                break;    
            case 'bottomLeft':
                this.setState((state)=> {
                    let alertCopy = JSON.parse(JSON.stringify(state.alertBottomLeft))
                    alertCopy.push(alert)
                    return {
                        ...state,
                        alertBottomLeft: alertCopy
                    }
                })
                break;
            case 'bottomRight':
                this.setState((state)=> {
                    let alertCopy = JSON.parse(JSON.stringify(state.alertBottomRight))
                    alertCopy.push(alert)
                    return {
                        ...state,
                        alertBottomRight: alertCopy
                    }
                })
                break;
            case 'top':
                this.setState((state)=> {
                    let alertCopy = JSON.parse(JSON.stringify(state.alertTop))
                    alertCopy.push(alert)
                    return {
                        ...state,
                        alertTop: alertCopy
                    }
                })
                break;
            case 'topCenter':
                this.setState((state)=> {
                    let alertCopy = JSON.parse(JSON.stringify(state.alertTop))
                    alertCopy.push(alert)
                    return {
                        ...state,
                        alertTop: alertCopy
                    }
                })
                break;    
            case 'topLeft':
                this.setState((state)=> {
                    let alertCopy = JSON.parse(JSON.stringify(state.alertTopLeft))
                    alertCopy.push(alert)
                    return {
                        ...state,
                        alertTopLeft: alertCopy
                    }
                })
                break;
            case 'topRight':
                this.setState((state)=> {
                    let alertCopy = JSON.parse(JSON.stringify(state.alertTopRight))
                    alertCopy.push(alert)
                    return {
                        ...state,
                        alertTopRight: alertCopy
                    }
                })
                break;
            case 'center':
                this.setState((state)=> {
                    let alertCopy = JSON.parse(JSON.stringify(state.alertCenter))
                    alertCopy.push(alert)
                    return {
                        ...state,
                        alertCenter: alertCopy
                    }
                })
                break;
            case 'centerLeft':
                this.setState((state)=> {
                    let alertCopy = JSON.parse(JSON.stringify(state.alertCenterLeft))
                    alertCopy.push(alert)
                    return {
                        ...state,
                        alertCenterLeft: alertCopy
                    }
                })
                break;
            case 'centerRight':
                this.setState((state)=> {
                    let alertCopy = JSON.parse(JSON.stringify(state.alertCenterRight))
                    alertCopy.push(alert)
                    return {
                        ...state,
                        alertCenterRight: alertCopy
                    }
                })
                break;    
            default:
                break;
        }
    }

    render () {
        const { 
            alertBootom, 
            alertBottomLeft, 
            alertBottomRight, 
            alertTop, 
            alertTopLeft, 
            alertTopRight, 
            alertCenter, 
            alertCenterLeft, 
            alertCenterRight
        } = this.state;
        const style = {
            display: 'none'
        }
        return (
            <React.Fragment>
                <div className='notify_bottom'>
                    {alertBootom.length > 0 && (alertBootom.map((item, i) => {
                        const animation = {animation: 'timer ' + item.time/1000 + 's'}
                        return (
                            <div className="notify-block" key={i} id={item.id}>
                            <div style={style}>
                            {setTimeout(()=> {
                                if(document.getElementById(item.id) !== null) {
                                    document.getElementById(item.id).remove()
                                }
                            }, item.time)
                            }
                            </div>
                            {item.type === 'error' && (<img src={error} alt="notification-icons" />)}
                            {item.type === 'info' && (<img src={info} alt="notification-icons" />)}
                            {item.type === 'success' && (<img src={success} alt="notification-icons" />)}
                            {item.type === 'warn' && (<img src={warn} alt="notification-icons" />)}
                            <span>{item.message}</span>
                            <div className='timeline' style={animation} ></div>
                        </div>
                        )
                    }))}
                </div>
                <div className='notify_bottomLeft'>
                    {alertBottomLeft.length > 0 && (alertBottomLeft.map((item, i) => {
                        const animation = {animation: 'timer ' + item.time/1000 + 's'}
                        return (
                            <div className="notify-block" key={i} id={item.id}>
                            <div style={style}>
                            {setTimeout(()=> {
                                if(document.getElementById(item.id) !== null) {
                                    document.getElementById(item.id).remove()
                                }
                            }, item.time)
                            }
                            </div>
                            {item.type === 'error' && (<img src={error} alt="notification-icons" />)}
                            {item.type === 'info' && (<img src={info} alt="notification-icons" />)}
                            {item.type === 'success' && (<img src={success} alt="notification-icons" />)}
                            {item.type === 'warn' && (<img src={warn} alt="notification-icons" />)}
                            <span>{item.message}</span>
                            <div className='timeline' style={animation} ></div>
                        </div>
                        )
                    }))}
                </div>
                <div className='notify_bottomRight'>
                    {alertBottomRight.length > 0 && (alertBottomRight.map((item, i) => {
                        const animation = {animation: 'timer ' + item.time/1000 + 's'}
                        return (
                            <div className="notify-block" key={i} id={item.id}>
                            <div style={style}>
                            {setTimeout(()=> {
                                if(document.getElementById(item.id) !== null) {
                                    document.getElementById(item.id).remove()
                                }
                            }, item.time)
                            }
                            </div>
                            {item.type === 'error' && (<img src={error} alt="notification-icons" />)}
                            {item.type === 'info' && (<img src={info} alt="notification-icons" />)}
                            {item.type === 'success' && (<img src={success} alt="notification-icons" />)}
                            {item.type === 'warn' && (<img src={warn} alt="notification-icons" />)}
                            <span>{item.message}</span>
                            <div className='timeline' style={animation} ></div>
                        </div>
                        )
                    }))}
                </div>
                <div className='notify_top'>
                    {alertTop.length > 0 && (alertTop.map((item, i) => {
                        const animation = {animation: 'timer ' + item.time/1000 + 's'}
                        return (
                            <div className="notify-block" key={i} id={item.id}>
                            <div style={style}>
                            {setTimeout(()=> {
                                if(document.getElementById(item.id) !== null) {
                                    document.getElementById(item.id).remove()
                                }
                            }, item.time)
                            }
                            </div>
                            {item.type === 'error' && (<img src={error} alt="notification-icons" />)}
                            {item.type === 'info' && (<img src={info} alt="notification-icons" />)}
                            {item.type === 'success' && (<img src={success} alt="notification-icons" />)}
                            {item.type === 'warn' && (<img src={warn} alt="notification-icons" />)}
                            <span>{item.message}</span>
                            <div className='timeline' style={animation} ></div>
                        </div>
                        )
                    }))}
                </div>
                <div className='notify_topLeft'>
                    {alertTopLeft.length > 0 && (alertTopLeft.map((item, i) => {
                        const animation = {animation: 'timer ' + item.time/1000 + 's'}
                        return (
                            <div className="notify-block" key={i} id={item.id}>
                            <div style={style}>
                            {setTimeout(()=> {
                                if(document.getElementById(item.id) !== null) {
                                    document.getElementById(item.id).remove()
                                }
                            }, item.time)
                            }
                            </div>
                            {item.type === 'error' && (<img src={error} alt="notification-icons" />)}
                            {item.type === 'info' && (<img src={info} alt="notification-icons" />)}
                            {item.type === 'success' && (<img src={success} alt="notification-icons" />)}
                            {item.type === 'warn' && (<img src={warn} alt="notification-icons" />)}
                            <span>{item.message}</span>
                            <div className='timeline' style={animation} ></div>
                        </div>
                        )
                    }))}
                </div>
                <div className='notify_topRight'>
                    {alertTopRight.length > 0 && (alertTopRight.map((item, i) => {
                        const animation = {animation: 'timer ' + item.time/1000 + 's'}
                        return (
                            <div className="notify-block" key={i} id={item.id}>
                            <div style={style}>
                            {setTimeout(()=> {
                                if(document.getElementById(item.id) !== null) {
                                    document.getElementById(item.id).remove()
                                }
                            }, item.time)
                            }
                            </div>
                            {item.type === 'error' && (<img src={error} alt="notification-icons" />)}
                            {item.type === 'info' && (<img src={info} alt="notification-icons" />)}
                            {item.type === 'success' && (<img src={success} alt="notification-icons" />)}
                            {item.type === 'warn' && (<img src={warn} alt="notification-icons" />)}
                            <span>{item.message}</span>
                            <div className='timeline' style={animation} ></div>
                        </div>
                        )
                    }))}
                </div>
                <div className='notify_center'>
                    {alertCenter.length > 0 && (alertCenter.map((item, i) => {
                        const animation = {animation: 'timer ' + item.time/1000 + 's'}
                        return (
                            <div className="notify-block" key={i} id={item.id}>
                            <div style={style}>
                            {setTimeout(()=> {
                                if(document.getElementById(item.id) !== null) {
                                    document.getElementById(item.id).remove()
                                }
                            }, item.time)
                            }
                            </div>
                            {item.type === 'error' && (<img src={error} alt="notification-icons" />)}
                            {item.type === 'info' && (<img src={info} alt="notification-icons" />)}
                            {item.type === 'success' && (<img src={success} alt="notification-icons" />)}
                            {item.type === 'warn' && (<img src={warn} alt="notification-icons" />)}
                            <span>{item.message}</span>
                            <div className='timeline' style={animation} ></div>
                        </div>
                        )
                    }))}
                    </div>
                <div className='notify_centerLeft'>
                    {alertCenterLeft.length > 0 && (alertCenterLeft.map((item, i) => {
                        const animation = {animation: 'timer ' + item.time/1000 + 's'}
                        return (
                            <div className="notify-block" key={i} id={item.id}>
                            <div style={style}>
                            {setTimeout(()=> {
                                if(document.getElementById(item.id) !== null) {
                                    document.getElementById(item.id).remove()
                                }
                            }, item.time)
                            }
                            </div>
                            {item.type === 'error' && (<img src={error} alt="notification-icons" />)}
                            {item.type === 'info' && (<img src={info} alt="notification-icons" />)}
                            {item.type === 'success' && (<img src={success} alt="notification-icons" />)}
                            {item.type === 'warn' && (<img src={warn} alt="notification-icons" />)}
                            <span>{item.message}</span>
                            <div className='timeline' style={animation} ></div>
                        </div>
                        )
                    }))}
                </div>
                <div className='notify_centerRight'>
                {alertCenterRight.length > 0 && (alertCenterRight.map((item, i) => {
                    const animation = {animation: 'timer ' + item.time/1000 + 's'}
                    return (
                        <div className="notify-block" key={i} id={item.id}>
                        <div style={style}>
                            {setTimeout(()=> {
                                if(document.getElementById(item.id) !== null) {
                                    document.getElementById(item.id).remove()
                                }
                            }, item.time)
                            }
                            </div>
                        {item.type === 'error' && (<img src={error} alt="notification-icons" />)}
                        {item.type === 'info' && (<img src={info} alt="notification-icons" />)}
                        {item.type === 'success' && (<img src={success} alt="notification-icons" />)}
                        {item.type === 'warn' && (<img src={warn} alt="notification-icons" />)}
                        <span>{item.message}</span>
                        <div className='timeline' style={animation} ></div>
                    </div>
                    )
                }))}
                </div>
            </React.Fragment>
        ) 
    }
}
