Cypress.Commands.add("fillCommonPage",
    (data, selectors, wait) => {
      cy.formOperation("fill", selectors, data)
      if (wait) {
        cy.waitLoader()
      }
    })

