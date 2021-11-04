import './globals-declare.d.ts'

window.trigger = (eventName: string, ...args: any) => {
  const handlers = EventManager.events[eventName]
  if (!args) handlers.forEach((handler: any) => handler())
  else handlers.forEach((handler: any) => {
    handler(...args.map((arg: any) => {
      try {
        return typeof arg === 'string' ? JSON.parse(arg) : arg
      } catch (e) {
        return arg
      }
    }))
  })
}

window.strTrigger = (eventName: string, ...args: any) => {
  const handlers = EventManager.events[eventName]
  if (!args) handlers.forEach((handler: any) => handler())
  else handlers.forEach((handler: any) => {
    handler(...args.map((arg: any) => arg))
  })
}

window.EventManager = {
  events: {},
  addHandler (eventName: string, handler: (...args: any[]) => void) {
    if (eventName in this.events) this.events[eventName].push(handler)
    else this.events[eventName] = [handler]
      },
  removeHandler (eventName: string, handler: (...args: any[]) => void) {
    if (eventName in this.events) {
      this.events[eventName].splice(this.events[eventName].indexOf(handler), 1)
    }
  }
}

window.test = {}