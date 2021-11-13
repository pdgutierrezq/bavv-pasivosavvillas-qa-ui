import {CUSTOMER_CONDITION_SERVICE} from "../../services/customer-condition";

Cypress.Commands.add("CustomerConditions", (response) => {
  cy.mockService(CUSTOMER_CONDITION_SERVICE,response)
})
