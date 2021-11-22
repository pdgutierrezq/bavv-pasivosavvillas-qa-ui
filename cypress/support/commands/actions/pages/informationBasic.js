import 'cypress-file-upload';
import {basicInformationSelectors} from "../../../../selectors/pages/informationBasic";

Cypress.Commands.add("fillBasicInformationPage",
    (data) => {
      cy.formOperation("fill", basicInformationSelectors.form,
          data)
      cy.waitLoader()
    })

