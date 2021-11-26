const {homeSelectors} = require("../../selectors/pages/home");
const {basicInformationSelectors} = require(
    "../../selectors/pages/informationBasic");
const {pepSelectors} = require("../../selectors/pages/pep");
const {accountSelectors} = require("../../selectors/pages/account");
const {otpSelectors} = require("../../selectors/pages/otp");
const {cardSelectors, confirmDevileryAddressPopupSelectors} = require("../../selectors/pages/card");
const {declaringSelectors} = require("../../selectors/pages/declaring");
const {signatureSelectors} = require("../../selectors/pages/signature");
const {tipsSelectors} = require("../../selectors/pages/tips");
const PAGES = {
  HOME: {
    name: "homePage",
    fixture: "flow/pages/home",
    selector: homeSelectors.form.nextPage.continue,
    status: {
      pause: true,
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
      pause: true,
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
      screenshot: false
    }
  },
  CARD: {
    name: "cardPage",
    fixture: "flow/pages/card",
    selector: cardSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  CARD_CONFIRM_DELIVERY_ADDRESS_POPUP: {
    name: "confirmDeliveryAddressPopup",
    fixture: "flow/pages/card",
    selector: confirmDevileryAddressPopupSelectors.form.nextPage.acceptChangeDelivery,
    status: {
      pause: false,
      screenshot: false
    }
  },
  DECLARING: {
    name: "declaringPage",
    fixture: "flow/pages/declaring",
    selector: declaringSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  SIGNATURE: {
    name: "signaturePage",
    fixture: "flow/pages/signature",
    selector: signatureSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  TIPS: {
    name: "tipsPage",
    fixture: "flow/pages/tips",
    selector: tipsSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  }
}

module.exports = {
  PAGES
};
