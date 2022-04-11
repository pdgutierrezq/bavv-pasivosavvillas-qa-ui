const PSE_CDT_REFUND_MONEY = {
  METHOD: 'POST',
  URL: '**/refund-money-pse-cdt',
  RESPONSE: {
    KO: {
      STATUS: 400,
      BODY: 'mock/pse/transaction/refund/ko.json'
    },
    OK: {
      STATUS: 200,
      BODY: 'mock/pse/transaction/refund/ok.json'
    }
  }
}

module.exports = {
  PSE_CDT_REFUND_MONEY
};
