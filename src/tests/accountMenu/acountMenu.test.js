const menuData = {
    type: 'updatePlayer',
    name: 'Maneskin Harding 111',
    id: '490',
    fraction: 'Los-Santos Police 111',
    sex: 'Мужской',
    reg: 'Официальное гражданство',
    birth: '13.12.1997',
    spouse: 'Gr0zvill Harding',
    playTime: '30',
    lastLogin: '13.12.2021',
    dateRegistation: '10:45 13.12.2021',
    cash: '100.100.100',
    bank: '100.100.100',
    stats: [
        { name: 'Репутация', data: 'Положительная', color: 'ffffff' },
        { name: 'Репутация', data: 'Положительная', color: 'fff000' },
        { name: 'Репутация', data: 'Положительная' },
    ]
}
const settingData = {
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
            {name: 'Походка1', type: 'btn',  data: 'Применить', params: 'clear'},
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
            { name: 'Reload #1', params: 'voice:reload:1', type: 'btn', data: "Send" },
            { name: 'Reload #2', params: 'voice:reload:2', type: 'btn', data: "Send" },
            { name: 'Reload #3', params: 'voice:reload:3', type: 'btn', data: "Send" },
            { name: 'Full reloading', params: 'voice:reload:4', type: 'btn', data: "Send" },
            { name: 'Volume', params: 'voice:vol', type: 'select', data: ["0%", "10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"], index: 0},
            { name: 'Hear only players', params: 'voice:work', type: 'select', data: ['All', '2 LVL', '3 LVL', '4 LVL', '5 LVL'] , index: 0}  
        ]
    }
}
const setActiveMainMenu = active => {
    window.trigger('accountMenu', { type: 'show' })
}
const setData = active => {
    window.trigger('accountMenu', menuData)
}
const setDataBtn = active => {
    let data = {
        type: 'updateSettingButton',
        item: settingData.button.item
    }
    window.trigger('accountMenu', data)
}
const setDataChat = active => {
    let data = {
        type: 'updateSettingChat',
        item: settingData.chat.item
    }
    window.trigger('accountMenu', data)
}
const setDataIntarface = active => {
    let data = {
        type: 'updateSettingInterface',
        item: settingData.interface.item
    }
    window.trigger('accountMenu', data)
}
const setDataMain = active => {
    let data = {
        type: 'updateSettingMain',
        item: settingData.main.item
    }
    window.trigger('accountMenu', data)
}
const setDataVoice = active => {
    let data = {
        type: 'updateSettingVoice',
        item: settingData.voice.item
    }
    window.trigger('accountMenu', data)
}
const setDataMap = active => {
    let data = {
        type: 'updateSettingMap',
        item: settingData.map.item
    }
    console.log(data)
    window.trigger('accountMenu', data)
}
window.test.menuData = {
    setActiveMainMenu,
    setData,
    setDataBtn,
    setDataChat,
    setDataIntarface,
    setDataMain,
    setDataVoice,
    setDataMap
}