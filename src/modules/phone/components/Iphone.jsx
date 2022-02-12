import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import DefaultPage from './Iphone/DefaultPage';
import TopBar from './Iphone/TopBar';
import BottomBar from './Iphone/BottomBar';
import PhoneBook from './Iphone/PhoneBook/PhoneBook';
import ProfileContact from './Iphone/PhoneBook/pages/ProfileContact';
import EditContact from './Iphone/PhoneBook/pages/EditContact';
import CallingScreen from './Iphone/Calls/CallingScreen';
import Console from './Iphone/Console';
import Transport from './apps/Transport';
import Bank from './apps/Banks/Bank';
import News from './apps/News';
import GPS from './apps/Gps';
import Settings from './apps/Settings';
import Wallpapers from './apps/Wallpapers';

import UMenu from './apps/UMenu';
import Scrollbar from './apps/Scrollbar';
import Modal from './apps/Modal';
import InputModal from './apps/InputModal';
import UTable from "./apps/UTable";
import Messenger from './apps/Messenger';
import Chat from './apps/Chat';
import Achiev from './apps/Achiev';
import AddChat from './apps/AddChat';

import IphoneFrame from '../img/iphone_frame.png';
import IphoneCamera from '../img/iphone_camera.png';
import BG from '../img/iphone/bg.png';
import BG2 from '../img/iphone/bg2.png';
import Ava from '../img/iphone/icons/ava.png';
import BasicWallpaper from '../img/iphone/basic_wallpaper.png';


const { EventManager: em } = window;

