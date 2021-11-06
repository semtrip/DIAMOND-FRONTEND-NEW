const authData = {
    type: '',
}

// Включение/выключение
const setActive = active => {
    if (active) {
        authData.type = 'show'
    } else {
        authData.type = 'hide'
    }
    window.trigger('authMain', authData)
}
const setActiveCreate = active => {
    if (active) {
        authData.type = 'showCreatePage'
    } else {
        authData.type = 'show'
    }
    window.trigger('authMain', authData)
}

window.test.auth = {
    setActive,
    setActiveCreate
}