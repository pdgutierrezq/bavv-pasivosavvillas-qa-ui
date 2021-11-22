import 'cypress-file-upload';
import {basicInformationSelectors} from "../../../../selectors/cda/information/basic/page";

Cypress.Commands.add("FillBasicInformationPage",
    (user) => {
      cy.homePage()
      cy.formOperation("fill", basicInformationSelectors.form, user.data)
    })

