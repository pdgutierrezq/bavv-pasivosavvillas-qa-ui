Cypress.Commands.add("fillPage",
    (page) => {
      console.log(page)
      cy.formOperation("fill", page.selectors, page.branch.data)
      if (page.wait) {
        cy.waitLoader()
      }
    })
