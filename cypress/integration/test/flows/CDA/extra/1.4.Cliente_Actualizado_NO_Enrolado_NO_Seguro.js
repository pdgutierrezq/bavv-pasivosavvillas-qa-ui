import {User} from "../../../../support/model/entities/user";
import {CONDITION} from "../../../../../support/model/entities/properties/customer/conditions";
import {ACCOUNTS} from "../../../../../support/model/entities/properties/customer/accounts";
import {INSURANCE} from "../../../../../support/model/entities/properties/customer/insurance";
import {Flow} from "../../../../support/model/entities/flow";
import {RECAPTCHA} from "../../../../../support/model/entities/properties/security/recaptcha";
import {OTP} from "../../../../../support/model/entities/properties/security/user/identity/otp";
import {CRM} from "../../../../../support/model/entities/properties/customer/crm/update";
import {READE_ACTIVE_CHANNELS_SERVICE} from "../../../../../support/model/services/customer/channels/read";

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
    cy.setMocks( user, flow)
    cy.fillBasicInformationPage(flowConditions.environment, userConditions.scr)
    cy.waitLoader()
    cy.AcceptPep()
    //cy.ScreenShot(userConditions.scr)
    cy.waitLoader()
    cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)
    cy.AcceptInsurance(flowConditions.insurance)
    cy.waitLoader()
    cy.OtpAuthentication(userConditions.scr)
    cy.waitLoader()
    cy.FillSendAddress()
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.ElectronicSignature()
    cy.enroll()
  })

})
