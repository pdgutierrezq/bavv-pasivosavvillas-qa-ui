const {RECAPTCHA} = require("./properties/security/recaptcha");
const {OTP} = require("./properties/security/user/identity/otp");

let Flow = class Flow {
  constructor(
      recaptcha = RECAPTCHA.OK,
      otpCreate = OTP.CREATE.OK
  ) {
    this.recaptcha = recaptcha;
    this.otpCreate = otpCreate;
  }
}

module.exports = {
  Flow
};
