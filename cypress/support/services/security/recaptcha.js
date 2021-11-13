const RECAPTCHA_SERVICE = {
  METHOD: 'POST',
  URL: '**/recaptchaV3',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/security/recaptcha/ko.json'
    },
    OK: {
      STATUS: 200
    }
  }
}

module.exports = {
  RECAPTCHA_SERVICE: RECAPTCHA_SERVICE
};
