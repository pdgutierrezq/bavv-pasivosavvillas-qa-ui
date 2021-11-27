const {PAGES} = require("./pages");

let Fixtures = class Fixtures {
  constructor() {
    this.loadData()
  }

  loadData() {
    for (let page in PAGES) {
      let name = PAGES[page].name
      let selectors = PAGES[page].selectors
      let fixture = PAGES[page].fixture
      cy.fixture(fixture).then((data) => {
        this[name]={}
        this[name].data = data
        this[name].selectors = selectors
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
