const VALIDATE_DOCUMENT = {
  METHOD: 'POST',
  URL: '**/validate-document',
  RESPONSE: {
    KO: {
      STATUS: 206,
      BODY: 'mock/customer/documents/validate-document/ko.json'
    },
    OK: {
      STATUS: 200,
      BODY: 'mock/customer/documents/validate-document/ok.json'
    }
  }
}

module.exports = {
  VALIDATE_DOCUMENT
};
