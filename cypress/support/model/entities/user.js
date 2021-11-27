const {ACCOUNTS} = require("./properties/customer/accounts");
const {CONDITION} = require("./properties/customer/conditions");
const {INSURANCE} = require("./properties/customer/insurance");
const {READE_ACTIVE_CHANNELS_SERVICE} = require(
    "../services/customer/channels/read");
const {Fixtures} = require("../../schema/fixtures");

const BASIC_INFORMATION_FIXTURE = 'flow/pages/information_basic'
const HOME_FIXTURE = 'flow/pages/home'

let User = class User {
  constructor(
      condition = CONDITION.CLIENT.UPDATED,
      accounts = ACCOUNTS.CAT.YES,
      insurance = INSURANCE.YES,
      channels = READE_ACTIVE_CHANNELS_SERVICE.RESPONSE.TRUE,
  ) {
    this.condition = condition
    this.accounts = accounts
    this.insurance = insurance
    this.channels = channels
    this.fixtures = new Fixtures()
  }

  static fixtures() {
    return this.fixtures()
  }
}

module.exports = {
  User
};
