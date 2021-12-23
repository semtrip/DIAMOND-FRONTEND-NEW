import React from "react";
import '../../css/reports.css'

const { EventManager: em } = window;

export default class Reports extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reports: [
                {
                    id: '181',
                    status: true,
                    new: true,
                    message: [
                        {
                            admin: true,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее 111'
                        },
                        {
                            admin: false,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее 111'
                        },
                        {
                            admin: true,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее 222'
                        },
                        {
                            admin: true,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее 333'
                        },
                        {
                            admin: false,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее 111'
                        },
                        {
                            admin: false,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее 222'
                        },
                        {
                            admin: false,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее 333'
                        }
                    ],
                },
                {
                    id: '182',
                    status: true,
                    new: false,
                    message: [
                        {
                            admin: true,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее'
                        },
                        {
                            admin: false,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее'
                        }
                    ],
                },
                {
                    id: '183',
                    status: false,
                    new: false,
                    message: [
                        {
                            admin: true,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее'
                        },
                        {
                            admin: false,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее'
                        },
                        {
                            admin: false,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее'
                        },
                        {
                            admin: false,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее'
                        },
                        {
                            admin: false,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее'
                        },
                        {
                            admin: false,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее'
                        },
                        {
                            admin: false,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее'
                        }
                    ],
                },
            ],
            path: 0,
        }
    }
    componentDidCatch() {
        mp.trigger() // eslint-disable-line
    }    

    componentDidMount() {
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateReports') {
                this.setState({reports: value.reports, path: value.path})
            }
        })
    }
    componentWillUnmount() {
        em.removeHandler('accountMenu');
    }
    componentDidUpdate() {
        document.getElementById('messagePole').scrollTop = 9999
    }
    textareaFocus () {
        document.getElementById('message').focus()
    }
    resizeTexarea () {
        const textarea = document.getElementById('message')
        const block = document.getElementById('test')
        const messagePole = document.getElementById('messagePole')
        let text = textarea.value
        block.innerHTML = text

        console.log(block.clientHeight)
        if(block.clientHeight === 0) {
            textarea.style.height = 17 + 'px'
            messagePole.style.height = 500 + 'px'
        } else if(block.clientHeight < 134) {
            textarea.style.height = block.clientHeight + 'px'
            if(block.clientHeight > 32) {
                messagePole.style.height = 500 - (block.clientHeight - 32) + 'px'
            }
        } 

    }
    clickTiket = (e) => {
        e.preventDefault()
        this.setState({path: e.target.id})

        let tiket = document.querySelectorAll('.tiket')
        for (let index = 0; index < tiket.length; index++) {
            tiket[index].classList.remove('active')
        }
        e.target.classList.add('active')
    }
    clickSend = () => {
        const textarea = document.getElementById('message')
        let text = textarea.value
        let id = this.state.reports[this.state.path].id 
        if (text.length > 0) {
            try {
                mp.trigger('sendMsgReport', text, id) // eslint-disable-line
            } catch (error) {
                console.log(text, id)
            }
        }

    }
    render() {
        return(
            <div className="reports">
                <div className="head">
                    <h1>Все обращения</h1>
                    <span>Зайдайте вопрос по игре или подайте жалобу на игрока</span>
                </div>
                <div className="container">
                    <div className="history">
                        <span>История запросов:</span>

                        {this.state.reports.length > 0 ? this.state.reports.map((item, i)=> 
                        (
                            <div className={item.status ? (item.new ? 'tiket new active': 'tiket'): 'tiket closed'} onClick={this.clickTiket} key={i} id={i}>
                                <span>Запрос #{item.id}</span>
                            </div>
                        )
                        
                    ): null}
                    </div>
                    <div className="dialog" >
                    {this.state.path > -1 ?
                    <>
                        <span>Запрос #{this.state.reports[this.state.path].id}</span>
                        <b>Чат с администрацией</b>
                        <div className="messagePole" id='messagePole'>
                            
                            {this.state.reports[this.state.path].message.map((item,i) => (
                                item.admin ?
                                <div className="adminMsg" key={i}> 
                                    <div className="message">
                                        <span className="tag"><b>Администратор <span className="flare"></span></b>{item.name}<i>{item.time}</i></span>
                                        <div className="text">{item.message}</div>
                                    </div>
                                </div>
                                :                            
                                <div className="playerMsg" key={i}>                      
                                    <div className="message">
                                        <span className="tag"><i>{item.time}</i>{item.name}<b>Вы</b></span>
                                        <div className="text">{item.message}</div>
                                    </div>
                                </div>
                                )
                            )}
                            {!this.state.reports[this.state.path].status ?
                                <div className='rep_close'><b>ЗАПРОС ЗАКРЫТ</b><span>Если у Вас остались дополнительные вопросы, создайте новый запрос</span></div>:null
                            }
                            <div ref={this.messagesEndRef} />
                        </div>
                        {this.state.reports[this.state.path].status ? 
                        <div className="messageInput" id='area' onClick={this.textareaFocus}>
                            <div id="test" />
                            <textarea name='message' id='message' rows="1" placeholder="Введите сообщение..." onChange={this.resizeTexarea} maxLength='350'/>
                            <div className="send" onClick={this.clickSend}></div>
                        </div>:null 
                        }

                    </>:null}
                    </div>
                </div>
            </div>
        )
    }

}