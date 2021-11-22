const {ACCOUNTS} = require("./properties/customer/accounts");
const {CONDITION} = require("./properties/customer/conditions");
const {INSURANCE} = require("./properties/customer/insurance");
const {READE_ACTIVE_CHANNELS_SERVICE} = require(
    "../services/customer/channels/read");
const {Data} = require("./data");
const Fixtures = require("./data");

const BASIC_INFORMATION_FIXTURE = 'flow/pages/information_basic'
const HOME_FIXTURE = 'flow/pages/home'

let User = class User {
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

  loadData(){
    cy.fixture(BASIC_INFORMATION_FIXTURE).then((data) => {
      this.basicInformationPage = data
    })
    cy.fixture(HOME_FIXTURE).then((data) => {
      this.homePage = data
    })
  }
}

module.exports = {
  User
};
