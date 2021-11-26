const PSE_CREATE_TRANSACTION = {
  METHOD: 'POST',
  URL: '**/pse-create-transaction',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/pse/transaction/create/ko.json'
    },
    OK: {
      STATUS: 200,
      BODY: 'mock/pse/bank/list/ok.json'
    }
  }
}

module.exports = {
  PSE_CREATE_TRANSACTION
};
