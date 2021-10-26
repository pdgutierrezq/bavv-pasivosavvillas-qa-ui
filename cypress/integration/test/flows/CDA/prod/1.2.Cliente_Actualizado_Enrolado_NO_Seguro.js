describe('CDA', function () {
  beforeEach(function () {
    cy.server()
  })
  it('PBA-3433 - CDA - Cliente Actualizado NO Enrolado', function () {
    var pause = false;
    var flowConditions = {
      scr: false,
      accountType: 'DIGITAL',
      insurance: 'Si',
      gmf: false,
      declaring: false,
      environment: 'prod'
    };
    var userConditions = {
      captcha: 'ok',
      channels: 'TRUE',
      client: true,
      updated: true,
      insurance:'false'
    };

    cy.MockWs(userConditions)
    cy.FillForm(flowConditions.environment, userConditions.scr, pause)
    cy.WaitLoader()
    cy.AcceptPep()
    //cy.ScreenShot(userConditions.scr)
    cy.WaitLoader()
    cy.pause(true)
    cy.SelectAccount(flowConditions.accountType, flowConditions.gmf,
        userConditions.scr)

    cy.Pause(userConditions.pause)
    cy.pause(true)
    cy.AcceptInsurance(flowConditions.insurance, userConditions.scr)
    cy.WaitLoader()

    cy.OtpAuthentication(userConditions.scr)

    // cy.SelectActivity('Empleado', userConditions.scr)
    cy.WaitLoader()
    // cy.FillContactForm('Empleado', userConditions.scr)
    // if (flowConditions.accountType == 'DIGITAL') {
    //   cy.SelectForeignData(userConditions.scr)
    //   cy.SelectFinancialInformation(false, userConditions.scr)
    // }
    cy.pause(true)
    cy.FillSendAddress(userConditions.scr)
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.ElectronicSignature()
    cy.WaitLoader()
    cy.pause(true)
  })

})
