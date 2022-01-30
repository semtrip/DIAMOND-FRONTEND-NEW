const menuData = {
    type: 'updatePlayer',
    name: 'Maneskin Harding 111',
    id: '490',
    fraction: 'Los-Santos Police 111',
    sex: 'Мужской',
    birth: '13.12.1997',
    spouse: 'Gr0zvill Harding',
    playTime: { hourse: '12', mines: '35' },
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
const setActiveMainMenu = active => {
    window.trigger('accountMenu', { type: 'show' })
}
const setData = active => {
    window.trigger('accountMenu', menuData)
}
window.test.menuData = {
    setActiveMainMenu,
    setData
}