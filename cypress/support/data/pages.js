const {homeSelectors} = require("../../selectors/pages/home");
const {basicInformationSelectors} = require(
    "../../selectors/pages/informationBasic");
const {pepSelectors} = require("../../selectors/pages/pep");
const {accountSelectors} = require("../../selectors/pages/account");
const {otpSelectors} = require("../../selectors/pages/otp");
const PAGES = {
  HOME: {
    name: "homePage",
    fixture: "flow/pages/home",
    selector: homeSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  BASIC_INFORMATION: {
    name: "basicInformationPage",
    fixture: "flow/pages/information_basic",
    selector: basicInformationSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  PEP: {
    name: "pepPage",
    fixture: "flow/pages/pep",
    selector: pepSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  ACCOUNT: {
    name: "accountPage",
    fixture: "flow/pages/account",
    selector: accountSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  OTP: {
    name: "otpPage",
    fixture: "flow/pages/otp",
    selector: otpSelectors.form.nextPage.continue,
    status: {
      pause: true,
      screenshot: true
    }
  }
}

module.exports = {
  PAGES
};
