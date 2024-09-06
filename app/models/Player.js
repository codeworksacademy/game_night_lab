import { generateId } from "../utils/GenerateId.js"

export class Player {
  constructor(name) {
    this.id = generateId()
    this.name = name
    this.score = 0
  }

  get listHTMLTemplate() {
    return `
    <div class="col-md-6 mb-3">
      <div class="d-flex justify-content-between align-items-center px-3">
        <p class="fs-2 mb-0">${this.name}</p>
        <div class="d-flex gap-2 align-items-center">
          <i onclick="app.PlayersController.decreasePlayerScore('${this.id}')" class="mdi mdi-minus-circle fs-3" role="button" title="Decrease Score"></i>
          <span class="fs-1 text-light">${this.score}</span>
          <i onclick="app.PlayersController.increasePlayerScore('${this.id}')" class="mdi mdi-plus-circle fs-3" role="button" title="Increase Score"></i>
        </div>
      </div>
      <hr>
    </div>
    `
  }
}