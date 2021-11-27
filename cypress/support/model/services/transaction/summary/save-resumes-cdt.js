const SAVE_RESUMES_CDT = {
  METHOD: 'POST',
  URL: '**/save-resumes-cdt',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/error/ko.json'
    },
    OK: {
      STATUS: 200,
      BODY: 'mock/transaction/save-resumes-cdt/ok.json'
    }
  }
}

module.exports = {
  SAVE_RESUMES_CDT
};
