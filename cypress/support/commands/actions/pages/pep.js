const {pepSelectors} = require("../../../../selectors/pages/pep");

Cypress.Commands.add("fillPEPPage",
    (data) => {
      cy.formOperation("fill", pepSelectors.form, data)
      cy.waitLoader()
    })

