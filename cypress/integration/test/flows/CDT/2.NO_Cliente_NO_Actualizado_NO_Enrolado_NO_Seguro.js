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

    cy.MockWs(userConditions)
    cy.FillHomePage(flowConditions.environment)
    cy.pause(true)
    cy.FillCDTConfigurationPage(flowConditions.environment)
    cy.WaitLoader()
    cy.AcceptPep()
    cy.pause(true)
    cy.ConfigCdt()
    cy.OtpAuthentication()
    cy.PersonalInformation(userConditions.scr)
    cy.SelectActivity('Empleado', userConditions.scr)
    cy.WaitLoader()
    cy.FillContactForm('Empleado', userConditions.scr)
    cy.pause(true)
    if (flowConditions.accountType == 'DIGITAL') {
      cy.SelectForeignData(userConditions.scr)
       cy.get('#activeExpensesInput').type('2000000')
       cy.get('#passiveExpensesInput').type('2000000')
       cy.get('#monthlyExpensesInput').type('2000000')
       cy.get('#monthlyIncomeInput').type('2000000')
      cy.SelectFinancialInformation(false, userConditions.scr)
    }
    cy.AccountConfiguration(pause)
    cy.WaitLoader()
    cy.pause(true)
    cy.FillSendAddress(userConditions.scr)
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.pause(true)
  })

})
