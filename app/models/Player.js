export class Player {
  constructor(name) {
    this.name = name
    this.score = 0
  }

  get listHTMLTemplate() {
    return `
    <div class="col-md-6 mb-3">
      <div class="d-flex justify-content-between align-items-center">
        <p class="fs-2 mb-0">${this.name}</p>
        <div class="d-flex gap-2 align-items-center">
          <i onclick="app.PlayersController.decreasePlayerScore('${this.name}')" class="mdi mdi-minus-circle fs-5" role="button" title="Decrease Score"></i>
          <span class="fs-2 text-light">${this.score}</span>
          <i onclick="app.PlayersController.increasePlayerScore('${this.name}')" class="mdi mdi-plus-circle fs-5" role="button" title="Increase Score"></i>
        </div>
      </div>
      <hr>
    </div>
    `
  }
}