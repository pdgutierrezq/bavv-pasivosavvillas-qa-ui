describe('CDA', function () {
  beforeEach(function () {
    cy.server()
  })
  it('Cliente Actualizado,Enrolado,SIN Seguro', function () {
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
      insurance: 'false',
      cat: false
    };

    cy.MockWs(userConditions)
    cy.FillBasicInformationPage(flowConditions.environment, userConditions.scr)
    cy.WaitLoader()
    cy.AcceptPep()
    //cy.ScreenShot(userConditions.scr)
    cy.WaitLoader()
    cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)
    cy.AcceptInsurance(flowConditions.insurance)
    cy.WaitLoader()
    cy.OtpAuthentication(userConditions.scr)
    cy.WaitLoader()
    cy.FillSendAddress()
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.ElectronicSignature()
    cy.WaitLoader()
    cy.SavingTips()
  })
})
