const {RECAPTCHA} = require("./properties/security/recaptcha");
const {OTP} = require("./properties/security/user/identity/otp");
const {CRM} = require("./properties/customer/crm/update");
const {GET_PDF_SERVICE} = require("../services/customer/documents/pdf");

let Flow = class Flow {
  constructor(
      recaptcha = RECAPTCHA.OK,
      otpCreate = OTP.CREATE.OK,
      otpValidate = OTP.VALIDATE.OK,
      crm = CRM.OK,
      pdf = GET_PDF_SERVICE.RESPONSE.KO
  ) {
    this.recaptcha = recaptcha;
    this.otpCreate = otpCreate;
    this.otpValidate = otpValidate;
    this.crm = crm;
    this.pdf = pdf;
  }
}

module.exports = {
  Flow
};
