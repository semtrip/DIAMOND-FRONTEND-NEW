import React from 'react';

import FleecaCashOut from '../../../img/iphone/fleeca-cash-out.png';
import FleecaHistory from '../../../img/iphone/fleeca-history.png';
import BlaineCashOut from '../../../img/iphone/blaine-cash-out.png';
import BlaineHistory from '../../../img/iphone/blaine-history.png';
import MazeCashOut from '../../../img/iphone/maze-cash-out.png';
import MazeHistory from '../../../img/iphone/maze-history.png';
import PacificCashOut from '../../../img/iphone/pacific-cash-out.png';
import PacificHistory from '../../../img/iphone/pacific-history.png';

class Bank extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bankType: this.props.path.split(':')[1],
    }

    console.log(this.props.data);
  }

  componentDidCatch(error, errorInfo) {
    mp.trigger('client:ui:debug', 'Bank.jsx', error, errorInfo); // eslint-disable-line
  }

  checkBank() {
    switch (this.state.bankType) {
      case 'fleeca':
        return 'Fleeca Bank';
      case 'blaine':
        return 'Blaine Bank';
      case 'maze':
        return 'Maze Bank';
      case 'pacific':
        return 'Pacific Bank';
    }
  }

  setCardNumberWithStars() {
    const oldCardNumber = this.props.data.cardNumber.split(' ');
    let newCardNumber = '';

    oldCardNumber.map((v, index) => {
      if (index != 3) newCardNumber += '**** '
      else newCardNumber += v;
    })
    return newCardNumber;
  }

  switchImageOfCashOut() {
    switch (this.state.bankType) {
      case 'fleeca':
        return FleecaCashOut;
      case 'blaine':
        return BlaineCashOut;
      case 'maze':
        return MazeCashOut;
      case 'pacific':
        return PacificCashOut;
    }
  }

  switchImageOfHistory(){
    switch (this.state.bankType) {
      case 'fleeca':
        return FleecaHistory;
      case 'blaine':
        return BlaineHistory;
      case 'maze':
        return MazeHistory;
      case 'pacific':
        return PacificHistory;
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="bank-main-content-box">
          <div className="title">{this.checkBank()}</div>
          <div className={`card-box ${this.state.bankType}`}>
            <div className="card-number">{this.setCardNumberWithStars()}</div>
            <div className="card-holder">{this.props.data.cardHolderName}</div>
            <div className="valid-card">
              <div className="text">valid thru</div>
              <div className="valid">{this.props.data.cardValid}</div>
            </div>
          </div>
          <div className={`balance-card-box ${this.state.bankType}`}>
            <div className="title">Balance on the card:</div>
            <div className="text">{this.props.data.cardBalance}$</div>
          </div>
          <div className={`account-status ${this.state.bankType}`}>
            <div className="text-box">
              <div className="text">Payroll account status:</div>
              <div className="status">{this.props.data.cardBalance}$</div>
            </div>
            <div className="cash-out" onClick={this.props.onBankCashOutClick}><img src={this.switchImageOfCashOut()} alt="" /></div>
          </div>
          <div onClick={this.props.onBankHistoryClick} className={`history-card-info ${this.state.bankType}`}>
            <img src={this.switchImageOfHistory()} alt="" />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Bank;