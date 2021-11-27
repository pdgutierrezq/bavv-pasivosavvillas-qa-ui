const {PAGES} = require("./pages");

let Fixtures = class Fixtures {
  constructor() {
    this.loadData()
  }

  loadData() {
    for (let page in PAGES) {
      let name = PAGES[page].name
      let flow = PAGES[page].flow
      let fixture = PAGES[page].fixture
      cy.fixture(fixture).then((data) => {
        this.setPage(name,data,flow)
      })
    }
  }

  setPage(name,data,flow){
    this[name]={}
    this[name].data = data
    this[name].flow = flow
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
