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
const {foreignInformationSelectors} = require(
    "../../selectors/pages/foreignInformation");
const {financialInformationSelectors} = require(
    "../../selectors/pages/financialnInformation");
const PAGES = {
  HOME: {
    name: "home",
    selectors: homeSelectors.form,
    wait: false,
    branch: {
      fixture: "flow/pages/home",
      trigger: homeSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  BASIC_INFORMATION: {
    name: "basicInformation",
    selectors: basicInformationSelectors.form,
    wait: true,
    branch: {
      fixture: "flow/pages/information_basic",
      trigger: basicInformationSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  PEP: {
    name: "pep",
    selectors: pepSelectors.form,
    wait: true,
    branch: {
      fixture: "flow/pages/pep",
      trigger: pepSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  ACCOUNT: {
    name: "account",
    selectors: accountSelectors.form,
    wait: true,
    branch: {
      fixture: "flow/pages/account",
      trigger: accountSelectors.form.nextPage.account,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  INSURANCE: {
    name: "insurance",
    selectors: insuranceSelectors.form,
    wait: true,
    branch: {
      fixture: "flow/pages/insurance",
      trigger: insuranceSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  OTP: {
    name: "otp",
    selectors: otpSelectors.form,
    wait: true,
    branch: {
      fixture: "flow/pages/otp",
      trigger: otpSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  PERSONAL_INFORMATION: {
    name: "personalInformation",
    selectors: personalInformationSelectors.form,
    wait: true,
    branch: {
      fixture: "flow/pages/personal_information",
      trigger: personalInformationSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  ECONOMIC_ACTIVITY: {
    name: "economicActivity",
    selectors: economicActivitySelectors.form,
    wait: true,
    branch: {
      fixture: "flow/pages/economic_activity",
      trigger: economicActivitySelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  CONTACT_INFORMATION: {
    name: "contactInformation",
    selectors: contactInformationSelectors.form,
    wait: true,
    branch: {
      fixture: "flow/pages/contact_information",
      trigger: contactInformationSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  FOREIGN_INFORMATION: {
    name: "foreignInformation",
    selectors: foreignInformationSelectors.form,
    wait: true,
    branch: {
      fixture: "flow/pages/foreign_information",
      trigger: foreignInformationSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  FINANCIAL_INFORMATION: {
    name: "financialInformation",
    selectors: financialInformationSelectors.form,
    wait: true,
    branch: {
      fixture: "flow/pages/financial_information",
      trigger: financialInformationSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  CARD: {
    name: "card",
    selectors: cardSelectors.form,
    wait: false,
    branch: {
      fixture: "flow/pages/card",
      trigger: cardSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  CARD_DEPOSIT: {
    name: "card",
    selectors: cardSelectors.form,
    wait: false,
    branch: {
      fixture: "flow/pages/deposit/card",
      trigger: cardSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  CARD_CONFIRM_DELIVERY_ADDRESS_POPUP: {
    name: "confirmDeliveryAddressPopup",
    selectors: confirmDevileryAddressPopupSelectors.form,
    wait: false,
    branch: {
      fixture: "flow/pages/card",
      trigger: confirmDevileryAddressPopupSelectors.form.nextPage.acceptChangeDelivery,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  DECLARING: {
    name: "declaring",
    selectors: declaringSelectors.form,
    wait: false,
    branch: {
      fixture: "flow/pages/declaring",
      trigger: declaringSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  SIGNATURE: {
    name: "signature",
    selectors: signatureSelectors.form,
    wait: true,
    branch: {
      fixture: "flow/pages/signature",
      trigger: signatureSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  ENROLLMENT: {
    name: "enrollment",
    selectors: enrollmentSelectors.form,
    wait: true,
    branch: {
      fixture: "flow/pages/enrollment",
      trigger: enrollmentSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  TIPS: {
    name: "tips",
    selectors: tipsSelectors.form,
    wait: false,
    branch: {
      fixture: "flow/pages/tips",
      trigger: tipsSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  CDT_HOME: {
    name: "cdtHome",
    selectors: cdtHomeSelectors.form,
    wait: false,
    branch: {
      fixture: "flow/pages/cdt/home",
      trigger: cdtHomeSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  CDT_BASIC_INFORMATION: {
    name: "cdtBasicInformation",
    selectors: basicInformationSelectors.form,
    wait: true,
    branch: {
      fixture: "flow/pages/cdt/information_basic",
      trigger: basicInformationSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  CDT_CONFIG: {
    name: "cdtConfig",
    selectors: cdtConfigSelectors.form,
    wait: true,
    branch: {
      fixture: "flow/pages/cdt/config",
      trigger: cdtConfigSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  CDT_ACCOUNT_CONFIG: {
    name: "cdtAccountConfig",
    selectors: cdtAccountConfigSelectors.form,
    wait: true,
    branch: {
      fixture: "flow/pages/cdt/accountConfig",
      trigger: cdtAccountConfigSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  CDT_SIGNATURE: {
    name: "cdtSignature",
    selectors: signatureSelectors.form,
    wait: true,
    branch: {
      fixture: "flow/pages/cdt/signature",
      trigger: signatureSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
  CDT_PERSONAL_INFORMATION: {
    name: "cdtPersonalInformation",
    selectors: personalInformationSelectors.form,
    wait: true,
    branch: {
      fixture: "flow/pages/cdt/personal_information",
      trigger: personalInformationSelectors.form.nextPage.continue,
    },
    status: {
      pause: true,
      screenshot: false
    }
  },
}

module.exports = {
  PAGES
};
