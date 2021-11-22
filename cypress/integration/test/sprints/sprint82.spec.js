
describe('Sprint 82', function () {
    beforeEach(function () {
        cy.server()
    })
    it.only('otp', function () {
        var userConditions = { docs:'no cc',captcha:'ok',client: true, updated: true };
        var pause = false;
        var flowConditions = {  environment: 'dev' ,declaring:true};

        cy.MockWs(userConditions)
         cy.FillFormCDT(flowConditions.environment, pause)
         cy.waitLoader()
         cy.AcceptPep()
         cy.get('#Term').type('365')
         cy.get('#mat-radio-8 > .mat-radio-label').click()
         cy.get('#SubmitCDTForm').click()
         cy.waitLoader()
         cy.OtpAuthentication()


    })
    it('otp fail', function () {
        var userConditions = { docs:'no cc',captcha:'ok',client: true, updated: true };
        var pause = false;
        var flowConditions = {  environment: 'dev' ,declaring:true};

        cy.MockWs(userConditions)
         cy.FillFormCDT(flowConditions.environment, pause)
         cy.waitLoader()
         cy.AcceptPep()
         cy.get('#Term').type('365')
         cy.get('#mat-radio-8 > .mat-radio-label').click()
         cy.get('#SubmitCDTForm').click()
         cy.waitLoader()

    })
    it.only('Cdt cargue con cedula', function () {
        var userConditions = { docs:'Empleado',captcha:'ok',client: true, updated: false };
        var pause = false;
        var flowConditions = {  environment: 'dev' ,declaring:true};

        cy.MockWs(userConditions)
         cy.FillFormCDT(flowConditions.environment, pause)
         cy.waitLoader()
         cy.AcceptPep()
         cy.get('#Term').type('365')
         cy.get('#mat-radio-8 > .mat-radio-label').click()
         cy.get('#SubmitCDTForm').click()
         cy.waitLoader()
 
         cy.OtpAuthentication()
         cy.Pause(pause)

         cy.SelectActivity('Empleado')
         cy.waitLoader()
         cy.Pause(pause)
         cy.FillContactForm('Empleado')
         cy.Pause(pause)
         cy.SelectForeignData()
         cy.Pause(pause)
 
 
         cy.get('#activeExpensesInput').type('2000000')
         cy.get('#passiveExpensesInput').type('2000000')
         cy.get('#monthlyExpensesInput').type('2000000')
         cy.get('#monthlyIncomeInput').type('2000000')
         cy.SelectFinancialInformation(false)
 
 
 
         cy.xpath('(//*[@formcontrolname="accountSettingFirstGroup"]//mat-radio-button[contains(*,"Cuenta")])[1]').click()
         cy.xpath('(//*[@formcontrolname="accountSettingSecondGroup"]//mat-radio-button[contains(*,"Cuenta")])[1]').click()
 
       
         cy.Pause(pause)
 
         cy.get('#SubmitAccountSettingsForm').click()
         cy.Pause(true)
 
         cy.get('.avv-btn-primary').click()
 
         cy.Pause(pause)
         cy.get('#CdtFeaturesButton').click()
         cy.DeclaringOption(true)
 
         cy.get('#DigitalSignatureCheck', { timeout: 20000 }).click()
         cy.get('#CheckUnderConsent').click()
         cy.Pause(pause)
 
         cy.get('#DigitalSignatureButton').click()
        cy.pause()
    })

})