class Iphone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            path: '/phone/iphone/defaultpage',
            history: ['/phone/iphone/defaultpage'],
            rotate: false,
            bg_img_url: BG,
            playerData: {
                name: 'Iru Nil',
                login: 'Iru',
                tempId: '192',
                icon: Ava,
                phoneNumber: 2841908946,
            },
            top_bar: {
                time: '00:00',
                dateFull: '01.01.1990',
                battery: 11, // max 11
                wifi: false,
                network: 5, // max 5
                temperature: '+21°C',
                date: '15 декабря',
                color_bar: ''
            },
            apps: [
                { link: "/phone/iphone/messenger", action: 'sms', img: 'sms', name: 'SMS' },
                { link: "/phone/iphone/phonebook", action: 'cont', img: 'cont', name: 'Контакты' },
                { link: "/phone/iphone/calls", action: 'calls', img: 'calls', name: 'Звонки' },
                { link: "/phone/iphone/settings", action: 'settings', img: 'settings' },
                { link: "/phone/iphone/gps", action: 'gps', img: 'gps', name: 'GPS' },
                { link: "/phone/iphone/transport", action: 'transport', img: 'transport', name: 'Транспорт' },
                { link: "/phone/iphone/achiev", action: 'achiev', img: 'achiev', name: 'Достижения' },
                { link: "/phone/iphone/news", action: 'news', img: 'news', name: 'Новости' },
                { link: "/phone/iphone/bank", action: 'maze', img: 'maze', name: 'Maze Bank' },
                { link: "/phone/iphone/bank", action: 'pacific', img: 'pacific', name: 'Pacific Bank' },
                { link: "/phone/iphone/bank", action: 'fleeca', img: 'fleeca', name: 'Fleeca Bank' },
                { link: "/phone/iphone/bank", action: 'blaine', img: 'blaine', name: 'Blaine Bank' },
                { link: "/phone/iphone/umenu", action: 'app', img: 'apps', name: 'App' },
            ],
            bankData: {
                bankType: 'fleeca',
                cardNumber: '1234 4321 5647 8890',
                cardHolderName: "Iru Nil",
                cardBalance: 1300000,
                cardValid: '03/24',
                historyOfBalance: [
                    { number: 123, description: 'Выдан предмет коробка патронов', sum: 1300, date: "12.10.2003 14:35" },
                ],
            },
            transport: [
                { name: "BMW", model: "M5F90", gosNumber: "U0OUGV7F", gosPrice: 13000000, image: Ava },
                { name: "BMW", model: "M5F90", gosNumber: "U0OUGV7F", gosPrice: 13000000, image: Ava },
                { name: "BMW", model: "M5F90", gosNumber: "U0OUGV7F", gosPrice: 13000000, image: Ava },
            ],
            news: [
                { title: 'Криминальный мир', text: "Some text....", author: "Iru Nil", authorData: 'Iru#666', date: '12.05.2001', time: '12:32' },
                { title: 'Криминальный мир', text: "Some text....", author: "Iru Nil", authorData: 'Iru#666', date: '12.05.2001', time: '12:32' },
                { title: 'Криминальный мир', text: "Some text....", author: "Iru Nil", authorData: 'Iru#666', date: '12.05.2001', time: '12:32' },
                { title: 'Криминальный мир', text: "Some text.... Some text.... Some text.... Some text.... Some text.... Some text.... Some text.... Some text.... Some text.... Some text.... Some text.... Some text.... Some text.... Some text.... Some text.... Some text.... Some text....", author: "Iru Nil", authorData: 'Iru#666', date: '12.05.2001', time: '12:32' },
                { title: 'Криминальный мир', text: "Some text....", author: "Iru Nil", authorData: 'Iru#666', date: '12.05.2001', time: '12:32' },
                { title: 'Криминальный мир', text: "Some text....", author: "Iru Nil", authorData: 'Iru#666', date: '12.05.2001', time: '12:32' },
            ],
            gps: [
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
                { name: 'Maze Bank', distance: 1.7 },
            ],
            wallpapers: [
                {url: BasicWallpaper, isActive: true},
                {url: BasicWallpaper, isActive: false},
                {url: BasicWallpaper, isActive: false},
                {url: BasicWallpaper, isActive: false},
                {url: BasicWallpaper, isActive: false},
                {url: BasicWallpaper, isActive: false},
                {url: BasicWallpaper, isActive: false},
                {url: BasicWallpaper, isActive: false},
                {url: BasicWallpaper, isActive: false},
            ],
            menu: {
                UUID: '11223',
                title: 'App',
                items: [
                    {
                        title: 'Загрузка...',
                        hidden: false,
                        umenu: [
                            {
                                title: "С картинкой",
                                text: "И описанием",
                                type: 0,
                                value: 'https://gta-5.ru/server/client/images/cars/Elegy_1.png',
                                clickable: false,
                                params: { name: "null" }
                            },
                            {
                                title: "Итем по умолчанию",
                                text: "",
                                type: 1,
                                clickable: false,
                                params: { name: "null" }
                            },
                            {
                                title: "Checkbox",
                                text: "",
                                value: true,
                                type: 2,
                                clickable: false,
                                params: { name: "null" }
                            },
                            {
                                title: "User Name",
                                text: "",
                                img: "https://i.imgur.com/v4aju8F.jpg",
                                online: true,
                                type: 4,
                                clickable: false,
                                params: { name: "null" }
                            },
                            {
                                title: "Radio Input",
                                text: "",
                                scrollbarTitle: 'Выберите должность',
                                scrollbar: [{ title: 'Name1', params: { name: 'memberNewRank' } }, { title: 'Name2', params: { name: 'memberNewRank' } }, { title: 'Name3', params: { name: 'memberNewRank' } }],
                                type: 5,
                                clickable: false,
                                params: { name: "null" }
                            },
                            {
                                title: "Картинка",
                                value: "https://i.imgur.com/v4aju8F.jpg",
                                type: 6,
                                clickable: false,
                                params: { name: "null" }
                            },
                            {
                                title: "Модальное окно",
                                modalTitle: 'Вы долбаеб?',
                                modalButton: ['Отмена', 'Создать'],
                                type: 7,
                                clickable: true,
                                params: { name: "null" }
                            },
                            {
                                title: 'Окно ввода текста',
                                modalTitle: 'Введите название раздела',
                                modalButton: ['Отмена', 'Создать'],
                                type: 8,
                                params: { name: "createFractionDepF" },
                                clickable: true,
                            },
                            {
                                title: 'Таблица',
                                columns: [
                                    { title: '№', field: 'id' },
                                    { title: 'Имя', field: 'name' },
                                    { title: 'Описание', field: 'text' },
                                ],
                                data: [
                                    { id: '#1', name: 'Name', text: 'text' },
                                    { id: '#1', name: 'Name', text: 'text' },
                                    { id: '#1', name: 'Name', text: 'text' },
                                    { id: '#1', name: 'Name', text: 'text' },
                                    { id: '#1', name: 'Name', text: 'text' },
                                    { id: '#1', name: 'Name', text: 'text' },
                                    { id: '#1', name: 'Name', text: 'text' },
                                ],
                                readonly: true,
                                type: 10,
                                params: {},
                                clickable: true,
                            },
                        ],
                    },
                ],
            },
            phonebook: {
                editing_contact: false,
                selected_contact: {/*
                    name: 'Godvil Moretti',
                    numbers: ['222-2346837'],
                    mail: 'godvil.moretti@ded.net',
                    img: 'https://a.rsg.sc//n/socialclub',*/
                },
                history: [
                    {
                        number: '222-2346837',
                        img: 'https://a.rsg.sc//n/socialclub',
                        type: 'call_made', // call_made - исходящий звонок \ call_received - принятый звонок
                        data: '20190212-1553'
                    },
                    {
                        number: '999-9999999',
                        img: 'https://a.rsg.sc//n/socialclub',
                        type: 'call_missed', // call_made - исходящий звонок \ call_received - принятый звонок
                        data: '20190212-1553'
                    },
                    {
                        number: '222-3567347',
                        img: 'https://a.rsg.sc//n/socialclub',
                        type: 'call_received',
                        data: '20190112-1453'
                    },
                    {
                        number: '222-9746753',
                        img: 'https://a.rsg.sc//n/socialclub',
                        type: 'call_made',
                        data: '20190212-1453'
                    },
                ],
                contact: [
                    {
                        name: 'Wika Aretti',
                        numbers: ['222-1234212', '555-6347544'],
                        mail: 'wika.aretti@ded.net',
                        isFavorite: false,
                        img: 'https://a.rsg.sc//n/socialclub',
                    },
                    {
                        name: 'Godvil Moretti',
                        numbers: ['222-2346837'],
                        mail: 'godvil.moretti@ded.net',
                        isFavorite: true,
                        img: 'https://a.rsg.sc//n/socialclub',
                    },
                    {
                        name: 'Nika Moretti',
                        numbers: ['222-9746753', '555-7653765'],
                        mail: 'nika.moretti@ded.net',
                        isFavorite: true,
                        img: 'https://a.rsg.sc//n/socialclub',
                    },
                    {
                        name: 'Aika Aretti',
                        numbers: ['222-3567347', '555-5367433'],
                        mail: 'aika.aretti@ded.net',
                        isFavorite: false,
                        img: 'https://a.rsg.sc//n/socialclub',
                    },

                ],
            },
            messenger: {
                current_chat: '2223567347'
            },
            chats: [
                {
                    phone_number: '2223567347',
                    is_online: true, // был(а) в сети 12.01.2019
                    last_login: '12.01.2020',
                    new_messages: 1,
                    message: [
                        { type: 2, text: 'Все хорошо, а у тебя как?', date: '10.01.2020', time: '12:00:02' },
                        { type: 1, text: 'Привет, как дела?', date: '10.01.2020', time: '12:00:02' },
                        { type: 0, text: '1 января' },
                    ]
                },
                {
                    phone_number: '2229746753',
                    is_online: true, // был(а) в сети 12.01.2019
                    last_login: '12.01.2020',
                    new_messages: 3,
                    message: [
                        { type: 2, text: 'Все хорошо, а у тебя как?', date: '10.01.2020', time: '02:01:00' },
                        { type: 1, text: 'Привет, как дела? Привет, как дела?', date: '11.01.2020', time: '03:00:00' },
                        { type: 1, text: 'Привет, как дела? Привет, как дела?', date: '10.01.2020', time: '01:00:01' },
                        { type: 1, text: 'Привет, как дела? Привет, как дела?', date: '13.01.2020', time: '05:00:03' },
                        { type: 1, text: 'Привет, как дела? Привет, как дела?', date: '11.01.2020', time: '04:00:02' },
                    ]
                },
                {
                    phone_number: '2229746456',
                    is_online: true, // был(а) в сети 12.01.2019
                    last_login: '29.01.2020',
                    new_messages: 1,
                    message: [
                        { type: 2, text: 'Товар на месте?', date: '10.01.2020', time: '12:00:02' },
                    ]
                }
            ],
            console_message: ['Welcome To Console v0.1\nGNU/Linux 4.15.0-55-generic x86_64\n\nuse "help" command\n\n'],
            achiev: [
                {
                    title: 'Достижения',
                    achiev_map:
                        [
                            { name: 'Пополнить кошелек', desc: 'Для выполнения данный ачивки вам нужно зарабоать 100$ зараб', value: [50, 200], result: '$50', img: 'https://i.imgur.com/yrOXeE3.png', info_show: false, },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 1], result: '$150', img: 'https://i.imgur.com/yrOXeE3.png' },
                        ],
                },
                {
                    title: 'Ежедневные задания',
                    achiev_map:
                        [
                            { name: 'Пополнить кошелек', desc: 'Для выполнения данный ачивки вам нужно зарабоать 100$', value: [99, 200], result: '$50000', img: 'https://i.imgur.com/6lgnAZs.png', info_show: false, },
                            { name: 'Купить банковскую карточку', desc: 'Приобрести банкоскую карту любого банка', value: [1, 3], result: '$999', img: 'https://i.imgur.com/QAgIlRS.png', info_show: false, },
                        ],
                },
            ],

            scrollbar: {
                show: false,
                title: 'Выберите ранг',
                list: [
                    { title: 'Ранг 1', checked: true, params: { name: "null" } },
                    { title: 'Ранг 2', params: { name: "null" } },
                    { title: 'Ранг 3', params: { name: "null" } },
                ],
            },
            modal: {
                show: false,
                title: 'Выберите ранг',
                text: 'Вы точно хотите всё это сделать? Обратной дороги нет, остановись',
                buttons: ['Нет', 'Да'],
            },
            inputmodal: {
                show: false,
                title: 'Выберите ранг',
                text: 'Вы точно хотите всё это сделать? Обратной дороги нет, остановись',
                value: '',
                buttons: ['Нет', 'Да'],
                params: { name: "null" },
            },
            phonecall: {
                number: '333345',
                name: 'Unknown',
                avatar: '',
                going: true
            }
        }
    }

    setCallNumber(phone) {
        // Сами вызываем, получаем информацию о номере и передаем

        if (phone === undefined)
            return;

        this.setState(prevState => ({ ...prevState.phonecall.number = phone, ...prevState.phonecall.going = false }))
        this.setLink(`/phone/iphone/callScreen`);

        try {
            mp.trigger('client:phone:call:setCall', phone); // eslint-disable-line
        } catch (e) {
        }
        console.log('setCallNumber', phone);
    }

    acceptCall() {
        this.setState(prevState => ({ ...prevState.phonecall.going = false }))
        this.setState(prevState => ({ ...prevState.phonecall.name = 'Unknown' }))
        this.setState(prevState => ({ ...prevState.phonecall.avatar = '' }))
        console.log('acceptCall');
        try {
            mp.trigger('client:phone:call:accept'); // eslint-disable-line
        } catch (e) {
        }
    }

    cancelCall() {
        this.setState(prevState => ({ ...prevState.phonecall.going = false }))
        try {
            mp.trigger('client:phone:call:cancel'); // eslint-disable-line
        } catch (e) {
        }
        console.log('cancelCall');
    }

    componentDidCatch(error, errorInfo) {
        mp.trigger('client:ui:debug', 'Iphone.jsx', error, errorInfo); // eslint-disable-line
    }

    componentDidMount() {
        em.addHandler('phone3', value => {
            if (value.type === 'updateMenu') {
                try {
                    this.setState({ menu: value.menu });
                    window.scrollTo(0, 0);
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'updateApps') {
                try {
                    this.setState({ apps: value.apps });
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'updatePhonebook') {
                try {
                    this.setState({ phonebook: value.phonebook });
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'updateMessenger') {
                try {
                    this.setState({ chats: value.chats });
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'updateMessengerChat') {
                try {
                    this.setState(prevState => ({ ...prevState.chats[value.idx].message = value.messages }))
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'addMessengerMessage') {
                try {
                    console.log(value.phone, value.text, value.date, value.time);
                    this.newMessage(value.phone, value.text, value.date, value.time);
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'selectChat') {
                try {
                    this.selectChat(value.phone);
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'addConsoleCommand') {
                try {
                    this.consoleCommand(value.command);
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'updateAchiev') {
                try {
                    this.setState({ achiev: value.achiev });
                } catch (e) {
                    console.log(e);
                }
            }
            if (value.type === 'updateTopBar') {
                this.setState({ top_bar: value.bar })
            }
            if (value.type === 'updateBg') {
                this.setState({ bg_img_url: value.url })
            }
            if (value.type === 'toPage') {
                this.setState({ path: value.page })
            }
            if (value.type === 'updatePhone') {
                this.setState({ phonecall: value.phonecall })
            }
        })
    }

    componentWillUnmount() {
        em.removeHandler('phone3');
    }

    componentDidUpdate(prevProp, prevState) {
        if (this.state.path !== prevState.path) {
            if (this.state.path !== this.state.history[this.state.history.length - 1])
                this.historyPush()
            window.scrollTo(0, 0);
            if (this.state.path !== '/phone/iphone/phonebook/profilecontact/editcontact' && this.state.phonebook.editing_contact) {
                this.setState(prevState => ({ ...prevState.phonebook.editing_contact = false }))
            }
        }
    }

    historyPush(customLink) {
        if (customLink === this.state.path) return;
        if (customLink !== undefined && customLink !== null && customLink !== '') {
            this.setState({ history: this.state.history.concat([customLink]), path: customLink })
            return;
        }
        if (this.state.path === '/phone/iphone/defaultpage') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = '' }))
            this.setState({ bg_color: '' })
        }
        if (this.state.path === '/phone/iphone/phonebook/profilecontact') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#000' }))
            this.setState({ bg_color: '#000' })
        }
        if (this.state.path === '/phone/iphone/phonebook') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#1C3AA9' }))
            this.setState({ bg_color: '#1C3AA9' })
        }
        if (this.state.path === '/phone/iphone/messenger') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#000' }))
            this.setState({ bg_color: '#000' })
        }
        if (this.state.path === '/phone/iphone/phonebook/profilecontact/editcontact') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#1C3AA9' }))
            this.setState({ bg_color: '#1C3AA9' })
        }
        if (this.state.path === '/phone/iphone/console') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#000' }))
            this.setState({ bg_color: '#000' })
        }
        if (this.state.path === '/phone/iphone/calls') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#1C3AA9' }))
            this.setState({ bg_color: '#fff' })
        }
        if (this.state.path === '/phone/iphone/callScreen') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = 'rgba(0, 0, 0, 0.34)' }))
            this.setState({ bg_color: `url(${this.state.bg_img_url}) no-repeat center` })
        }
        if (this.state.path === '/phone/iphone/achiev') {
            this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#000' }))
            this.setState({ bg_color: '#000' })
        }

        this.setState({ history: this.state.history.concat([this.state.path]) })
    }

    historyClear() {
        this.setState({ history: ['/phone/iphone/defaultpage'] })
    }

    historyGoBack() {
        if (this.state.history.length > 1) {
            if (this.state.history[this.state.history.length - 2] === '/phone/iphone/phonebook/profilecontact/editcontact') {
                this.setState({ history: this.state.history.slice(0, -1) })
            }
            if (this.state.history[this.state.history.length - 2] === '/phone/iphone/messenger/addchat') {
                this.setState({ history: this.state.history.slice(0, -1) })
            }
            if (this.state.history[this.state.history.length - 2] === this.state.path) {
                this.setState({ history: this.state.history.slice(0, -1) })
            }
            if (this.state.history[this.state.history.length - 2].split('?')[0] === '/phone/iphone/umenu' &&
                this.state.history[this.state.history.length - 2].split('?').length > 1) {
                try {
                    console.log(this.state.history[this.state.history.length - 2])
                    if (this.state.history[this.state.history.length - 2].search('appmainpage') !== -1) {
                        mp.trigger('client:phone:apps', this.state.history[this.state.history.length - 2].split(':')[1]) // eslint-disable-line
                    } else {
                        let params1 = JSON.parse(
                            '{"' + this.state.history[this.state.history.length - 2].split('?')[1]
                                .split(':')[0].replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) }
                        );
                        let params2 = {};
                        if (this.state.history[this.state.history.length - 2].split(':')[1] !== '')
                            params2 = JSON.parse(
                                '{"' + this.state.history[this.state.history.length - 2].split(':')[1]
                                    .replace(/&/g, '","').replace(/=/g, '":"') + '"}', function (key, value) { return key === "" ? value : decodeURIComponent(value) }
                            );
                        mp.trigger('client:phone:callBack', params1.action, params1.UUID, parseInt(params1.id), JSON.stringify(params2)); // eslint-disable-line
                    }
                } catch (e) { console.log(e) }
            }
            setTimeout(() => {
                this.setState({
                    path: this.state.history[this.state.history.length - 2],
                }, () => this.setState({ history: this.state.history.slice(0, -1) }))
            }, 20);
        }
    }

    rotateIphone() {
        this.setState({ bg_img_url: BG });
        this.setState({ rotate: !this.state.rotate }) //нужно придумать на какое действие перевернуть телефон
        try {
            mp.trigger('client:phone:rotate', this.state.rotate); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    clickApps(event, i) {

        let link = event.link.split('?')[0]

        switch (link) {
            case '/phone/iphone/umenu': {
                this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#000' }))
                this.setState({ bg_color: '#000' })
                this.setState({ path: `${event.link}?appmainpage:${event.action}` })

                try {
                    mp.trigger('client:phone:apps', event.action); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
                break;
            }
            case '/phone/iphone/phonebook': {
                this.setState(prevState => ({ ...prevState.top_bar.color_bar = '#1C3AA9' }))
                this.setState({ bg_color: '#1C3AA9' })
                this.setState({ path: event.link })

                try {
                    mp.trigger('client:phone:apps', event.action); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
                break;
            }
            case '/phone/iphone/messenger': {
                this.setState({ path: event.link })
                try {
                    mp.trigger('client:phone:apps', event.action); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
                break;
            }
            case '/phone/iphone/calls': {
                this.setState({ path: event.link })
                try {
                    mp.trigger('client:phone:apps', event.action); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
                break;
            }
            case '/phone/iphone/console': {
                this.setState({ path: event.link })
                try {
                    mp.trigger('client:phone:apps', event.action); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
                break;
            }
            case '/phone/iphone/achiev': {
                this.setState({ path: event.link })
                try {
                    mp.trigger('client:phone:apps', event.action); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
                break;
            }
            case '/phone/iphone/transport': {
                this.setState({ path: event.link })
                try {
                    mp.trigger('client:phone:apps', event.action); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
                break;
            }

            case '/phone/iphone/bank': {
                this.setState({ bg_img_url: BG2 });
                this.setState({ path: `${event.link}?appmainpage:${event.action}` })
                try {
                    mp.trigger('client:phone:apps', event.action); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
                break;

            }
            default:
                this.setState({ bg_img_url: BG });
                this.setState({ path: `${event.link}?appmainpage:${event.action}` })
                try {
                    mp.trigger('client:phone:apps', event.action); // eslint-disable-line
                } catch (e) {
                    console.log(e);
                }
                break;
        }
    }

    saveContact(contact, selected_contact) {
        let index = this.state.phonebook.contact.findIndex(e => e === selected_contact);
        if (index !== -1) {
            this.setState(prevState => ({
                ...prevState.phonebook.contact[index] = contact
            }))
        } else {
            this.addContact(contact)
        }
        this.setState(prevState => ({ ...prevState.phonebook.selected_contact = contact }))
        this.setState(prevState => ({ ...prevState.phonebook.editing_contact = false }))
    }

    addContact(contact) {
        contact.numbers = contact.numbers.filter(Boolean) // Удаляет пустые элементы массива
        if (contact.img === '' || contact.img === undefined) contact.img = 'https://a.rsg.sc//n/socialclub';
        this.setState(prevState => ({
            ...prevState.phonebook.contact = [...this.state.phonebook.contact].concat([contact])
        }))
        this.setState(prevState => ({ ...prevState.phonebook.selected_contact = contact }))
        this.setState(prevState => ({ ...prevState.phonebook.editing_contact = false }))
    }

    getContactByNumber(number) {
        let data = null;
        this.state.phonebook.contact.map((contact) => {
            return (
                contact.numbers.forEach(function (el) {
                    if (el === number) {
                        data = contact;
                    }
                })
            )
        })
        return data;
    }

    getContactByName(name) {
        let contact = this.state.phonebook.contact.filter(obj => {
            return obj.name === name
        })
        if (contact.length > 0) return contact[0];
        return null;
    }

    editContact() {
        this.setState(prevState => ({ ...prevState.phonebook.editing_contact = true }))
        this.setState({ path: '/phone/iphone/phonebook/profilecontact/editcontact' });
    }

    clickBack() {
        //this.setState({ topbar_color: false });
        this.historyGoBack();
        //this.setState({ path: '/phone/iphone/defaultpage' }); //TODO Чет не работает
    }

    clickHome() {
        this.setState(prevState => ({ ...prevState.top_bar.color_bar = '' }))
        this.setState({ bg_color: '' })
        this.setState({ path: '/phone/iphone/defaultpage' }); //TODO Чет не работает
        this.historyClear();
    }

    clickContact(contact) {
        console.log(contact)
        let data = null;
        if (contact.number !== undefined)
            data = this.getContactByNumber(contact.number)
        else
            data = this.getContactByName(contact.name)
        console.log(data)
        if (data !== null) {
            this.setState(prevState => ({ ...prevState.phonebook.selected_contact = data }))
        } else {
            this.setState(prevState => ({ ...prevState.phonebook.selected_contact = contact }))
            this.setState(prevState => ({ ...prevState.phonebook.selected_contact.numbers = [contact.number] }))
        }
        this.setState({ path: '/phone/iphone/phonebook/profilecontact' }); //TODO Чет не работает
    }

    closeModal(boolean) {
        this.setState({ modal: { show: false } })
        if (this.state.path === "/phone/iphone/phonebook/profilecontact") {
            if (boolean) {
                this.historyGoBack();
                this.deleteContact(this.state.phonebook.selected_contact);
            }
        }
    }

    closeInputModal() {
        this.setState({ inputmodal: { show: false } })

        try {
            mp.trigger('client:phone:inputModal', false); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    openModal(title, text, buttons, params) {
        this.setState({
            modal: {
                show: true,
                title: title,
                text: text,
                buttons: buttons,
                params: params
            }
        });
    }

    openInputModal(title, buttons, value, params) {
        this.setState({
            inputmodal: {
                show: true,
                title: title,
                value: value,
                buttons: buttons,
                params: params
            }
        });

        try {
            mp.trigger('client:phone:inputModal', true); // eslint-disable-line
        } catch (e) {
            console.log(e);
        }
    }

    closeScrollbar() {
        this.setState({ scrollbar: { show: false } })
    }

    openScrollbar(title, items) {
        let data = {
            show: true,
            title: title,
            list: items,
        };
        this.setState({ scrollbar: data });
    }

    // Console
    consoleCommand(command) {
        let console_messages = [...this.state.console_message];
        console_messages = [command].concat(console_messages)
        console.log(console_messages)
        if (console_messages.length > 99) console_messages.splice(-1, 1);
        this.setState({ console_message: console_messages });
    }

    // CHAT
    sendMessage(current_chat, chat) {
        let ind = -1;
        this.state.chats.forEach((e, i) => {
            if (e.phone_number === current_chat) {
                ind = i;
            }
        })
        console.log(chat);
        if (ind !== -1) {
            let chats = this.state.chats;
            chats[ind] = chat;
            this.setState({ chats: chats })
        } else {
            //console.log(chat)
            this.setState({ chats: [...this.state.chats, chat] })
        }
    }

    newMessage(phone_number, text, date, time) {
        let index = this.state.chats.findIndex(e => e.phone_number === phone_number);
        if (index !== -1) {
            this.setState(prevState => ({
                ...prevState.chats[index].message = [...this.state.chats[index].message]
                    .concat([{ type: 1, text: text, date: date, time: time }])
            }));
            this.setState(prevState => ({ ...prevState.chats[index].new_messages = this.state.chats[index].new_messages++ })); // eslint-disable-line
        } else {
            this.setState(prevState => ({
                ...prevState.chats = [...this.state.chats]
                    .concat([
                        {
                            phone_number: phone_number,
                            is_online: false, // был(а) в сети 12.01.2019
                            last_login: date,
                            new_messages: 1,
                            message: [
                                { type: 1, text: text, date: date, time: time },
                            ]
                        }
                    ])
            }));
        }
    }

    selectChat(phone_number) {
        let index = this.state.chats.findIndex(e => e.phone_number === phone_number);
        if (index !== -1) {
            this.setState(prevState => ({ ...prevState.chats[index].new_messages = 0 }))

            try {
                mp.trigger('client:phone:selectChat', phone_number, index); // eslint-disable-line
            } catch (e) {
            }
        }
        this.setState(prevState => ({ ...prevState.messenger.current_chat = phone_number }), () => {
            this.setState({ path: "/phone/iphone/messenger/chat" })
        });
    }

    favoriteContact(contact) {
        let index = this.state.phonebook.contact.findIndex(e => e === contact);
        if (index !== -1) {
            this.setState(prevState => ({ ...prevState.phonebook.contact[index].isFavorite = !this.state.phonebook.contact[index].isFavorite }))
            this.setState(prevState => ({ ...prevState.phonebook.selected_contact = this.state.phonebook.contact[index] }))

            try {
                mp.trigger('client:phone:favoriteContact', JSON.stringify(contact)); // eslint-disable-line
            } catch (e) {
            }
        }
    }

    deleteContact(contact) {

        this.historyGoBack()
        let newContacts = [...this.state.phonebook.contact]
        let index = newContacts.findIndex(e => e === contact);
        if (index !== -1) {
            newContacts.splice(index, 1)
            console.log(newContacts)
            this.setState(prevState => ({
                ...prevState.phonebook.contact = newContacts
            }))
        }

    }

    deleteChat(phone_number) {
        this.historyGoBack()
        let newChats = [...this.state.chats]
        let index = newChats.findIndex(e => e.phone_number === phone_number);
        if (index !== -1) {
            newChats.splice(index, 1)
            console.log(newChats)
            this.setState(prevState => ({
                ...prevState.chats = newChats
            }))
        }
        try {
            mp.trigger('client:phone:deleteChat', phone_number); // eslint-disable-line
        } catch (e) {
        }
    }

    setLink(link) {
        this.setState({ path: link })
    }

    openInfoShow(achievIndex, index) {
        this.setState(prev => ({ ...prev.achiev[achievIndex].achiev_map[index].info_show = !this.state.achiev[achievIndex].achiev_map[index].info_show }))
    }

    evacuateTransport(event) {
        const button = event.target.parentElement;
        const container = button.parentElement.parentElement;

        const id = parseInt(container.id);
        console.log(id);
    }

    locateTransport(event) {
        const button = event.target.parentElement;
        const container = button.parentElement.parentElement;

        const id = parseInt(container.id);
        console.log(id);
    }

    onBankHistoryClick(event) {
        this.setState({path: '/phone/iphone/settings/history?appmain:bank'});
    }

    onSelfHistoryClick(event) {
        this.setState({path: '/phone/iphone/settings/history?appmain:self'});

    }

    onWallpapersClick(event){
        this.setState({path: '/phone/iphone/settings/wallpapers'});
    }

    onBankCashOutClick(event) {
        console.log(event);

    }

    publishNewsClick(event) {
        console.log(event);
    }

    onGpsClick(event) {
        console.log(event);
    }

    onAcceptWallpaperClick(index){
        console.log(index);
    }

    addNewWallpaper(event){
        console.log(event);
    }

    render() {
        const bg = {
            backgroundImage: this.state.bg_img_url,
        };
        if (this.state.path === '/phone/iphone/defaultpage')
            bg.backgroundImage = `url(${BG})`;
        if (this.state.path == '/phone/iphone/bank' || this.state.path == '/phone/iphone/news')
            bg.backgroundImage = `url(${BG2})`;
        return (
            <React.Fragment>
                <div onContextMenu={() => this.rotateIphone()} className={this.state.rotate ? "iphone-phone rotate" : "iphone-phone"}>
                    <img className="phone__box" src={IphoneFrame} alt="" />

                    <img className="phone__camera" src={IphoneCamera} alt="" />

                    <div className="phone-gradient">
                        <div className="phone-bg" style={bg}>
                            <div className={this.state.rotate ? "rotate-components" : 'main-phone-box-flex'}>
                                <TopBar data={this.state.top_bar} />
                                <Router>
                                    <Route exact path="/phone/iphone/defaultpage">
                                        <DefaultPage historyPush={this.historyPush.bind(this)} data={this.state.apps}
                                            clickApps={this.clickApps.bind(this)} top_bar={this.state.top_bar} />
                                    </Route>
                                    <Scrollbar data={this.state.scrollbar} closeScrollbar={this.closeScrollbar.bind(this)} />
                                    <Modal data={this.state.modal} closeModal={this.closeModal.bind(this)} />
                                    <InputModal data={this.state.inputmodal}
                                        closeInputModal={this.closeInputModal.bind(this)} />
                                    <Route exact path="/phone/iphone/umenu">
                                        <UMenu historyPush={this.historyPush.bind(this)} data={this.state.menu}
                                            openModal={this.openModal.bind(this)} path={this.state.path}
                                            openInputModal={this.openInputModal.bind(this)}
                                            openScrollbar={this.openScrollbar.bind(this)} rotate={this.state.rotate} />
                                    </Route>
                                    <Route exact path="/phone/iphone/utable">
                                        <UTable historyPush={this.historyPush.bind(this)} />
                                    </Route>
                                    <Route exact path="/phone/iphone/console">
                                        <Console console_message={this.state.console_message} consoleCommand={this.consoleCommand.bind(this)} />
                                    </Route>
                                    <Route exact path="/phone/iphone/calls">
                                        <PhoneBook
                                            onCall={this.setCallNumber.bind(this)}
                                            historyPush={this.historyPush.bind(this)} data={this.state.phonebook}
                                            clickContact={this.clickContact.bind(this)}
                                            getContactByNumber={this.getContactByNumber.bind(this)}
                                            setLink={this.setLink.bind(this)}
                                            defaultValue={'calls'}
                                            going={this.state.phonecall.going}
                                            onAccept={this.acceptCall.bind(this)}
                                            onDecline={this.cancelCall.bind(this)}
                                        />
                                    </Route>
                                    <Route exact path="/phone/iphone/callScreen">
                                        <CallingScreen
                                            onCall={this.setCallNumber.bind(this)}
                                            number={this.state.phonecall.number}
                                            name={this.state.phonecall.name}
                                            avatar={this.state.phonecall.avatar}
                                            setLink={this.setLink.bind(this)}
                                            going={this.state.phonecall.going}
                                            onAccept={this.acceptCall.bind(this)}
                                            onDecline={this.cancelCall.bind(this)}
                                        />
                                    </Route>
                                    <Route exact path="/phone/iphone/achiev">
                                        <Achiev data={this.state.achiev} openInfoShow={this.openInfoShow.bind(this)} />
                                    </Route>
                                    <Route exact path="/phone/iphone/phonebook">
                                        <PhoneBook
                                            onCall={this.setCallNumber.bind(this)}
                                            historyPush={this.historyPush.bind(this)} data={this.state.phonebook}
                                            clickContact={this.clickContact.bind(this)}
                                            getContactByNumber={this.getContactByNumber.bind(this)}
                                            setLink={this.setLink.bind(this)}
                                            defaultValue={'contact'}
                                            going={this.state.phonecall.going}
                                            onAccept={this.acceptCall.bind(this)}
                                            onDecline={() => console.log(`Ты отменил вызов от ${this.state.phonecall.number}`)}
                                        />
                                    </Route>
                                    <Route exact path="/phone/iphone/phonebook/profilecontact">
                                        <ProfileContact historyPush={this.historyPush.bind(this)}
                                            data={this.state.phonebook}
                                            deleteContact={this.deleteContact.bind(this)}
                                            historyGoBack={this.historyGoBack.bind(this)}
                                            setCallNumber={this.setCallNumber.bind(this)}
                                            selectChat={this.selectChat.bind(this)}
                                            editContact={this.editContact.bind(this)}
                                            openModal={this.openModal.bind(this)}
                                            profile_contact_btn={this.state.profile_contact_btn} />
                                    </Route>
                                    <Route exact path="/phone/iphone/phonebook/profilecontact/editcontact">
                                        <EditContact historyGoBack={this.historyGoBack.bind(this)}
                                            setLink={this.setLink.bind(this)}
                                            addContact={this.addContact.bind(this)}
                                            saveContact={this.saveContact.bind(this)}
                                            selected_contact={this.state.phonebook.selected_contact}
                                            editing_contact={this.state.phonebook.editing_contact}
                                            clickContact={this.clickContact.bind(this)} />
                                    </Route>
                                    <Route exact path="/phone/iphone/messenger">
                                        <Messenger data={this.state.chats}
                                            getContactByNumber={this.getContactByNumber.bind(this)}
                                            selectChat={this.selectChat.bind(this)}
                                            setLink={this.setLink.bind(this)} />
                                    </Route>
                                    <Route exact path="/phone/iphone/messenger/addchat">
                                        <AddChat data={this.state.chats}
                                            sendMessage={this.sendMessage.bind(this)} time={this.state.top_bar.time} date={this.state.top_bar.dateFull}
                                            getContactByNumber={this.getContactByNumber.bind(this)}
                                            setLink={this.setLink.bind(this)}
                                            historyGoBack={this.historyGoBack.bind(this)} />
                                    </Route>
                                    <Route exact path="/phone/iphone/messenger/chat">
                                        <Chat data={this.state.chats} messenger={this.state.messenger}
                                            sendMessage={this.sendMessage.bind(this)} time={this.state.top_bar.time} date={this.state.top_bar.dateFull}
                                            getContactByNumber={this.getContactByNumber.bind(this)}
                                            setLink={this.setLink.bind(this)}
                                            openModal={this.openModal.bind(this)}
                                            deleteChat={this.deleteChat.bind(this)}
                                        />
                                    </Route>

                                    <Route exact path="/phone/iphone/transport">
                                        <Transport data={this.state.transport}
                                            onEvacuateClick={this.evacuateTransport.bind(this)}
                                            onLocationClick={this.locateTransport.bind(this)} />
                                    </Route>

                                    <Route exact path="/phone/iphone/bank">
                                        <Bank path={this.state.path}
                                            data={this.state.bankData}
                                            onBankHistoryClick={this.onBankHistoryClick.bind(this)}
                                            onBankCashOutClick={this.onBankCashOutClick.bind(this)} />
                                    </Route>

                                    <Route exact path="/phone/iphone/news">
                                        <News playerData={this.state.playerData}
                                            news={this.state.news}
                                            onPublishNewsClick={this.publishNewsClick.bind(this)} />
                                    </Route>

                                    <Route exact path={'/phone/iphone/gps'}>
                                        <GPS data={this.state.gps}
                                            onGpsClick={this.onGpsClick.bind(this)} />
                                    </Route>

                                    <Route exact path={'/phone/iphone/settings'}>
                                        <Settings playerData={this.state.playerData}
                                        onWallpapersClick={this.onWallpapersClick.bind(this)} 
                                        onSelfHistoryClick={this.onSelfHistoryClick.bind(this)}/>
                                    </Route>

                                    <Route exact path={'/phone/iphone/settings/wallpapers'}>
                                        <Wallpapers wallpapers={this.state.wallpapers} 
                                        onAcceptWallpaperClick={this.onAcceptWallpaperClick.bind(this)}
                                        addNewWallpaper={this.addNewWallpaper.bind(this)} />
                                    </Route>

                                    <Redirect to={this.state.path} push />
                                </Router>
                                <Router>
                                    <BottomBar
                                        clickBack={this.clickBack.bind(this)}
                                        clickHome={this.clickHome.bind(this)}
                                        rotateIphone={this.rotateIphone.bind(this)}
                                        data={this.state.apps}
                                        clickApps={this.clickApps.bind(this)}
                                        isMainScreen={this.state.path === '/phone/iphone/defaultpage'}
                                    />
                                </Router>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Iphone;
