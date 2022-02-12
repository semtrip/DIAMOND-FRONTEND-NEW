import React from 'react';

import PhoneIcon from '../../img/iphone/icons/phone_icon.png';
import WallPaperIcon from '../../img/iphone/icons/wallpaper_icon.png';
import SelfHistoryIcon from '../../img/iphone/icons/self_history_icon.png';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

    this.state = {
      newPhone: `+${this.props.playerData.phoneNumber.toString().slice(0, 3)} ${this.props.playerData.phoneNumber.toString().slice(3, 6)} ${this.props.playerData.phoneNumber.toString().slice(6, 8)}-${this.props.playerData.phoneNumber.toString().slice(8, 10)}`,
    };
  }

  render() {
    return (
      <React.Fragment>
        <div className="settings-main-box">
          <div className="title-text">Settings</div>
          <div className="title">
            <div className="icon">
              <img src={this.props.playerData.icon} alt="" />
            </div>
            <div className="text">
              <div className="name">{this.props.playerData.name}</div>
              <div className="login-id">
                <div className="login">{this.props.playerData.login}</div>
                <div className="id">#{this.props.playerData.tempId}</div>
              </div>
            </div>
          </div>
          <div className="phone-box">
            <img src={PhoneIcon} alt="" className="icon" />
            <div className="phone">{this.state.newPhone}</div>
          </div>

          <div className="space"></div>

          <div className="other-box" onClick={this.props.onWallpapersClick}>
            <img src={WallPaperIcon} alt="" className="icon" />
            <div className="text">Wallpaper</div>
          </div>

          <div className="other-box" onClick={this.props.onSelfHistoryClick}>
            <img src={SelfHistoryIcon} alt="" className="icon" />
            <div className="text">Personal history</div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Settings;