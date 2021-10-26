describe('CDA', function () {
  beforeEach(function () {
    cy.server()
  })
  it('Cliente Actualizado,Enrolado,CON Seguro,CON Cuenta CAT', function () {
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
      cat: true
    };

    cy.MockWs(userConditions)
    cy.FillForm(flowConditions.environment, userConditions.scr, true)
    cy.WaitLoader()
    cy.AcceptPep()
    //cy.ScreenShot(userConditions.scr)
    cy.WaitLoader()
    cy.SelectAccount(flowConditions.accountType, flowConditions.gmf, true)
    cy.OtpAuthentication(userConditions.scr,false)
    cy.WaitLoader()
    cy.FillSendAddress(true)
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.ElectronicSignature()
    cy.WaitLoader()
    cy.SavingTips()
  })

})
