const CONDITION = {
  PEP: {
    STATUS: 200,
    BODY: 'mock/customer/conditions/cust-cond-client-pep.json'
  },
  USER_ERROR_CODE_90002: {
    STATUS: 200,
    BODY: 'mock/customer/conditions/ko/user/ko-90002.json'
  },
  USER_ERROR_CODE_90003: {
    STATUS: 200,
    BODY: 'mock/customer/conditions/ko/user/ko-90003.json'
  },
  TECH_ERROR_CODE_61: {
    STATUS: 200,
    BODY: 'mock/customer/conditions/ko/tech/ko-61.json'
  },
  TECH_ERROR_CODE_500: {
    STATUS: 200,
    BODY: 'mock/customer/conditions/ko/tech/ko-500.json'
  },
  TECH_ERROR_CODE_UNKNOWN: {
    STATUS: 200,
    BODY: 'mock/customer/conditions/ko/tech/ko-unknown.json'
  },
  TECH_ERROR_CODE_999: {
    STATUS: 200,
    BODY: 'mock/customer/conditions/ko/tech/ko-999.json'
  },
  RESTRICTED: {
    STATUS: 200,
    BODY: 'mock/customer/conditions/cust-cond-restlist.json'
  },
  RETAKE: {
    STATUS: 200,
    BODY: 'mock/customer/conditions/retake.json'
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
