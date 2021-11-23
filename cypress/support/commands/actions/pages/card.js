const {cardSelectors, confirmDevileryAddressPopupSelectors} = require("../../../../selectors/pages/card");

Cypress.Commands.add("fillCardPage",
    (data) => {
      cy.formOperation("fill", cardSelectors.form, data)
      cy.formOperation("fill", confirmDevileryAddressPopupSelectors.form, data)
    })


