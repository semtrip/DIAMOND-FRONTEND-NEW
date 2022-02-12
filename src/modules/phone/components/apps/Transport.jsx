import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Evacuate from '../../img/iphone/icons/evacuate.png';
import Location from '../../img/iphone/icons/location.png';
import LogoPrice from '../../img/iphone/icons/logoPrice.png';
import Ava from '../../img/iphone/icons/ava.png';

class Transport extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="transport-menu-box">
          <div className="transport-menu-container">
            <div className="title">Your garage</div>
            <div className="transport-box">
              {this.props.data.map((element, index) => {
                return (
                  <div className="transport-container" id={index}>
                    <div className="transport-main-info">
                      <div className="logo-container">
                        <div className="logo"><img src={Ava} alt="" /></div>

                        <div className="after-logo-text">
                          <div className="main-text">
                            <div className="title">{element.name}</div>
                            <div className="subtitle"> {element.model}</div>
                          </div>

                          <div className="sub-text">
                            <div className="title">Government number</div>
                            <div className="subtitle">{element.gosNumber}</div>
                          </div>
                        </div>
                      </div>

                      <div className="price-container">
                        <div className="title">
                          <div className="price-logo"><img src={LogoPrice} alt="" /></div>
                          <div className="title-text">Government price:</div>
                        </div>
                        <div className="price">{element.gosPrice}<span className='price-span'>$</span></div>
                      </div>
                    </div>

                    <div className="evacuate" onClick={this.props.onEvacuateClick}>
                      <div className="info">
                        <div className="icon"> <img src={Evacuate} alt="" /></div>
                        <div className="text">Call a tow truck</div>
                      </div>

                      <div className="price-container">
                        <div className="price-title">Price:</div>
                        <div className="price">{element.gosPrice / 1000}<span className='price-span'>$</span></div>
                      </div>
                    </div>

                    <div className="location" onClick={this.props.onLocationClick}>

                      <div className="info">
                        <div className="icon"><img src={Location} alt="" /></div>
                        <div className="text">Indicate the location of the transport</div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Transport;