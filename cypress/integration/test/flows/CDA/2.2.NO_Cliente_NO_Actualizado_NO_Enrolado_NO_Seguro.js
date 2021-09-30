import ENUM from '../../../../support/enums'

describe('Sprint 77', function () {
  beforeEach(function () {
    cy.server()
  })
  it('PBA-3354 - CDA NO Cliente NO Actualizado NO Enrolado', function () {
    var pause = false;
    var app = ENUM.APP.CDA
    var flowConditions = {
      scr: false,
      accountType: 'DIGITAL',
      insurance: 'Si',
      gmf: false,
      environment: 'dev',
      activity:ENUM.ECONOMIC_ACTIVITY.PESIONADO,
      declaring: false,
      income:'1817057'
    };
    var userConditions = {
      captcha: 'ok',
      channels: 'FALSE',
      client: false,
      updated: false
    };

    cy.MockWs(userConditions)
    cy.FillForm(flowConditions.environment, userConditions.scr, pause)
    cy.WaitLoader()
    cy.AcceptPep()
    //cy.ScreenShot(userConditions.scr)
    cy.WaitLoader()

    cy.SelectAccount(flowConditions.accountType, flowConditions.gmf,
        userConditions.scr)

    cy.Pause(userConditions.pause)

    cy.AcceptInsurance(flowConditions.insurance, userConditions.scr)
    cy.WaitLoader()

    cy.OtpAuthentication(userConditions.scr)
    cy.PersonalInformation(app)
    cy.pause(true)
    cy.SelectActivity(flowConditions.activity, userConditions.scr)
    cy.WaitLoader()

    cy.FillContactForm(flowConditions.activity, userConditions.scr)
    if (flowConditions.accountType == 'DIGITAL') {
      cy.SelectForeignData(userConditions.scr)
       cy.get('#activeExpensesInput').type('2000000')
       cy.get('#passiveExpensesInput').type('2000000')
       cy.get('#monthlyExpensesInput').type('2000000')
       // cy.get('#monthlyIncomeInput').clear().type(flowConditions.income)
      cy.SelectFinancialInformation(false, userConditions.scr,false,flowConditions.income)
    }
    cy.FillSendAddress(userConditions.scr)
    cy.pause(true)
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.pause(true)
  })

})
