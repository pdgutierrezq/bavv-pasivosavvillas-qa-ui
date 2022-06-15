const {PAGES} = require("./pages");

let Fixtures = class Fixtures {
  constructor() {
    this.loadData()
  }

  loadData() {
    for (let page in PAGES) {
      let name = PAGES[page].name
      let selectors = PAGES[page].selectors
      let branch = PAGES[page].branch
      let fixture = PAGES[page].branch.fixture
      cy.fixture(fixture).then((data) => {
        this.setPage(name, data, branch,selectors)
      })
    }
  }

  setPage(name, data, branch,selectors) {
    this[name] = {}
    this[name].selectors = selectors
    this[name].branch = branch
    this[name].branch.data = data
  }

  static getPage(pageName) {
    return this.getInstance()[pageName]
  }

  static mergeDataInPage(pageName,branch) {
    let page = this.getPage(pageName)
    Object.assign(page.branch, branch)
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
