import React from "react";

import '../../css/settings.css'

import Main from "./pages/main";
import Interface from "./pages/interface"
import Voice from "./pages/voice";
import Chat from "./pages/chat";
import Button from "./pages/button";
import Map from "./pages/map";

const { EventManager: em } = window;

export default class Settings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 'main'
        }
    }
    setPage = (e) =>{
        e.preventDefault()
        let data = document.querySelectorAll('.setting .navButton') 
        this.setState({page: e.target.id.slice(2, e.target.id.length)})
        for (let index = 0; index < data.length; index++) {
            data[index].classList.remove('active')        
        }
        console.log(data)
        e.target.classList.add('active')
    }
    render() {
        return(
            <div className="setting">
                <div className="nav">
                    <div className={this.state.page === 'main' ? 'navButton active': 'navButton'} id='b_main' onClick={this.setPage}>Основное</div>
                    <div className={this.state.page === 'interface' ? 'navButton active': 'navButton'} id='b_interface' onClick={this.setPage}>Интерфейс</div>
                    <div className={this.state.page === 'voice' ? 'navButton active': 'navButton'} id='b_voice' onClick={this.setPage}>Голосовой чат</div>
                    <div className={this.state.page === 'chat' ? 'navButton active': 'navButton'} id='b_chat' onClick={this.setPage}>Текстовый чат</div>
                    <div className={this.state.page === 'button' ? 'navButton active': 'navButton'} id='b_button' onClick={this.setPage}>Назначение клавиш</div>
                    <div className={this.state.page === 'map' ? 'navButton active': 'navButton'} id='b_map' onClick={this.setPage}>Карта</div>
                </div>
                <div className="content">
                    {this.state.page === 'main' ? <Main />: null}
                    {this.state.page === 'interface' ? <Interface />: null}
                    {this.state.page === 'voice' ? <Voice />: null}
                    {this.state.page === 'chat' ? <Chat />: null}
                    {this.state.page === 'button' ? <Button />: null}
                    {this.state.page === 'map' ? <Map />: null}
                </div>
            </div>
        )
    }
}