const {PAGES} = require("./pages");

let Fixtures = class Fixtures {
  constructor() {
    this.loadData()
  }

  loadData() {
    for (let page in PAGES) {
      let name =PAGES[page].name
      let fixture =PAGES[page].fixture
        cy.fixture(fixture).then((data) => {
          this[name] = data
        })
    }
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Fixtures();
    }
    return this.instance;
  }
}

module.exports = {
  Fixtures
};
