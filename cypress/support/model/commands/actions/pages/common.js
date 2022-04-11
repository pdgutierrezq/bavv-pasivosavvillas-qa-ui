Cypress.Commands.add("fillPage",
    (page) => {
      cy.formOperation("fill", page.flow.selectors, page.data)
      if (page.flow.wait) {
        cy.waitLoader()
      }
    })
