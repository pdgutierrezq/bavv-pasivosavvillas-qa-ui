
describe('Cargue de documentos CDA', function () {
    beforeEach(function () {
        cy.server()
    })
    it('Cda cargue con cedula', function () {
        var pause = false;
        var flowConditions = { scr:false,accountType: 'DIGITAL', insurance: 'Si', gmf: false, declaring: false, environment: 'stg' };
        var userConditions = {insurance:'false', captcha:'ok',client: false, updated: false };

        cy.setMocks(userConditions)
        cy.fillBasicInformationPage(flowConditions.environment,userConditions.scr,pause)
        cy.waitLoader()
        cy.AcceptPep(pause)
        //cy.ScreenShot(userConditions.scr)
        cy.waitLoader()

        cy.SelectAccount(flowConditions.accountType, flowConditions.gmf,userConditions.scr,pause)
        cy.AcceptInsurance(flowConditions.insurance, pause)
        cy.Pause(userConditions.pause)
    
        //cy.AcceptInsurance(flowConditions.insurance,userConditions.scr)
        //cy.waitLoader()
        cy.OtpAuthentication(userConditions.scr,pause)
    
         cy.SelectActivity('Empleado',userConditions.scr,pause)
         cy.waitLoader()
         cy.FillContactForm('Empleado',userConditions.scr,pause)

         if (flowConditions.accountType == 'DIGITAL') {
             cy.SelectForeignData(userConditions.scr,pause)
             cy.SelectFinancialInformation(false,userConditions.scr,pause)
         }
         cy.FillSendAddress(pause)
         cy.DeclaringOption(flowConditions.declaring,userConditions.scr,pause)
    
    })
    it.only('Cdt cargue con cedula', function () {
        var userConditions = { docs:'Empleado',captcha:'ok',client: false, updated: false };
        var pause = true;
        var flowConditions = {  environment: 'stg' ,declaring:true};

        cy.setMocks(userConditions)
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
         cy.Pause(pause)
 
         cy.get('.avv-btn-primary').click()
 
         cy.Pause(pause)
         cy.DeclaringOption(true)
 
         cy.get('#DigitalSignatureCheck', { timeout: 20000 }).click()
         cy.get('#CheckUnderConsent').click()
         cy.Pause(pause)
 
         cy.get('#DigitalSignatureButton').click()
        cy.pause()
    })

})
