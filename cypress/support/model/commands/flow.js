import {Fixtures} from "../../schema/fixtures";

let data
before(() => {
  cy.server()
  data = Fixtures.getInstance()
});

Cypress.Commands.add("executeFlow",
    (app,flow) => {
      cy.setMocks(app.DEFAULT.mocks)
      cy.setMocks(flow.mocks)
      cy.visit(app.URL)
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
