import ENUM from "../../../../support/schema/user";
import {User} from "../../../../support/model/entities/user";
import {CONDITION} from "../../../../support/model/entities/properties/customer/conditions";
import {ACCOUNTS} from "../../../../support/model/entities/properties/customer/accounts";
import {INSURANCE} from "../../../../support/model/entities/properties/customer/insurance";
import {Flow} from "../../../../support/model/entities/flow";
import {RECAPTCHA} from "../../../../support/model/entities/properties/security/recaptcha";
import {OTP} from "../../../../support/model/entities/properties/security/user/identity/otp";
import {CRM} from "../../../../support/model/entities/properties/customer/crm/update";
import {READE_ACTIVE_CHANNELS_SERVICE} from "../../../../support/model/services/customer/channels/read";

describe('Sprint 77', function () {
  beforeEach(function () {
    cy.server()
  })
  it('CDT - Cliente Actualizado Enrolado', function () {
    var app = ENUM.APP.CDT
    var userConditions = {
      docs: 'Empleado',
      captcha: 'ok',
      client: true,
      updated: true
    };
    let user = new User(
        CONDITION.CLIENT.UPDATED,
        ACCOUNTS.CAT.NO,
        INSURANCE.YES,
        READE_ACTIVE_CHANNELS_SERVICE.RESPONSE.OK)
    let flow = new Flow(
        RECAPTCHA.OK,
        OTP.CREATE.OK,
        OTP.VALIDATE.OK,
        CRM.OK)
    var flowConditions = {environment: 'dev', declaring: false,       return: false,
      channels: 'FALSE'};
    cy.setMocks( user, flow)
    cy.FillHomePage()
    cy.FillCDTConfigurationPage(flowConditions.environment)
    cy.waitLoader()
    cy.AcceptPep()
    cy.ConfigCdt()
    cy.OtpAuthentication()
    cy.AccountConfiguration()
    cy.waitLoader()
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.ElectronicSignature(app)
    cy.waitLoader()
    cy.SavingTips()
  })

})
