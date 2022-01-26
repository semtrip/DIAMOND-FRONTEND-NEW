import React from "react";
import { observer } from "mobx-react-lite";

import '../css/car.css'

import store from "../Hud-store";

const Car = observer(() => {

    const state = store.state
    return state.showSpeed ?  (
        <React.Fragment>
        {
            state.showRadar ? 
            <div id="car-radar" className=''>
                <div className="primary">
                    <table className="front">
                        <tr>
                            <td>
                                <ul className="lamps">
                                    <li id="front-same">Same</li>
                                    <li id="front-opp">Opp</li>
                                    <li id="front-xmit">XMit</li>
                                </ul>
                            </td>
                            <td>
                                <span className="label">Front</span>
                                <div className="display orange">
                                    <span id="front-speed">{state.radarFrontSpeed}</span>
                                </div>
                            </td>
                            <td>
                                <span className="label dim">Fast</span>
                                <div className="display red">
                                    <span id="front-fast">{state.radarFrontSpeedMax}</span>
                                </div>
                            </td>
                            <td>
                                <div className="arrows">
                                    <span className="arrow up" id="front-fwd">&#129053;</span>
                                    <span className="arrow down" id="front-bwd">&#129055;</span>
                                </div>
                            </td>
                        </tr>
                    </table>
                    <table className="rear">
                        <tr>
                            <td>
                                <ul className="lamps">
                                    <li id="rear-same">Same</li>
                                    <li id="rear-opp">Opp</li>
                                    <li id="rear-xmit">XMit</li>
                                </ul>
                            </td>
                            <td>
                                <div className="display orange">
                                    <span id="rear-speed">{state.radarRearSpeed}</span>
                                </div>
                                <span className="label">Rear</span>
                            </td>
                            <td>
                                <div className="display red">
                                    <span id="rear-fast">{state.radarRearSpeedMax}</span>
                                </div>
                                <span className="label dim">Fast</span>
                            </td>
                            <td>
                                <div className="arrows">
                                    <span className="arrow up" id="rear-fwd">&#129053;</span>
                                    <span className="arrow down" id="rear-bwd">&#129055;</span>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="patrol">
                    <span className="label">RS 9000</span>
                    <div className="display green">
                        <span id="patrol-speed">{state.radarPatrolSpeed}</span>
                    </div>
                    <span className="label">Patrol Speed</span>
                </div>
            </div>:null
        }
            <div className="hud__speedometr">
                <svg width='306' height='118' viewBox="0 0 153 59" fill='none' className='svg-speedometer'>
                    <path d="M2 57C2 32.4818 27.2908 1.09764 75.2625 2.01986H151" stroke="rgba(0, 0, 0, 0.31)" stroke-opacity="0.55" stroke-width="4" stroke-linecap="round" stroke-dasharray="200 200" />
                    <path d="M2 57C2 32.4818 27.2908 1.09764 75.2625 2.01986H151" stroke="rgba(27, 118, 255, 0.87)" stroke-opacity="1" stroke-width="4" stroke-linecap="round" stroke-dasharray={`${200 * (state.speed / 300)} 200`} />
                </svg>
                <span className="hud__speedometr__speed">{state.speed}</span>
                <span className="hud__speedometr__speed__subtitle">{state.speedLabel}</span>

                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="hud__speedometr__light_svg">
                    <path d="M5.7637 0.234863C2.56953 0.234863 -0.0120666 2.82688 4.24244e-05 6.0223C0.0121148 9.18857 2.62854 11.7644 5.83285 11.7644H8.53377C9.98319 8.08047 9.98319 3.91878 8.53377 0.234863H5.7637Z" className={!state.light ? "hud__speedometr__light" : "hud__speedometr__light active"} />
                    <path d="M9.70703 0.234863C10.3831 2.0845 10.7251 4.01975 10.7251 5.99962C10.7251 7.9795 10.3831 9.91474 9.70703 11.7644H11.0364C11.2661 11.7644 11.4726 11.6218 11.5513 11.406C12.8196 7.93183 12.8196 4.06741 11.5513 0.593195C11.4726 0.377464 11.2661 0.234863 11.0364 0.234863H9.70703Z" className={!state.light ? "hud__speedometr__light" : "hud__speedometr__light active"} />
                    <path d="M13.5038 1.45882H16.6917C16.9947 1.45882 17.2404 1.21313 17.2404 0.910074C17.2404 0.60702 16.9947 0.361328 16.6917 0.361328H13.5038C13.2008 0.361328 12.9551 0.60702 12.9551 0.910074C12.9551 1.21313 13.2008 1.45882 13.5038 1.45882Z" className={!state.light ? "hud__speedometr__light" : "hud__speedometr__light active"} />
                    <path d="M13.7148 4.30216C13.7148 4.60522 13.9605 4.85091 14.2636 4.85091H17.4514C17.7545 4.85091 18.0002 4.60522 18.0002 4.30216C18.0002 3.99911 17.7545 3.75342 17.4514 3.75342H14.2636C13.9605 3.75342 13.7148 3.99911 13.7148 4.30216Z" className={!state.light ? "hud__speedometr__light" : "hud__speedometr__light active"} />
                    <path d="M17.4514 7.14697H14.2636C13.9605 7.14697 13.7148 7.39267 13.7148 7.69572C13.7148 7.99878 13.9605 8.24447 14.2636 8.24447H17.4514C17.7545 8.24447 18.0002 7.99878 18.0002 7.69572C18.0002 7.39267 17.7545 7.14697 17.4514 7.14697Z" className={!state.light ? "hud__speedometr__light" : "hud__speedometr__light active"} />
                    <path d="M16.6917 10.541H13.5038C13.2008 10.541 12.9551 10.7867 12.9551 11.0898C12.9551 11.3928 13.2008 11.6385 13.5038 11.6385H16.6917C16.9947 11.6385 17.2404 11.3928 17.2404 11.0898C17.2404 10.7867 16.9947 10.541 16.6917 10.541Z" className={!state.light ? "hud__speedometr__light" : "hud__speedometr__light active"} />
                </svg>

                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="hud__speedometr__door_svg">
                    <path d="M15.75 0.25H8.25L2.25 6.25V7H3.375C5.625 7 7.5 9.1825 7.5 11.875V13.75H16.5V1C16.5 0.801088 16.421 0.610322 16.2803 0.46967C16.1397 0.329018 15.9489 0.25 15.75 0.25ZM14.25 10H12V8.5H14.25V10ZM15 6.25H4.3725L8.8725 1.75H15V6.25ZM5.25 10.75V10.375C5.25 9.87772 5.05246 9.4008 4.70083 9.04917C4.3492 8.69754 3.87228 8.5 3.375 8.5C2.87772 8.5 2.40081 8.69754 2.04918 9.04917C1.69754 9.4008 1.5 9.87772 1.5 10.375V10.75C1.30109 10.75 1.11032 10.829 0.96967 10.9697C0.829018 11.1103 0.75 11.3011 0.75 11.5V14.5C0.75 14.6989 0.829018 14.8897 0.96967 15.0303C1.11032 15.171 1.30109 15.25 1.5 15.25H5.25C5.44891 15.25 5.63968 15.171 5.78033 15.0303C5.92098 14.8897 6 14.6989 6 14.5V11.5C6 11.3011 5.92098 11.1103 5.78033 10.9697C5.63968 10.829 5.44891 10.75 5.25 10.75ZM4.65 10.75H2.1V10.375C2.1 10.0368 2.23433 9.71255 2.47344 9.47344C2.71255 9.23433 3.03685 9.1 3.375 9.1C3.71315 9.1 4.03745 9.23433 4.27656 9.47344C4.51567 9.71255 4.65 10.0368 4.65 10.375V10.75Z" className={!state.door ? "hud__speedometr__door" : "hud__speedometr__door active"} />
                </svg>

                <img
                    src={state.turnLeft ? `https://gta-5.ru/server/client/images/icons/hud/arrow_left_on.svg` : `https://gta-5.ru/server/client/images/icons/hud/arrow_left_off.svg`}
                    className="hud__speedometr__arrow-left"
                />
                <img
                    src={state.turnRight ? `https://gta-5.ru/server/client/images/icons/hud/arrow_right_on.svg` : `https://gta-5.ru/server/client/images/icons/hud/arrow_right_off.svg`}
                    className="hud__speedometr__arrow-right"
                />
                <div className="hud__speedometr__fuel">
                    <img
                        src={state.fuelType === '%' ? `https://gta-5.ru/server/client/images/icons/hud/power.svg` : `https://gta-5.ru/server/client/images/icons/hud/fuel.svg`}
                        className="hud__speedometr__info__fuel"
                        width="14"
                        style={{ filter: ((state.max_fuel / 10 <= state.fuel) && state.fuelType !== '%') ? 'invert(57%) sepia(78%) saturate(6251%) hue-rotate(337deg) brightness(133%) contrast(113%)' : 'none' }}
                    />
                    <span className="hud__speedometr__info__fuel__text">{`${state.fuel}L/${state.max_fuel}L`}</span>
                </div>
            </div>
        </React.Fragment>
    ):null
    })
    export default Car