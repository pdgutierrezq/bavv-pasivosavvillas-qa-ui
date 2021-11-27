const SQS_CDA_DOCUMENTS = {
  METHOD: 'POST',
  URL: '**/sqs-cda-documents',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/customer/documents/sqs-cda-documents/ko.json'
    },
    OK: {
      STATUS: 200,
      BODY: 'mock/customer/documents/sqs-cda-documents/ok.json'
    }
  }
}

module.exports = {
  SQS_CDA_DOCUMENTS
};
