const {accountSelectors} = require("../../../../selectors/pages/account");

Cypress.Commands.add("fillAccountPage",
    (data) => {
      cy.formOperation("fill", accountSelectors.form, data)
      cy.waitLoader()
    })

