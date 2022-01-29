# Documentation Player Menu

### Тригеры на вход ###
 **trigger: accountMenu**

1. PlayerStats
    > type: updatePlayer 
    ```js 
    data: {
                    name: value.name, //'Maneskin Harding'
                    id: value.id, //490
                    fraction: value.fraction, //'Los-Santos Police'
                    sex: value.sex, //'Мужской'
                    birth: value.birth, //'13.12.1997'
                    spouse: value.spouse, //'Gr0zvill Harding'
                    playTime: value.playTime, //{hourse: '12', mines: '30'}
                    lastLogin: value.lastLogin, //'13.12.2021'
                    dateRegistation: value.dateRegistation, //'10:45 13.12.2021'
                    cash: value.cash, //'100.100.100'
                    bank: value.bank, //'100.100.100'
                    stats: value.stats // [{name: 'Репутация', data: 'Положительная', color: 'ffffff'}]
    }
    ``` 
2. Mission
    > type: updateMission
    ```js
    mission: [
            {
                title: 'Криминальный мир', //Заголовок
                discriptor: 'Вам предстоит, пройти суровый мир криминала, убивать людей, грабить банки,получить уважение и почет! Не забудьте,вы находитесь в криминальном мире DIAMOND ROLE PLAY', // Описание
                img: 'url', //Картинка
                attachments: [ //Вложения
                    {
                        title: 'Криминальный мир',
                        discriptor: 'Вам предстоит, пройти суровый мир криминала, убивать людей, грабить банки,получить уважение и почет! Не забудьте,вы находитесь в криминальном мире DIAMOND ROLE PLAY',
                        img: 'url',
                        price: 100000, //Награда
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
    ```
3. Property
    *Cars*
    > type: updateCars
    ```js
    data: {
        cars: [{name: 'Mercedes-Benz', model: 'F700',  tax: '1.238', fine: 'Нет', fuel: 'Есть', number: 'U0OUGV7F'}],
        slots: 5
    }
    ```
    *House*
    > type: updateHouse
    ```js
    data: {
            id: '371',
            address: 'Бульвар Алгонквин',
            tax: '4.500',
            places: '0',
            garage: 'Есть',
            rent: '5',
            price: '13.000.000',  
    }
    ```
    *Bussines*
    > type: updateBussines
    ```js
    data: {
            id: '471',
            address: 'Бульвар Алгонквин',
            tax: '4.500',
            price: '13.000.000',
    }
    ```
4. Reports
    > updateReports
    ```js
    reports: [
                {
                    id: '181', // ID report
                    status: true, // Закрыт или открыт для новых соощений
                    new: true, // Есть ли новые сообщения
                    message: [
                        {
                            admin: true, // Сообщение от администратора
                            name: 'Maneskin Harding', //Ник нейм
                            time: '11:42', //Время
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее 111' //Сообщение
                        },
                        {
                            admin: false,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее 111'
                        }
                    ],
                },
                {
                    id: '182',
                    status: true,
                    new: false,
                    message: [
                        {
                            admin: true,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее'
                        },
                        {
                            admin: false,
                            name: 'Maneskin Harding',
                            time: '11:42',
                            message: 'Так, я вас внимательно слушаю, что у вас случилось, расскажите подробнее'
                        }
                    ],
                }
            ],
    ```
