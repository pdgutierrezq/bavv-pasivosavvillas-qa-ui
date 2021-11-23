const {pepSelectors} = require("../../../../selectors/pages/pep");

Cypress.Commands.add("fillPepPage",
    (data) => {
      cy.formOperation("fill", pepSelectors.form, data)
      cy.waitLoader()
    })

