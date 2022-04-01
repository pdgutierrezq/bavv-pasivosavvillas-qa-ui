const GOOGLE_RECAPTCHA_SERVICE = {
  METHOD: 'POST',
  URL: '**/recaptcha/**',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/security/recaptcha/ko.json'
    }
  }
}

module.exports = {
  GOOGLE_RECAPTCHA_SERVICE: GOOGLE_RECAPTCHA_SERVICE
};
