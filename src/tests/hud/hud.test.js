const hudData = {
    type: ''
}

const hudcData = {
    type: ''
}

const testMessage = {
    type: 'push',
    message: 'Тестовое сообщение'
}

const hudkData = {
    type: ''
}

const hudlData = {
    type: '',
    showAmmo: false,
    showQuest: false,
    ammoCount: 0,
    ammoMode: 'auto',
    questTitle: 'Квестовое задание',
    questText: 'Получите два ящика травы, три ящика кокаина, отвезите труп Минори на свалку',
    questDesc: '',
    questAnim: '',
    date: '01.01',
    time: '12:00',
    online: '0',
    max_player: '1000',
    id: '0',
    color: '#48B9F2',
    background: 0.5,

}
let SpeedData = {
    type: 'updateValues',
    isShow: true,
    isShowSmall: false,
    light: true,
    door: false,
    engine: false,
    turnLeft: false,
    turnRight: false,
    fuel: 95,
    fuelType: 'L',
    max_fuel: 100, // Максимальная вместимость топливного бака
    speed: 170,
    speedLabel: 'km/h',
    carname: 'Insurgent',
    deg: -45,
    color: '#48B9F2',
    background: 0.5,
}
let radarData = {
    type: 'updateRadarValues',
    showRadar: true,
    radarRearSpeed: '1',
    radarRearSpeedMax: '2',
    radarFrontSpeed: '3',
    radarFrontSpeedMax: '4',
    radarPatrolSpeed: '5',
}
let hintsData = {
    showHints: false,
    type: 'updateValues',
    hints: [
        { key: 'M', text: 'Главное меню', ico: 1 },
        { key: 'F2', text: 'Курсор', ico: 1 },
        { key: 'O', text: 'Телефон', ico: 1 },
        { key: 'i', text: 'Инвентарь', ico: 1 },
        { key: '~', text: 'Предметы рядом' },
    ]
}
const hudmData = {
    type: ''
}

// Включение/выключение [HUD]
const setActive = active => {
        if (active) {
            hudData.type = 'show'
        } else {
            hudData.type = 'hide'
        }
        window.trigger('hud', hudData)
    }
    // Включение/выключение [HUD CAR]
const setActiveSpeedometer = active => {
        if (hudData.type === 'show') {
            if (active) {
                hudcData.type = 'show'
            } else {
                hudcData.type = 'hide'
            }
            window.trigger('hudc', hudcData)
        } else return

    }
    // Тестовые собщения в чат

var iChat = 1;
const pushTestMessageInChat = () => {
    testMessage.message = 'Тестовое сообщение ' + iChat
    setTimeout(() => {
        window.trigger('chat', testMessage)
        iChat++
        if (iChat < 20) {
            pushTestMessageInChat()
        }
    }, 500)

}

const setActiveHelp = active => {
    if (active) {
        hudkData.type = 'show'
    } else {
        hudkData.type = 'hide'
    }
    window.trigger('hudk', hudkData)
}

const setActiveLogo = active => {
    if (active) {
        hudlData.type = 'show'
    } else {
        hudlData.type = 'hide'
    }
    window.trigger('hudl', hudlData)
}

const setActiveQuest = active => {
    hudlData.type = 'updateQuest'
    hudlData.showQuest = active
    window.trigger('hudl', hudlData)
}
var iSpeed = 1
const testSpeedometer = () => {
    if (hudcData.type === 'show') {
        if (iSpeed % 10 === 0) {
            SpeedData.light = !SpeedData.light
            SpeedData.door = !SpeedData.door
            SpeedData.engine = !SpeedData.engine
            SpeedData.turnRight = !SpeedData.turnRight
            SpeedData.turnLeft = !SpeedData.turnLeft
            SpeedData.color = '#ff' + iSpeed
        }
        setTimeout(() => {
            SpeedData.speed = SpeedData.speed - 1;
            if (SpeedData.fuel !== 0) {
                SpeedData.fuel = SpeedData.fuel - 1
            }
            window.trigger('hudc', SpeedData)
            iSpeed++
            if (iSpeed < 170) {
                testSpeedometer()
            } else {
                testSpeedometer2()
            }
        }, 20)
    }
}
const testSpeedometer2 = () => {
    if (hudcData.type === 'show') {
        if (iSpeed % 10 === 0) {
            SpeedData.light = !SpeedData.light
            SpeedData.door = !SpeedData.door
            SpeedData.engine = !SpeedData.engine
            SpeedData.turnRight = !SpeedData.turnRight
            SpeedData.turnLeft = !SpeedData.turnLeft
            SpeedData.color = '#ff' + iSpeed
        }
        setTimeout(() => {
            SpeedData.speed = SpeedData.speed + 1;
            if (SpeedData.fuel <= SpeedData.max_fuel) {
                SpeedData.fuel = SpeedData.fuel + 1
            }
            window.trigger('hudc', SpeedData)
            iSpeed++
            if (iSpeed < 340) {
                testSpeedometer2()
            } else {
                iSpeed = 1
                testSpeedometer()
            }
        }, 20)
    }
}
const setActiveMainMenu = active => {
    if (active) {
        hudmData.type = 'show'
    } else {
        hudmData.type = 'hide'
    }
    window.trigger('hudm', hudmData)
}
const setActiveRadar = active => {
    if (active) {
        radarData.showRadar = true
    } else {
        radarData.showRadar = false
    }
    window.trigger('hudc', radarData)
}
const setActiveHints = active => {
    if (active) {
        hintsData.type = 'show'
    } else {
        hintsData.type = 'hide'
    }
    window.trigger('hudk', hintsData)
}
window.test.hud = {
    setActive,
    setActiveSpeedometer,
    setActiveHelp,
    setActiveLogo,
    setActiveQuest,
    pushTestMessageInChat,
    testSpeedometer,
    setActiveMainMenu,
    setActiveRadar,
    setActiveHints
}