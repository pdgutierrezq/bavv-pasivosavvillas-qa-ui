const CUSTOMER_CONDITION_SERVICE = {
  METHOD: 'POST',
  URL: '**/customer-conditions',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/error/ko.json'
    }
  }
}

module.exports = {
  CUSTOMER_CONDITION_SERVICE: CUSTOMER_CONDITION_SERVICE
};
