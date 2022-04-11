// <reference types="Cypress" />
// import { initServer } from "./server.js"

describe('Sprint 73', function () {
    beforeEach(function () {
        cy.server()
    })

    it('Cdt prueba de creacion de cdt rendimientos en oficina', function () {
        var userConditions = { captcha:'ok',client: true, updated: true, return: false ,channels:'TRUE'};
        var pause = true;
        var flowConditions = {  environment: 'stg' ,declaring:true,userType:'sin cuentas'};

        cy.setMocks(userConditions)
         cy.FillFormCDT(flowConditions.environment, pause)
        cy.waitLoader()
        cy.AcceptPep()
        cy.get('#Term').type('365')
        cy.Pause(pause)
        cy.get('#mat-radio-8 > .mat-radio-label').click()

        cy.get('#SubmitCDTForm').click()
        cy.waitLoader()
        cy.Pause(pause)

        cy.OtpAuthentication()
        cy.Pause(pause)

        cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button:contains("Desde otro banco")').click()
        cy.xpath('//mat-radio-button[contains(.,"Digital")]').click()
        // cy.Pause(pause)
        cy.Pause(pause)

        cy.get('#SubmitAccountSettingsForm').click()
        cy.FillSendAddress()
        cy.Pause(pause)

        cy.get('#CdtFeaturesButton').click()


        cy.DeclaringOption(flowConditions.declaring)
        cy.waitLoader()

         cy.ElectronicSignature()
        cy.waitLoader()

        cy.SavingTips()
        // cy.get('[formcontrolname="bank"]').click()
        // cy.get('mat-option[role="option"]').first().click()

        // cy.get('.mat-radio-label').contains('Natural').click()
        // cy.get('#SubmitPseForm').click()
        // cy.get('#savingTipsButton',{timeout:20000}).should('be.enabled').click()


    })
    it('Cdt prueba de creacion de cdt rendimientos en oficina', function () {
        var userConditions = { captcha:'ok',client: true, updated: true, return: false ,channels:'TRUE'};
        var pause = false;
        var flowConditions = {  environment: 'stg' ,declaring:true,userType:'sin cuentas'};

        cy.setMocks(userConditions)
         cy.FillFormCDT(flowConditions.environment, pause,flowConditions.userType)
        cy.waitLoader()
        cy.AcceptPep()
        cy.get('#Term').type('365')
        cy.Pause(pause)
        cy.get('#mat-radio-8 > .mat-radio-label').click()
        cy.get('#SubmitCDTForm').click()
        cy.waitLoader()
        cy.Pause(pause)

        cy.OtpAuthentication()
        cy.Pause(pause)

        cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button:contains("Desde otro banco")').click()
        cy.xpath('//mat-radio-button[contains(.,"Recoger")]').click()
        // cy.Pause(pause)
        cy.get('#SubmitAccountSettingsForm').click()
       
        cy.get('#CdtFeaturesButton').click()


        cy.DeclaringOption(flowConditions.declaring)
        cy.waitLoader()

         cy.ElectronicSignature()
        cy.waitLoader()

        cy.SavingTips()
        // cy.get('[formcontrolname="bank"]').click()
        // cy.get('mat-option[role="option"]').first().click()

        // cy.get('.mat-radio-label').contains('Natural').click()
        // cy.get('#SubmitPseForm').click()
        // cy.get('#savingTipsButton',{timeout:20000}).should('be.enabled').click()


    })
    it('Cdt prueba de creacion de cdt abriendo cuenta', function () {
        var userConditions = { captcha:'ok',client: true, updated: true, return: false };
        var pause = false;
        var flowConditions = {  environment: 'stg' ,declaring:true};

        cy.setMocks(userConditions)
         cy.FillFormCDT(flowConditions.environment, pause)
        cy.waitLoader()
        cy.AcceptPep()
        cy.get('#Term').type('365')
        cy.Pause(pause)
        cy.get('#mat-radio-8 > .mat-radio-label').click()
        cy.get('#SubmitCDTForm').click()
        cy.waitLoader()
        cy.Pause(pause)

        cy.OtpAuthentication()
        cy.Pause(pause)

        cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button').first().click()
        cy.get('.profit-office>.mat-radio-button').click()
        // cy.Pause(pause)
        cy.get('#SubmitAccountSettingsForm').click()
        cy.get('.avv-btn-primary').click()
        cy.waitLoader()


        cy.FillSendAddress()
       
        cy.get('#CdtFeaturesButton').click()


        cy.DeclaringOption(flowConditions.declaring)
        cy.waitLoader()

         cy.ElectronicSignature()
        cy.waitLoader()

        cy.SavingTips()
        // cy.get('[formcontrolname="bank"]').click()
        // cy.get('mat-option[role="option"]').first().click()

        // cy.get('.mat-radio-label').contains('Natural').click()
        // cy.get('#SubmitPseForm').click()
        // cy.get('#savingTipsButton',{timeout:20000}).should('be.enabled').click()


    })
    it('Cdt prueba de creacion de cdt con cuentas banco', function () {
        var userConditions = { captcha:'ok',client: true, updated: true, return: false };
        var pause = false;
        var flowConditions = {  environment: 'stg' ,declaring:true};

        cy.setMocks(userConditions)
         cy.FillFormCDT(flowConditions.environment, pause)
        cy.waitLoader()
        cy.AcceptPep()
        cy.get('#Term').type('365')
        cy.Pause(pause)
        cy.get('#mat-radio-8 > .mat-radio-label').click()
        cy.get('#SubmitCDTForm').click()
        cy.waitLoader()
        cy.Pause(pause)

        cy.OtpAuthentication()
        cy.Pause(pause)
        // cy.SelectActivity('Empleado')
        // cy.waitLoader()
        // cy.FillContactForm('Empleado')
        // cy.SelectForeignData()
        // cy.SelectFinancialInformation(false)
        // // cy.AccountConfiguration(pause)
        //cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button:contains("Desde otro banco")').click()
         cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button').first().click()
         cy.get('[formcontrolname="accountSettingSecondGroup"]>.mat-radio-button').first().click()
        //cy.get('.profit-office>.mat-radio-button').click()
        // cy.Pause(pause)
        cy.get('#SubmitAccountSettingsForm').click()
        //cy.FillSendAddress()
                 cy.get('.avv-btn-primary').click()
        cy.waitLoader()
        cy.get('#CdtFeaturesButton').click()


        cy.DeclaringOption(flowConditions.declaring)
        cy.waitLoader()

         cy.ElectronicSignature()
        cy.waitLoader()

        cy.SavingTips()
        // cy.get('[formcontrolname="bank"]').click()
        // cy.get('mat-option[role="option"]').first().click()

        // cy.get('.mat-radio-label').contains('Natural').click()
        // cy.get('#SubmitPseForm').click()
        // cy.get('#savingTipsButton',{timeout:20000}).should('be.enabled').click()


    })

    it('Cdt prueba de creacion de cuenta con pse', function () {
        var userConditions = { captcha:'ok',client: true, updated: true, return: false };
        var pause = false;
        var flowConditions = {  environment: 'stg' ,declaring:true};

        cy.setMocks(userConditions)
         cy.FillFormCDT(flowConditions.environment, pause)
        cy.waitLoader()
        cy.AcceptPep()
        cy.get('#Term').type('365')
        cy.Pause(pause)
        cy.get('#mat-radio-8 > .mat-radio-label').click()
        cy.get('#SubmitCDTForm').click()
        cy.waitLoader()
        cy.Pause(pause)

        cy.OtpAuthentication()
        cy.Pause(pause)
        // cy.SelectActivity('Empleado')
        // cy.waitLoader()
        // cy.FillContactForm('Empleado')
        // cy.SelectForeignData()
        // cy.SelectFinancialInformation(false)
        // // cy.AccountConfiguration(pause)
        cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button:contains("Desde otro banco")').click()
        // cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button').first().click()
         cy.get('[formcontrolname="accountSettingSecondGroup"]>.mat-radio-button').first().click()
        //cy.get('.profit-office>.mat-radio-button').click()
        // cy.Pause(pause)
        cy.get('#SubmitAccountSettingsForm').click()
       // cy.FillSendAddress()
        //         cy.get('.avv-btn-primary').click()
        cy.waitLoader()
        cy.get('#CdtFeaturesButton').click()


        cy.DeclaringOption(flowConditions.declaring)
        cy.waitLoader()

         cy.ElectronicSignature()
        cy.waitLoader()

        cy.get('[formcontrolname="bank"]').click()
        cy.get('mat-option[role="option"]').first().click()

        cy.get('.mat-radio-label').contains('Natural').click()
        cy.get('#SubmitPseForm').click()
        // cy.get('#savingTipsButton',{timeout:20000}).should('be.enabled').click()


    })
    it('Cda ', function () {
        var pause = false;
        var flowConditions = { scr:false,accountType: 'DIGITAL', insurance: 'Si', gmf: false, declaring: false, environment: 'stg' };
        var userConditions = { docs:'Empleado',captcha:'ok',client: true, updated: false };

        cy.setMocks(userConditions)
        cy.fillBasicInformationPage(flowConditions.environment,userConditions.scr,pause)
        cy.waitLoader()
        cy.AcceptPep()
        //cy.ScreenShot(userConditions.scr)
        cy.waitLoader()

        cy.SelectAccount(flowConditions.accountType, flowConditions.gmf,userConditions.scr)
        cy.Pause(userConditions.pause)
    
        //cy.AcceptInsurance(flowConditions.insurance,userConditions.scr)
        //cy.waitLoader()
        cy.OtpAuthentication(userConditions.scr)
    
         cy.SelectActivity('Empleado',userConditions.scr)
         cy.waitLoader()
         cy.FillContactForm('Empleado',userConditions.scr)
         if (flowConditions.accountType == 'DIGITAL') {
             cy.SelectForeignData(userConditions.scr)
             cy.SelectFinancialInformation(false,userConditions.scr)
         }
         cy.FillSendAddress(userConditions.scr)
         cy.DeclaringOption(flowConditions.declaring,userConditions.scr)
    
    
    })
  

})
