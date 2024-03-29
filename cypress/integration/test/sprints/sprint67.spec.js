// <reference types="Cypress" />
// import { initServer } from "./server.js"

describe('Sprint 67', function () {
    beforeEach(function () {
        cy.server()
    })
    //www.colserauto.com/sede

    it.only('Cdt Redirección a pantalla de PSE 2346 esc 1', function () {
        var userConditions = { captcha:'ok',client: true, updated: false };
        var pause = false;
        var flowConditions = {  environment: 'stg' };

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
        cy.SelectActivity('Empleado')
        cy.waitLoader()
        cy.FillContactForm('Empleado')
        // cy.SelectForeignData()
        // cy.SelectFinancialInformation(false)
        // // cy.AccountConfiguration(pause)
        // //cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button:contains("Desde otro banco")').click()
        // cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button').first().click()
        // cy.get('[formcontrolname="accountSettingSecondGroup"]>.mat-radio-button').first().click()
        // cy.Pause(pause)
        // cy.get('#SubmitAccountSettingsForm').click()
        //         cy.get('.avv-btn-primary').click()

        // cy.get('#CdtFeaturesButton').click()


        // cy.DeclaringOption(flowConditions.declaring)

        // cy.ElectronicSignature()

        // cy.get('#savingTipsButton',{timeout:20000}).should('be.enabled').click()


    })

    it('Cda ', function () {
        var pause = false;
        var flowConditions = { scr:false,accountType: 'DIGITAL', insurance: 'Si', gmf: false, declaring: false, environment: 'stg' };
        var userConditions = { captcha:'ok',client: true, updated: false };

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
