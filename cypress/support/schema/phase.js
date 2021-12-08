const {PAGES} = require("./pages");
let PHASE = {
  CDA: {
    INITIAL: [
      PAGES.HOME,
      PAGES.BASIC_INFORMATION,
      PAGES.PEP,
      PAGES.ACCOUNT,
    ],
    FINAL: [
      PAGES.OTP,
      PAGES.CARD,
      PAGES.CARD_CONFIRM_DELIVERY_ADDRESS_POPUP,
      PAGES.DECLARING,
      PAGES.SIGNATURE,
      PAGES.TIPS,
    ]
  },
  CDT: {
    INITIAL: [
      PAGES.CDT_HOME,
      PAGES.CDT_BASIC_INFORMATION,
      PAGES.PEP,
      PAGES.CDT_CONFIG,
    ],
    FINAL: [
      PAGES.OTP,
      PAGES.CDT_ACCOUNT_CONFIG,
      PAGES.DECLARING,
      PAGES.CDT_SIGNATURE,
      PAGES.TIPS,
    ]
  },
  INSURANCE: [
    PAGES.INSURANCE,
  ],
  CUSTOMER: {},
  UPDATED: {},
  NO_UPDATED: {},
  NO_CUSTOMER: {},
}

module.exports = {
  PHASE
};
