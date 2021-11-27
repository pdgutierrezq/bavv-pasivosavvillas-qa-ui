Cypress.Commands.add("fillCommonPage",
    (selectors, data, wait) => {
      cy.formOperation("fill", selectors, data)
      if (wait) {
        cy.waitLoader()
      }
    })

Cypress.Commands.add("fillPage",
    (page, wait) => {
      cy.fillCommonPage(page.selectors, page.data, wait)
    })

