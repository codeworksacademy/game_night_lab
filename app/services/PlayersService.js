import { AppState } from "../AppState.js";
import { Player } from "../models/Player.js";

class PlayersService {
  addPlayer(playerName) {
    const newPlayer = new Player(playerName)
    AppState.players.push(newPlayer)
  }
  increasePlayerScore(playerId) {
    const player = AppState.players.find(player => player.id == playerId)
    player.score++
  }
  decreasePlayerScore(playerId) {
    const player = AppState.players.find(player => player.id == playerId)
    player.score--
    if (player.score < 0) {
      player.score = 0
    }
  }
}

export const playersService = new PlayersService()