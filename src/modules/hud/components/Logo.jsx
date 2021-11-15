import React from 'react';
import user from '../img/user.svg'

const { EventManager: em } = window;

class Logo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
            showAmmo: false,
            showQuest: false,
            ammoCount: 0,
            ammoMode: 'auto',
            questTitle: 'Квестовое задание',
            questText: 'Получите два ящика травы, три ящика кокаина, отвезите труп Минори на свалку',
            questDesc: '',
            questAnim: '',
            date: '01.01',
            time: '12:00',
            online: '175',
            max_player: '1000',
            id: '13 (#4383)',
            server: '1',
            color: '#48B9F2',
            background: 0.5,
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Logo.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        em.addHandler('hudl', value => {
            if (value.type === 'show') {
                this.setState({ show: true })
            } else if (value.type === 'hide') {
                this.setState({ show: false })
            } else if (value.type === 'updateValues') {
                this.setState({ date: value.date });
                this.setState({ time: value.time });
                this.setState({ online: value.online });
                this.setState({ max_player: value.max_player });
                this.setState({ id: value.id });
                this.setState({ showAmmo: value.showAmmo });
                this.setState({ ammoCount: value.ammoCount });
                this.setState({ ammoMode: value.ammoMode });
                this.setState({ background: value.background });
            } else if (value.type === 'updateQuest') {
                this.setState({ showQuest: value.showQuest });
                this.setState({ questTitle: value.questTitle });
                this.setState({ questText: value.questText });
                this.setState({ questDesc: value.questDesc });
            } else if (value.type === 'updateQuestAnim') {
                this.setState({ questAnim: value.questAnim });
            } else return;
        })
    }

    componentWillUnmount() {
        em.removeHandler('hudl');
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="hud-info">
                    <div className="online"><img src={user} alt="" />{this.state.online}</div>
                    <div className="id">ID: {this.state.id}</div>
                    <div className="logo"></div>
                    <div className="server">{this.state.server}</div>
                </div>
                <div className="hud-ammo">
                    <div className={this.state.showAmmo ? 'logo-ammo' : 'hide'}>
                        <div className={'logo-ammo-img ammo-' + this.state.ammoMode}></div>
                        {this.state.ammoCount}
                    </div>
                </div>
                <div className="hud-quest">
                    <div className={this.state.showQuest ? 'logo-quest animated ' + this.state.questAnim : 'hide'}>
                        <h2 className="quest-title">{this.state.questTitle}</h2>
                        <div className="quest-text">{this.state.questText}</div>
                        <div className="quest-desc">{this.state.questDesc}</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Logo;
