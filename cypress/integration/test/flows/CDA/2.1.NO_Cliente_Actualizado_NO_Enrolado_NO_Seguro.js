import ENUM from '../../../../support/enums'
import {User} from "../../../../support/entities/user";
import {CONDITION} from "../../../../support/entities/properties/customer/conditions";
import {ACCOUNTS} from "../../../../support/entities/properties/customer/accounts";
import {INSURANCE} from "../../../../support/entities/properties/customer/insurance";
import {Flow} from "../../../../support/entities/flow";
import {RECAPTCHA} from "../../../../support/entities/properties/security/recaptcha";
import {OTP} from "../../../../support/entities/properties/security/user/identity/otp";
import {CRM} from "../../../../support/entities/properties/customer/crm/update";

describe('CDA', function () {
  beforeEach(function () {
    cy.server()
  })
  it('NO Cliente Actualizado,NO Enrolado,SIN Seguro', function () {
    var app = ENUM.APP.CDA
    var flowConditions = {
      scr: false,
      accountType: 'DIGITAL',
      insurance: 'Si',
      gmf: false,
      activity:ENUM.ECONOMIC_ACTIVITY.EMPLEADO,
      declaring: false,
      environment: 'dev'
    };
    var userConditions = {
      captcha: 'ok',
      channels: 'FALSE',
      client: false,
      updated: true
    };
    let user = new User(CONDITION.NO_CLIENT.UPDATED, ACCOUNTS.CAT.NO,
        INSURANCE.NO)
    let flow = new Flow(RECAPTCHA.OK, OTP.CREATE.OK, OTP.VALIDATE.OK, CRM.OK)

    cy.MockWs(userConditions, user, flow)
    cy.fillBasicInformationPage()
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
