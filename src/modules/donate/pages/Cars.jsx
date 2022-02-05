import React from "react";

import Logo from '../images/logo.svg';

import '../css/cars.css';

function Cars(props) {
  return (
    <React.Fragment>
      <div className="cars-container">
        <div className="cars">
          {props.cars.map((car, index) => {
            const title = car.name.slice(0, car.name.indexOf(' '));
            const subtitle = car.name.slice(car.name.indexOf(' ') + 1);
            return (
              <React.Fragment>
                <div className="car">
                  <div className="info">
                    <div className="text">
                      <div className="title">{title}</div>
                      <div className="subtitle">{subtitle}</div>
                    </div>
                    <div className="price-container">
                      <div className="price">{car.price}</div>
                      <div className="logo"><img src={Logo} alt="" /></div>
                    </div>
                  </div>
                  <div className="image"><img src={car.image} alt="" width={300} height={205}/></div>
                  <div className="more" id={index} onClick={props.onClick}>
                    <div className="text">Подробнее</div>
                    <div className="subtext">...</div>
                  </div>
                </div>
              </React.Fragment>
            )
          })}
        </div>
      </div>
    </React.Fragment>
  )
}

export default Cars;