import React from 'react';

import SearchIcon from '../../img/iphone/icons/search_icon.png';
import GpsIcon from '../../img/iphone/icons/gps_icon.png';

class GPS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="gps-container">
          <div className="title">Navigator</div>
          <div className="search-box">
            <input type="text" className="search" placeholder='Search...' />
            <img src={SearchIcon} alt="" />
          </div>
          <div className="gps-box">
            <div className="title-box">
              <div className="title">List of places:</div>
              <div className="subtitle">{this.props.data.length}</div>
            </div>
            <div className="gps-content">
              {this.props.data.map((e, i) => {
                return (
                  <React.Fragment>
                    <div className="gps-main-content" id={i}>
                      <div className="icon-title">
                        <img src={GpsIcon} alt="" className="icon" />
                        <div className="title">{e.name}</div>
                      </div>
                      <div className="subtitle">{e.distance}km</div>
                    </div>
                  </React.Fragment>
                )
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default GPS;