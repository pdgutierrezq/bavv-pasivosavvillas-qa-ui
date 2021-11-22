describe('Sprint 77', function () {
  beforeEach(function () {
    cy.server()
  })
  it('CDT - Cliente Actualizado Enrolado', function () {
    var userConditions = {
      docs: 'Empleado',
      captcha: 'ok',
      client: true,
      updated: true
    };
    var pause = false;
    var flowConditions = {environment: 'dev', declaring: false};
    cy.MockWs(userConditions)
    cy.FillHomePage(flowConditions.environment)
    cy.FillCDTConfigurationPage(flowConditions.environment)
    cy.waitLoader()
    cy.AcceptPep()
    cy.ConfigCdt()
    cy.OtpAuthentication()
    cy.AccountConfiguration(pause)
    cy.waitLoader()
    cy.DeclaringOption(flowConditions.declaring, userConditions.scr)
    cy.Pause(true)
    cy.ElectronicSignature()
    cy.waitLoader()
    //  cy.SelectActivity('Empleado')
    //  cy.waitLoader()
    //  cy.Pause(pause)
    //  cy.FillContactForm('Empleado')
    //  cy.Pause(pause)
    //  cy.SelectForeignData()
    //  //cy.Pause(pause)
    //  cy.get('#activeExpensesInput').type('2000000')
    //  cy.get('#passiveExpensesInput').type('2000000')
    //  cy.get('#monthlyExpensesInput').type('2000000')
    //  cy.get('#monthlyIncomeInput').type('2000000')
    //  cy.SelectFinancialInformation(false)
    // cy.xpath('//mat-radio-button[@id="mat-radio-13"]').click()

//     cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button:contains("Desde otro banco")').click()
    // cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button').first().click()
    // cy.get('[formcontrolname="accountSettingSecondGroup"]>.mat-radio-button').first().click()
    //cy.get('.profit-office>.mat-radio-button').click()
    // cy.Pause(pause)
    // cy.get('#SubmitAccountSettingsForm').click()

    // cy.xpath('//div[@class="box-btn-submit"]').click()
    // cy.Pause(false)
    //  cy.get('#SubmitAccountSettingsForm').click()
    //  cy.Pause(pause)
    //  cy.get('.avv-btn-primary').click()
    //  cy.Pause(pause)
    //  cy.get('#CdtFeaturesButton').click()
    // cy.get('#DigitalSignatureCheck', {timeout: 20000}).click()
    // cy.xpath(
    //     '//div[@class="digital-signature-check-box"]//input[@id="CheckProductConditions-input"]').click()
    // cy.get('#CheckUnderConsent').click()
    // cy.Pause(pause)
    // cy.get('#DigitalSignatureButton').click()
  })

})
