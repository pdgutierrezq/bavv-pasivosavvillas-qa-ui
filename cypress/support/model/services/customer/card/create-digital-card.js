const CREATE_DIGITAL_DEBIT_CARD = {
  METHOD: 'POST',
  URL: '**/create-debit-card',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/customer/card/ko/tech/ko-500.json'
    },
    INVALID_PRODUCT: {
      STATUS: 206,
      BODY: 'mock/customer/card/ko/tech/invalid-product.json'
    },
    ACTIVE_ACCOUNT: {
      STATUS: 206,
      BODY: 'mock/customer/card/ko/tech/active-account.json'
    },
    INVALID_DOCUMENT: {
      STATUS: 206,
      BODY: 'mock/customer/card/ko/tech/invalid-document.json'
    },
    OK: {
      STATUS: 201,
      BODY: 'mock/customer/card/ok/ok.json'
    }
  }
}

module.exports = {
  CREATE_DIGITAL_DEBIT_CARD
};
