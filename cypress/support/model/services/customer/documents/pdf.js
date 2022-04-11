const GET_PDF_SERVICE = {
  METHOD: 'POST',
  URL: '**/get-pdf',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/customer/documents/pdf/ko.json'
    },
    OK: {
      STATUS: 200,
      BODY: 'mock/customer/documents/pdf/ok.json'
    }
  }
}

module.exports = {
  GET_PDF_SERVICE
};
