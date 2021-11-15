const CUSTOMER_ACCOUNTS_SERVICE = {
  METHOD: 'POST',
  URL: '**/customer-accounts',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/error/ko.json'
    }
  }
}

module.exports = {
  CUSTOMER_ACCOUNTS_SERVICE: CUSTOMER_ACCOUNTS_SERVICE
};
