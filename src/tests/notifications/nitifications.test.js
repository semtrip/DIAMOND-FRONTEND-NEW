// 0 - top
// 1 - topLeft
// 2 - topCenter
// 3 - topRight
// 4 - center
// 5 - centerLeft
// 6 - centerRight
// 7 - bottom
// 8 - bottomLeft
// 9 - bottomCenter
// 10 - bottomRight

const pushAlertTop = active => {
    const data = { type: Math.floor(Math.random() * (3 - 0 + 1)) + 0, id: 0, layout: 0, text: 'Тестовое уведеомление', time: 4000 }
    if (active) {
        window.trigger('notify', data)
    }
}
const pushAlertTopLeft = active => {
    const data = { type: Math.floor(Math.random() * (3 - 0 + 1)) + 0, id: 0, layout: 1, text: 'Тестовое уведеомление', time: 4000 }
    if (active) {
        window.trigger('notify', data)
    }
}
const pushAlertTopCenter = active => {
    const data = { type: Math.floor(Math.random() * (3 - 0 + 1)) + 0, id: 0, layout: 0, text: 'Тестовое уведеомление', time: 4000 }
    if (active) {
        window.trigger('notify', data)
    }
}
const pushAlertTopRight = active => {
    const data = { type: Math.floor(Math.random() * (3 - 0 + 1)) + 0, id: 0, layout: 3, text: 'Тестовое уведеомление', time: 4000 }
    if (active) {
        window.trigger('notify', data)
    }
}
const pushAlertCenter = active => {
    const data = { type: Math.floor(Math.random() * (3 - 0 + 1)) + 0, id: 0, layout: 4, text: 'Тестовое уведеомление', time: 4000 }
    if (active) {
        window.trigger('notify', data)
    }
}
const pushAlertCenterLeft = active => {
    const data = { type: Math.floor(Math.random() * (3 - 0 + 1)) + 0, id: 0, layout: 5, text: 'Тестовое уведеомление', time: 4000 }
    if (active) {
        window.trigger('notify', data)
    }
}
const pushAlertCenterRight = active => {
    const data = { type: Math.floor(Math.random() * (3 - 0 + 1)) + 0, id: 0, layout: 6, text: 'Тестовое уведеомление', time: 4000 }
    if (active) {
        window.trigger('notify', data)
    }
}
const pushAlertBottom = active => {
    const data = { type: Math.floor(Math.random() * (3 - 0 + 1)) + 0, id: 0, layout: 7, text: 'Тестовое уведеомление', time: 4000 }
    if (active) {
        window.trigger('notify', data)
    }
}

const pushAlertBottomLeft = active => {
    const data = { type: Math.floor(Math.random() * (3 - 0 + 1)) + 0, id: 0, layout: 8, text: 'Тестовое уведеомление', time: 4000 }
    if (active) {
        window.trigger('notify', data)
    }
}
const pushAlertBottomCenter = active => {
    const data = { type: Math.floor(Math.random() * (3 - 0 + 1)) + 0, id: 0, layout: 9, text: 'Тестовое уведеомление', time: 4000 }
    if (active) {
        window.trigger('notify', data)
    }
}
const pushAlertBottomRight = active => {
    const data = { type: Math.floor(Math.random() * (3 - 0 + 1)) + 0, id: 0, layout: 10, text: 'Тестовое уведеомление', time: 4000 }
    if (active) {
        window.trigger('notify', data)
    }
}

window.test.notifications = {
    pushAlertTop,
    pushAlertTopLeft,
    pushAlertTopCenter,
    pushAlertTopRight,
    pushAlertCenter,
    pushAlertCenterLeft,
    pushAlertCenterRight,
    pushAlertBottom,
    pushAlertBottomLeft,
    pushAlertBottomCenter,
    pushAlertBottomRight
}