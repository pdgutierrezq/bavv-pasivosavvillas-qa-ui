import ENUM from "../../../../support/enums";

describe('Sprint 77', function () {
  beforeEach(function () {
    cy.server()
  })
  it('CDT - Cliente Actualizado Enrolado', function () {
    var app = ENUM.APP.CDT
    var userConditions = {
      docs: 'Empleado',
      captcha: 'ok',
      client: true,
      updated: true
    };
    var flowConditions = {environment: 'dev', declaring: false,       return: false,
      channels: 'FALSE'};
    cy.MockWs(userConditions)
    cy.FillHomePage()
    cy.FillCDTConfigurationPage(flowConditions.environment)
    cy.WaitLoader()
    cy.AcceptPep()
    cy.ConfigCdt()
    cy.OtpAuthentication()
    cy.AccountConfiguration()
    cy.WaitLoader()
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.ElectronicSignature(app)
    cy.WaitLoader()
    cy.SavingTips()
  })

})
