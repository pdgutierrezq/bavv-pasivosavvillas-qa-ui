const {ACCOUNTS} = require("./properties/customer/accounts");
const {CONDITION} = require("./properties/customer/conditions");
const {INSURANCE} = require("./properties/customer/insurance");
const {READE_ACTIVE_CHANNELS_SERVICE} = require(
    "../services/customer/channels/read");

const BASIC_INFORMATION_FIXTURE = 'flow/pages/information_basic'
const HOME_FIXTURE = 'flow/pages/home'

let Fixtures = class Fixtures {
  constructor(
      condition = CONDITION.CLIENT.UPDATED,
      accounts = ACCOUNTS.CAT.YES,
      insurance = INSURANCE.YES,
      channels = READE_ACTIVE_CHANNELS_SERVICE.RESPONSE.TRUE,
  ) {
    this.condition = condition;
    this.accounts = accounts;
    this.insurance = insurance;
    this.channels = channels;
    this.loadData()
  }

  loadData() {
    cy.fixture(HOME_FIXTURE).then((data) => {
      this.homaPage = data
    })
  }
}

module.exports = {
  Fixtures
};

//
// class PrivateData {
//
//   constructor() {
//     this.loadData()
//   }
//
//   loadData() {
//     // this.homePage = JSON.parse("cypress/fixtures/flow/pages/home.json")
//     cy.fixture(HOME_FIXTURE).then((data) => {
//       cy.log("Loding data Data...:" + data.continue)
//       this.homePage = data
//       cy.log("This data Data...:" + this.homePage.continue)
//     })
//     cy.fixture(BASIC_INFORMATION_FIXTURE).then((data) => {
//       this.basicInformationPage = data
//     })
//     // cy.log("Loding data...")
//     // cy.log("Loding data...:" + this.homePage.continue)
//     // cy.log("Loding data...:" + this.basicInformationPage)
//   }
// }
//
// class Fixtures {
//   constructor() {
//     throw new Error('Use Singleton.getInstance()');
//   }
//
//   static getHomePage(){
//    let data = cy.fixture(HOME_FIXTURE).then((data) => {
//       // cy.log("Loding data Data...:" + data.continue)
//       return data
//     })
//     return data.continue
//   }
//
//   static getInstance() {
//     if (!Fixtures.instance) {
//       Fixtures.instance = new PrivateData();
//       cy.log("Private Data...:" + Fixtures.instance.homePage)
//     }
//     return Fixtures.instance;
//   }
//   static get(){
//     return new PrivateData().homePage
//   }
// }
//
// module.exports = Fixtures;
