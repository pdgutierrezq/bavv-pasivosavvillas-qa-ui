import {Fixtures} from "../base/fixtures";
import {FLOW} from "../base/flow";

let data, homeUrl
before(() => {
  cy.server()
  data = Fixtures.getInstance()
  homeUrl = Cypress.env().list[0].cda.baseUrl
});

Cypress.Commands.add("executeFlow",
    (user, flow) => {
      cy.setMocks(user, flow)
      cy.visit(homeUrl)
      cy.runPagesList(FLOW.BASIC.INITIAL,FLOW.INSURANCE,FLOW.BASIC.FINAL)
    })

Cypress.Commands.add("runPagesList",
    (...pagesLists) => {
      for (let pages of pagesLists) {
        for (let page of pages) {
          cy.fillPage(data[page.name])
        }
      }
    })

module.exports = {
  data
}
