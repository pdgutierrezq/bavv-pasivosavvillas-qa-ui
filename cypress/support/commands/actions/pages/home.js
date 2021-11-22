import 'cypress-file-upload';
import {homeSelectors} from "../../../../selectors/pages/home";

Cypress.Commands.add("fillHomePage",
    (data) => {
      var homePage = Cypress.env().list[0].cda.baseUrl
      cy.visit(homePage)
      cy.formOperation("fill", homeSelectors.form, data)
    })

