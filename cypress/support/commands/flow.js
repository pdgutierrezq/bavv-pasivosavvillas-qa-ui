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
      cy.fillHomePage(data.home)
      cy.fillPage(data.basicInformation, true)
      cy.fillPage(data.pep, true)
      cy.fillPage(data.account, true)
      cy.fillPage(data.insurance, true)
      cy.fillPage(data.otp, true)
      cy.fillPage(data.card, false)
      cy.fillPage(data.confirmDeliveryAddressPopup, false)
      cy.fillPage(data.declaring, false)
      cy.fillPage(data.signature, true)
      cy.fillPage(data.tips, false)
    })
