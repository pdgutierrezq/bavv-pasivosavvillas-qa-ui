const {signatureSelectors} = require("../../../../selectors/pages/signature");

Cypress.Commands.add("fillSignaturePage",
    (data) => {
      cy.formOperation("fill", signatureSelectors.form, data)
      cy.waitLoader()
    })

