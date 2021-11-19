const {ACCOUNTS} = require("./properties/customer/accounts");
const {CONDITION} = require("./properties/customer/conditions");
const {INSURANCE} = require("./properties/customer/insurance");
const {READE_ACTIVE_CHANNELS_SERVICE} = require(
    "../services/customer/channels/read");

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
  }
}

module.exports = {
  User
};
