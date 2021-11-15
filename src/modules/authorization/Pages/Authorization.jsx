/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Button from '../uikit/Button';
import Title from '../uikit/Title';
import Logo from '../img/logo.png';

class Authorization extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showAuto: true,
            acceptRules: true,
            login: '',
            password: '',
            mailReg: '',
            loginReg: '',
            passwordReg: '',
            passwordRegCheck: '',
            pagePlayer: '',
            audioUrl: '',
            defaultLogin: '',
        }
    };

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Authorization.jsx', error, errorInfo); // eslint-disable-line
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (this.state.showAuto) this.clickLogin();
            else this.clickReg();
        }
    }

    componentDidMount() {
        const { EventManager: em } = window;
        document.addEventListener("keydown", this.handleKeyPress);

        em.addHandler('authMain:2', value => {

            if (value.type === 'login') {
                this.setState({ defaultLogin: value.login })

            } else return;
        })
    }

    componentWillUnmount() {
        const { EventManager: em } = window;
        document.removeEventListener("keydown", this.handleKeyPress);
        em.removeHandler('authMain:2');
    }

    handleChange(value) {
        this.setState({ showAuto: value });
    };

    valueLogin(event) {
        this.setState({ login: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
        this.addAnimation()
    };

    valuePassword(event) {
        this.setState({ password: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
        this.addAnimation()
    };

    valueMailReg(event) {
        this.setState({ mailReg: event.target.value })
        this.addAnimation()
    };

    valueLoginReg(event) {
        this.setState({ loginReg: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
        this.addAnimation()
    };

    valuePasswordReg(event) {
        this.setState({ passwordReg: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
        this.addAnimation()
    };

    valuePasswordRegCheck(event) {
        this.setState({ passwordRegCheck: event.target.value.replace(/[^a-zA-Z0-9]+/g, '') })
        this.addAnimation()
    };

    addAnimation() {
        let inputs = document.querySelectorAll('input.reg-input-style');
        inputs.forEach((input) => {
            if (input.value !== '') input.classList.add('is-valid');
            else input.classList.remove('is-valid');
        })
        inputs = document.querySelectorAll('input.auth-input-style');
        inputs.forEach((input) => {
            if (input.value !== '') input.classList.add('is-valid');
            else input.classList.remove('is-valid');
        })
    }

    clickLogin() {
        try {
            if (!this.state.login) {
                mp.trigger('client:user:auth:login', // eslint-disable-line
                    this.state.defaultLogin, this.state.password);
            }
            else {
                mp.trigger('client:user:auth:login', // eslint-disable-line
                    this.state.login, this.state.password);
            }
        } catch (e) {
            console.log(e);
        }
    };

    clickReg() {
        try {
            mp.trigger('client:user:auth:register', // eslint-disable-line
                this.state.mailReg, this.state.loginReg,
                this.state.passwordReg, this.state.passwordRegCheck,
                this.state.acceptRules);
        } catch (e) {
            console.log(e);
        }
    };

    showHidePassword(target) {
        let input = document.getElementById(target);
        input.getAttribute('type') === 'password' ? input.setAttribute('type', 'text') : input.setAttribute('type', 'password');
    }
    render() {
        return (
            <React.Fragment>
                <div className="auth-main">
                    <div className="content-main">
                        <div className="content-auth">
                            <div className="logo">
                                <img src={Logo} alt="" />
                                <Title text="Добро пожаловать в твою собственную, социальную кибер-реальность" size='m' />
                            </div>
                            <div className="button-main">
                                <input type="radio" id="btn-radio-auth1" name="btn-radio-auth" defaultChecked="true"
                                    onChange={() => this.handleChange(true)} />
                                <label htmlFor="btn-radio-auth1" className="button-auth">Авторизация</label>
                                <input type="radio" id="btn-radio-auth2" name="btn-radio-auth"
                                    onChange={() => this.handleChange(false)} />
                                <label htmlFor="btn-radio-auth2" className="button-auth">Регистрация</label>
                            </div>
                            {this.state.showAuto ?
                                <React.Fragment>
                                    <div className="auth-input" id="authorization">
                                        <div className="auth-input__text__container">
                                            <Title text="Авторизация" size="xxl"></Title>
                                        </div>

                                        <div className="input-data">
                                            <input type="text" pattern="[a-zA-Z0-9]*" id="auth-login-input"
                                                name="login-auth" className={this.state.login !== '' ? "auth-input-style is-valid" : "auth-input-style"}
                                                onChange={this.valueLogin.bind(this)}
                                                value={this.state.login}
                                                defaultValue={this.state.defaultLogin}
                                            />
                                            <label htmlFor="auth-login-input">Введите логин</label>
                                        </div>
                                        <div className="input-data">
                                            <input type="password" pattern="[a-zA-Z0-9]*" id="auth-password-input"
                                                name="password-auth" className={this.state.password !== '' ? "auth-input-style is-valid" : "auth-input-style"}
                                                value={this.state.password} onChange={this.valuePassword.bind(this)}
                                            />
                                            <label htmlFor="auth-password-input">Введите пароль</label>
                                            <div className="password-control" onClick={() => this.showHidePassword('auth-password-input')} />
                                        </div>
                                    </div>
                                    <div className="auth-buttons">
                                        <Button text="Начать играть" onClick={this.clickLogin.bind(this)} />
                                        <input type="radio" id="btn-radio-auth2" name="btn-radio-auth"
                                            onChange={() => this.handleChange(false)} />
                                        <label htmlFor="btn-radio-auth2" className="dednet__button">Регистрация</label>
                                    </div>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <div className="auth-input">
                                        <div className="auth-input__text__container">
                                            <Title text="Регистрация" size="xxl" />
                                        </div>
                                        <div className="reg-bloc">
                                            <div className="input-data">
                                                <input type="text" pattern="[a-zA-Z0-9]*" id="login-input"
                                                    name="create-login" className={this.state.loginReg !== '' ? "reg-input-style is-valid" : "reg-input-style"}
                                                    value={this.state.loginReg}
                                                    onChange={this.valueLoginReg.bind(this)}
                                                />
                                                <label htmlFor="login-input">Придумайте логин</label>
                                            </div>

                                            <div className="input-data">
                                                <input type="text" name="create-email" id="email-input"
                                                    className={this.state.mailReg !== '' ? "reg-input-style is-valid" : "reg-input-style"} onChange={this.valueMailReg.bind(this)}
                                                />
                                                <label htmlFor="email-input">Введите ваш email</label>
                                            </div>

                                            <div className="input-data">
                                                <input type="password" pattern="[a-zA-Z0-9]*" id="password-input"
                                                    value={this.state.passwordReg}
                                                    name="create-password" className={this.state.passwordReg !== '' ? "reg-input-style is-valid" : "reg-input-style"}
                                                    onChange={this.valuePasswordReg.bind(this)}
                                                />
                                                <label htmlFor="password-input">Придумайте сложный пароль</label>
                                                <div className="password-control" onClick={() => this.showHidePassword('password-input')} />
                                            </div>

                                            <div className="input-data">
                                                <input type="password" pattern="[a-zA-Z0-9]*" id="repeat-password-input"
                                                    value={this.state.passwordRegCheck} name="create-password-repeat"
                                                    className={this.state.passwordRegCheck !== '' ? "reg-input-style is-valid" : "reg-input-style"}
                                                    onChange={this.valuePasswordRegCheck.bind(this)}
                                                />
                                                <label htmlFor="repeat-password-input">Повторите пароль</label>
                                                <div className="password-control" onClick={() => this.showHidePassword('repeat-password-input')} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="auth-buttons">
                                        <Button text="Создать аккаунт" onClick={this.clickReg.bind(this)} />
                                        <input type="radio" id="btn-radio-auth1" name="btn-radio-auth" defaultChecked="true"
                                            onChange={() => this.handleChange(true)} />
                                        <label htmlFor="btn-radio-auth1" className="dednet__button">Назад</label>
                                    </div>
                                </React.Fragment>
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Authorization;
