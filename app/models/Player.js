export class Player {
  constructor(name) {
    this.name = name
    this.score = 0
  }

  get listHTMLTemplate() {
    return `
    <div class="col-md-6">
      <div class="d-flex justify-content-between">
        <p class="fs-2">${this.name}</p>
        <div class="d-flex gap-2 align-items-center">
          <i class="mdi mdi-minus-circle fs-5" role="button" title="Decrease Score"></i>
          <span class="fs-2 text-light">${this.score}</span>
          <i class="mdi mdi-plus-circle fs-5" role="button" title="Increase Score"></i>
        </div>
      </div>
    </div>
    `
  }
}