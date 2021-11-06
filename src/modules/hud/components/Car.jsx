/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

class Car extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            isShowSmall: false,
            light: true,
            door: false,
            engine: false,
            turnLeft: false,
            turnRight: false,
            fuel: 95,
            fuelType: 'L',
            max_fuel: 100,// Максимальная вместимость топливного бака
            speed: 170,
            speedLabel: 'km/h',
            carname: 'Insurgent',
            deg: -45,
            color: '#48B9F2',
            background: 0.5,

            showRadar: true,
            radarRearSpeed: '',
            radarRearSpeedMax: '',
            radarFrontSpeed: '',
            radarFrontSpeedMax: '',
            radarPatrolSpeed: '',
        }
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Car.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        this.setState({ show: false })
        const { EventManager: em } = window;
        em.addHandler('hudc', value => {
            if (value.type === 'show') {
                this.setState({ show: true })
            } else if (value.type === 'hide') {
                this.setState({ show: false })
            } else if (value.type === 'updateValues') {
                this.setState({ show: value.isShow });
                this.setState({ isShowSmall: value.isShowSmall });
                this.setState({ light: value.light });
                this.setState({ door: value.door });
                this.setState({ engine: value.engine });
                this.setState({ fuel: value.fuel });
                this.setState({ fuelType: value.fuelType });
                this.setState({ max_fuel: value.max_fuel });
                this.setState({ speed: value.speed });
                this.setState({ speedLabel: value.speedLabel });
                this.setState({ background: value.background });
                this.setState({ carname: value.carname });
                this.setState({ turnLeft: value.turnLeft });
                this.setState({ turnRight: value.turnRight });
            } else if (value.type === 'updateRadarValues') {
                this.setState({ showRadar: value.showRadar });
                this.setState({ radarRearSpeed: value.radarRearSpeed });
                this.setState({ radarRearSpeedMax: value.radarRearSpeedMax });
                this.setState({ radarFrontSpeed: value.radarFrontSpeed });
                this.setState({ radarFrontSpeedMax: value.radarFrontSpeedMax });
                this.setState({ radarPatrolSpeed: value.radarPatrolSpeed });
            } else return;
        })

        this.speed();
    }

    componentWillUnmount() {
        const { EventManager: em } = window;
        em.removeHandler('hudc');

    }

    componentDidUpdate(prevProp, prevState) {
        if (this.state.speed !== prevState.speed) {
            this.speed();
        }
    }

    speed() {
        let speedProcent = this.state.speed / 400 * 100;
        let deg = 180 * (speedProcent / 100);
        this.setState({ deg: deg - 45 });
    }

    render() {
        if (!this.state.show) {
            return null;
        }
        return (
            <React.Fragment>
                <div className="hud__speedometr">
                    <svg width='306' height='118' viewBox="0 0 153 59" fill='none' className='svg-speedometer'>
                        <path d="M2 57C2 32.4818 27.2908 1.09764 75.2625 2.01986H151" stroke="#121214" stroke-opacity="0.8" stroke-width="4" stroke-linecap="round" stroke-dasharray="200 200" />
                        <path d="M2 57C2 32.4818 27.2908 1.09764 75.2625 2.01986H151" stroke="#FD0023" stroke-opacity="0.5" stroke-width="4" stroke-linecap="round" stroke-dasharray={`${200 * (this.state.speed / 300)} 200`} />
                    </svg>
                    <span className="hud__speedometr__speed">{this.state.speed}</span>
                    <span className="hud__speedometr__speed__subtitle">{this.state.speedLabel}</span>

                    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="hud__speedometr__light_svg">
                        <path d="M5.7637 0.234863C2.56953 0.234863 -0.0120666 2.82688 4.24244e-05 6.0223C0.0121148 9.18857 2.62854 11.7644 5.83285 11.7644H8.53377C9.98319 8.08047 9.98319 3.91878 8.53377 0.234863H5.7637Z" className={!this.state.light ? "hud__speedometr__light" : "hud__speedometr__light active"} />
                        <path d="M9.70703 0.234863C10.3831 2.0845 10.7251 4.01975 10.7251 5.99962C10.7251 7.9795 10.3831 9.91474 9.70703 11.7644H11.0364C11.2661 11.7644 11.4726 11.6218 11.5513 11.406C12.8196 7.93183 12.8196 4.06741 11.5513 0.593195C11.4726 0.377464 11.2661 0.234863 11.0364 0.234863H9.70703Z" className={!this.state.light ? "hud__speedometr__light" : "hud__speedometr__light active"} />
                        <path d="M13.5038 1.45882H16.6917C16.9947 1.45882 17.2404 1.21313 17.2404 0.910074C17.2404 0.60702 16.9947 0.361328 16.6917 0.361328H13.5038C13.2008 0.361328 12.9551 0.60702 12.9551 0.910074C12.9551 1.21313 13.2008 1.45882 13.5038 1.45882Z" className={!this.state.light ? "hud__speedometr__light" : "hud__speedometr__light active"} />
                        <path d="M13.7148 4.30216C13.7148 4.60522 13.9605 4.85091 14.2636 4.85091H17.4514C17.7545 4.85091 18.0002 4.60522 18.0002 4.30216C18.0002 3.99911 17.7545 3.75342 17.4514 3.75342H14.2636C13.9605 3.75342 13.7148 3.99911 13.7148 4.30216Z" className={!this.state.light ? "hud__speedometr__light" : "hud__speedometr__light active"} />
                        <path d="M17.4514 7.14697H14.2636C13.9605 7.14697 13.7148 7.39267 13.7148 7.69572C13.7148 7.99878 13.9605 8.24447 14.2636 8.24447H17.4514C17.7545 8.24447 18.0002 7.99878 18.0002 7.69572C18.0002 7.39267 17.7545 7.14697 17.4514 7.14697Z" className={!this.state.light ? "hud__speedometr__light" : "hud__speedometr__light active"} />
                        <path d="M16.6917 10.541H13.5038C13.2008 10.541 12.9551 10.7867 12.9551 11.0898C12.9551 11.3928 13.2008 11.6385 13.5038 11.6385H16.6917C16.9947 11.6385 17.2404 11.3928 17.2404 11.0898C17.2404 10.7867 16.9947 10.541 16.6917 10.541Z" className={!this.state.light ? "hud__speedometr__light" : "hud__speedometr__light active"} />
                    </svg>

                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="hud__speedometr__door_svg">
                        <path d="M15.75 0.25H8.25L2.25 6.25V7H3.375C5.625 7 7.5 9.1825 7.5 11.875V13.75H16.5V1C16.5 0.801088 16.421 0.610322 16.2803 0.46967C16.1397 0.329018 15.9489 0.25 15.75 0.25ZM14.25 10H12V8.5H14.25V10ZM15 6.25H4.3725L8.8725 1.75H15V6.25ZM5.25 10.75V10.375C5.25 9.87772 5.05246 9.4008 4.70083 9.04917C4.3492 8.69754 3.87228 8.5 3.375 8.5C2.87772 8.5 2.40081 8.69754 2.04918 9.04917C1.69754 9.4008 1.5 9.87772 1.5 10.375V10.75C1.30109 10.75 1.11032 10.829 0.96967 10.9697C0.829018 11.1103 0.75 11.3011 0.75 11.5V14.5C0.75 14.6989 0.829018 14.8897 0.96967 15.0303C1.11032 15.171 1.30109 15.25 1.5 15.25H5.25C5.44891 15.25 5.63968 15.171 5.78033 15.0303C5.92098 14.8897 6 14.6989 6 14.5V11.5C6 11.3011 5.92098 11.1103 5.78033 10.9697C5.63968 10.829 5.44891 10.75 5.25 10.75ZM4.65 10.75H2.1V10.375C2.1 10.0368 2.23433 9.71255 2.47344 9.47344C2.71255 9.23433 3.03685 9.1 3.375 9.1C3.71315 9.1 4.03745 9.23433 4.27656 9.47344C4.51567 9.71255 4.65 10.0368 4.65 10.375V10.75Z" className={!this.state.door ? "hud__speedometr__door" : "hud__speedometr__door active"} />
                    </svg>

                    <img
                        src={this.state.turnLeft ? `https://gta-5.ru/server/client/images/icons/hud/arrow_left_on.svg` : `https://gta-5.ru/server/client/images/icons/hud/arrow_left_off.svg`}
                        className="hud__speedometr__arrow-left"
                    />
                    <img
                        src={this.state.turnRight ? `https://gta-5.ru/server/client/images/icons/hud/arrow_right_on.svg` : `https://gta-5.ru/server/client/images/icons/hud/arrow_right_off.svg`}
                        className="hud__speedometr__arrow-right"
                    />

                    {/* <div className="hud__speedometr__info">
                        <div className="hud__speedometr__info__row">
                            <img
                                src={this.state.fuelType === '%' ? `https://gta-5.ru/server/client/images/icons/hud/power.svg` : `https://gta-5.ru/server/client/images/icons/hud/fuel.svg`}
                                className="hud__speedometr__info__fuel"
                                width="14"
                                style={{ filter: ((this.state.max_fuel / 10 >= this.state.fuel) && this.state.fuelType !== '%') ? 'invert(57%) sepia(78%) saturate(6251%) hue-rotate(337deg) brightness(133%) contrast(113%)' : 'none' }}
                            />
                            <span className="hud__speedometr__info__fuel__text">{`${this.state.fuel}/${this.state.max_fuel}`}</span>
                        </div>
                    </div> */}

                    <div className="hud__speedometr__fuel">
{/*                         
                        <svg width="56" height="160" viewBox="0 0 56 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="hud__speedometr__fuel_svg">
                            <path opacity="0.8" d="M41.4767 158.753C43.9352 159.732 46.7299 158.535 47.6253 156.045C57.2058 129.4 58.6133 100.458 51.606 72.9488C44.5987 45.4391 29.5172 20.698 8.35703 1.88327C6.3795 0.124928 3.35246 0.410454 1.66182 2.44616C-0.0288086 4.48186 0.257492 7.49636 2.23071 9.25952C21.8363 26.7779 35.812 49.7657 42.3198 75.3142C48.8275 100.863 47.5523 127.735 38.7167 152.498C37.8274 154.99 39.0182 157.775 41.4767 158.753Z" fill="#121214" />
                            <path d="M 41 159 C 41 159 41 159 41 159 C 54 128 54 101 48 74 C 41 46 28 25 1 2 C 1 2 1 2 1 2 C 1 2 1 2 1 2 C 28 25 41 46 48 74 C 54 101 54 128 41 159 C 41 159 41 159 41 159 Z"
                                stroke='#FDB600' strokeWidth='8' strokeDasharray={`${175 * (this.state.fuel / this.state.max_fuel)} 400`} />
                        </svg> */}
                        <img
                            src={this.state.fuelType === '%' ? `https://gta-5.ru/server/client/images/icons/hud/power.svg` : `https://gta-5.ru/server/client/images/icons/hud/fuel.svg`}
                            className="hud__speedometr__info__fuel"
                            width="14"
                            style={{ filter: ((this.state.max_fuel / 10 <= this.state.fuel) && this.state.fuelType !== '%') ? 'invert(57%) sepia(78%) saturate(6251%) hue-rotate(337deg) brightness(133%) contrast(113%)' : 'none' }}
                        />
                        <span className="hud__speedometr__info__fuel__text">{`${this.state.fuel}L/${this.state.max_fuel}L`}</span>
                    </div>
                </div>


            </React.Fragment>
        )
    }
}

export default Car;
