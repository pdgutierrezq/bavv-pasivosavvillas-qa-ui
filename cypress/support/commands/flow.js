import {Fixtures} from "../data/fixtures";

let data
before(() => {
  cy.server()
  data = Fixtures.getInstance()
});

Cypress.Commands.add("executeFlow",
    (user, flow) => {
      cy.setMocks(user, flow)
      cy.fillHomePage(data.homePage)
      cy.fillBasicInformationPage(data.basicInformationPage)
      cy.fillPepPage(data.pepPage)
      cy.fillAccountPage(data.accountPage)
      cy.fillOtpPage(data.otpPage)
      cy.fillCardPage(data.cardPage)
      cy.fillDeclaringPage(data.declaringPage)
      cy.fillSignaturePage(data.signaturePage)
      cy.fillTipsPage(data.tipsPage)
    })
