const SAVE_SUMMARY_TRANSACTION_SERVICE = {
  METHOD: 'POST',
  URL: '**/save-summary-transaction-cdt',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/customer/crm/update/fail.json'
    },
    OK: {
      STATUS: 200,
      BODY: 'mock/transaction/save/ok.json'
    }
  }
}

module.exports = {
  SAVE_SUMMARY_TRANSACTION_SERVICE
};
