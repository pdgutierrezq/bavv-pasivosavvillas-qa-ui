const USER_IDENTITY_VALIDATE_SERVICE = {
  METHOD: 'POST',
  URL: '**/user-identity',
  MATCHER: 'otpValue',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/error/ko.json'
    },
    OK: {
      STATUS: 200
    }
  }
}

module.exports = {
  USER_IDENTITY_VALIDATE_SERVICE
};
