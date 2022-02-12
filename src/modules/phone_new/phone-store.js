import { makeAutoObservable } from "mobx"

import ringtone_1 from '../phone/components/settings/ringtones/iphone_1.mp3'
import ringtone_2 from '../phone/components/settings/ringtones/iphone_2.mp3'
import ringtone_3 from '../phone/components/settings/ringtones/iphone_3.mp3'
import ringtone_4 from '../phone/components/settings/ringtones/iphone_4.mp3'

var audio = new Audio();
class PhoneStore {
    constructor() {
        makeAutoObservable(this, {}, { deep: true })
    }

    state = {
            show: false,
            visible: true,
            path: '',
            incomingCall: false,
            outgoingСall: false,
            phoneSetting: {
                wallpaper: [{
                        url: 'https://wallpapershome.ru/images/wallpapers/ios-13-3840x2160-22124.jpg',
                        active: false,
                    },
                    {
                        url: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1613319602_103-p-oboi-na-aifon-sinii-fon-116.jpg',
                        active: false,
                    },
                    {
                        url: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612648349_191-p-oboi-na-aifon-zelenii-fon-220.jpg',
                        active: false,
                    },
                    {
                        url: 'https://wallpapershome.ru/images/wallpapers/ios-13-3840x2160-22122.jpg',
                        active: true,
                    },
                    {
                        url: 'https://wallpapershome.ru/images/wallpapers/ios-13-3840x2160-21584.jpg',
                        active: false,
                    },
                ],
                ringtones: [{
                        id: 1,
                        name: 'iphone_1',
                        artist: 'apple',
                        active: true,
                        time: '00:27'
                    },
                    {
                        id: 2,
                        name: 'iphone_2',
                        artist: 'apple',
                        active: false,
                        time: '00:30'
                    },
                    {
                        id: 3,
                        name: 'iphone_3',
                        artist: 'apple',
                        active: false,
                        time: '00:13'
                    },
                    {
                        id: 4,
                        name: 'iphone_4',
                        artist: 'apple',
                        active: false,
                        time: '00:19'
                    }
                ],
                volume: false,
            },
            appCall: {
                page: 'phone',
                recentPage: 'all',
                recentEdit: false,
                addContactActive: false,
                createContactModal: false,
                number: '',
                contactSearchData: '',
                dataContact: {
                    number: '',
                    name: '',
                    surname: '',
                    company: ''
                },
                avatar: ['', ''],
                recent: [{
                        number: '911',
                        missed: false
                    },
                    {
                        number: '4654132',
                        missed: true
                    }
                ],
                player: {
                    name: 'Maneskin Harding',
                    avatar: 'https://mobimg.b-cdn.net/v3/fetch/4c/4caea87d8a186baa83735280328a1582.jpeg',
                    number: '7952-5486'
                },
                contacts: [{
                        name: 'Frend',
                        number: '4465165164987'

                    },
                    {
                        name: 'Police',
                        number: '911'

                    }

                ],
            },
            appMsg: {
                page: 'list',
                indexMsg: 0,
                sendMessage: '',
                searchData: '',
                message: [{
                    number: '45646',
                    message: [{
                            data: 'Hello World! 1',
                            author: false,
                            date: '16.01.2022 1:54'
                        },
                        {
                            data: 'ye',
                            author: true,
                            date: '16.01.2022 1:54'
                        },
                        {
                            data: 'Hello World! 1',
                            author: false,
                            date: '16.01.2022 1:54'
                        },
                    ],
                }, ]
            },
            appGps: {
                gpsList: [{
                    name: 'Mesa Bank',
                    distance: '1.7'
                }],
                searchData: ''
            },
            appTransport: [{
                name: 'BMW',
                model: '750i',
                number: '555',
                price: '13.000.000.000',
                evacuationPrice: '5.000.000',
                img: 'https://i.pinimg.com/originals/9c/9f/e9/9c9fe9c73cef9f33972c60b0556b94ce.jpg',
            }],
            appNews: {
                page: 'list',
                name: 'Maneskin Harding',
                tag: 'Maneskin #192',
                message: [{
                    title: 'Криминальный мир',
                    description: 'Вам предстоит, пройти суровый мир криминала, убивать людей, грабить банки, получить уважение и почет! Не забудьте,вы находитесь в криминальном мире DIAMOND ROLE PLAY',
                    author: {
                        name: 'Maneskin Harding',
                        tag: 'Maneskin #192',
                    },
                    date: '12.05.2003',
                    time: '12:32'
                }, {
                    title: 'Криминальный мир',
                    description: 'Вам предстоит, пройти суровый мир криминала, убивать людей, грабить банки, получить уважение и почет! Не забудьте,вы находитесь в криминальном мире DIAMOND ROLE PLAY',
                    author: {
                        name: 'Maneskin Harding',
                        tag: 'Maneskin #192',
                    },
                    date: '12.05.2003',
                    time: '12:32'
                }, {
                    title: 'Криминальный мир',
                    description: 'Вам предстоит, пройти суровый мир криминала, убивать людей, грабить банки, получить уважение и почет! Не забудьте,вы находитесь в криминальном мире DIAMOND ROLE PLAY',
                    author: {
                        name: 'Maneskin Harding',
                        tag: 'Maneskin #192',
                    },
                    date: '12.05.2003',
                    time: '12:32'
                }, {
                    title: 'Криминальный мир',
                    description: 'Вам предстоит, пройти суровый мир криминала, убивать людей, грабить банки, получить уважение и почет! Не забудьте,вы находитесь в криминальном мире DIAMOND ROLE PLAY',
                    author: {
                        name: 'Maneskin Harding',
                        tag: 'Maneskin #192',
                    },
                    date: '12.05.2003',
                    time: '12:32'
                }, {
                    title: 'Криминальный мир',
                    description: 'Вам предстоит, пройти суровый мир криминала, убивать людей, грабить банки, получить уважение и почет! Не забудьте,вы находитесь в криминальном мире DIAMOND ROLE PLAY',
                    author: {
                        name: 'Maneskin Harding',
                        tag: 'Maneskin #192',
                    },
                    date: '12.05.2003',
                    time: '12:32'
                }, ]
            },
            appBank: {
                maze: {
                    name: 'MANESKIN HARDING',
                    numberCard: '0329 0329 0329 0321',
                    dateCard: ['03', '24'],
                    cash: '13.000.000',
                    salary: '10.000',
                    history: [{
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                        {
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                        {
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                        {
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                        {
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                    ]
                },
                fleeca: {
                    name: 'MANESKIN HARDING',
                    numberCard: '0329 0329 0329 0321',
                    dateCard: ['03', '24'],
                    cash: '13.000.000',
                    salary: '10.000',
                    history: [{
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                        {
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                        {
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                        {
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                        {
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                    ]
                },
                pasific: {
                    name: 'MANESKIN HARDING',
                    numberCard: '0329 0329 0329 0321',
                    dateCard: ['03', '24'],
                    cash: '13.000.000',
                    salary: '10.000',
                    history: [{
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                        {
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                        {
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                        {
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                        {
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)111',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                    ]
                },
                blaine: {
                    name: 'MANESKIN HARDING',
                    numberCard: '0329 0329 0329 0321',
                    dateCard: ['03', '24'],
                    cash: '13.000.000',
                    salary: '10.000',
                    history: [{
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                        {
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                        {
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                        {
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                        {
                            id: 1,
                            description: 'Выдан предмет Коробка патронов  7.62mm(RL21-36544833486)',
                            cash: '13.000.000',
                            date: '12.10.2003',
                            time: '14:32'
                        },
                    ]
                }
            }

        }
        //Main
    blockingClick = () => {
        //mp triger
        this.state.show = false
    }
    volumeClick = () => {
            //mp triger
            this.state.phoneSetting.volume = !this.state.phoneSetting.volume
        }
        //app Call
    keyboardClick = (e) => {
        let number = this.state.appCall.number
        if (number.length === 0) {
            this.state.appCall.addContactActive = true
        }
        if (number.length === 20) {
            return
        } else {
            let data = e.target.dataset.name
            number = number + String(data)
            this.state.appCall.number = number
        }
    }
    keyonMouseDown = () => {
        let timer = 0
        let setTimer = () => {
            setInterval(() => {
                if (timer > 0) {
                    clearInterval(setTimer)
                    this.state.appCall.timer = true
                } else {
                    timer++
                }
            }, 300)
        }
        setTimer()
    }
    keyonMouseUp = (e) => {
        if (this.state.timer) {
            this.state.appCall.timer = false
            let number = this.state.appCall.number
            if (number.length === 0) {
                this.state.appCall.addContactActive = true
            }
            if (number.length === 20) {
                return
            } else {
                let data = '+'
                number = number + String(data)
                this.state.appCall.number = number
            }
        } else {
            this.state.appCall.timer = false
            let number = this.state.appCall.number
            if (number.length === 0) {
                this.state.appCall.addContactActive = true
            }
            if (number.length === 20) {
                return
            } else {
                let data = '0'
                number = number + String(data)
                this.state.appCall.number = number
            }
        }
    }
    delClick = () => {
        let number = this.state.appCall.number
        if (number.length === 1) {
            this.state.appCall.addContactActive = false
        }
        if (number.length === 0) {
            return
        } else {
            number = number.slice(0, -1)
            this.state.appCall.number = number
        }
    }
    callClick = () => {
        if (this.state.appCall.number !== '') {
            //mp trigger
            console.log('Call ', this.state.appCall.number)
        } else return

    }
    createAvatar = (e) => {
        let data = e.target.value
        let avatar = this.state.appCall.avatar
        let dataContact = this.state.appCall.dataContact
        dataContact.number = this.state.appCall.number
        if (e.target.id === 'name') {
            avatar[0] = data[0]
            dataContact.name = data
        }
        if (e.target.id === 'surname') {
            avatar[1] = data[0]
            dataContact.surname = data
        }
        if (e.target.id === 'company') {
            dataContact.company = data
        }
        this.state.appCall.avatar = avatar
        this.state.appCall.dataContact = dataContact
    }
    openCreateContact = () => {
        this.state.appCall.createContactModal = true
    }
    closeCreateContact = () => {
        this.state.appCall.createContactModal = false
    }
    createContact = () => {
        if (this.state.appCall.dataContact.name !== '') {
            //mp trigger
            console.log('Create contact ', JSON.stringify(this.state.appCall.dataContact))
            this.state.appCall.createContactModal = false
        } else return
    }
    setPage = (e) => {
        let data = e.target.id
        this.state.appCall.page = data
    }
    recentClick = (e) => {
        let data = this.state.appCall.recent[e.target.id].number
        console.log('call ', data)
    }
    editRecentList = () => {
        if (this.state.appCall.recentEdit) {
            this.state.appCall.recentEdit = false
        } else this.state.appCall.recentEdit = true
    }
    delRecent = (e) => {
        let data = this.state.appCall.recent[e.target.dataset.name].number
        let recent = this.state.appCall.recent
        recent.splice(e.target.dataset.name, 1)
        console.log('del ', data)
        this.state.appCall.recent = recent
            //mp trigger
        console.log('New recent list ', JSON.stringify(recent))
    }
    recentPage = (e) => {
        if (e.target.id === 'all') {
            this.state.appCall.recentPage = 'all'
        } else {
            this.state.appCall.recentPage = 'missed'
        }
    }
    contactClick = (e) => {
        console.log('Call ', e.target.dataset.name)
    }
    searchContact = (e) => {
        let data = e.target.value.toLowerCase()
        this.state.appCall.contactSearchData = data
    }
    checkContact = (number) => {
        for (let index = 0; index < this.state.appCall.contacts.length; index++) {
            if (this.state.appCall.contacts[index].number === number) return this.state.appCall.contacts[index].name
        }
    }

    //Msg app
    showMessage = (e) => {
        let data = e.target.dataset.name
        this.state.appMsg.page = 'msg'
        this.state.appMsg.indexMsg = data
    }
    clickBtnMsg = () => {
        this.state.appMsg.page = 'list'
    }
    arrayReverse = (arr) => {
        return [...arr].reverse()
    }
    poleResize = (e) => {
        let data = e.target.value
        this.state.appMsg.sendMessage = data
        let pole = document.getElementById('pole')
        let area = document.querySelector('textarea')
        let messageBlock = document.getElementById('message_block')
        pole.innerHTML = data
        if (pole.clientHeight < 583) {
            area.style.height = pole.clientHeight + 'px'
            messageBlock.style.bottom = -15 + pole.clientHeight + 'px'
            messageBlock.style.height = 642 - pole.clientHeight + 'px'
        } else return

    }
    sendMessage = () => {
        let area = document.querySelector('textarea')
        let messageBlock = document.getElementById('message_block')
        area.style.height = 14 + 'px'
        messageBlock.style.bottom = -15 + 'px'
        messageBlock.style.height = 642 + 'px'
        area.value = ''
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        if (month < 10) {
            month = '0' + String(month)
        }
        let day = date.getDate()
        let hours = date.getHours()
        let minutes = date.getMinutes()
            //mp trigger
        let data = this.state.appMsg.message
        let message = {
            data: this.state.appMsg.sendMessage,
            author: true,
            date: day + '.' + month + '.' + year + ' ' + hours + ':' + minutes,
        }
        data[this.state.appMsg.indexMsg].message.push(message)
        console.log('Send message', JSON.stringify(data))
        this.state.appMsg.message = data
    }
    searchContact = (e) => {
        let data = e.target.value.toLowerCase()
        this.state.appMsg.searchData = data
    }
    checkSearch = (data) => {
        return data.toLowerCase().includes(this.state.appCall.searchData)
    }

    //Gps App
    searchGps = (e) => {
        let data = e.target.value.toLowerCase()
        this.state.appGps.searchData = data
    }
    clickGps = (e) => {
        let data = e.target.dataset.name
            //mp triger
        console.log('gps id ', data)
    }
    activeItemTransport = (e) => {
        let data = e.target.dataset.name
        if (this.state.appTransport[data].active === undefined) {
            this.state.appTransport[data].active = true
        } else this.state.appTransport[data].active = !this.state.appTransport[data].active
    }
    clickEvacuation = (e) => {
        let data = e.target.dataset.name
            //mp triger
        console.log('Evacuation ', data)
    }
    clickGpsTransport = (e) => {
        let data = e.target.dataset.name
            //mp triger
        console.log('Gps transport ', data)
    }
    addNews = () => {
        if (this.state.appNews.page === 'list') this.state.appNews.page = 'add'
        else this.state.appNews.page = 'list'
    }
    publishNews = () => {
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        if (month < 10) {
            month = '0' + String(month)
        }
        let day = date.getDate()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let news = {
                message: this.state.appNews.addMessage,
                author: {
                    name: this.state.appNews.name,
                    tag: this.state.appNews.tag
                },
                date: day + '.' + month + '.' + year,
                time: hours + ':' + minutes
            }
            //mp triger
        console.log('Add news ', news)
    }
    textareaLength = (e) => {
        let data = e.target.value
        this.state.appNews.addMessage = data
        return data.length

    }
    pageSettings = (e) => {
        let data = e.target.id
        this.state.phoneSetting.page = data
    }
    clickWallpaper = (e) => {
        if (this.state.phoneSetting.oldWallpaper === undefined) this.state.phoneSetting.oldWallpaper = this.state.phoneSetting.wallpaper
        let data = e.target.dataset.name
        let wallpaper = this.state.phoneSetting.wallpaper
        for (let index = 0; index < wallpaper.length; index++) {
            wallpaper[index].active = false
        }
        wallpaper[data].active = true
    }
    applykWallpaper = () => {
        //mp triger
        this.state.phoneSetting.oldWallpaper = undefined
        this.state.phoneSetting.page = ''
    }
    backSettings = () => {
        if (this.state.phoneSetting.oldWallpaper !== undefined) this.state.phoneSetting.wallpaper = this.state.phoneSetting.oldWallpaper
        this.state.phoneSetting.page = ''
        audio.pause();
    }
    showModalWallpaper = () => {
        if (this.state.phoneSetting.modal === undefined) this.state.phoneSetting.modal = true
        else this.state.phoneSetting.modal = !this.state.phoneSetting.modal
    }
    addWallpaper = () => {
        if (this.state.cashWallpaper !== undefined) {
            this.state.phoneSetting.wallpaper.push({ url: this.state.cashWallpaper, active: false })
            this.state.phoneSetting.modal = false
                //mp triger
        } else return
    }
    addWallpaperStore = (e) => {
        let data = e.target.value
        this.state.cashWallpaper = data
        console.log('Add link')
    }
    playRingtone = (e) => {
        let playList = [
            ringtone_1,
            ringtone_2,
            ringtone_3,
            ringtone_4
        ]
        let data = e.target.dataset.name
        console.log(data)
        audio.pause();
        audio.src = playList[data - 1];
        audio.autoplay = true;
    }
    setRingtone = (e) => {
        let data = e.target.dataset.name
        for (let index = 0; index < this.state.phoneSetting.ringtones.length; index++) {
            this.state.phoneSetting.ringtones[index].active = false
        }
        this.state.phoneSetting.ringtones[data - 1].active = true
            //mp triger
    }
    clickCashOut = (e) => {
        let data = e.target.dataset.name
        console.log('Cash out ', data)
    }
    clickBankHistory = (e) => {
        this.state.active = true
    }
}

export default new PhoneStore()