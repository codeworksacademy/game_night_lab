import { AppState } from "../AppState.js";

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

}