import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayersService.js";

export class PlayersController {
  constructor() {
    this.drawPlayers()
  }

  drawPlayers() {
    const players = AppState.players
    let playerListHTML = ''
    players.forEach(player => playerListHTML += player.listHTMLTemplate)
    const playerListElem = document.getElementById('player-list')
    playerListElem.innerHTML = playerListHTML
  }

  increasePlayerScore(playerName) {
    playersService.increasePlayerScore(playerName)
    this.drawPlayers()
  }
  decreasePlayerScore(playerName) {
    playersService.decreasePlayerScore(playerName)
    this.drawPlayers()
  }

}