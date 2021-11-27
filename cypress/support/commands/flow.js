import {Fixtures} from "../data/fixtures";

let data,homeUrl
before(() => {
  cy.server()
  data = Fixtures.getInstance()
  homeUrl = Cypress.env().list[0].cda.baseUrl
});

Cypress.Commands.add("executeFlow",
    (user, flow) => {
      cy.setMocks(user, flow)
      cy.visit(homeUrl)
      cy.fillPage(data.home)
      cy.fillPage(data.basicInformation)
      cy.fillPage(data.pep)
      cy.fillPage(data.account)
      cy.fillPage(data.insurance)
      cy.fillPage(data.otp)
      cy.fillPage(data.card)
      cy.fillPage(data.confirmDeliveryAddressPopup)
      cy.fillPage(data.declaring)
      cy.fillPage(data.signature)
      cy.fillPage(data.tips)
    })
