describe('Sprint 77', function () {
  beforeEach(function () {
    cy.server()
  })
  it('Cda ', function () {
    var pause = false;
    var flowConditions = {
      scr: false,
      accountType: 'DIGITAL',
      insurance: 'Si',
      gmf: false,
      declaring: false,
      environment: 'stg'
    };
    var userConditions = {
      captcha: 'ok',
      channels: 'FALSE',
      client: true,
      updated: true
    };

    cy.MockWs(userConditions)
    cy.FillBasicInformationPage(flowConditions.environment, userConditions.scr, pause)
    cy.WaitLoader()
    cy.AcceptPep()
    //cy.ScreenShot(userConditions.scr)
    cy.WaitLoader()

    cy.SelectAccount(flowConditions.accountType, flowConditions.gmf,
        userConditions.scr)

    cy.Pause(userConditions.pause)

    cy.AcceptInsurance(flowConditions.insurance, userConditions.scr)
    cy.WaitLoader()
    cy.pause(true)
    cy.OtpAuthentication(userConditions.scr)

    cy.SelectActivity('Empleado', userConditions.scr)
    cy.WaitLoader()
    cy.FillContactForm('Empleado', userConditions.scr)
    if (flowConditions.accountType == 'DIGITAL') {
      cy.SelectForeignData(userConditions.scr)
      cy.SelectFinancialInformation(false, userConditions.scr)
    }
    cy.FillSendAddress(userConditions.scr)
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)

  })

})
