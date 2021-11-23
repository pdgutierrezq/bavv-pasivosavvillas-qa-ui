const {declaringSelectors} = require("../../../../selectors/pages/declaring");

Cypress.Commands.add("fillDeclaringPage",
    (data) => {
      cy.formOperation("fill", declaringSelectors.form, data)
    })


