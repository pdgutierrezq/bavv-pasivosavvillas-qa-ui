describe('Sprint 77', function () {
  beforeEach(function () {
    cy.server()
  })
  it('PBA-3717 - CDT - Cliente PEP', function () {
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
      pep:false
    };

    cy.MockWs(userConditions)
    cy.FillHomePage(flowConditions.environment)
    cy.pause(true)
    cy.FillCDTConfigurationPage(flowConditions.environment)
    cy.waitLoader()
    cy.AcceptPep()
    cy.pause(true)
    //cy.ScreenShot(userConditions.scr)
    cy.waitLoader()

    cy.SelectAccount(flowConditions.accountType, flowConditions.gmf,
        userConditions.scr)

    cy.Pause(userConditions.pause)

    cy.AcceptInsurance(flowConditions.insurance, userConditions.scr)
    cy.waitLoader()
    cy.pause(true)
    cy.OtpAuthentication(userConditions.scr)

    // cy.SelectActivity('Empleado', userConditions.scr)
    cy.waitLoader()
    // cy.FillContactForm('Empleado', userConditions.scr)
    // if (flowConditions.accountType == 'DIGITAL') {
    //   cy.SelectForeignData(userConditions.scr)
    //   cy.SelectFinancialInformation(false, userConditions.scr)
    // }
    cy.pause(true)
    cy.FillSendAddress(userConditions.scr)
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.ElectronicSignature()
    cy.waitLoader()
    cy.pause(true)
  })

})
