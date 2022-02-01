/* eslint-disable no-unused-expressions */
import React from "react";

import '../css/main.css';

function calculateSum(bonus, event){
  const input = event.target;
  const calculatedSum = document.querySelector('#calculatedSum');

  let newSum = input.value;

  bonus.forEach((b) => {
    let numValue = Number.parseInt(input.value);
    if(b.from < numValue){
      newSum = numValue + ((numValue * b.plus)/100);
    }
  });

  calculatedSum.innerHTML = newSum;
}

function Main(props) {
  return (
    <React.Fragment>
      <div className="main-container">
        <div className="left-container">
          <div className="container">
            <div className="pay-form">
              <div className="text">
                <div className="title">Пополнение баланса</div>
                <div className="subtitle">При пополнение определенной суммы, вы получите бонус в зависимости от суммы. <br/>Остерегайтесь мошенников!</div>
              </div>
              <div className="inputs">
                <input type="email" name="email" id="email" placeholder="ivan.ivanov@diamond.com" />
                <input type="text" name="sum" id="sum" placeholder="От 2 RUB" onChange={calculateSum.bind(this, props.bonus)} onInput={props.checkInput} maxLength={7} />
              </div>
              <div className="bottom">
                <div className="text"> Вы получите: <p id="calculatedSum">0</p> <span>DC</span></div>
                <div className="button">Пополнить баланс</div>
              </div>
            </div>
          </div>
          <div className="bonus-container">
            <div className="title">Бонус от пополнения:</div>
            <div className="bonus-box">
              {props.bonus.map((b, index) => {
                return (
                  <React.Fragment>
                    <div className="bonus" id={index}>
                      <div className="plus-container">+{b.plus}%</div>
                      <div className="text">от {b.from} RUB</div>
                    </div>
                  </React.Fragment>
                )
              })}
            </div>
          </div>
        </div>

        <div className="right-container">
        <div className="container">
            <div className="pay-form">
              <div className="text">
                <div className="title">Перевод донат валюты</div>
                <div className="subtitle">Тут вы сможете перевести донат валюту, в игровую просто введите кол-во DC и вам сразу покажет сколько, вы получите игровой валюты</div>
              </div>
              <div className="inputs">
                <input type="text" name="dc-sum" id="dc-sum" placeholder="Введите DC" onInput={props.checkInput} maxLength={7} />
                <input type="text" name="game-wallet" id="game-wallet" placeholder="Вы получите игровой валюты" onChange={calculateSum.bind(this, props.bonus)} onInput={props.checkInput} maxLength={7} />
              </div>
              <div className="bottom">
                <div className="button">Пополнить баланс</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Main;