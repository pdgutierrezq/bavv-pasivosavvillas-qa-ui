import ENUM from '../../../../support/enums'

describe('CDA', function () {
  beforeEach(function () {
    cy.server()
  })
  it('NO Cliente Actualizado,NO Enrolado,SIN Seguro', function () {
    var pause = false;
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

    cy.MockWs(userConditions)
    cy.FillForm(flowConditions.environment, userConditions.scr)
    cy.WaitLoader()
    cy.AcceptPep()
    //cy.ScreenShot(userConditions.scr)
    cy.WaitLoader()
    cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)
    cy.AcceptInsurance(flowConditions.insurance, true)
    cy.WaitLoader()
    cy.OtpAuthentication(userConditions.scr)
    cy.PersonalInformation(app)
    cy.SelectActivity(flowConditions.activity, userConditions.scr,false)
    cy.WaitLoader()

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
    cy.enroll(false)
    cy.WaitLoader()
    cy.SavingTips()
  })

})
