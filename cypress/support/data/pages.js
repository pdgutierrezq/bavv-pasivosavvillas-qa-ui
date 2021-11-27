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
const {insuranceSelectors} = require("../../selectors/pages/insurance");
const PAGES = {
  HOME: {
    name: "home",
    fixture: "flow/pages/home",
    selectors: homeSelectors.form,
    selector: homeSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  BASIC_INFORMATION: {
    name: "basicInformation",
    fixture: "flow/pages/information_basic",
    selectors: basicInformationSelectors.form,
    selector: basicInformationSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  PEP: {
    name: "pep",
    fixture: "flow/pages/pep",
    selectors: pepSelectors.form,
    selector: pepSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  ACCOUNT: {
    name: "account",
    fixture: "flow/pages/account",
    selectors: accountSelectors.form,
    selector: accountSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  INSURANCE: {
    name: "insurance",
    fixture: "flow/pages/insurance",
    selectors: insuranceSelectors.form,
    selector: insuranceSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  OTP: {
    name: "otp",
    fixture: "flow/pages/otp",
    selectors: otpSelectors.form,
    selector: otpSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  CARD: {
    name: "card",
    fixture: "flow/pages/card",
    selectors: cardSelectors.form,
    selector: cardSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  CARD_CONFIRM_DELIVERY_ADDRESS_POPUP: {
    name: "confirmDeliveryAddressPopup",
    fixture: "flow/pages/card",
    selectors: confirmDevileryAddressPopupSelectors.form,
    selector: confirmDevileryAddressPopupSelectors.form.nextPage.acceptChangeDelivery,
    status: {
      pause: false,
      screenshot: false
    }
  },
  DECLARING: {
    name: "declaring",
    fixture: "flow/pages/declaring",
    selectors: declaringSelectors.form,
    selector: declaringSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  SIGNATURE: {
    name: "signature",
    fixture: "flow/pages/signature",
    selectors: signatureSelectors.form,
    selector: signatureSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  TIPS: {
    name: "tips",
    fixture: "flow/pages/tips",
    selectors: tipsSelectors.form,
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
