# Documentation Player Menu

### Тригеры на вход ###

1. PlayerStats
    > trigger: accountMenu
    > type: updatePlayer
    ><
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
    > 

### Тригеры на выход ###