5. Settings
    **Button**
    >type: updateSettingButton
    ```js
    item: [
                {name: 'Походка',  data: 'Q'},
                {name: 'Походка',  data: 'Q'},
                {name: 'Походка',  data: 'Q'},
       ]
    ```
    **Chat**
    >type: updateSettingChat
    ```js
    item: [
                {name: 'Походка1', type: 'btn',  data: 'Применить'},
                {name: 'Стиль стрельбы', type: 'select', data: ['Вариант Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Показывать ID игроков', type: 'checkbox', data: false},
      ]
    // три варианта кнопок 
    // type btn - обычная кнопка в data текст кнопки
    // type select - список вариантов передаваемый в data =[], в index установленный вариант
    // type checkbox - переключатель true/false в data изначальное состояние
    ```
    **Interface**
    >type: updateSettingInterface
    ```js
    item: [
                {name: 'Стиль стрельбы', type: 'select', data: ['Вариант Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Дополнительная подгрузка моделей', type: 'btn', data: 'Вариант'},
                {name: 'Показывать ID игроков', type: 'checkbox', data: false},
       ]
    // три варианта кнопок 
    // type btn - обычная кнопка в data текст кнопки
    // type select - список вариантов передаваемый в data =[], в index установленный вариант
    // type checkbox - переключатель true/false в data изначальное состояние
    ```
    **Main**
    >type: updateSettingMain
    ```js
    item: [
                {name: 'Походка', type: 'btn', data: 'Вариант 4'},
                {name: 'Стиль стрельбы', type: 'select', data: ['Вариант Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Дополнительная подгрузка моделей', type: 'checkbox', data: true},
      ]
    // три варианта кнопок 
    // type btn - обычная кнопка в data текст кнопки
    // type select - список вариантов передаваемый в data =[], в index установленный вариант
    // type checkbox - переключатель true/false в data изначальное состояние
    ```
    **Map**
    >type: updateSettingMap
    ```js
    item: [
                {name: 'Походка', type: 'btn', data: 'Вариант 4'},
                {name: 'Стиль стрельбы', type: 'select', data: ['Вариант Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Дополнительная подгрузка моделей', type: 'checkbox', data: true},
      ]
    // три варианта кнопок 
    // type btn - обычная кнопка в data текст кнопки
    // type select - список вариантов передаваемый в data =[], в index установленный вариант
    // type checkbox - переключатель true/false в data изначальное состояние
    ```
    **Voice**
    >type: updateSettingVoice
    ```js
    iitem: [
                {name: 'Походка', type: 'btn', data: 'Вариант 4'},
                {name: 'Стиль стрельбы', type: 'select', data: ['Вариант Вариант 1', 'Вариант 2', 'Вариант 3', 'Вариант 4'], index: 0},
                {name: 'Дополнительная подгрузка моделей', type: 'checkbox', data: true},
      ]
    // три варианта кнопок 
    // type btn - обычная кнопка в data текст кнопки
    // type select - список вариантов передаваемый в data =[], в index установленный вариант
    // type checkbox - переключатель true/false в data изначальное состояние
    ```
### Тригеры на выход ###
1. PlayerStats
    ```js
    mp.trigger('clickBtnReport', el.id) // нажатие клавиши Жалоба(el.id = 'report')/Вопрос(el.id = 'ask')
    ```
2. Mission
    ```js
    mp.trigger('startMission', id) //Клик по квесту для взятия - id = index array которые присылается
    ```
3. Property
    ```
    Выходных данных нет
    ```    
4. Reports
    ```js
    mp.trigger('sendMsgReport', text, id) // Сообщение от игрока text = 'message' id = id report
    ```
5. Settings
    **Button**
    ```js
    mp.trigger('changeKeySetting', id) // изминение игроком кнопки id = index array
    ```
    **Chat**
    ```js
    mp.trigger('clickBtnChatSetting', data) // клик по кнопке type btn - data = названию кнопки
    mp.trigger('editChatSettings', item) // выбор варианта из списка - item = весь массив настроек , Переключение чекбокса - item = весь массив настроек
    ```
    **Interface**
    ```js
    mp.trigger('clickBtnInterfaceSetting', data) // клик по кнопке type btn - data = названию кнопки
    mp.trigger('editInterfaceSettings', item) // выбор варианта из списка - item = весь массив настроек , Переключение чекбокса - item = весь массив настроек
    mp.trigger('saveSettings', item) // Сохранение настроек - item = весь массив настроек
    mp.trigger('throwSettings') // Сброс настроек
    ```
    **Main**
    ```js
    mp.trigger('clickBtnMainSetting', data) // клик по кнопке type btn - data = названию кнопки
    mp.trigger('editMainSettings', item) // выбор варианта из списка - item = весь массив настроек , Переключение чекбокса - item = весь массив настроек
    ```
    **Map**
    ```js
    mp.trigger('clickBtnMapSetting', data) // клик по кнопке type btn - data = названию кнопки
    mp.trigger('editMapSettings', item) // выбор варианта из списка - item = весь массив настроек , Переключение чекбокса - item = весь массив настроек
    ```
    **Voice**
    ```js
     mp.trigger('clickBtnVoiceSetting', data) // клик по кнопке type btn - data = названию кнопки
     mp.trigger('editVoiceSettings', item) // выбор варианта из списка - item = весь массив настроек , Переключение чекбокса - item = весь массив настроек
    ```
