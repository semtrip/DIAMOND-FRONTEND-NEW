import React from "react";

const { EventManager: em } = window;


export default class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: [
                {name: 'Походка',  data: 'Q'},
                {name: 'Походка',  data: 'Q'},
                {name: 'Походка',  data: 'Q'},
                {name: 'Походка',  data: 'Q'},
                {name: 'Походка',  data: 'Q'},
                {name: 'Походка',  data: 'Q'},
                {name: 'Походка',  data: 'Q'},
                {name: 'Походка',  data: 'Q'},
                {name: 'Походка',  data: 'Q'},
                {name: 'Походка',  data: 'Q'},
                {name: 'Походка',  data: 'Q'},
                {name: 'Походка',  data: 'Q'},
                {name: 'Походка',  data: 'Q'},
                {name: 'Походка',  data: 'Q'},
                {name: 'Походка',  data: 'Q'},
                {name: 'Походка',  data: 'Q'},
            ]
        }
    }
    componentDidCatch() {
        mp.trigger() // eslint-disable-line
    }    

    componentDidMount() {
        em.addHandler('accountMenu', value => {
            if (value.type === 'updateSettingButton') {
                this.setState({item: value.item})
            }
        })
    }
    componentWillUnmount() {
        em.removeHandler('accountMenu');
    }
       
    clickKey = (e) => {
        let isChange = false
        for (let index = 0; index < this.state.item.length; index++) {
             if(this.state.item[index].data === '') {
                 return
             } else {
                isChange = true
             }
        }
        if(isChange) {
            let state = []
            let id = e.target.closest('.item-button').id
            state = this.state.item
            state[id].data = ''
            this.setState({item: state})
            try {
                mp.trigger('changeKeySetting', id) // eslint-disable-line
            } catch (error) {
                console.log('changeKeySetting', id)
            }
        }


    }
    render() {
        return (
            <div className="button-settings">
                {this.state.item.length > 0 ? this.state.item.map((item, i)=> 
                    (
                        <div className="item-button" key={i} id={i}>
                            <div className="key" onClick={this.clickKey}>{item.data}</div>
                            <div className="name">{item.name}</div>
                        </div>
                    )
                    
                ): null}
            </div>
        )
    }
}