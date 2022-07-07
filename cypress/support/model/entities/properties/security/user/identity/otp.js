const OTP = {
  CREATE: {
    OK: {
      STATUS: 201,
      BODY: 'mock/security/user/identity/create/ok.json'
    },
    RETRIES_OVERCOME: {
      STATUS: 201,
      BODY: 'mock/security/user/identity/create/ko/tech/ko-retries-overcome.json'
    },
    TECH_ERROR_CODE_41: {
      STATUS: 201,
      BODY: 'mock/security/user/identity/create/ko/tech/ko-41.json'
    },
    TECH_ERROR_CODE_40: {
      STATUS: 201,
      BODY: 'mock/security/user/identity/create/ko/tech/ko-40.json'
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
