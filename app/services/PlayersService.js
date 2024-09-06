import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";

class PlayersService {
  addPlayer(playerName) {
    const newPlayer = new Player(playerName)
    AppState.players.push(newPlayer)
  }
  increasePlayerScore(playerName) {
    const player = AppState.players.find(player => player.name == playerName)
    player.score++
  }
  decreasePlayerScore(playerName) {
    const player = AppState.players.find(player => player.name == playerName)
    player.score--
    if (player.score < 0) {
      player.score = 0
    }
  }
}

export const playersService = new PlayersService()