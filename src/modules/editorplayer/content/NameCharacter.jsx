import React from 'react';

class NameCharacter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'NameCharacter.jsx', error, errorInfo); // eslint-disable-line
    }

    changeAge(val) {
        this.addAnimation();
        try {
            mp.trigger('client:events:custom:updateAge', val); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    registerPlayer() {
        try {
            mp.trigger('client:events:custom:register', // eslint-disable-line
            this.props.first_name, this.props.last_name, this.props.old_input, this.props.promocode, this.props.referer, this.props.ationality[this.props.index_help]); 
        } catch (e) {
            console.log(e);
        }
    }
    
    addAnimation() {
        let inputs = document.querySelectorAll('input.auth-input-style');
        inputs.forEach((input) => {
            if (input.value !== '') input.classList.add('is-valid');
            else input.classList.remove('is-valid');
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="menu-editor-default def-style">
                    <div className="title-block">Шаг 1</div>
                    <span className="title-in-block">Введите свои данные</span>
                    <div className="create-info-input">
                        <div className="input-data">
                            <input type="text" name="firstname-create" pattern="[a-zA-Z]*"
                                className="auth-input-style" value={this.props.first_name}
                                id="input-first_name"
                                onChange={this.props.valueFirstName.bind(this)} />
                            <label htmlFor="input-first_name">Имя (Англ)</label>
                        </div>
                        <div className="input-data">
                            <input type="text" name="lastname-create" pattern="[a-zA-Z]*"
                                className="auth-input-style" value={this.props.last_name}
                                id="input-last_name"
                                onChange={this.props.valueLastName.bind(this)} />
                            <label htmlFor="input-last_name">Фамилия (Англ)</label>
                        </div>
                        <div className="input-data">
                            <input type="text" min="18" max="60" pattern="[0-9]*"
                                onInput={this.props.onCheckNumber.bind(this)}
                                onChange={this.changeAge(this.props.old_input)} value={this.props.old_input}
                                id="input-old_input"
                                name="old-create" className="auth-input-style" />
                            <label htmlFor="input-old_input">Возраст (От 18 до 60)</label>
                        </div>
                        <div className="input-data">
                            <input type="text" name="lastname-create" pattern="[a-zA-Z]*"
                                className="auth-input-style" value={this.props.promocode}
                                id="input-promocode"
                                onChange={this.props.valuePromocode.bind(this)} />
                            <label htmlFor="input-promocode">Промокод (Если есть)</label>
                        </div>
                        <div className="input-data">
                            <input type="text" name="lastname-create" pattern="[a-zA-Z]*"
                                className="auth-input-style" value={this.props.referer}
                                id="input-referer"
                                onChange={this.props.valueReferer.bind(this)} />
                            <label htmlFor="input-referer">Ник пригласившего (Если есть)</label>
                        </div>
                    </div>
                    <div className="box-change box-change__row otstup-box" style={{ flexDirection: 'column' }}>
                        <span className="box-editor-title__namechar">{this.props.title}</span>
                        <div className="box-in-change editor-box-style">
                            <span className="chevron-left"
                                onClick={() => this.props.clickLeftArrow(0)}></span>
                            <div
                                className="label-change color-white">{this.props.nationality[this.props.index_help] !== undefined ? this.props.nationality[this.props.index_help] : this.props.nationality}</div>
                            <span className="chevron-right"
                                onClick={() => this.props.clickRightArrow(0)}></span>
                        </div>
                        <span className="box-editor-title__namechar-desc">{this.props.desc}</span>
                    </div>
                    <div className="last-button-menu">
                        <div className="box-last-btn">...</div>
                        <div className="box-last-btn" onClick={this.props.reset.bind(this)}>Сброс</div>
                        <div className="box-last-btn" onClick={this.registerPlayer.bind(this)}>Далее</div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default NameCharacter;
