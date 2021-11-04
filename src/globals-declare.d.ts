type TTrigger = (eventName: string, ...args: any) => void

interface IEventManager {
  events: any,
  addHandler: (eventName: string, handler: (...args: any[]) => void) => void
  removeHandler: (eventName: string, handler: (...args: any[]) => void) => void
}

interface Window {
  EventManager: IEventManager
  frontTrigger: TTrigger
  strTrigger: TTrigger
  trigger: TTrigger
  test: any
}

declare var EventManager: IEventManager
declare var frontTrigger: TTrigger
declare var strTrigger: TTrigger
declare var trigger: TTrigger
declare var test: any