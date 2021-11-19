import {User} from "../../../../support/entities/user";
import {CONDITION} from "../../../../support/entities/properties/customer/conditions";
import {ACCOUNTS} from "../../../../support/entities/properties/customer/accounts";
import {INSURANCE} from "../../../../support/entities/properties/customer/insurance";
import {Flow} from "../../../../support/entities/flow";
import {RECAPTCHA} from "../../../../support/entities/properties/security/recaptcha";
import {OTP} from "../../../../support/entities/properties/security/user/identity/otp";
import {CRM} from "../../../../support/entities/properties/customer/crm/update";
import {READE_ACTIVE_CHANNELS_SERVICE} from "../../../../support/services/customer/channels/read";

describe('CDA', function () {
  beforeEach(function () {
    cy.server()
  })
  it('Cliente Actualizado,NO Enrolado,SIN Seguro', function () {
    var pause = false;
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
      channels: 'FALSE',
      client: true,
      updated: true
    };
    let user = new User(CONDITION.CLIENT.UPDATED, ACCOUNTS.CAT.NO,
        INSURANCE.NO,READE_ACTIVE_CHANNELS_SERVICE.RESPONSE.FALSE)
    let flow = new Flow(RECAPTCHA.OK, OTP.CREATE.OK, OTP.VALIDATE.OK,CRM.OK)
    cy.MockWs(userConditions, user, flow)
    cy.FillForm(flowConditions.environment, userConditions.scr)
    cy.WaitLoader()
    cy.AcceptPep()
    //cy.ScreenShot(userConditions.scr)
    cy.WaitLoader()
    cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)
    cy.AcceptInsurance(flowConditions.insurance)
    cy.WaitLoader()
    cy.OtpAuthentication(userConditions.scr)
    cy.WaitLoader()
    cy.FillSendAddress()
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.ElectronicSignature()
    cy.enroll()
  })

})
