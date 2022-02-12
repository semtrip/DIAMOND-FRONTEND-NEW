import React from 'react';

class TopBar extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'TopBar.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidUpdate(prevProp, prevState) {
        if (this.props.data.battery !== prevProp.data.battery) {
            this.batteryCharge();
        }
        if (this.props.data.network !== prevProp.data.network) {
            this.network();
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="topbar-andr">
                    
                    <div className="right-topbar">
                        <span className="battery-info">{this.props.data.time}</span>
                    </div>

                    <div className="left-topbar">
                        
                        <div className="elements-bar">
                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.6 9.75V0.75H15.75V9.75H12.6ZM8.4 3H11.55V9.75H8.4V3ZM4.2 5.25H7.35V9.75H4.2V5.25ZM0 7.5H3.15V9.75H0V7.5Z" fill="white" />
                            </svg>
                        </div>

                        <div className="elements-bar">
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.45948 1.31739L6.48298 9.35739C6.29498 9.86539 5.75348 10.1264 5.27398 9.93989C5.15524 9.89286 5.04751 9.82175 4.95759 9.73106C4.86767 9.64036 4.79749 9.53203 4.75148 9.41289L3.80798 7.02789C3.63067 6.57007 3.27919 6.20114 2.83048 6.00189L0.559477 5.01139C0.0869773 4.80489 -0.128023 4.23239 0.0784773 3.73239C0.127321 3.61166 0.199622 3.50182 0.291197 3.40921C0.382771 3.31661 0.491801 3.24308 0.611977 3.19289L8.26998 0.0678924C8.75348 -0.129608 9.28998 0.118392 9.46748 0.622392C9.54598 0.845392 9.54298 1.09239 9.45998 1.31739H9.45948Z" fill="white" />
                            </svg>
                        </div>

                        <div className="elements-bar">
                            <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.58691 2.1875H12.8994V6.3125H2.58691V2.1875Z" fill="white" />
                                <path d="M2.58691 0.125C2.03991 0.125 1.5153 0.342298 1.12851 0.729092C0.741713 1.11589 0.524414 1.64049 0.524414 2.1875L0.524414 6.3125C0.524414 6.85951 0.741713 7.38411 1.12851 7.77091C1.5153 8.1577 2.03991 8.375 2.58691 8.375H12.8994C13.4464 8.375 13.971 8.1577 14.3578 7.77091C14.7446 7.38411 14.9619 6.85951 14.9619 6.3125V2.1875C14.9619 1.64049 14.7446 1.11589 14.3578 0.729092C13.971 0.342298 13.4464 0.125 12.8994 0.125H2.58691ZM12.8994 1.15625C13.1729 1.15625 13.4352 1.2649 13.6286 1.4583C13.822 1.65169 13.9307 1.914 13.9307 2.1875V6.3125C13.9307 6.586 13.822 6.84831 13.6286 7.0417C13.4352 7.2351 13.1729 7.34375 12.8994 7.34375H2.58691C2.31341 7.34375 2.05111 7.2351 1.85771 7.0417C1.66431 6.84831 1.55566 6.586 1.55566 6.3125V2.1875C1.55566 1.914 1.66431 1.65169 1.85771 1.4583C2.05111 1.2649 2.31341 1.15625 2.58691 1.15625H12.8994ZM17.0244 4.25C17.0244 4.66026 16.8614 5.05371 16.5713 5.34381C16.2812 5.6339 15.8878 5.79688 15.4775 5.79688V2.70312C15.8878 2.70312 16.2812 2.8661 16.5713 3.15619C16.8614 3.44629 17.0244 3.83974 17.0244 4.25Z" fill="white" />
                            </svg>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TopBar;
