import React from 'react';

import './donate.css';

import Logo from './images/logo.svg';

import Close from './images/close.svg';

import Coin from './images/coin.svg';
import JeepCar from './images/jeep-car.svg';
import Car from './images/car.svg';
import Motorcycle from './images/motorcycle.svg';
const { EventManager: em } = window;


class Donate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      balance: 1500,
      itemForShow: <></>,
      selectOptions: [
        { value: 'all-items', label: 'Все предметы' },
        { value: 'transport', label: 'Транспортные средства' },
        { value: 'tuning', label: 'Тюнинг транспорта' },
        { value: 'wallet', label: 'Виртуальная валюта' },
        { value: 'vip', label: 'Премиум аккаунты' }
      ],
      items: [
        ['Маска', 100, 'transport', 'monkey-mask'],
        ['Маска', 100, 'tuning', 'monkey-mask'],
        ['Маска', 100, 'transport', 'monkey-mask'],
        ['Маска', 100, 'transport', 'monkey-mask'],
        ['Маска', 100, 'transport', 'monkey-mask'],
        ['Маска', 100, 'transport', 'monkey-mask'],
        ['Маска', 100, 'transport', 'monkey-mask'],
        ['Маска', 100, 'transport', 'monkey-mask'],
        ['Маска', 100, 'transport', 'monkey-mask'],
      ],
      accruals: [
        ['1', 1, '1'],
        ['2', 1, '1'],
        ['3', 1, '1'],
        ['4', 1, '1'],
        ['5', 1, '1'],
        ['6', 1, '1'],
        ['7', 1, '1'],
        ['8', 1, '1'],
        ['9', 1, '1'],
        ['10', 1, '1'],
        ['11', 1, '1'],
        ['12', 1, '1'],
        ['13', 1, '1'],
      ],
      expenses: [
        ['1', '2', '1'],
        ['2', 3, '1'],
        ['3', 4, '1'],
        ['4', 5, '1'],
        ['5', 6, '1'],
        ['6', 7, '1'],
        ['7', 8, '1'],
        ['8', 9, '1'],
        ['9', 10, '1'],
        ['10', 11, '1'],
        ['11', 12, '1'],
        ['12', 13, '1'],
        ['13', 14, '1'],
        ['10', 11, '1'],
        ['11', 12, '1'],
        ['12', 13, '1'],
        ['13', 14, '1'],
        ['10', 11, '1'],
        ['11', 12, '1'],
        ['12', 13, '1'],
        ['13', 14, '1'],
      ],
      transport: [
        ['BMW M5', 1333, '1', 'bmw-m5'],
        ['BMW M6', 1200, '1', 'bmw-m6'],
        ['BMW i8', 13000, '1', 'bmw-i8'],
      ],
      virtualWallet: [
        [10000, 100],
        [100000, 1000],
        [1000000, 10000],
        [10000000, 100000],
        [100000000, 1000000],
      ],
      vipAccounts: [
        ['Vip Silver', 499, '2x Опыт', 'vip_silver'],
        ['Vip Gold', 699, '2x Опыт <br />', 'vip-gold'],
        ['Vip Diamond', 999, '2x Опыт <br />', 'vip-diamond']
      ],
      settings: [
        ['Смена Имени', 499, 'Сменить имя', 'change-name'],
        ['Снять Варн', 699, 'Снять Варн', 'remove-warn'],
        ['Смена Внешности', 999, 'Смена внешности', 'change-outfit']
      ],
      another: [
        ['Номер Телефона', 499, 'Придумай свой классный номер телефона', 'phone'],
        ['Промокод', 699, 'Купи себе супер пупер промокод', 'promocode'],
        ['Номер для транспорта', 999, 'Поставь ауе номера', 'ts-number']
      ],

    };
  }

  componentDidCatch(error, errorInfo) {
    mp.trigger('client:ui:debug', 'Donate.jsx', error, errorInfo); // eslint-disable-line
  }

  componentDidMount() {
    em.addHandler('donateMenu', value => {
      if (value.type === 'show') this.setState({ show: true })
      else if (value.type === 'hide') this.setState({ show: false })
      else if (value.type === 'showOrHide') {
        let status = !this.state.show;
        this.setState({ show: status })
        try {
            mp.trigger('client:donateMenu:status', status); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }
      else if (value.type === 'updateValues') {
        this.setState({ balance: value.balance })
        this.setState({ items: value.items })
        this.setState({ accruals: value.accruals })
        this.setState({ expenses: value.expenses })
        this.setState({ transport: value.transport })
        this.setState({ virtualWallet: value.virtualWallet })
        this.setState({ vipAccounts: value.vipAccounts })
        this.setState({ settings: value.settings })
        this.setState({ another: value.another })
      } else if (value.type === 'updateBalance') {
        this.setState({ balance: value.balance })
      } else if (value.type === 'updateItems') {
        this.setState({ items: value.items })
      } else if (value.type === 'updateHistory') {
        this.setState({ accruals: value.accruals })
        this.setState({ expenses: value.expenses })
      }
    })
  }

  componentWillUnmount() {
    em.removeHandler('donateMenu');
  }

  handleClickOnShowItem(event) {
    const button = event.target;
    const index = button.getAttribute('data-index');
    const type = button.getAttribute('data-type');

    if (button.id === '') return;
    if (button.id === "buy-item") {
      console.log(event.target);
      try {
        mp.trigger('client:donateMenu:buyItem', type, index);// eslint-disable-line
      }
      catch (e) {
        console.log(e);
      }
      return;
    }
    if (button.id === "test-drive" && type === 'transport') {

      //TODO: Add functions for test drive
      console.log(button);
      return;
    }

    const tab = document.querySelector('section#show-item');
    const backElement = document.querySelector('section#' + button.id);
    tab.classList.remove('active');
    backElement.classList.add('active');
  }

  ShowItem(props) {
    return <div className="show-item">
      <div className="image-box">
        <img src={`https://gta-5.ru/server/client/images/donate/${props.imageName}.png`} alt="" />
      </div>

      <div className="text-box">
        <div className="text">
          <h2>{props.name}</h2>
          <p>{props.comment}</p>
        </div>

        <div className="button-box">
          <div className="item-cost">
            <p>{props.cost}</p>
            <div className="background-for-logo">
              <img src={Logo} alt="" />
            </div>
          </div>
          <div className={"main-buttons one"}>
            <button className="active" id="buy-item" data-index={props.index} data-type={props.type}>Купить</button>
            {/* {props.isTransport ? <button className="" id="test-drive" data-index={props.index} data-type={props.type}> Тест-драйв</button> : ''} */}
          </div>
          <button className="" id={props.lastTab}>Вернуться назад</button>
        </div>
      </div>
    </div>
  }

  changeTab(selectedTab) {
    selectedTab = selectedTab.target
    const selectedTabId = selectedTab.getAttribute('data-tab');
    if (selectedTabId === 'history') {
      try{
        mp.trigger('client:donateMenu:updatePlayerDonateHistory');// eslint-disable-line
      }catch(e){
        console.log(e);
      }
    }
    const selectedButtonId = selectedTab.id !== '' ? selectedTab.id : selectedTabId + 'Button';

    const tabs = document.querySelectorAll('section.tab');
    for (let i = 0; i < tabs.length; i++) {
      const isSelectedTab = tabs[i].id === selectedTabId;
      if (isSelectedTab) tabs[i].classList.add('active');
      else tabs[i].classList.remove('active');
    }

    const tabButtons = document.querySelectorAll('p.button');
    for (let i = 0; i < tabButtons.length; i++) {
      const isSelectedButton = tabButtons[i].id === selectedButtonId;
      isSelectedButton ? tabButtons[i].classList.add('active') : tabButtons[i].classList.remove('active');
    }
  }

  changeItemSelect(event) {
    //TODO: add actions to filters in item-box
    switch (event.value) {
      case 'all-items':
        break;
      case 'transport':
        break;
      case 'tuning':
        break;
      case 'wallet':
        break;
      case 'vip':
        break;

      default:
        break;
    }
  }

  changeTabHistory(event) {
    const selectedButton = event.target;
    if (selectedButton.classList.contains('active')) return;

    const buttons = document.querySelectorAll('section#history button');
    for (let i = 0; i < buttons.length; i++) {
      if (buttons[i] === selectedButton) {
        buttons[i].classList.add('active');
        let tab = document.querySelector('#' + buttons[i].id + 'Tab');
        tab.hidden = false;
      } else {
        buttons[i].classList.remove('active');
        let tab = document.querySelector('#' + buttons[i].id + 'Tab');
        tab.hidden = true;
      }
    }
  }

  buyWallet(event) {
    event.preventDefault();
    let form = event.target;
    let wallet = form.querySelector('h2 span').innerHTML;
    let cost = form.querySelector('.item-cost p').innerHTML;

    try {
      mp.trigger('client:donateMenu:buyWallet', wallet, cost);// eslint-disable-line
    } catch (e) {
      console.log(e);
    }
  }

  getItem(event) {
    event.preventDefault();
    let itemIndex = event.target.getAttribute('data-index');

    try {
      mp.trigger('client:donateMenu:getItem', itemIndex);// eslint-disable-line
    } catch (e) {
      console.log(e);
    }
  }

  sellItem(event) {
    event.preventDefault();
    let itemIndex = event.target.getAttribute('data-index')

    console.log();
    // let item = this.state.items[itemIndex];
    // console.log(item);

    try {
      mp.trigger('client:donateMenu:sellItem', itemIndex);// eslint-disable-line
    } catch (e) {
      console.log(e);
    }
  }

  showItem(event) {
    let itemBox = event.target;
    while (!itemBox.classList.contains('item-box')) itemBox = itemBox.parentElement;
    const selectedTab = itemBox.parentElement;
    const selectedTabId = selectedTab.id;
    const showItemTab = document.querySelector('section#show-item');
    const type = itemBox.getAttribute('data-type');
    const index = parseInt(itemBox.getAttribute('data-index'));

    let array = [];
    switch (type) {
      case 'transport':
        array = this.state.transport[index];
        break;
      case 'vipAccounts':
        array = this.state.vipAccounts[index];
        break;
      case 'settings':
        array = this.state.settings[index];
        break;
      case 'another':
        array = this.state.another[index];
        break;

      default:
        break;
    }
    if (array.length === 0) return;

    selectedTab.classList.remove('active');
    showItemTab.classList.add('active');

    const isTransport = selectedTabId === 'transport';
    let item = <this.ShowItem name={array[0]} cost={array[1]} comment={array[2]} index={index} type={type} imageName={array[3]} isTransport={isTransport} lastTab={selectedTabId} />;
    this.setState((state) => { return { itemForShow: item } });
  }

  setHide = () => {
    this.setState({ show: false })
    try {
      mp.trigger('client:donateMenu:hide'); // eslint-disable-line
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    if (!this.state.show) return null;
    const Items = (props) => {
      return <div className="item-box">
        <div className="image-box">
          <img src={`https://gta-5.ru/server/client/images/donate/${props.imageName}.png`} alt="" />
        </div>

        <div className="text">
          <h2>{props.name}</h2>
          <div className="item-cost">
            <p>{props.cost}</p>
            <div className="background-for-logo">
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>

        <div className="on-hover">
          <button id="get-item" data-index={props.index} onClick={this.getItem}>Получить</button>
          <button id="sell-item" data-index={props.index} onClick={this.sellItem}>Продать</button>
        </div>
      </div>
    };

    const Transaction = (props) => {
      return <div className="transaction">
        <p className="date-time">{props.time}</p>
        <p className="cost"><span>{props.cost}</span> SC</p>
        <p className="comment">{props.comment}</p>
      </div>
    };

    const VirtualWallet = (props) => {
      return <form className="wallet-box" onSubmit={this.buyWallet}>
        <div className="image-box"><img src={Coin} alt="" /></div>

        <div className="text-box">
          <div className="text">
            <h2><span>{props.wallet}</span>$</h2>
            <p>{props.wallet}$ на ваш игровой счёт</p>
          </div>

          <div className="cost-button">
            <div className="item-cost">
              <p>{props.cost}</p>
              <div className="background-for-logo">
                <img src={Logo} alt="" />
              </div>
            </div>

            <button type='submit' className="buy-item">Купить</button>
          </div>
        </div>
      </form>
    };

    const Transport = (props) => {
      return <div className="item-box" data-type='transport' data-index={props.index} onClick={this.showItem.bind(this)}>
        <div className="image-box">
          <img src={`https://gta-5.ru/server/client/images/donate/${props.imageName}.png`} alt="" />
          {/* <img src={`/${props.name.toLowerCase().replace(' ', '_')}.svg`} alt="" /> */}
        </div>

        <div className="text">
          <h2>{props.name}</h2>
          <div className="item-cost">
            <p>{props.cost}</p>
            <div className="background-for-logo">
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    }

    const VipAccounts = (props) => {
      return <div className="vip-box item-box" data-type='vipAccounts' data-index={props.index} onClick={this.showItem.bind(this)}>
        <div className="image-box">
          {/* <img src={`/${props.name.toLowerCase().replace(' ', '_')}.svg`} alt="" /> */}
          <img src={`https://gta-5.ru/server/client/images/donate/${props.imageName}.png`} alt="" />
        </div>
        <div className="text">
          <h2>{props.name}</h2>
          <div className="item-cost">
            <p>{props.cost}</p>
            <div className="background-for-logo">
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    }

    const Settings = (props) => {
      return <div className="item-box" data-type='settings' data-index={props.index} onClick={this.showItem.bind(this)}>
        <div className="image-box">
          <img src={`https://gta-5.ru/server/client/images/donate/${props.imageName}.png`} alt="" />
        </div>

        <div className="text">
          <h2>{props.name}</h2>
          <div className="item-cost">
            <p>{props.cost}</p>
            <div className="background-for-logo">
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    }

    const Another = (props) => {
      return <div className="item-box" data-type='another' data-index={props.index} onClick={this.showItem.bind(this)}>
        <div className="image-box">
          <img src={`https://gta-5.ru/server/client/images/donate/${props.imageName}.png`} alt="" />
        </div>

        <div className="text">
          <h2>{props.name}</h2>
          <div className="item-cost">
            <p>{props.cost}</p>
            <div className="background-for-logo">
              <img src={Logo} alt="" />
            </div>
          </div>
        </div>
      </div>
    }
    
    return (
      <div className="main">
        <div className="menu">
          <div className="logo"><img src={Logo} alt="" /></div>

          <div className="count-money">
            <div className="background-for-logo">
              <img src={Logo} alt="" />
            </div>
            <p>{this.state.balance}</p>
          </div>

          <section className="menu-buttons">
            <p className="button active" id="mainButton" data-tab="main" onClick={this.changeTab}>Главная</p>
            <p className="button " id="itemsButton" data-tab="items" onClick={this.changeTab}>Мои предметы</p>
            <p className="button " id="historyButton" data-tab="history" onClick={this.changeTab}>История</p>
            <p className="button disabled" id="casesButton" data-tab="cases" /*onClick={this.changeTab}*/>Кейсы</p>
            <p className="button " id="transportButton" data-tab="transport" onClick={this.changeTab}>Эксклюзивный транспорт</p>
            <p className="button " id="walletButton" data-tab="wallet" onClick={this.changeTab}>Виртуальная валюта</p>
            <p className="button " id="vipButton" data-tab="vip" onClick={this.changeTab}>VIP Аккаунт</p>
            <p className="button " id="settingsButton" data-tab="settings" onClick={this.changeTab}>Настройка персонажа</p>
            <p className="button " id="anotherButton" data-tab="another" onClick={this.changeTab}>Другое</p>
          </section>
        </div>

        <div className="close" id="close-menu" onClick={this.setHide}><img src={Close} alt="close" /></div>

        <section className="tab active" id="main">
          <div className="main-box" data-tab="cases" /*onClick={this.changeTab}*/>
            <img src="https://i.ibb.co/YfC9sM7/cases.jpg" alt="" data-tab="cases" />
            <div className="text" data-tab="cases">
              <h2 data-tab="cases">Кейсы Social Project</h2>
              <p data-tab="cases">Открывая кейсы вы можете получить деньги, Social Coins, VIP статус, уникальные автомобили и многое другое</p>
            </div>
          </div>

          <div className="main-box" data-tab="transport" onClick={this.changeTab}>
            <img src="https://i.ibb.co/T1N2LR9/car.jpg"  alt="" data-tab="transport" />
            <div className="text" data-tab="transport">
              <h2 data-tab="transport">Транспорт</h2>
              <p data-tab="transport">Выбирай любой понравившийся транспорт из реальной жизни</p>
            </div>
          </div>

          <div className="sub-box" data-tab="wallet" onClick={this.changeTab}>
            <img src="https://i.ibb.co/ykNX5pd/money.jpg" alt="" data-tab="wallet" />
            <div className="text" data-tab="wallet">
              <h2 data-tab="wallet">Виртуальная валюта</h2>
              <p data-tab="wallet">Переводи Social Coins в виртуальную валюту, и стань долларовым миллионером</p>
            </div>
          </div>

          <div className="sub-box" data-tab="vip" onClick={this.changeTab}>
            <img src="https://i.ibb.co/s3GbGpX/vip.jpg" alt="" data-tab="vip" />
            <div className="text" data-tab="vip">
              <h2 data-tab="vip">VIP Аккаунт</h2>
              <p data-tab="vip">Больше возможностей, опыт и бонусы к зарплате</p>
            </div>
          </div>

          <div className="sub-box" data-tab="settings" onClick={this.changeTab}>
            <img src="https://i.ibb.co/r3BgqPN/settings.jpg" alt="" data-tab="settings" />
            <div className="text" data-tab="settings">
              <h2 data-tab="settings">Настройка персонажа</h2>
              <p data-tab="settings">Возможность изменить имя, внешность и другое</p>
            </div>
          </div>

          <div className="sub-box" data-tab="another" onClick={this.changeTab}>
            <img src="https://i.ibb.co/XXh1dRV/another.jpg" alt="" data-tab="another" />
            <div className="text" data-tab="another">
              <h2 data-tab="another">Другое</h2>
              <p data-tab="another">Установи свой номер для машины, выбери собственный уникальный номер телефона</p>
            </div>
          </div>
        </section>

        <section className="tab" id="items">

          {/* <div className="top-bar">
            <input type="text" className="search" placeholder="Поиск" />
          </div> */}
          {this.state.items.map((value, index) => <Items index={index} name={value[0]} cost={value[1]} imageName={value[3]} />)}
          {/* <div className="items">
          </div> */}
        </section>

        <section className="tab " id="history">

          <div className="history-box">
            <div className="button-box">
              <button className="active" id="accruals" onClick={this.changeTabHistory}>Начисления</button>
              <button className="" id="expenses" onClick={this.changeTabHistory}>Траты</button>
            </div>

            <div className="top-bar-history-box">
              <p className="date-time">Дата и время</p>
              <p className="cost">Сумма</p>
              <p className="comment">Комментарии</p>
            </div>

            <section className="history-container">

              <div id="accrualsTab">
                {this.state.accruals.map((value, index) => <Transaction time={value[0]} cost={value[1]} comment={value[2]} />)}
              </div>

              <div id="expensesTab" hidden>
                {this.state.expenses.map((value, index) => <Transaction time={value[0]} cost={value[1]} comment={value[2]} />)}
              </div>

            </section>
          </div>

        </section>

        <section className="tab " id="cases">
          <div className="cases-box">
            <h2><span>Social</span> Кейс</h2>


            <div className="roulette-container">
              <div className="count-money">
                <div className="background-for-logo">
                  <img src={Logo} alt="" />
                </div>
                <p>1509</p>
              </div>

              <div className="border">
                <div className="roulette-box">
                  <div className="selector"></div>
                  <ul className="roulette">

                    <li>
                      <div className="prize-border blue">
                        <div className="prize-box blue"><img src={Motorcycle} alt="" />
                          <div className="underline"></div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="prize-border red">
                        <div className="prize-box red"><img src={Car} alt="" />
                          <div className="underline"></div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="prize-border yellow">
                        <div className="prize-box yellow"><img src={Coin} alt="" />
                          <div className="underline"></div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="prize-border purple">
                        <div className="prize-box purple"><img src={JeepCar} alt="" />
                          <div className="underline"></div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="prize-border gray">
                        <div className="prize-box gray">
                          <div className="wallet-cost">
                            <div className="background-for-logo">
                              <img src={Logo} alt="" />
                            </div>
                            <p>125</p>
                          </div>
                          <div className="underline"></div>
                        </div>
                      </div>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            {/* 
            <div className="count-case">
              <button className="active">x1</button>
              <button className="">x2</button>
              <button className="">x3</button>
              <button className="">x4</button>
              <button className="">x5</button>
              <button className="">x10</button>
            </div> */}

            <div className="button-container">
              <button>Открыть медленно</button>
              {/* <button>Открыть быстро</button> */}
            </div>

            <ul className="win"></ul>
          </div>
        </section>

        <section className="tab " id="transport">

          {this.state.transport.map((value, index) => <Transport index={index} name={value[0]} cost={value[1]} comment={value[2]} imageName={value[3]} />)}

        </section>

        <section className="tab " id="wallet">
          {this.state.virtualWallet.map((value, index) => <VirtualWallet wallet={value[0]} cost={value[1]} />)}
        </section>

        <section className="tab" id="vip">

          {this.state.vipAccounts.map((value, index) => <VipAccounts name={value[0]} cost={value[1]} index={index} imageName={value[3]} />)}

        </section>

        <section className="tab" id="settings">

          {this.state.settings.map((value, index) => <Settings name={value[0]} cost={value[1]} index={index} imageName={value[3]} />)}

        </section>

        <section className="tab " id="another">

          {this.state.another.map((value, index) => <Another name={value[0]} cost={value[1]} index={index} imageName={value[3]} />)}

        </section>

        <section className="tab " id="show-item" onClick={this.handleClickOnShowItem.bind(this)}>
          {this.state.itemForShow}
        </section>
      </div>
    );
  }

}

export default Donate;