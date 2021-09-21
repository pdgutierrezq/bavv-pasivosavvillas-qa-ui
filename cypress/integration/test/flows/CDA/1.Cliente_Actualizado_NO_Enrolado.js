describe('Sprint 77', function () {
  beforeEach(function () {
    cy.server()
  })
  it('PBA-3433 - CDA - Cliente Actualizado NO Enrolado', function () {
    var pause = false;
    var flowConditions = {
      scr: false,
      accountType: 'DIGITAL',
      insurance: 'No',
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
    cy.pause(true)
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
