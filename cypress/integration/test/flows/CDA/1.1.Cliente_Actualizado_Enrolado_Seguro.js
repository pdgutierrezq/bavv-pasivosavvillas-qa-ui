import {CONDITION} from "../../../../support/entities/properties/customer/conditions";
import {User} from "../../../../support/entities/user";
import {Flow} from "../../../../support/entities/flow";
import {ACCOUNTS} from "../../../../support/entities/properties/customer/accounts";
import {INSURANCE} from "../../../../support/entities/properties/customer/insurance";
import {RECAPTCHA} from "../../../../support/entities/properties/security/recaptcha";
import {OTP} from "../../../../support/entities/properties/security/user/identity/otp";
import {CRM} from "../../../../support/entities/properties/customer/crm/update";

describe('CDA', function () {
  beforeEach(function () {
    cy.server()
  })
  it('Cliente Actualizado,Enrolado,CON Seguro', function () {
    let user = new User(CONDITION.CLIENT.UPDATED, ACCOUNTS.CAT.NO,
        INSURANCE.YES)
    let flow = new Flow(RECAPTCHA.OK, OTP.CREATE.OK, OTP.VALIDATE.OK,CRM.OK)
    cy.log("User condition:" + user.condition)
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
    cy.FillForm(flowConditions.environment, userConditions.scr)
    cy.WaitLoader()
    cy.AcceptPep()
    //cy.ScreenShot(userConditions.scr)
    cy.WaitLoader()
    cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)
    cy.OtpAuthentication(userConditions.scr,flow)
    cy.WaitLoader()
    cy.FillSendAddress()
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.ElectronicSignature()
    cy.WaitLoader()
    cy.SavingTips()
  })
})
