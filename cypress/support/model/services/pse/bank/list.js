const PSE_BANK_LIST_SERVICE = {
  METHOD: 'GET',
  URL: '**/pse-get-bank-list',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/pse/bank/list/ko.json'
    },
    OK: {
      STATUS: 200,
      BODY: 'mock/pse/bank/list/ok.json'
    }
  }
}

module.exports = {
  PSE_BANK_LIST_SERVICE
};
