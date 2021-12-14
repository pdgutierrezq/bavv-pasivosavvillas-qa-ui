const {homeSelectors} = require("../../selectors/pages/home");
const {basicInformationSelectors} = require(
    "../../selectors/pages/informationBasic");
const {pepSelectors} = require("../../selectors/pages/pep");
const {accountSelectors} = require("../../selectors/pages/account");
const {otpSelectors} = require("../../selectors/pages/otp");
const {cardSelectors, confirmDevileryAddressPopupSelectors} = require(
    "../../selectors/pages/card");
const {declaringSelectors} = require("../../selectors/pages/declaring");
const {signatureSelectors} = require("../../selectors/pages/signature");
const {tipsSelectors} = require("../../selectors/pages/tips");
const {insuranceSelectors} = require("../../selectors/pages/insurance");
const {cdtHomeSelectors} = require("../../selectors/pages/cdt/home");
const {cdtConfigSelectors} = require("../../selectors/pages/cdt/config");
const {cdtAccountConfigSelectors} = require(
    "../../selectors/pages/cdt/accountConfig");
const {enrollmentSelectors} = require("../../selectors/pages/enrollment");
const {personalInformationSelectors} = require(
    "../../selectors/pages/personalInformation");
const {economicActivitySelectors} = require(
    "../../selectors/pages/economicActivity");
const {contactInformationSelectors} = require(
    "../../selectors/pages/contactInformation");
const PAGES = {
  HOME: {
    name: "home",
    fixture: "flow/pages/home",
    flow: {
      selectors: homeSelectors.form,
      wait: false
    },
    selector: homeSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  BASIC_INFORMATION: {
    name: "basicInformation",
    fixture: "flow/pages/information_basic",
    flow: {
      selectors: basicInformationSelectors.form,
      wait: true
    },
    selector: basicInformationSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  PEP: {
    name: "pep",
    fixture: "flow/pages/pep",
    flow: {
      selectors: pepSelectors.form,
      wait: true
    },
    selector: pepSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  ACCOUNT: {
    name: "account",
    fixture: "flow/pages/account",
    flow: {
      selectors: accountSelectors.form,
      wait: true
    },
    selector: accountSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  INSURANCE: {
    name: "insurance",
    fixture: "flow/pages/insurance",
    flow: {
      selectors: insuranceSelectors.form,
      wait: true
    },
    selector: insuranceSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  OTP: {
    name: "otp",
    fixture: "flow/pages/otp",
    flow: {
      selectors: otpSelectors.form,
      wait: true
    },
    selector: otpSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  PERSONAL_INFORMATION: {
    name: "personalInformation",
    fixture: "flow/pages/personal_information",
    flow: {
      selectors: personalInformationSelectors.form,
      wait: true
    },
    selector: personalInformationSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  ECONOMIC_ACTIVITY: {
    name: "economicActivity",
    fixture: "flow/pages/economic_activity",
    flow: {
      selectors: economicActivitySelectors.form,
      wait: true
    },
    selector: economicActivitySelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  CONTACT_INFORMATION: {
    name: "contactInformation",
    fixture: "flow/pages/contact_information",
    flow: {
      selectors: contactInformationSelectors.form,
      wait: true
    },
    selector: contactInformationSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  CARD: {
    name: "card",
    fixture: "flow/pages/card",
    flow: {
      selectors: cardSelectors.form,
      wait: false
    },
    selector: cardSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  CARD_CONFIRM_DELIVERY_ADDRESS_POPUP: {
    name: "confirmDeliveryAddressPopup",
    fixture: "flow/pages/card",
    flow: {
      selectors: confirmDevileryAddressPopupSelectors.form,
      wait: false
    },
    selector: confirmDevileryAddressPopupSelectors.form.nextPage.acceptChangeDelivery,
    status: {
      pause: false,
      screenshot: false
    }
  },
  DECLARING: {
    name: "declaring",
    fixture: "flow/pages/declaring",
    flow: {
      selectors: declaringSelectors.form,
      wait: false
    },
    selector: declaringSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  SIGNATURE: {
    name: "signature",
    fixture: "flow/pages/signature",
    flow: {
      selectors: signatureSelectors.form,
      wait: true
    },
    selector: signatureSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  ENROLLMENT: {
    name: "enrollment",
    fixture: "flow/pages/enrollment",
    flow: {
      selectors: enrollmentSelectors.form,
      wait: true
    },
    selector: enrollmentSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  TIPS: {
    name: "tips",
    fixture: "flow/pages/tips",
    flow: {
      selectors: tipsSelectors.form,
      wait: false
    },
    selector: tipsSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  CDT_HOME: {
    name: "cdtHome",
    fixture: "flow/pages/cdt/home",
    flow: {
      selectors: cdtHomeSelectors.form,
      wait: false
    },
    selector: cdtHomeSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  CDT_BASIC_INFORMATION: {
    name: "cdtBasicInformation",
    fixture: "flow/pages/cdt/information_basic",
    flow: {
      selectors: basicInformationSelectors.form,
      wait: true
    },
    selector: basicInformationSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  CDT_CONFIG: {
    name: "cdtConfig",
    fixture: "flow/pages/cdt/config",
    flow: {
      selectors: cdtConfigSelectors.form,
      wait: true
    },
    selector: cdtConfigSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  CDT_ACCOUNT_CONFIG: {
    name: "cdtAccountConfig",
    fixture: "flow/pages/cdt/accountConfig",
    flow: {
      selectors: cdtAccountConfigSelectors.form,
      wait: true
    },
    selector: cdtAccountConfigSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  },
  CDT_SIGNATURE: {
    name: "cdtSignature",
    fixture: "flow/pages/cdt/signature",
    flow: {
      selectors: signatureSelectors.form,
      wait: true
    },
    selector: signatureSelectors.form.nextPage.continue,
    status: {
      pause: false,
      screenshot: false
    }
  }
}

module.exports = {
  PAGES
};
