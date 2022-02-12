import React from 'react';
import { Link } from 'react-router-dom';

class DefaultPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'DefaultPage.jsx', error, errorInfo); // eslint-disable-line
    }

    render() {
        return (
            <React.Fragment>
                <div className="iphone-content">
                    <div className="main-app-box">
                        {this.props.data.slice(4).map((e, i) => {
                            const index = `appBox${i}`
                            return (
                                <Link to={e.link} className={`app-box icons-${e.img}`} onClick={() => this.props.clickApps(e, i)}
                                    key={index}>
                                    <div className="textfor-app">{e.name}</div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default DefaultPage;
