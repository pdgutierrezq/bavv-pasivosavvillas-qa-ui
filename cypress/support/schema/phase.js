const {PAGES} = require("./pages");
let PHASE = {
  CDA: {
    PRODUCT: {
      DEFAULT: [
        PAGES.HOME,
        PAGES.BASIC_INFORMATION,
        PAGES.PEP,
        PAGES.ACCOUNT,
      ],
      PAYROLL: [
        PAGES.BASIC_INFORMATION,
        PAGES.PEP,
        PAGES.ACCOUNT,
      ]
    },
    SETUP: {
      CLIENT: {
        YES: [
          PAGES.CARD,
          PAGES.DECLARING,
          PAGES.SIGNATURE,
        ],
        NO: [
          PAGES.CARD,
          PAGES.CARD_CONFIRM_DELIVERY_ADDRESS_POPUP,
          PAGES.DECLARING,
          PAGES.SIGNATURE,
        ]
      }
    },
    SUMMARY: [
      PAGES.TIPS,
    ],
    INFO: {
      DEFAULT: {
        CLIENT: {
          NO: [
            PAGES.PERSONAL_INFORMATION,
            PAGES.ECONOMIC_ACTIVITY,
            PAGES.CONTACT_INFORMATION,
            PAGES.FOREIGN_INFORMATION,
            PAGES.FINANCIAL_INFORMATION,
          ],
          YES: {
            UPDATED: {
              NO: [
                PAGES.ECONOMIC_ACTIVITY,
                PAGES.CONTACT_INFORMATION,
                PAGES.FOREIGN_INFORMATION,
                PAGES.FINANCIAL_INFORMATION,
              ]
            }
          }
        }
      },
      PAYROLL: {
        CLIENT: {
          NO: [
            PAGES.PERSONAL_INFORMATION,
            PAGES.CONTACT_INFORMATION,
            PAGES.FOREIGN_INFORMATION,
            PAGES.FINANCIAL_INFORMATION,
          ],
          YES: {
            UPDATED: {
              NO: [
                PAGES.CONTACT_INFORMATION,
                PAGES.FOREIGN_INFORMATION,
                PAGES.FINANCIAL_INFORMATION,
              ],
              YES: [
                PAGES.CONTACT_INFORMATION
              ]
            }
          }
        }
      },
      DEPOSIT: {
        CLIENT: {
          NO: [
            PAGES.PERSONAL_INFORMATION,
            PAGES.ECONOMIC_ACTIVITY,
            PAGES.CONTACT_INFORMATION,
          ],
          YES: {
            UPDATED: {
              NO: [
                PAGES.ECONOMIC_ACTIVITY,
                PAGES.CONTACT_INFORMATION,
                PAGES.FOREIGN_INFORMATION,
                PAGES.FINANCIAL_INFORMATION,
              ]
            }
          }
        }
      }
    },
  },
  CDT: {
    INITIAL: [
      PAGES.CDT_HOME,
      PAGES.CDT_BASIC_INFORMATION,
      PAGES.PEP,
      PAGES.CDT_CONFIG,
    ],
    FINAL: [
      PAGES.CDT_ACCOUNT_CONFIG,
      PAGES.DECLARING,
      PAGES.CDT_SIGNATURE,
    ],
    SUMMARY: [
      PAGES.TIPS
    ],
    NO_CLIENT: [
      PAGES.CDT_PERSONAL_INFORMATION,
      PAGES.ECONOMIC_ACTIVITY,
      PAGES.CONTACT_INFORMATION,
      PAGES.FOREIGN_INFORMATION,
      PAGES.FINANCIAL_INFORMATION,
    ],
  },
  INSURANCE: [
    PAGES.INSURANCE,
  ],
  ENROLLMENT: [
    PAGES.ENROLLMENT
  ],
  IDENTIFICATION: [
    PAGES.OTP,
  ]
}

module.exports = {
  PHASE
};
