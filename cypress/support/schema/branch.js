const {PAGES} = require("./pages");
const {accountSelectors} = require("../../selectors/pages/account");

const BRANCH = {
  DIGITAL_ACCOUNT_PRODUCT: {
    page: PAGES.ACCOUNT,
    branch: {
      trigger: accountSelectors.form.nextPage.account,
      data: {
        account: 0
      }
    }
  },
  DEPOSIT_PRODUCT: {
    page: PAGES.ACCOUNT,
    branch: {
      trigger: accountSelectors.form.nextPage.payrollWithoutAgreement,
      data: {
        payrollWithoutAgreement: 0
      }
    }
  },
  PAYROLL_WITHOUT_AGREEMENT: {
    page: PAGES.ACCOUNT,
    branch: {
      trigger: accountSelectors.form.nextPage.payrollWithoutAgreement,
      data: {
        payrollWithoutAgreement: 0
      }
    }
  },
}

module.exports = {
  BRANCH
};
