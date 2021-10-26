describe('CDA', function () {
  beforeEach(function () {
    cy.server()
  })
  it('Cliente Actualizado,NO Enrolado,SIN Seguro', function () {
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
      client: true,
      updated: true
    };

    cy.MockWs(userConditions)
    cy.FillForm(flowConditions.environment, userConditions.scr, true)
    cy.WaitLoader()
    cy.AcceptPep()
    //cy.ScreenShot(userConditions.scr)
    cy.WaitLoader()
    cy.SelectAccount(flowConditions.accountType, flowConditions.gmf, true)
    cy.AcceptInsurance(flowConditions.insurance, true)
    cy.WaitLoader()
    cy.OtpAuthentication(userConditions.scr)
    cy.WaitLoader()
    cy.FillSendAddress(true)
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.ElectronicSignature()
    cy.enroll(false)
    cy.WaitLoader()
    cy.SavingTips()
  })

})
