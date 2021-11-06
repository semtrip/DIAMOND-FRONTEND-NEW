import React from 'react';

const { EventManager: em } = window;

class Hints extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            hints: [
                {key: 'M', text: 'Главное меню'},
                {key: 'F2', text: 'Курсор'},
                {key: 'O', text: 'Телефон'},
                {key: 'i', text: 'Инвентарь'},
                {key: '~', text: 'Предметы рядом'},
            ]
        }
    }

    componentDidMount() {
        em.addHandler('hudk', value => {
            if (value.type === 'show') {
                this.setState({show: true})
            } else if (value.type === 'hide') {
                this.setState({show: false})
            } else if (value.type === 'updateValues') {
                this.setState({hints: value.hints});
            } else return;
        })
    }

    componentWillUnmount() {
        em.removeHandler('hudk');
    }

    hideHints(event){
        const button = event.target;
        const hints = document.querySelector('.hud__hints'); 
        const hintElements = document.querySelectorAll('.hud__hints__element');
        button.classList.contains('rotate') ? button.classList.remove('rotate') : button.classList.add('rotate');
        hintElements.forEach((hint) => {
            button.classList.contains('rotate') ? hint.classList.add('hide-hintElements') : hint.classList.remove('hide-hintElements');
        });
        button.classList.contains('rotate') && !hints.classList.contains('hide-hints') ? hints.classList.add('hide-hints') : hints.classList.remove('hide-hints');
    }

    render() {
        return (
            <div className={(this.state.show) ? "hud__hints" : "hud__hints hide-hints"}>
                <div className={(this.state.show) ? "hud__hints__hide-button" : "hud__hints__hide-button rotate"} onClick={this.hideHints.bind(this)}></div>
                {this.state.hints.map((item, index) => (
                    <div className={this.state.show ? "hud__hints__element" : "hud__hints__element hide-hintElements"} key={`hud__hints__element-${index}`}>
                        <span className="hud__hints__element__key">
                            {item.key}
                        </span>
                        <span className="hud__hints__element__text">
                            {item.text}
                        </span>
                    </div>
                ))}
            </div>
        )
    }
}

export default Hints
