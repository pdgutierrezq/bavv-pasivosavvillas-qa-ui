const USER_IDENTITY_VALIDATE_SERVICE = {
  NAME: 'userIdentityValidate',
  METHOD: 'POST',
  URL: '**/user-identity',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/error/ko.json'
    }
  }
}

module.exports = {
  USER_IDENTITY_VALIDATE_SERVICE
};
