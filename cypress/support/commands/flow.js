import {Fixtures} from "../data/fixtures";
import {tipsSelectors} from "../../selectors/pages/tips";
import {insuranceSelectors} from "../../selectors/pages/insurance";
import {signatureSelectors} from "../../selectors/pages/signature";
import {declaringSelectors} from "../../selectors/pages/declaring";
import {
  cardSelectors,
  confirmDevileryAddressPopupSelectors
} from "../../selectors/pages/card";
import {otpSelectors} from "../../selectors/pages/otp";
import {accountSelectors} from "../../selectors/pages/account";
import {pepSelectors} from "../../selectors/pages/pep";
import {basicInformationSelectors} from "../../selectors/pages/informationBasic";

let data
before(() => {
  cy.server()
  data = Fixtures.getInstance()
});

Cypress.Commands.add("executeFlow",
    (user, flow) => {
      cy.setMocks(user, flow)
      cy.fillHomePage(data.homePage)
      cy.fillCommonPage(data.basicInformationPage, basicInformationSelectors.form, true)
      cy.fillCommonPage(data.pepPage, pepSelectors.form, true)
      cy.fillCommonPage(data.accountPage, accountSelectors.form, true)
      cy.fillCommonPage(data.insurancePage, insuranceSelectors.form, true)
      cy.fillCommonPage(data.otpPage, otpSelectors.form, true)
      cy.fillCommonPage(data.cardPage, cardSelectors.form, false)
      cy.fillCommonPage(data.cardPage, confirmDevileryAddressPopupSelectors.form, false)
      cy.fillCommonPage(data.declaringPage, declaringSelectors.form, false)
      cy.fillCommonPage(data.signaturePage, signatureSelectors.form, true)
      cy.fillCommonPage(data.tipsPage, tipsSelectors.form, false)
    })
