import React from 'react';
import './css/auto.css'
import Authorization from './Pages/Authorization';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import CreatePlayer from './Pages/CreatePlayer';

const { EventManager: em } = window;

class AuthMain extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            path: '/'
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'AuthMain.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        em.addHandler('authMain', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'switch') {
                this.setState({show: !this.state.show})
            } else if (value.type === 'showCreatePage') {
                this.setState({path: '/create'})
            } else return;
        })
    }

    componentWillUnmount() {
        em.removeHandler('authMain');
    }
    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <Router>
                    <Route exact path="/" component={Authorization}/>
                    <Route exact path="/create" component={CreatePlayer}/>
                    <Redirect to={this.state.path} push/>
                </Router>
            </React.Fragment>
        )
    }
}

export default AuthMain;
