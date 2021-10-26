describe('Sprint 77', function () {
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
      environment: 'dev'
    };
    var userConditions = {
      captcha: 'ok',
      channels: 'TRUE',
      client: true,
      updated: true,
      insurance:'true',
      cat: false
    };

    cy.MockWs(userConditions)
    cy.FillForm(flowConditions.environment, userConditions.scr, true)
    cy.WaitLoader()
    cy.AcceptPep()
    //cy.ScreenShot(userConditions.scr)
    cy.WaitLoader()
    cy.SelectAccount(flowConditions.accountType, flowConditions.gmf, true)
    cy.OtpAuthentication(userConditions.scr,false)

    // cy.SelectActivity('Empleado', userConditions.scr)
    cy.WaitLoader()
    // cy.FillContactForm('Empleado', userConditions.scr)
    // if (flowConditions.accountType == 'DIGITAL') {
    //   cy.SelectForeignData(userConditions.scr)
    //   cy.SelectFinancialInformation(false, userConditions.scr)
    // }
    cy.FillSendAddress(true)
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.ElectronicSignature()
    cy.WaitLoader()
    cy.SavingTips()
  })

})
