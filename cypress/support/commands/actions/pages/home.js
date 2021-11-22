import 'cypress-file-upload';
import {homeSelectors} from "../../../../selectors/pages/home";

Cypress.Commands.add("fillHomePage",
    (user) => {
      var homePage = Cypress.env().list[0].cda.baseUrl
      cy.visit(homePage)
      cy.formOperation("fill", homeSelectors.form, user.homePage)
    })

