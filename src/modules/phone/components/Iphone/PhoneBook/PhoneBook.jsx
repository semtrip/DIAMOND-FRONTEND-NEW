import React from 'react';

import HistoryCall from './pages/HistoryCall';
import Favorit from './pages/Favorit';
import Contact from './pages/Contact';
import Calls from '../../apps/Calls'
import '../Calls/css/calls.css'

class PhoneBook extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: this.props.defaultValue,
            search: '',
            pagesList: [
                {icon: `https://gta-5.ru/server/client/images/icons/components/phone/img/Recents.svg`, name: 'Недавние', page: 'history'},
                {icon: `https://gta-5.ru/server/client/images/icons/components/phone/img/Contacts.svg`, name: 'Контакты', page: 'contact'},
                {icon: `https://gta-5.ru/server/client/images/icons/components/phone/img/keyboard.svg`, name: 'Клавиши', page: 'calls'}
            ]
        }
    }

    setActivePage = (value) => {
        this.setState({ page: value })
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'PhoneBook.jsx', error, errorInfo); // eslint-disable-line
    }

    handleChange(value) {
        this.setState({page: value});
    }

    handleSearchChange = e => {
        this.setState({
            search: e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                    <div className="phonebook-content">
                        <div className="fix-phonebook">
                            <div className="b-callhistory">
                                {this.state.page === "favorit" ?
                                    <Favorit
                                            contact={this.props.data.contact}
                                            filter={this.state.search}
                                            clickContact={this.props.clickContact.bind(this)}/> : null}
                                {this.state.page === "history" ?
                                    <HistoryCall
                                            history={this.props.data.history}
                                            filter={this.state.search}
                                            clickContact={this.props.clickContact.bind(this)}
                                            getContactByNumber={this.props.getContactByNumber.bind(this)}/> : null}
                                {this.state.page === "contact" ?
                                    <React.Fragment>
                                        <div className="phonebook__search">
                                            <input
                                                type="text"
                                                className="phonebook__search__input"
                                                placeholder="Search"
                                                onChange={this.handleSearchChange}/>
                                            <span
                                                className="phonebook__search__add"
                                                onClick={() => this.props.setLink('/phone/android/phonebook/profilecontact/editcontact')}
                                            >
                                                +
                                            </span>
                                        </div>
                                        <Contact
                                                contact={this.props.data.contact}
                                                filter={this.state.search}
                                                clickContact={this.props.clickContact.bind(this)}
                                                setLink={this.props.setLink.bind(this)} /> 
                                    </React.Fragment>
                                    :
                                    null}
                                {this.state.page === 'calls' && (
                                     <Calls
                                        onCall={this.props.onCall}
                                     />
                                )}
                                <div className="calls__navbar">
                                    {this.state.pagesList.map((item, index) => (
                                        <div onClick={() => this.setActivePage(item.page)} className="calls__navbar__item" key={`calls__navbar__item-${index}`}>
                                            <img src={item.icon} alt="" className={this.state.page === item.page ? `calls__navbar__item__icon-active` : `calls__navbar__item__icon`} />
                                            <span className={this.state.page === item.page ? `calls__navbar__item__text-active` : `calls__navbar__item__text`}>{item.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                
            </React.Fragment>
        )
    }
}

export default PhoneBook;
