import 'cypress-file-upload';
import {basicInformationSelectors} from "../../../../selectors/pages/informationBasic";

Cypress.Commands.add("fillBasicInformationPage",
    (user) => {
      cy.fillHomePage(user)
      cy.formOperation("fill", basicInformationSelectors.form,
          user.basicInformationPage)
    })

