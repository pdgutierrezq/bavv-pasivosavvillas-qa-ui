const GENERATE_PRESIGNED_URL = {
  METHOD: 'POST',
  URL: '**/generate-presigned-url',
  RESPONSE: {
    KO: {
      STATUS: 501,
      BODY: 'mock/error/ko.json'
    },
    OK: {
      STATUS: 201,
      BODY: 'mock/customer/documents/generate-presigned-url/ok.json'
    },
    TWO_DOCS: {
      STATUS: 201,
      BODY: 'mock/customer/documents/generate-presigned-url/two-docs.json'
    }
  }
}

module.exports = {
  GENERATE_PRESIGNED_URL
};
