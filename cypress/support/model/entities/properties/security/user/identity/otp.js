const OTP = {
  CREATE: {
    OK: {
      STATUS: 201,
      BODY: 'mock/security/user/identity/create/ok.json'
    },
    RETRIES_OVERCOME: {
      STATUS: 201,
      BODY: 'mock/security/user/identity/create/ko-retries-overcome.json'
    }
  },
  VALIDATE: {
    OK: {
      STATUS: 200,
      BODY: 'mock/security/user/identity/validate/ok.json'
    }
  }
}

module.exports = {
  OTP
};
