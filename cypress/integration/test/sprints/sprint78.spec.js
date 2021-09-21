
describe('Sprint 77', function () {
    beforeEach(function () {
        cy.server()
    })
    it('Cdt prueba de creacion de cdt con cuentas banco', function () {
        var userConditions = { captcha:'ok',client: true, updated: false, return: false ,channels: 'FALSE' };
        var pause = false;
        var flowConditions = {  environment: 'stg' ,declaring:true};

        cy.MockWs(userConditions)
         cy.FillFormCDT(flowConditions.environment, pause)
        cy.WaitLoader()
        cy.AcceptPep()
        cy.get('#Term').type('365')
        cy.Pause(pause)
        cy.get('#mat-radio-8 > .mat-radio-label').click()
        cy.get('#SubmitCDTForm').click()
        cy.WaitLoader()
        cy.Pause(pause)

        cy.OtpAuthentication()
        cy.Pause(pause)
         cy.SelectActivity('Empleado')
         cy.WaitLoader()
         cy.FillContactForm('Empleado')
         cy.SelectForeignData()
         cy.SelectFinancialInformation(false)
         //cy.AccountConfiguration(pause)
        //cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button:contains("Desde otro banco")').click()
         cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button').first().click()
         cy.get('[formcontrolname="accountSettingSecondGroup"]>.mat-radio-button').first().click()
        //cy.get('.profit-office>.mat-radio-button').click()
        // cy.Pause(pause)
        cy.get('#SubmitAccountSettingsForm').click()
        //cy.FillSendAddress()
                 cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.get('#CdtFeaturesButton').click()


        cy.DeclaringOption(flowConditions.declaring)
        cy.pause()

         cy.ElectronicSignature()
        cy.WaitLoader()

        //cy.SavingTips()
        // cy.get('[formcontrolname="bank"]').click()
        // cy.get('mat-option[role="option"]').first().click()

        // cy.get('.mat-radio-label').contains('Natural').click()
        // cy.get('#SubmitPseForm').click()
        // cy.get('#savingTipsButton',{timeout:20000}).should('be.enabled').click()


    })

})