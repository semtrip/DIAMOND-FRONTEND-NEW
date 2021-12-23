import React from "react";
import '../../css/property.css'

import Home from "./pages/house";
import Cars from "./pages/cars";
import Bussines from "./pages/bussines";


export default class Property extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: 'cars'
        }
    }
    editState = (e) =>{
        e.preventDefault()
        let data = document.querySelectorAll('.property .navButton')
        this.setState({page: e.target.id.slice(2, e.target.id.length)})
        for (let index = 0; index < data.length; index++) {
            data[index].classList.remove('active')        
        }
        console.log(data)
        e.target.classList.add('active')
    }
    render() {
        return(
            <div className="property">
                <div className="nav">
                    <div className={this.state.page === 'cars' ? 'navButton active': 'navButton'} id='b_cars' onClick={this.editState}>Транспорт</div>
                    <div className={this.state.page === 'bussines' ? 'navButton active': 'navButton'} id='b_bussines' onClick={this.editState}>Бизнес и др.</div>
                    <div className={this.state.page === 'home' ? 'navButton active': 'navButton'} id='b_home' onClick={this.editState}>Дом</div>
                </div>
                <div className="content">
                    {this.state.page === 'cars' ? <Cars />: null}
                    {this.state.page === 'bussines' ? <Bussines />: null}
                    {this.state.page === 'home' ? <Home />: null}
                </div>
            </div>
        )
    }
}