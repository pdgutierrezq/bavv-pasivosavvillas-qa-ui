const CUSTOMER_INSURANCE_SERVICE = {
  METHOD: 'POST',
  URL: '**/insurance-validation',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/customer/insurance/ko.json'
    }
  }
}

module.exports = {
  CUSTOMER_INSURANCE_SERVICE: CUSTOMER_INSURANCE_SERVICE
};
