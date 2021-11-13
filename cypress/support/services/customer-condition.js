const CUSTOMER_CONDITION_SERVICE = {
  METHOD: 'POST',
  URL: '**/customer-conditions',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'fixtures:mock/customer-conditions/cust-cond-ko.json'
    },
    OK: {
      STATUS: 200
    }
  }
}

module.exports = {
  CUSTOMER_CONDITION_SERVICE: CUSTOMER_CONDITION_SERVICE
};
