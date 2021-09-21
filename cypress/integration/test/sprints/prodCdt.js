// <reference types="Cypress" />
// import { initServer } from "./server.js"

describe('Sprint 56 prod', function () {
    beforeEach(function () {
        cy.server()

    })


    it.only('Cdt rendimientos al vencimiento con renovacion auto', function () {
        var userConditions = { sds: 'PASS', channels: 'TRUE', client: true, updated: false, cat: false, summary: "x", insurance: 'false', getpdf: 'PASS' };
        var time = 0;
        var pause = true;
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT(pause)
        cy.WaitLoader()
        cy.Pause(pause)
        cy.AcceptPep()
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.Pause(pause)

        cy.get('#mat-radio-5').click()
        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.Pause(pause)

        cy.OtpAuthentication()
        cy.Pause(pause)

        cy.SelectActivity('Empleado')
        cy.WaitLoader()
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

        //cy.get('#mat-radio-9').click()
        //cy.get('#mat-radio-10').click()
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
        // cy.get('#mat-input-17').type('1636')
        // cy.get('#mat-input-21').type('1636')
        // cy.Pause(pause)

        // cy.get('#ChannelEnrollmentButton').click()   
        cy.Pause(pause)
        cy.get('#savingTipsButton', { timeout: 30000 }).should('be.enabled')
        cy.get('#savingTipsButton').click()
    })

})