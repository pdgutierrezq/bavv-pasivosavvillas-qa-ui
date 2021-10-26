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
      activity:ENUM.ECONOMIC_ACTIVITY.EMPLEADO,
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
        true)

    cy.Pause(userConditions.pause)

    cy.AcceptInsurance(flowConditions.insurance, userConditions.scr)
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
    cy.FillSendAddress(true)
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr,true)
    cy.pause(true)
  })

})
