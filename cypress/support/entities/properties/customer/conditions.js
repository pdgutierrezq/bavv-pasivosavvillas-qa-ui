const CONDITION = {
  PEP: {
    STATUS: 200,
    BODY: 'mock/customer/conditions/cust-cond-client-pep.json'
  },
  RESTRICTED: {
    STATUS: 200,
    BODY: 'mock/customer/conditions/cust-cond-restlist.json'
  },
  CLIENT: {
    UPDATED: {
      STATUS: 200,
      BODY: 'mock/customer/conditions/cust-cond-client-updated-no-return.json'
    },
    NO_UPDATED: {
      STATUS: 200,
      BODY: 'mock/customer/conditions/cust-cond-client-not-updated.json'
    }
  },
  NO_CLIENT: {
    UPDATED: {
      STATUS: 200,
      BODY: 'mock/customer/conditions/cust-cond-not-client-updated.json'
    },
    NO_UPDATED: {
      STATUS: 200,
      BODY: 'mock/customer/conditions/cust-cond-not-client-not-updated.json'
    }
  }
}

module.exports = {
  CONDITION: CONDITION
};
