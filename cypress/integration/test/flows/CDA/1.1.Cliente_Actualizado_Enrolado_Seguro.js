import {CONDITION} from "../../../../support/entities/properties/customer/conditions";
import {User} from "../../../../support/entities/user";
import {ACCOUNTS} from "../../../../support/entities/properties/customer/accounts";
import {INSURANCE} from "../../../../support/entities/properties/customer/insurance";
import {RECAPTCHA} from "../../../../support/entities/properties/security/recaptcha";
import {RECAPTCHA_SERVICE} from "../../../../support/services/security/recaptcha";

describe('CDA', function () {
  beforeEach(function () {
    cy.server()
  })
  it('Cliente Actualizado,Enrolado,CON Seguro', function () {
    let user = new User(CONDITION.CLIENT.UPDATED,ACCOUNTS.CAT.NO,INSURANCE.YES)
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

    cy.MockWs(userConditions,user,RECAPTCHA.OK)
    cy.FillForm(flowConditions.environment, userConditions.scr)
    cy.WaitLoader()
    cy.AcceptPep()
    //cy.ScreenShot(userConditions.scr)
    cy.WaitLoader()
    cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)
    cy.OtpAuthentication(userConditions.scr)
    cy.WaitLoader()
    cy.FillSendAddress()
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.ElectronicSignature()
    cy.WaitLoader()
    cy.SavingTips()
  })
})
