const {otpSelectors} = require("../../../../selectors/pages/otp");

Cypress.Commands.add("fillOtpPage",
    (data) => {
      cy.formOperation("fill", otpSelectors.form, data)
      cy.waitLoader()
    })

