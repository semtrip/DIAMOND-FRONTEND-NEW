import { makeAutoObservable } from "mobx"


class AccountMenuStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    state = {
        show: false,
        path: '/player',
        property_path: 'cars',
        name: 'Maneskin Harding',
        id: '490',
        fraction: 'Los-Santos Police',
        sex: 'Мужской',
        birth: '13.12.1997',
        spouse: 'Gr0zvill Harding',
        playTime: {hourse: '12', mines: '30'},
        lastLogin: '13.12.2021',
        dateRegistation: '10:45 13.12.2021',
        cash: '100.100.100',
        bank: '100.100.100',
        stats: [
            {name: 'Репутация', data: 'Положительная', color: 'ffffff'},
            {name: 'Репутация', data: 'Положительная', color: 'fff000'},
            {name: 'Репутация', data: 'Положительная'},
        ],
        pageProperty: 'cars',
        mission: [
            {
                title: 'Криминальный мир',
                discriptor: 'Вам предстоит, пройти суровый мир криминала, убивать людей, грабить банки,получить уважение и почет! Не забудьте,вы находитесь в криминальном мире DIAMOND ROLE PLAY',
                img: 'url',
                attachments: [
                    {
                        title: 'Криминальный мир',
                        discriptor: 'Вам предстоит, пройти суровый мир криминала, убивать людей, грабить банки,получить уважение и почет! Не забудьте,вы находитесь в криминальном мире DIAMOND ROLE PLAY',
                        img: 'url',
                        price: 100000,
                    },
                    {
                        title: 'Криминальный мир',
                        discriptor: 'Вам предстоит, пройти суровый мир криминала, убивать людей, грабить банки,получить уважение и почет! Не забудьте,вы находитесь в криминальном мире DIAMOND ROLE PLAY',
                        img: 'url',
                        price: 100000,
                    },
                    {
                        title: 'Криминальный мир',
                        discriptor: 'Вам предстоит, пройти суровый мир криминала, убивать людей, грабить банки,получить уважение и почет! Не забудьте,вы находитесь в криминальном мире DIAMOND ROLE PLAY',
                        img: 'url',
                        price: 100000,
                    },
                ]
            },
            {
                title: 'Криминальный мир',
                discriptor: 'Вам предстоит, пройти суровый мир криминала, убивать людей, грабить банки,получить уважение и почет! Не забудьте,вы находитесь в криминальном мире DIAMOND ROLE PLAY',
                img: 'url',
                price: 100000,
            },

        ]
    }
    stateHouse = {
        id: '371',
        address: 'Бульвар Алгонквин',
        tax: '4.500',
        places: '0',
        garage: 'Есть',
        rent: '5',
        price: '13.000.000',
    }
    stateCars = {
        cars: [{name: 'Mercedes-Benz', model: 'F700',  tax: '1.238', fine: 'Нет', fuel: 'Есть', number: 'U0OUGV7F'}],
        slots: 2,
    }
    stateBussines = {
        id: '471',
        address: 'Бульвар Алгонквин',
        tax: '4.500',
        price: '13.000.000',
    }
    stateReports = {
        reports: [
            {
                id: '181',
                status: true,
                new: true,
                message: [
                    {
                        admin: true,
                        name: 'Maneskin Harding',
                        time: '11:42',
                        message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее 111'
                    },
                    {
                        admin: false,
                        name: 'Maneskin Harding',
                        time: '11:42',
                        message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее 111'
                    },
                ],
            },
            {
                id: '183',
                status: false,
                new: false,
                message: [
                    {
                        admin: true,
                        name: 'Maneskin Harding',
                        time: '11:42',
                        message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее'
                    }
                ],
            },
        ],
        path: 0,
    }
    stateSettings = {
        page: 'main',
        button: {
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
        },
        chat: {
            item: [
                {name: 'Походка1', type: 'btn',  data: 'Применить'},
                {name: 'Стиль стрельбы', type: 'btn', data: 'Применить'},
                {name: 'Стиль стрельбы', type: 'select', data: ['Вариант Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Показывать ID игроков', type: 'checkbox', data: false},
                {name: 'Показывать ID транспорта', type: 'checkbox', data: true},  
            ]
        },
        interface: {
            item: [
                {name: 'Походка 22', type: 'select', data: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Стиль стрельбы', type: 'select', data: ['Вариант Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Дополнительная подгрузка моделей', type: 'checkbox', data: true},
                {name: 'Показывать ID игроков', type: 'checkbox', data: false},
                {name: 'Показывать ID транспорта', type: 'checkbox', data: true},
                {name: 'Показывать ID транспорта', type: 'checkbox', data: true},  
                {name: 'Показывать ID транспорта', type: 'checkbox', data: true},  
                {name: 'Показывать ID транспорта', type: 'checkbox', data: true},    
            ]
        },
        main: {
            item: [
                {name: 'Походка', type: 'select', data: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Стиль стрельбы', type: 'select', data: ['Вариант Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Дополнительная подгрузка моделей', type: 'checkbox', data: true},
                {name: 'Показывать ID игроков', type: 'checkbox', data: false},
                {name: 'Показывать ID транспорта', type: 'checkbox', data: true},
                {name: 'Походка', type: 'select', data: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Стиль стрельбы', type: 'select', data: ['Вариант Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Дополнительная подгрузка моделей', type: 'checkbox', data: true},
                {name: 'Показывать ID игроков', type: 'checkbox', data: false},
                {name: 'Показывать ID транспорта', type: 'checkbox', data: true}, 
                {name: 'Походка', type: 'select', data: ['Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Стиль стрельбы', type: 'select', data: ['Вариант Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Дополнительная подгрузка моделей', type: 'checkbox', data: true},
                {name: 'Показывать ID игроков', type: 'checkbox', data: false},
                {name: 'Показывать ID транспорта', type: 'checkbox', data: true},   
            ]
        },
        map: {
            item: [
                {name: 'Походка1', type: 'btn',  data: 'Применить'},
                {name: 'Стиль стрельбы', type: 'btn', data: 'Применить'},
                {name: 'Стиль стрельбы', type: 'select', data: ['Вариант Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Показывать ID игроков', type: 'checkbox', data: false},
                {name: 'Показывать ID транспорта', type: 'checkbox', data: true},  
            ]
        },
        voice: {
            item: [
                {name: 'Походка', type: 'btn',  data: 'Применить'},
                {name: 'Стиль стрельбы', type: 'btn', data: 'Применить'},
                {name: 'Стиль стрельбы', type: 'select', data: ['Вариант Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Показывать ID игроков', type: 'checkbox', data: false},
                {name: 'Показывать ID транспорта', type: 'checkbox', data: true},  
            ]
        }
    }
    closeMenu = () => {
        this.state.show = false
        try {
            mp.trigger('closeAccountMenu') // eslint-disable-line
        } catch (error) {
            console.log('closeAccountMenu')
        }
    }
    clickTask = (e) => {
        let el = e.target
        let id = el.closest('.task').id
        try {
            mp.trigger('startMission', id) // eslint-disable-line
        } catch (error) {
            console.log('startMission', id)
        }
    }
    moneyFormat(n) {
        return n.toLocaleString()
    }
    clickBtnPlayer = (e) => {
        let el = e.target
        try {
            mp.trigger('clickBtnReport', el.id) // eslint-disable-line
        } catch (error) {
            console.log(el.id)
        }        
    }
    setPageProperty = (e) =>{
        e.preventDefault()
        let data = document.querySelectorAll('.property .navButton')
        this.state.pageProperty = e.target.id.slice(2, e.target.id.length)
        for (let index = 0; index < data.length; index++) {
            data[index].classList.remove('active')        
        }
        e.target.classList.add('active')
    }
    textareaFocus () {
        document.getElementById('message').focus()
    }
    resizeTexarea () {
        const textarea = document.getElementById('message')
        const block = document.getElementById('test')
        const messagePole = document.getElementById('messagePole')
        let text = textarea.value
        block.innerHTML = text

        console.log(block.clientHeight)
        if(block.clientHeight === 0) {
            textarea.style.height = 17 + 'px'
            messagePole.style.height = 500 + 'px'
        } else if(block.clientHeight < 134) {
            textarea.style.height = block.clientHeight + 'px'
            if(block.clientHeight > 32) {
                messagePole.style.height = 500 - (block.clientHeight - 32) + 'px'
            }
        } 

    }
    clickTiket = (e) => {
        e.preventDefault()
        this.stateReports.path = e.target.id
        let tiket = document.querySelectorAll('.tiket')
        for (let index = 0; index < tiket.length; index++) {
            tiket[index].classList.remove('active')
        }
        e.target.classList.add('active')
    }
    clickSend = () => {
        const textarea = document.getElementById('message')
        let text = textarea.value
        let id = this.stateReports.reports[this.stateReports.path].id 
        if (text.length > 0) {
            try {
                mp.trigger('sendMsgReport', text, id) // eslint-disable-line
            } catch (error) {
                console.log(text, id)
            }
        }

    }
    setPageSettings = (e) =>{
        e.preventDefault()
        let data = document.querySelectorAll('.setting .navButton') 
        this.stateSettings.page = e.target.id.slice(2, e.target.id.length)
        for (let index = 0; index < data.length; index++) {
            data[index].classList.remove('active')        
        }
        e.target.classList.add('active')
    }
    clickKeyButton = (e) => {
        let isChange = false
        for (let index = 0; index < this.stateSettings.button.item.length; index++) {
             if(this.stateSettings.button.item[index].data === '') {
                 return
             } else {
                isChange = true
             }
        }
        if(isChange) {
            let state = []
            let id = e.target.closest('.item-button').id
            state = this.stateSettings.button.item
            state[id].data = ''
            this.stateSettings.button.item = state
            try {
                mp.trigger('changeKeySetting', id) // eslint-disable-line
            } catch (error) {
                console.log('changeKeySetting', id)
            }
        }
    }
    clickBtnChat = (e) => {
        try {
            mp.trigger('clickBtnChatSetting', this.stateSettings.chat.item[e.target.id].data) // eslint-disable-line
        } catch (error) {
            console.log('clickBtnChatSetting', this.stateSettings.chat.item[e.target.id].data)
        }
    }
    clickSelectChat = (e) => {
        let state = []
        let id = e.target.closest('.select').id
        state = this.stateSettings.chat.item
        let current = state[id].index
        switch (e.target.className) {
            case 'back':
                if (current === 0) {
                    current = state[id].data.length -1
                    state[id].index = current
                    this.stateSettings.chat.item = state
                } else {
                    current = current - 1
                    state[id].index = current
                    this.stateSettings.chat.item = state
                }
                break;
        
            case 'next':
                if (current === state[id].data.length - 1) {
                    current = 0
                    state[id].index = current
                    this.stateSettings.chat.item = state
                } else {
                    current = current + 1
                    state[id].index = current
                    this.stateSettings.chat.item = state
                }
                break;
                
        }
        try {
            mp.trigger('editChatSettings', this.stateSettings.chat.item) // eslint-disable-line
        } catch (error) {
            console.log('editChatSettings', this.stateSettings.chat.item)
        }
    }
    clickCheckboxChat = (e) => {
        let el = e.target
        let id = el.id
        let state = []
        state = this.stateSettings.chat.item
        if (el.classList[1] === 'active') {
           el.classList.remove('active')
           state[id].data = false
           this.stateSettings.chat.item = state

        } else {
            el.classList.add('active')
            state[id].data = true
            this.stateSettings.chat.item = state
        }
        try {
            mp.trigger('editChatSettings', this.stateSettings.chat.item) // eslint-disable-line
        } catch (error) {
            console.log('editChatSettings', this.stateSettings.chat.item)
        }
    }
    clickBtnInterface = (e) => {
        try {
            mp.trigger('clickBtnInterfaceSetting', this.stateSettings.interface.item[e.target.id].data) // eslint-disable-line
        } catch (error) {
            console.log('clickBtnInterfaceSetting', this.stateSettings.interface.item[e.target.id].data)
        }
    }
    clickSelectInterface = (e) => {
        let state = []
        let id = e.target.closest('.select').id
        state = this.stateSettings.interface.item
        let current = state[id].index
        switch (e.target.className) {
            case 'back':
                if (current === 0) {
                    current = state[id].data.length -1
                    state[id].index = current
                    this.stateSettings.interface.item = state
                } else {
                    current = current - 1
                    state[id].index = current
                    this.stateSettings.interface.item = state
                }
                break;
        
            case 'next':
                if (current === state[id].data.length - 1) {
                    current = 0
                    state[id].index = current
                    this.stateSettings.interface.item = state
                } else {
                    current = current + 1
                    state[id].index = current
                    this.stateSettings.interface.item = state
                }
                break;
                
        }
        try {
            mp.trigger('editInterfaceSettings', this.stateSettings.interface.item) // eslint-disable-line
        } catch (error) {
            console.log('editInterfaceSettings', this.stateSettings.interface.item)
        }
    }
    clickCheckboxInterface = (e) => {
        let el = e.target
        let id = el.id
        let state = []
        state = this.stateSettings.interface.item
        if (el.classList[1] === 'active') {
           el.classList.remove('active')
           state[id].data = false
           this.stateSettings.interface.item = state

        } else {
            el.classList.add('active')
            state[id].data = true
            this.stateSettings.interface.item = state
        }
        try {
            mp.trigger('editInterfaceSettings', this.stateSettings.interface.item) // eslint-disable-line
        } catch (error) {
            console.log('editInterfaceSettings', this.stateSettings.interface.item)
        }
    }
    clickApplyInterface = () => {
        try {
            mp.trigger('saveSettings', this.stateSettings.interface.item) // eslint-disable-line
        } catch (error) {
            console.log('saveSettings', this.stateSettings.interface.item)
        }
    }
    clickThrowInterface = () => {
        try {
            mp.trigger('throwSettings') // eslint-disable-line
        } catch (error) {
            console.log('throwSettings')
        }
    }
    clickBtnMain = (e) => {
        try {
            mp.trigger('clickBtnMainSetting', this.stateSettings.main.item[e.target.id].data) // eslint-disable-line
        } catch (error) {
            console.log('clickBtnMainSetting', this.stateSettings.main.item[e.target.id].data)
        }
    }
    clickSelectMain = (e) => {
        let state = []
        let id = e.target.closest('.select').id
        state = this.stateSettings.main.item
        let current = state[id].index
        switch (e.target.className) {
            case 'back':
                if (current === 0) {
                    current = state[id].data.length -1
                    state[id].index = current
                    this.stateSettings.main.item = state
                } else {
                    current = current - 1
                    state[id].index = current
                    this.stateSettings.main.item = state
                }
                break;
        
            case 'next':
                if (current === state[id].data.length - 1) {
                    current = 0
                    state[id].index = current
                    this.stateSettings.main.item = state
                } else {
                    current = current + 1
                    state[id].index = current
                    this.stateSettings.main.item = state
                }
                break;
                
        }
        try {
            mp.trigger('editMainSettings', this.stateSettings.main.item) // eslint-disable-line
        } catch (error) {
            console.log('editMainSettings', this.stateSettings.main.item)
        }
    }
    clickCheckboxMain = (e) => {
        let el = e.target
        let id = el.id
        let state = []
        state = this.stateSettings.main.item
        if (el.classList[1] === 'active') {
           el.classList.remove('active')
           state[id].data = false
           this.stateSettings.main.item = state

        } else {
            el.classList.add('active')
            state[id].data = true
            this.stateSettings.main.item = state
        }
        try {
            mp.trigger('editMainSettings', this.stateSettings.main.item) // eslint-disable-line
        } catch (error) {
            console.log('editMainSettings', this.stateSettings.main.item)
        }
    }
    clickBtnMap = (e) => {
        try {
            mp.trigger('clickBtnMapSetting', this.stateSettings.map.item[e.target.id].data) // eslint-disable-line
        } catch (error) {
            console.log('clickBtnMapSetting', this.stateSettings.map.item[e.target.id].data)
        }
    }
    clickSelectMap = (e) => {
        let state = []
        let id = e.target.closest('.select').id
        state = this.stateSettings.map.item
        let current = state[id].index
        switch (e.target.className) {
            case 'back':
                if (current === 0) {
                    current = state[id].data.length -1
                    state[id].index = current
                    this.stateSettings.map.item = state
                } else {
                    current = current - 1
                    state[id].index = current
                    this.stateSettings.map.item = state
                }
                break;
        
            case 'next':
                if (current === state[id].data.length - 1) {
                    current = 0
                    state[id].index = current
                    this.stateSettings.map.item = state
                } else {
                    current = current + 1
                    state[id].index = current
                    this.stateSettings.map.item = state
                }
                break;
                
        }
        try {
            mp.trigger('editMapSettings', this.stateSettings.map.item) // eslint-disable-line
        } catch (error) {
            console.log('editMapSettings', this.stateSettings.map.item)
        }
    }
    clickCheckboxMap = (e) => {
        let el = e.target
        let id = el.id
        let state = []
        state = this.stateSettings.map.item
        if (el.classList[1] === 'active') {
           el.classList.remove('active')
           state[id].data = false
           this.stateSettings.map.item = state

        } else {
            el.classList.add('active')
            state[id].data = true
            this.stateSettings.map.item = state
        }
        try {
            mp.trigger('editMapSettings', this.stateSettings.map.item) // eslint-disable-line
        } catch (error) {
            console.log('editMapSettings', this.stateSettings.map.item)
        }
    }
    clickBtnVoice = (e) => {
        try {
            mp.trigger('clickBtnVoiceSetting', this.stateSettings.voice.item[e.target.id].data) // eslint-disable-line
        } catch (error) {
            console.log('clickBtnVoiceSetting', this.stateSettings.voice.item[e.target.id].data)
        }
    }
    clickSelectVoice = (e) => {
        let state = []
        let id = e.target.closest('.select').id
        state = this.stateSettings.voice.item
        let current = state[id].index
        switch (e.target.className) {
            case 'back':
                if (current === 0) {
                    current = state[id].data.length -1
                    state[id].index = current
                    this.stateSettings.voice.item = state
                } else {
                    current = current - 1
                    state[id].index = current
                    this.stateSettings.voice.item = state
                }
                break;
        
            case 'next':
                if (current === state[id].data.length - 1) {
                    current = 0
                    state[id].index = current
                    this.stateSettings.voice.item = state
                } else {
                    current = current + 1
                    state[id].index = current
                    this.stateSettings.voice.item = state
                }
                break;
                
        }
        try {
            mp.trigger('editVoiceSettings', this.stateSettings.voice.item) // eslint-disable-line
        } catch (error) {
            console.log('editVoiceSettings', this.stateSettings.voice.item)
        }
    }
    clickCheckboxVoice = (e) => {
        let el = e.target
        let id = el.id
        let state = []
        state = this.stateSettings.voice.item
        if (el.classList[1] === 'active') {
           el.classList.remove('active')
           state[id].data = false
           this.stateSettings.voice.item = state

        } else {
            el.classList.add('active')
            state[id].data = true
            this.stateSettings.voice.item = state
        }
        try {
            mp.trigger('editVoiceSettings', this.stateSettings.voice.item) // eslint-disable-line
        } catch (error) {
            console.log('editVoiceSettings', this.stateSettings.voice.item)
        }
    }
}
export default new AccountMenuStore()