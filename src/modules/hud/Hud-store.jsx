import { makeAutoObservable } from "mobx"


class HudStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }
    state = {
        show: true,
        showLogo: true,
        showPlayer: true,
        showGps: true,
        showAmmo: false,
        showQuest: false,
        ammoCount: 0,
        ammoMode: 'auto',
        questTitle: 'Квестовое задание',
        questText: 'Получите два ящика травы, три ящика кокаина, отвезите труп Минори на свалку',
        questDesc: '',
        questAnim: '',
        date: '01.01.2019',
        time: '12:00',
        online: '175',
        status: 'admin',
        max_player: '1000',
        id: '13 (#4383)',
        microphone: false,
        drink: 90,
        eat: 50,
        wallet: "12.400.000$",
        card: "12.400$",
        showGreen: true,
        showYellow: false,
        district: 'Del Pero...',
        street: 'Загрузка...',
        distance: '500',
        showGang: true,
        showMafia: false,
        att: 0,
        def: 0,
        tre: 0,
        timer: 0,
        showSpeed: true,
        isShowSmall: false,
        light: true,
        door: false,
        engine: false,
        turnLeft: false,
        turnRight: false,
        fuel: 55,
        fuelType: 'L',
        max_fuel: 100,// Максимальная вместимость топливного бака
        speed: 170,
        speedLabel: 'km/h',
        carname: 'Insurgent',
        color: '#48B9F2',
        background: 0.5,
        showRadar: true,
        radarRearSpeed: '1',
        radarRearSpeedMax: '2',
        radarFrontSpeed: '3',
        radarFrontSpeedMax: '4',
        radarPatrolSpeed: '5',
        showHints: false,
        hints: [
            {key: 'M', text: 'Главное меню', ico: 1},
            {key: 'F2', text: 'Курсор', ico: 1},
            {key: 'O', text: 'Телефон', ico: 1},
            {key: 'i', text: 'Инвентарь', ico: 1},
            {key: '~', text: 'Предметы рядом'},
        ],
        showMenu: true,
        headerMenu: true,
        headerText: 'Test',
        headerDesc: '~r~HELL~g~O WO~b~RLD',
        banner: '',
        menuName: '',
        menuList: [
            {
                type: 2,
                title: '~r~Test',
                subtitle: '~g~TEST2~y~Dfsdfdsf~br~qwerty~b~sdfsdfsdf~g~djasdnajksnd',
                icon: 'https://i.imgur.com/adskLJQ.jpeg',
                rl: 'Right Label',
                params: {},
                divider: true
            },
            {
                type: 2,
                title: 'Бизнес',
                subtitle: 'default textdefault textdefault textdefault textdefault textdefault textdefault textdefault textdefault textdefault textdefault text',
                icon: 'test__icon__inverted',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test3',
                icon: 'test__icon__inverted',
                items: [],
                divider: false
            },
            {
                type: 1,
                title: 'Your fraction',
                icon: 'test__icon__inverted',
                items: [
                    '~r~DATA 1',
                    '~g~DATA 2',
                    'DATA 3',
                    'DATA 4'
                ],
                index: 0
            },
            {
                type: 0,
                title: 'Test4',
                items: [],
                divider: false,
                checked: false
            },
            {
                type: 0,
                title: 'Test6',
                icon: 'test__icon__inverted',
                items: [],
                divider: false,
                checked: true
            },
            {
                type: 0,
                title: 'Test6',
                items: [],
                divider: false,
                checked: false
            },
            {
                type: 0,
                title: 'Test6',
                items: [],
                divider: false,
                checked: true
            },
            {
                type: 0,
                title: 'Test6',
                items: [],
                divider: false,
                checked: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            },
            {
                type: 2,
                title: 'Test6',
                items: [],
                divider: false
            }
        ]
    }
    closeMenu = () => {
        this.state.showMenu = false
    }
    clickMenuBtn = (e) => {
        let data = e.target.dataset.name
        if (this.state.menuList[data].items === undefined || this.state.menuList[data].items.length === 0 && this.state.menuList[data].checked === undefined) {
            try {
                mp.trigger('client:menuList:callBack:btn', this.state.menuName, data, JSON.stringify(this.state.menuList[data].params)); // eslint-disable-line
            }
            catch (e) {
                console.log(e)
            }
        }
    }
    changeMenuChackbox = (e) => {
        let data = e.target.dataset.name
        this.state.menuList[data].checked = !this.state.menuList[data].checked
        try {
            mp.trigger('client:menuList:callBack:check', this.state.menuName, data, JSON.stringify(this.state.menuList[data].params), this.state.menuList[data].checked); // eslint-disable-line
        }
        catch (e) {
            console.log(e)
        }
    }
    changeMenuSelectNext = (e) => {
        let data = e.target.dataset.name
        if(this.state.menuList[data].index + 1 === this.state.menuList[data].items.length) {
            this.state.menuList[data].index = 0
        } else {this.state.menuList[data].index++}
        try {
            mp.trigger('client:menuList:callBack:select', this.state.menuName, selected); // eslint-disable-line
        }
        catch (e) {
            console.log(e)
        }
    }
    changeMenuSelectBack = (e) => {
        let data = e.target.dataset.name
        if(this.state.menuList[data].index === 0) {
            this.state.menuList[data].index = this.state.menuList[data].items.length - 1
        } else {this.state.menuList[data].index--}
        try {
            mp.trigger('client:menuList:callBack:list', this.state.menuName, data, JSON.stringify(this.state.menuList[data].params), this.state.menuList[data].index); // eslint-disable-line 
            mp.trigger('client:menuList:callBack:select', this.state.menuName, data); // eslint-disable-line
        }
        catch (e) {
            console.log(e)
        }
    }
}
export default new HudStore()