import React from "react";
import '../../css/player.css'

import ico from '../../img/player_ico.svg'


const playerStats = () => {
    return(
        <div className="player">
            <div className="head">
                <div className="playerName">
                    <div className="icon"><img src={ico} alt="" /></div>
                    <span><b>Maneskin Harding</b>#490</span>
                </div>
                <div className="buttonBlock">
                    <div className="button">Жалоба</div>
                    <div className="button button_two">Задать вопрос</div>
                </div>
            </div>
            <div className="stats">
                <div className="generalInfo block_s">
                    <h1>Общая информация</h1>
                    <div className="column">
                        <div className="line">Имя:<b className="active">Maneskin Harding</b></div>
                        <div className="line">Фракция:<b>Los-Santos Police</b></div>
                        <div className="line">Пол:<b>Мужской</b></div>
                        <div className="line">Дата рождения:<b>13.12.1997</b></div>
                        <div className="line">Супруг(а):<b className="active">Gr0zvill Harding</b></div>
                        <div className="line">Часов в игре:<b>12ч 20 мин</b></div>
                        <div className="line">Последний вход:<b>18.09.2020</b></div>
                        <div className="line">Дата регистрации:<b>10:45 20.02.2019</b></div>
                    </div>
                </div>
                <div className="finance block_s">
                    <h1>Ваши финансы</h1>
                    <div className="w_block">
                        <div className="cash">
                            <div className="ico">Наличные</div>
                            <div className="text">100.000.000$</div>
                        </div>
                        <div className="bank">
                        <div className="ico">Банковский счет</div>
                            <div className="text">100.000.000$</div>
                        </div>
                        <div className="docs"></div>
                        <div className="registration"><img src={ico} alt="" />Временная регистрация</div>
                        <span>Чтобы получить официальное гражданство, пройдитев “Мэрию” и заполните ряд документов!</span>
                    </div>
                </div>
                <div className="statistics block_s">
                    <h1>Статистика</h1>
                    <div className="w_block">
                        <div className="content">
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>
                            <div className="line">Репутация:<b>Положительная</b></div>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default playerStats