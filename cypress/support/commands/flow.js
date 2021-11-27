import {Fixtures} from "../data/fixtures";
import {tipsSelectors} from "../../selectors/pages/tips";
import {insuranceSelectors} from "../../selectors/pages/insurance";

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
      cy.fillCommonPage(data.insurancePage, insuranceSelectors.form, true)
      cy.fillOtpPage(data.otpPage)
      cy.fillCardPage(data.cardPage)
      cy.fillDeclaringPage(data.declaringPage)
      cy.fillSignaturePage(data.signaturePage)
      cy.fillCommonPage(data.tipsPage, tipsSelectors.form, false)
    })
