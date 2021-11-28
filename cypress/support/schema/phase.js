const {PAGES} = require("./pages");
let PHASE = {
  BASIC: {
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
