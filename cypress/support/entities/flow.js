const {RECAPTCHA} = require("./properties/security/recaptcha");
const {OTP} = require("./properties/security/user/identity/otp");
const {CRM} = require("./properties/customer/crm/update");

let Flow = class Flow {
  constructor(
      recaptcha = RECAPTCHA.OK,
      otpCreate = OTP.CREATE.OK,
      otpValidate = OTP.VALIDATE.OK,
      crm = CRM.OK
  ) {
    this.recaptcha = recaptcha;
    this.otpCreate = otpCreate;
    this.otpValidate = otpValidate;
    this.crm = crm;
  }
}

module.exports = {
  Flow
};
