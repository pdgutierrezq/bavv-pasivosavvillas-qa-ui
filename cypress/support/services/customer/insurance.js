const CUSTOMER_INSURANCE_SERVICE = {
  METHOD: 'POST',
  URL: '**/insurance-validation',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'fixture:mock/customer/insurance/ko.json'
    },
    OK: {
      STATUS: 200
    }
  }
}

module.exports = {
  CUSTOMER_INSURANCE_SERVICE: CUSTOMER_INSURANCE_SERVICE
};
