const UPLOAD_DOCUMENT = {
  METHOD: 'PUT',
  URL: '**/DocumentoDigital/**',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/error/ko.json'
    },
    OK: {
      STATUS: 200,
      BODY: 'mock/error/ko.json'
    }
  }
}

module.exports = {
  UPLOAD_DOCUMENT
};
