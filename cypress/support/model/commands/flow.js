import {Fixtures} from "../../schema/fixtures";
import {FLOW} from "../../schema/flow";

let data, homeUrl
before(() => {
  cy.server()
  data = Fixtures.getInstance()
  homeUrl = Cypress.env().list[0].cda.baseUrl
});

Cypress.Commands.add("executeFlow",
    (flow) => {
      cy.setMocks(FLOW.DEFAULT.mocks)
      cy.setMocks(flow.mocks)
      cy.visit(homeUrl)
      cy.runPagesList(flow.phases)
    })

Cypress.Commands.add("runPagesList",
    (pagesLists) => {
      for (let pages of pagesLists) {
        for (let page of pages) {
          cy.fillPage(data[page.name])
        }
      }
    })

module.exports = {
  data
}
