const GET_DOCUMENTS_TO_CHARGE = {
  METHOD: 'POST',
  URL: '**/get-documents-to-charge',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/customer/documents/documents-to-charge/ko.json'
    },
    ALL: {
      STATUS: 200,
      BODY: 'mock/customer/documents/documents-to-charge/all.json'
    },
    ONLY_CC: {
      STATUS: 200,
      BODY: 'mock/customer/documents/documents-to-charge/only-cc.json'
    },
    NO_CC: {
      STATUS: 200,
      BODY: 'mock/customer/documents/documents-to-charge/no-cc.json'
    }
  }
}

module.exports = {
  GET_DOCUMENTS_TO_CHARGE
};
