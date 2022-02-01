import React from "react";

import '../css/services.css';

import Logo from '../images/logo.svg';

function Services(props){
  return(
    <React.Fragment>
      <div className="services-container">
        {props.services.map((service, index) => {
          return(
            <React.Fragment>
              <div className="service-item" onClick={props.onClick} key={index} id={`${service.action}`}>
                <div className="title">{service.name}</div>
                <div className="price-container">
                  <div className="price">{service.price}</div>
                  <div className="logo"><img src={Logo} alt="" /></div>
                </div>
              </div>
            </React.Fragment>)
        })}
      </div>
    </React.Fragment>
  )

}

export default Services;