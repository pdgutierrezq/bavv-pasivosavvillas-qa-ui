const {ACCOUNTS} = require("./properties/customer/accounts");
const {CONDITION} = require("./properties/customer/conditions");
const {INSURANCE} = require("./properties/customer/insurance");

let Mock = class Mock {
  constructor(
      service,
      response
  ) {
    this.service = service;
    this.response = response;
  }
}

module.exports = {
  Mock
};
