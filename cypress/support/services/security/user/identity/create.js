const USER_IDENTITY_CREATE_SERVICE = {
  METHOD: 'POST',
  URL: '**/user-identity',
  RESPONSE: {
    KO: {
      STATUS: 500,
      BODY: 'mock/error/ko.json'
    },
    OK: {
      STATUS: 201
    }
  }
}

module.exports = {
  USER_IDENTITY_CREATE_SERVICE
};
