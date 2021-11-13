const {RECAPTCHA} = require("./properties/security/recaptcha");
const {OTP} = require("./properties/security/user/identity/otp");

let Flow = class Flow {
  constructor(
      recaptcha = RECAPTCHA.OK,
      otpCreate = OTP.CREATE.OK,
      otpValidate = OTP.VALIDATE.OK
  ) {
    this.recaptcha = recaptcha;
    this.otpCreate = otpCreate;
    this.otpValidate = otpValidate;
  }
}

module.exports = {
  Flow
};
