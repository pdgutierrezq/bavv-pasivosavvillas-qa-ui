const CONDITION = {
  PEP: 'fixture:mock/customer/conditions/cust-cond-client-pep.json',
  RESTRICTED: 'fixture:mock/customer/conditions/cust-cond-restlist.json',
  CLIENT: {
    UPDATED: 'fixture:mock/customer/conditions/cust-cond-client-updated-no-return.json',
    NO_UPDATED: 'fixture:mock/customer/conditions/cust-cond-client-not-updated.json'
  },
  NO_CLIENT: {
    UPDATED: 'fixture:mock/customer/conditions/cust-cond-not-client-updated.json',
    NO_UPDATED: 'fixture:mock/customer/conditions/cust-cond-not-client-not-updated.json'
  }
}

module.exports = {
  CONDITION: CONDITION
};
