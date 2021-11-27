import {homeSelectors} from "../../../../selectors/pages/home";

Cypress.Commands.add("fillHomePage",
    (page) => {
      var homePage = Cypress.env().list[0].cda.baseUrl
      cy.visit(homePage)
      cy.formOperation("fill", homeSelectors.form, page.data)
    })

