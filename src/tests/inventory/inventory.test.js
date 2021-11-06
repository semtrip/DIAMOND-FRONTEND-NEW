const inventoryData = {
    type: ''
}

const setActiveInventory = active => {
    if (active) {
        inventoryData.type = 'show'
    } else {
        inventoryData.type = 'hide'
    }
    window.trigger('inventory', inventoryData)
}

window.test.inventory = {
    setActiveInventory
}