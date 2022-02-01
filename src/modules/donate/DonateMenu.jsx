/* eslint-disable no-unused-expressions */
import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import './css/donateMenu.css';

import Close from './images/close.svg';
import Logo from './images/logo.svg';
import ShopLogo from './images/shop-logo.svg';
import Car from './images/car.png';
import Watch from './images/watch.png';
import Arrow from './images/arrow.svg';

import NavbarButton from "./pages/NavbarButton";
import Services from './pages/Services';
import Cars from './pages/Cars';
import Main from './pages/Main';
import Clothes from './pages/Clothes';
const { EventManager: em } = window;


export default class DonateMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      path: '/donate/cars',
      balance: 0,
      email: "",
      sumToPay: 0,
      sale_proc: 50,
    }
  }

  showAbout = false;
  navbarButtons = [
    { name: "Главная", icon: 'main', isActive: true },
    { name: "Машины", icon: 'cars' },
    { name: "Одежда", icon: 'clothes' },
    { name: "Услуги", icon: 'services' },
  ];

  paths = [
    "/donate/main",
    "/donate/cars",
    "/donate/clothes",
    "/donate/services",
  ]

  services = [ //NOTE: Action cannot be the same for several fields
    { name: "Снять ban", price: 2000, action: 'remove-ban' },
    { name: "Снять warn", price: 2000, action: 'remove-warn' },
  ]

  cars = [ //NOTE: Cars need be more then 4
    { name: "Ford Mustang", image: Car, price: 2000, class: 'Sedan', maxSpeed: 256, fuelType: 'Бензин', tankCapacity: 82, fuelConsumption: 7, trunkVolume: 384000, permissibleWeight: 13000 },
    { name: "Ford Mustang", image: Car, price: 2000, class: 'Sedan', maxSpeed: 256, fuelType: 'Бензин', tankCapacity: 82, fuelConsumption: 7, trunkVolume: 384000, permissibleWeight: 13000 },
    { name: "Fford Mustang", image: Car, price: 2000, class: 'Sedan', maxSpeed: 256, fuelType: 'Бензин', tankCapacity: 82, fuelConsumption: 7, trunkVolume: 384000, permissibleWeight: 13000 },
    { name: "Ford Mustang", image: Car, price: 2000, class: 'Sedan', maxSpeed: 256, fuelType: 'Бензин', tankCapacity: 82, fuelConsumption: 7, trunkVolume: 384000, permissibleWeight: 13000 },
    { name: "Ford Mustang", image: Car, price: 2000, class: 'Sedan', maxSpeed: 256, fuelType: 'Бензин', tankCapacity: 82, fuelConsumption: 7, trunkVolume: 384000, permissibleWeight: 13000 },
  ]

  mainBonus = [
    { plus: 1, from: 100 },
    { plus: 5, from: 2000 },
    { plus: 10, from: 5000 },
    { plus: 20, from: 10000 },
    { plus: 30, from: 25000 },
    { plus: 40, from: 50000 },
  ]

  saleItemNames = [
    "Рубашка H&M",
    "Рубашка H&M",
    "Рубашка H&M",
    "Рубашка H&M",
    "Рубашка H&M",
    "Рубашка H&M",
    "Рубашка H&M",
    "Рубашка H&M",
  ]

  items = [
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
    { class: 'Наручные часы', name: "RAIDILLION", price: 2000, image: Watch },
  ]

  componentDidCatch(error, errorInfo) {
    try {
      // mp.trigger('client:ui:debug', 'DonateMenu.jsx', error, errorInfo)
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    em.addHandler('donateMenu', value => {
      if (value.type === 'show') this.setState({ show: true });
      else if (value.type === 'hide') this.setState({ show: false });
      else if (value.type === 'showOrHide') {
        let status = !this.state.show;
        this.setState({ show: status })
        try {
          mp.trigger('client:donateMenu:status', status); // eslint-disable-line
        } catch (e) {
          console.log(e);
        }
      } else if (value.type === 'updateBalance') {
        this.setState({ balance: value.balance })
      }
    });
  }

  componentWillUnmount() {
    em.removeHandler('donateMenu');
  }

  changeTab(event) {
    const button = event.target.parentElement;
    if (button.classList.contains('active')) return;
    const container = button.parentElement;
    const buttons = container.querySelectorAll('.navbar-button');

    buttons.forEach((b) => {
      if (b.classList.contains('active')) {
        b.classList.remove('active');
      }
    });
    button.classList.add('active');
    this.setState({ path: this.paths[button.id] })
  }

  buyService(event) {
    console.log(event.target);
  }

  buyClothes(event) {
    console.log(event.target);
  }

  buyCar(event) {
    console.log(event.target);
  }

  about(event) {
    const button = event.target;
    const id = button.id;
    const car = this.cars[id];
    const title = car.name.slice(0, car.name.indexOf(' '));
    const subtitle = car.name.slice(car.name.indexOf(' ') + 1);
    this.showAbout = true;
    this.forceUpdate();

    setTimeout(() => {
      const titleT = document.querySelector('#about-title');
      const subtitleT = document.querySelector('#about-subtitle');
      const classs = document.querySelector('#about-class');
      const maxSpeed = document.querySelector('#about-max-speed');
      const fuelType = document.querySelector('#about-fuel-type');
      const tankCapacity = document.querySelector('#about-tank-capacity');
      const fuelConsumption = document.querySelector('#about-fuel-consumption');
      const trunkVolume = document.querySelector('#about-trunk-volume');
      const permissibleWeight = document.querySelector('#about-permissible-weight');

      titleT.innerHTML = `${title}`;
      subtitleT.innerHTML = `${subtitle}`;
      classs.innerHTML = `${car.class}`;
      maxSpeed.innerHTML = `~${car.maxSpeed} KM/H`;
      fuelType.innerHTML = `${car.fuelType}`;
      tankCapacity.innerHTML = `${car.tankCapacity}L`;
      fuelConsumption.innerHTML = `${car.fuelConsumption}L`;
      trunkVolume.innerHTML = `${car.trunkVolume}cm3`;
      permissibleWeight.innerHTML = `${car.permissibleWeight} кг`;

    }, 100)

    console.log(car)
  }

  checkInput(event) {
    const input = event.target;
    const regex = new RegExp(/[0-9]/);

    if (!regex.test(input.value)) {
      input.value = "";
    }

    this.setState({ sumToPay: input.value })
  }

  changeTabToMain(event) {
    this.setState({ path: '/donate/main' });
  }

  cancel(event) {
    this.showAbout = false;
    this.forceUpdate();
  }

  render() {
    if (!this.state.show) return null;
    return (
      <React.Fragment>
        {this.showAbout ? <div className="car-about">
          <div className="car-about-container">
            <div className="about-header">
              <div className="image"> <img src={Car} alt="" id='about-image' /></div>
              <div className="text-container">
                <div className="info-header">
                  <div className="text">
                    <div className="title" id='about-title'>Ford</div>
                    <div className="subtitle" id='about-subtitle'>Mustang</div>
                  </div>
                  <div className="price-container">
                    <div className="text">Цена:</div>
                    <div className="price" id='about-price'>0</div>
                    <div className="logo"><img src={Logo} alt="" /></div>
                  </div>
                </div>
                <div className="title-info">Информация об Авто</div>
                <div className="info-container">
                  <div className="left-container">
                    <div className="text">Класс</div>
                    <div className="text">Макс.Скорость</div>
                    <div className="text">Тип топлива</div>
                    <div className="text">Тип Вместимость бака</div>
                    <div className="text">Расход топлива</div>
                    <div className="text">Объем багажника</div>
                    <div className="text">Допустимый вес</div>
                  </div>
                  <div className="right-container">
                    <div id="about-class">S</div>
                    <div id="about-max-speed">~0 KM/H</div>
                    <div id="about-fuel-type">Б</div>
                    <div id="about-tank-capacity">0L</div>
                    <div id="about-fuel-consumption">0L</div>
                    <div id="about-trunk-volume">0cm3</div>
                    <div id="about-permissible-weight">0 кг</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-buttons">
              <div className="cancel-button" onClick={this.cancel.bind(this)}>Отмена</div>
              <div className="buy-button" onClick={this.buyCar.bind(this)}>
                <div className="text">Купить</div>
                <img src={Arrow} alt="" />
              </div>
            </div>
          </div>
        </div> : <></>}
        <div className="donate-menu-box">
          <div className="donate-menu-container">
            <div className="donate-menu-navbar">
              <div className="navbar-container">
                <div className="logo-container">
                  <div className="logo"><img src={ShopLogo} alt="" /></div>
                  <div className="text">
                    <div className="title">Donate</div>
                    <div className="subtitle">Shop</div>
                  </div>
                </div>

                <div className="buttons">
                  {this.navbarButtons.map((button, index) => {
                    return <NavbarButton name={button.name} icon={button.icon} isActive={button.isActive} index={index} key={index} onClick={this.changeTab.bind(this)} />
                  })}
                </div>

                <div className="info">
                  <div className="balance-container">
                    <div className="text">
                      <div className="title">{this.state.balance}</div>
                      <div className="subtitle">Баланс:</div>
                    </div>
                    <div className="logo"><img src={Logo} alt="" /></div>
                  </div>
                  <div className="close-button"><img src={Close} alt="" /></div>
                </div>
              </div>
            </div>

            <div className="container">
              <Router>
                <Route path='/donate/main'> <Main bonus={this.mainBonus} checkInput={this.checkInput.bind(this)} /></Route>
                <Route path='/donate/cars'> <Cars cars={this.cars} onClick={this.about.bind(this)} /></Route>
                <Route path='/donate/clothes'> <Clothes items={this.items} sale_item_names={this.saleItemNames} sale_proc={this.state.sale_proc} onClick={this.buyClothes.bind(this)} changeTab={this.changeTabToMain.bind(this)} /> </Route>
                <Route path='/donate/services'> <Services services={this.services} onClick={this.buyService.bind(this)} /></Route>
                <Redirect to={this.state.path} push />
              </Router>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}