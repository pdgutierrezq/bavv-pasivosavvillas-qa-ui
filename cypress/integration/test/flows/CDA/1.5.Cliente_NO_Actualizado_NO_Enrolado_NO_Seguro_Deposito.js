import ENUM from '../../../../support/enums'

describe('CDA', function () {
  beforeEach(function () {
    cy.server()
  })
  it('Cliente,NO Actualizado,NO Enrolado,No Seguro,Deposito', function () {
    var pause = false;
    var app = ENUM.APP.CDA
    var flowConditions = {
      scr: false,
      accountType: ENUM.ACCOUNT_TYPE.DEPOSIT,
      insurance: 'Si',
      gmf: false,
      activity:ENUM.ECONOMIC_ACTIVITY.EMPLEADO,
      declaring: false,
      income:'1817057',
      environment: 'dev'
    };
    var userConditions = {
      captcha: 'ok',
      channels: 'FALSE',
      client: true,
      updated: false
    };

    cy.setMocks(userConditions)
    cy.fillBasicInformationPage(flowConditions.environment, userConditions.scr)
    cy.waitLoader()
    cy.AcceptPep()
    //cy.ScreenShot(userConditions.scr)
    cy.waitLoader()
    cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)
    cy.AcceptInsurance(flowConditions.insurance)
    cy.waitLoader()
    cy.OtpAuthentication(userConditions.scr)
    cy.SelectActivity(flowConditions.activity, userConditions.scr)
    cy.waitLoader()
    cy.FillContactForm(flowConditions.activity, userConditions.scr)
    cy.FillSendAddress()
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.ElectronicSignature()
    cy.enroll()
    cy.waitLoader()
    cy.SavingTips()
  })

})
