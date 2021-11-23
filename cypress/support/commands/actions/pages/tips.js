const {tipsSelectors} = require("../../../../selectors/pages/tips");

Cypress.Commands.add("fillTipsPage",
    (data) => {
      cy.formOperation("fill", tipsSelectors.form, data)
    })

