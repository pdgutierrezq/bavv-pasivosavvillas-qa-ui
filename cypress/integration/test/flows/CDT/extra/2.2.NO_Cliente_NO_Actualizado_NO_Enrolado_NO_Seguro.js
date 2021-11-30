import {User} from "../../../../support/model/entities/user";
import {CONDITION} from "../../../../../support/model/entities/properties/customer/conditions";
import {ACCOUNTS} from "../../../../../support/model/entities/properties/customer/accounts";
import {INSURANCE} from "../../../../../support/model/entities/properties/customer/insurance";
import {Flow} from "../../../../support/model/entities/flow";
import {RECAPTCHA} from "../../../../../support/model/entities/properties/security/recaptcha";
import {OTP} from "../../../../../support/model/entities/properties/security/user/identity/otp";
import {CRM} from "../../../../../support/model/entities/properties/customer/crm/update";

describe('Sprint 77', function () {
  beforeEach(function () {
    cy.server()
  })
  it('CDT - NO Cliente NO Actualizado NO Enrolado', function () {
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
      client: false,
      updated: false
    };
    let user = new User(CONDITION.NO_CLIENT.NO_UPDATED, ACCOUNTS.CAT.NO,
        INSURANCE.NO)
    let flow = new Flow(RECAPTCHA.OK, OTP.CREATE.OK, OTP.VALIDATE.OK,CRM.OK)

    cy.setMocks( user, flow)
    cy.FillHomePage(flowConditions.environment)
    // cy.pause(true)
    cy.FillCDTConfigurationPage(flowConditions.environment)
    cy.waitLoader()
    cy.AcceptPep()
    // cy.pause(true)
    cy.ConfigCdt()
    cy.OtpAuthentication()
    cy.PersonalInformation(userConditions.scr)
    cy.SelectActivity('Empleado', userConditions.scr)
    cy.waitLoader()
    cy.FillContactForm('Empleado', userConditions.scr)
    // cy.pause(true)
    if (flowConditions.accountType == 'DIGITAL') {
      cy.SelectForeignData(userConditions.scr)
       cy.get('#activeExpensesInput').type('2000000')
       cy.get('#passiveExpensesInput').type('2000000')
       cy.get('#monthlyExpensesInput').type('2000000')
       cy.get('#monthlyIncomeInput').type('2000000')
      cy.SelectFinancialInformation(false, userConditions.scr)
    }
    cy.AccountConfiguration(pause)
    cy.waitLoader()
    // cy.pause(true)
    cy.FillSendAddress(userConditions.scr)
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    // cy.pause(true)
  })

})
