import React from "react";

const { EventManager: em } = window;

export default class Interface extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: [
                {name: 'Походка', type: 'select', data: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Стиль стрельбы', type: 'select', data: ['Вариант Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Дополнительная подгрузка моделей', type: 'checkbox', data: true},
                {name: 'Показывать ID игроков', type: 'checkbox', data: false},
                {name: 'Показывать ID транспорта', type: 'checkbox', data: true},
                {name: 'Показывать ID транспорта', type: 'checkbox', data: true},  
                {name: 'Показывать ID транспорта', type: 'checkbox', data: true},  
                {name: 'Показывать ID транспорта', type: 'checkbox', data: true},    
            ]
        }
    }
    componentDidCatch() {
        mp.trigger() // eslint-disable-line
    }    

    componentDidMount() {
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateSettingInterface') {
                this.setState({item: value.item})
            }
        })
    }
    componentWillUnmount() {
        em.removeHandler('accountMenu');
    }
    clickBtn = (e) => {
        try {
            mp.trigger('clickBtnInterfaceSetting', this.state.item[e.target.id].data) // eslint-disable-line
        } catch (error) {
            console.log('clickBtnInterfaceSetting', this.state.item[e.target.id].data)
        }
    }
    clickSelect = (e) => {
        let state = []
        let id = e.target.closest('.select').id
        state = this.state.item
        let current = state[id].index
        switch (e.target.className) {
            case 'back':
                if (current === 0) {
                    current = state[id].data.length -1
                    state[id].index = current
                    this.setState({item: state})
                } else {
                    current = current - 1
                    state[id].index = current
                    this.setState({item: state})
                }
                break;
        
            case 'next':
                if (current === state[id].data.length - 1) {
                    current = 0
                    state[id].index = current
                    this.setState({item: state})
                } else {
                    current = current + 1
                    state[id].index = current
                    this.setState({item: state})
                }
                break;
                
        }
        try {
            mp.trigger('editInterfaceSettings', this.state.item) // eslint-disable-line
        } catch (error) {
            console.log('editInterfaceSettings', this.state.item)
        }
    }
    clickCheckbox = (e) => {
        let el = e.target
        let id = el.id
        let state = []
        state = this.state.item
        if (el.classList[1] === 'active') {
           el.classList.remove('active')
           state[id].data = false
           this.setState({item: state})

        } else {
            el.classList.add('active')
            state[id].data = true
            this.setState({item: state})
        }
        try {
            mp.trigger('editInterfaceSettings', this.state.item) // eslint-disable-line
        } catch (error) {
            console.log('editInterfaceSettings', this.state.item)
        }
    }
    clickApply = () => {
        try {
            mp.trigger('saveSettings', this.state.item) // eslint-disable-line
        } catch (error) {
            console.log('saveSettings', this.state.item)
        }
    }
    clickThrow = () => {
        try {
            mp.trigger('throwSettings') // eslint-disable-line
        } catch (error) {
            console.log('throwSettings')
        }
    }
    render() {
        return (
            <>
            <div className="interface-setting">
                {this.state.item.length > 0 ? this.state.item.map((item, i)=> 
                    (
                        <div className="item" key={i}>
                            <span>{item.name}</span>
                            {
                                item.type === 'btn' ?
                                (
                                    <div className="btn" id={i} onClick={this.clickBtn}>{item.data}</div>
                                ):null
                            }
                            {
                                item.type === 'select'  ? 
                            (
                                <div className="select" onClick={this.clickSelect} id={i}>
                                    <div className="back" name="back">&#60;</div>
                                    <span>{item.data[item.index]}</span>
                                    <div className="next" name="next">&#62;</div>
                                </div>
                            ):null
                            }
                            {
                                item.type === 'checkbox' ? 
                            (
                                <div className={item.data ? 'checkbox active': 'checkbox'} onClick={this.clickCheckbox} id={i}/>
                            ):null
                            }
                        </div>
                    )
                    
                ): null}
            </div>
            <div className="interface-button">
                    <div className="text">
                        <span>Чтобы изменения вступили в силу, нажмите кнопку “Применить”</span>
                        <span>Чтобы сбросить введеные вами изменения нажмите кнопку “Сбросить”</span>
                    </div>
                    <div className="btn">
                        <div className="apply" onClick={this.clickApply}>Применить</div>
                        <div className="throw" onClick={this.clickThrow}>Сбросить</div>
                    </div>
             </div>
             </>
        )
    }
}