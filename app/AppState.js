import { Player } from './models/Player.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  players = [
    new Player('Jake'),
    new Player('Mick')
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())