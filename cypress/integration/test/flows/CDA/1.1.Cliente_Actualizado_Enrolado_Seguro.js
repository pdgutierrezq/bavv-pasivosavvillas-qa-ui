import {CONDITION} from "../../../../support/entities/properties/customer/conditions";
import {User} from "../../../../support/entities/user";
import {Flow} from "../../../../support/entities/flow";
import {ACCOUNTS} from "../../../../support/entities/properties/customer/accounts";
import {INSURANCE} from "../../../../support/entities/properties/customer/insurance";
import {RECAPTCHA} from "../../../../support/entities/properties/security/recaptcha";
import {OTP} from "../../../../support/entities/properties/security/user/identity/otp";
import {CRM} from "../../../../support/entities/properties/customer/crm/update";
import {Fixtures} from "../../../../support/data/fixtures";

describe('CDA', function () {
  let data
  before(() => {
    data = Fixtures.getInstance()
  });

  beforeEach(function () {
    cy.server()
  })
  it('Cliente Actualizado,Enrolado,CON Seguro', function () {
    let user = new User(CONDITION.CLIENT.UPDATED, ACCOUNTS.CAT.NO,
        INSURANCE.YES)
    let flow = new Flow(RECAPTCHA.OK, OTP.CREATE.OK, OTP.VALIDATE.OK, CRM.OK)
    var flowConditions = {
      scr: false,
      accountType: 'DIGITAL',
      insurance: 'Si',
      gmf: false,
      declaring: false,
      environment: 'dev'
    };
    var userConditions = {
      captcha: 'ok',
      channels: 'TRUE',
      client: true,
      updated: true,
      insurance: 'true',
      cat: false
    };

    cy.MockWs(userConditions, user, flow)
    cy.fillHomePage(data.homePage)
    cy.fillBasicInformationPage(data.basicInformationPage)
    cy.fillPepPage(data.pepPage)
    cy.fillAccountPage(data.accountPage)
    cy.fillOtpPage(data.otpPage)
    cy.fillCardPage(data.cardPage)
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.ElectronicSignature()
    cy.waitLoader()
    cy.SavingTips()
  })
})
