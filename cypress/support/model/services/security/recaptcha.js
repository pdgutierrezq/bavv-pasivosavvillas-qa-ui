const RECAPTCHA_SERVICE = {
  METHOD: 'POST',
  URL: '**/recaptchaV3',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/security/recaptcha/ko.json'
    }
  }
}

module.exports = {
  RECAPTCHA_SERVICE: RECAPTCHA_SERVICE
};
