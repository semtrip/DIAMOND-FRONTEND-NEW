import React from "react";

import './css/main.scss'

import { useEffect, useState } from "react";

const { EventManager: em } = window;

const AuthMain = () => {

    useEffect(() => {
        em.addHandler('authMain', value => {
            if (value.type === 'show') {
                setShow(true)
            } else if (value.type === 'hide') {
                setShow(false)
            } else if (value.type === 'switch') {
                setShow(!show)
            } else if (value.type === 'error') {
                setGlobalError(value.error)
            } else if (value.type === 'showCreatePage') {
                // this.setState({path: '/create'})
            } else return;
        })
    }, []);

    const [show, setShow] = useState(true);

    const [acceptRules, setAcceptRules] = useState(true);

    const [remberPassward, setRemberPassward] = useState(false);
    const [anim, startAnim] = useState(false);
    const [anim2, startAnim2] = useState(false);
    const [errorLogin, setErrorLogin] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [errorPasswordConfirm, setErrorPasswordConfirm] = useState('');
    const [globalError, setGlobalError] = useState('');


    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [loginReg, setLoginReg] = useState('');
    const [email, setEmail] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [password_confirm, setPassword_confirm] = useState('');

    function Anim () {
        setGlobalError('')
        if (!anim) {
            setTimeout(()=>startAnim2(true), 900) 
        }
        else {
            startAnim2(false)
        }
        if (!anim2) {
            startAnim(true)
        }
        else {
            setTimeout(()=>startAnim(false), 900) 
        }
    }
    const signInClass = () => {
        if(!anim) {
            return 'signIn active'
        } else {
            return 'signIn noActive'
        }
        
    }
    const signUpClass = () => {
        if(anim2) {
            return 'signUp active'
        } else {
            return 'signUp noActive'
        }
        
    }
    const authorization = () => {
        if(login === '' || password === '') {
            setGlobalError('Fill in all the fields of the form!')
        } else if (login.target.value === '' || password.target.value === '') {
            setGlobalError('Fill in all the fields of the form!')
        } else {
            try {
                mp.trigger('client:user:auth:login', login.target.value,  password.target.value); // eslint-disable-line
            } catch (e) {
                console.log('Login ', login.target.value, ' ', password.target.value)
            }
            setGlobalError('')
        }
    } 
    const registration = () => {
        if(loginReg === '' || email === '' || passwordReg === '' || password_confirm === '') {
            setGlobalError('Fill in all the fields of the form!')
        } else if(loginReg.target.value === '' || email.target.value === '' || passwordReg.target.value === '' || password_confirm.target.value === '') {
            setGlobalError('Fill in all the fields of the form!')
        } else if (validLogin() && validEmail() && validPassword() && confirmPassword()) {
            try {
                mp.trigger('client:user:auth:register', email.target.value, loginReg.target.value,   passwordReg.target.value, password_confirm.target.value, acceptRules); // eslint-disable-line
            } catch (e) {
                console.log('Registration ', loginReg.target.value, ' ', email.target.value, ' ', passwordReg.target.value)
            }
            
        }
        setGlobalError('')
    } 
    const validLogin = () => {
        setGlobalError('')
        let data = loginReg.target.value
        let withoutSpecialChars = /^[^-() ]*$/;
        let containсLetters = /^.*[a-zA-Z]+.*$/;
        if (!withoutSpecialChars.test(data) || !containсLetters.test(data)) {
            setErrorLogin('It can contain Latin letters and numbers. Cannot contain the characters - ( ) /')
            return false
        } else {
            setErrorLogin('')
            return true
        } 
    }
    const validEmail = () => {
        setGlobalError('')
        let data = email.target.value
        let re = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        if(!re.test(data)) {
            setErrorEmail('The email address is entered incorrectly!')
            return false
        } else {
            setErrorEmail('') 
            return true
        }       
    };
    const validPassword = () => {
        setGlobalError('')
        let data = passwordReg.target.value
        let withoutSpecialChars = /^[^-() ]*$/;
        let containсLetters = /^.*[a-zA-Z]+.*$/;
        if (data.length < 6 || !withoutSpecialChars.test(data) || !containсLetters.test(data)) {
            setErrorPassword('The password must be more than 6 characters, contain Latin letters and numbers. Cannot contain the characters - ( ) /')
            return false
        } else {
            setErrorPassword('')
            return true
        }
    }
    const confirmPassword = () => {
        setGlobalError('')
        let pass_one = passwordReg.target.value
        let pass_two = password_confirm.target.value
        if (pass_one !== pass_two) {
            setErrorPasswordConfirm('Passwords don`t match!')
            return false
        } else {
            setErrorPasswordConfirm('')
            return true
        } 
    }

    return show ? (
        <div className="auth-box">
            <div className="logo"/>
            <div className='form'>
                <div className={signInClass()}>
                    <div className="title">Authorization</div>
                    <div className="descriptor">      
                        Hello dear friend, log in to your account by simply entering your username and password!<br/><br/>
                        Have a good game on the <b>Diamond Role Play</b> project
                    </div>
                    <div className= 'input'>
                        <span>Login</span>
                        <input type="text" placeholder="Input..." autoFocus onChange={setLogin.bind(this)}/>
                    </div>
                    <div className='input'>
                        <span>Password</span>
                        <input type="password" placeholder="Input..." onChange={setPassword.bind(this)}/>
                    </div>
                    <div className="remember">
                        <div className={remberPassward ? 'checkBox active' : 'checkBox'} onClick={()=>setRemberPassward(!remberPassward)}/>
                        Remember the password?
                    </div>
                    <div className="btn" onClick={authorization}>Log in to your account</div>
                    <div className="link">No account? <b onClick={()=>{Anim()}}>Register</b></div>
                    <div className="error">
                        {globalError}
                    </div>
                </div>
                <div className={signUpClass()}>
                    <div className="title">Registration</div>
                    <div className="descriptor">      
                        Hello dear friend, log in to your account by simply entering your username and password!<br/><br/>
                        Have a good game on the <b>Diamond Role Play</b> project
                    </div>
                    <div className={errorLogin.length === 0 ? 'input' : 'input error'}>
                        <i>{errorLogin}</i>
                        <span>Login</span>
                        <input type="text" placeholder="Input..." autoFocus onChange={setLoginReg.bind(this)}/>
                    </div>
                    <div className={errorEmail.length === 0 ? 'input' : 'input error'}>
                        <i>{errorEmail}</i>
                        <span>Email</span>
                        <input type="text" placeholder="Input..." autoFocus onChange={setEmail.bind(this)}/>
                    </div>
                    <div className={errorPassword.length === 0 ? 'input' : 'input error'}>
                        <i>{errorPassword}</i>
                        <span>Password</span>
                        <input type="password" placeholder="Input..." onChange={setPasswordReg.bind(this)}/>
                    </div>
                    <div className={errorPasswordConfirm.length === 0 ? 'input' : 'input error'}>
                        <i>{errorPasswordConfirm}</i>
                        <span>Repeat the password</span>
                        <input type="password" placeholder="Input..." onChange={setPassword_confirm.bind(this)}/>
                    </div>
                    <div className="btn" onClick={registration}>Continue registration</div>
                    <div className="link">No account? <b onClick={()=>{Anim()}}>Register</b></div>
                    <div className="error">
                        {globalError}
                    </div>
                </div>
            </div>
            <div className={anim ? 'man man_two': 'man man_one'}/>
        </div>
    ):null
}
export default AuthMain 