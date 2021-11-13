const {ACCOUNTS} = require("./properties/customer/accounts");
const {CONDITION} = require("./properties/customer/conditions");

let User = class User {
  constructor(
      condition = CONDITION.CLIENT.UPDATED,
      accounts = ACCOUNTS.CAT.YES
  ) {
    this.condition = condition;
    this.accounts = accounts;
  }
}

module.exports = {
  User: User
};
