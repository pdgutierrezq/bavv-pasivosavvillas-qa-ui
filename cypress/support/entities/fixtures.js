const BASIC_INFORMATION_FIXTURE = 'flow/pages/information_basic'
const HOME_FIXTURE = 'flow/pages/home'

let Fixtures = class Fixtures {
  constructor() {
    this.loadData()
  }

  loadData() {
    cy.fixture(BASIC_INFORMATION_FIXTURE).then((data) => {
      this.basicInformationPage = data
    })
    cy.fixture(HOME_FIXTURE).then((data) => {
      this.homePage = data
    })
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
