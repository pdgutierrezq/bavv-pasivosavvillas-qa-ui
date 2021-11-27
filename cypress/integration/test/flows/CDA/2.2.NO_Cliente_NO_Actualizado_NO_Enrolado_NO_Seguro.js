import ENUM from '../../../../support/schema/user'
import {User} from "../../../../support/model/entities/user";
import {CONDITION} from "../../../../support/model/entities/properties/customer/conditions";
import {ACCOUNTS} from "../../../../support/model/entities/properties/customer/accounts";
import {INSURANCE} from "../../../../support/model/entities/properties/customer/insurance";
import {READE_ACTIVE_CHANNELS_SERVICE} from "../../../../support/model/services/customer/channels/read";
import {Flow} from "../../../../support/model/entities/flow";
import {RECAPTCHA} from "../../../../support/model/entities/properties/security/recaptcha";
import {OTP} from "../../../../support/model/entities/properties/security/user/identity/otp";
import {CRM} from "../../../../support/model/entities/properties/customer/crm/update";

describe('CDA', function () {
  beforeEach(function () {
    cy.server()
  })
  it('NO Cliente NO Actualizado NO Enrolado', function () {
    var pause = false;
    var app = ENUM.APP.CDA
    var flowConditions = {
      scr: false,
      accountType: 'DIGITAL',
      insurance: 'Si',
      gmf: false,
      activity:ENUM.ECONOMIC_ACTIVITY.EMPLEADO,
      declaring: false,
      income:'1817057',
      environment: 'dev'
    };
    var userConditions = {
      captcha: 'ok',
      channels: 'FALSE',
      client: false,
      updated: false
    };
    let user = new User(CONDITION.NO_CLIENT.NO_UPDATED, ACCOUNTS.CAT.NO,
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
    cy.PersonalInformation(app)
    cy.SelectActivity(flowConditions.activity, userConditions.scr)
    cy.waitLoader()

    cy.FillContactForm(flowConditions.activity, userConditions.scr)
    if (flowConditions.accountType == 'DIGITAL') {
      cy.SelectForeignData(userConditions.scr)
       cy.get('#activeExpensesInput').type('2000000')
       cy.get('#passiveExpensesInput').type('2000000')
       cy.get('#monthlyExpensesInput').type('2000000')
      cy.SelectFinancialInformation(false, userConditions.scr,true,flowConditions.income)
    }
    cy.FillSendAddress()
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.ElectronicSignature()
    cy.enroll()
    cy.waitLoader()
    cy.SavingTips()
  })

})
