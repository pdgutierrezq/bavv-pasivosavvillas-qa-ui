// <reference types="Cypress" />
// import { initServer } from "./server.js"

describe('Sprint 61', function () {
    beforeEach(function () {
        cy.server()


    })

    it.only('Cda ', function () {
        var userConditions = {
            scr: false,
            pause: false,
            sds: 'PASS',
            channels: 'TRUE',
            client: true,
            updated: true,
            cat: false,
            summary: "x",
            insurance: 'false',
            getpdf: 'PASS'
        };
        var pause = false;
        var flowConditions = { scr:true,accountType: 'DIGITAL', insurance: 'Si', gmf: false, declaring: false, environment: 'stg' };
        
        cy.MockWs(userConditions)
        cy.fillBasicInformationPage(flowConditions.environment,userConditions.scr,pause)
        cy.WaitLoader()
        cy.AcceptPep()
        //cy.ScreenShot(userConditions.scr)
        cy.SelectAccount(flowConditions.accountType, flowConditions.gmf,userConditions.scr)
        cy.Pause(userConditions.pause)

        cy.AcceptInsurance(flowConditions.insurance,userConditions.scr)
        //cy.WaitLoader()
        cy.OtpAuthentication(userConditions.scr)

        // cy.SelectActivity('Empleado',userConditions.scr)
        // cy.WaitLoader()
        // cy.FillContactForm('Empleado',userConditions.scr)
        // if (flowConditions.accountType == 'DIGITAL') {
        //     cy.SelectForeignData(userConditions.scr)
        //     cy.SelectFinancialInformation(false,userConditions.scr)
        // }
        // cy.FillSendAddress(userConditions.scr)
        // cy.DeclaringOption(flowConditions.declaring,userConditions.scr)
        // cy.ElectronicSignature(userConditions.scr)

        // if (userConditions.channels) {
        //     cy.SavingTips(userConditions.scr)
        // } else {
        //     cy.get('#mat-input-16').type('1636')
        //     cy.get('#mat-input-20').type('1636')
        //     cy.ScreenShot(userConditions.scr)
        //     cy.get('#ChannelEnrollmentButton').click()
        // }
        // cy.WaitLoader()
        // cy.ScreenShot(userConditions.scr)


    })

    it('Cdt ', function () {
        var userConditions = { sds: 'PASS', channels: 'TRUE', client: true, updated: false, cat: false, summary: "x", insurance: 'false', getpdf: 'PASS' };
        var pause = true;
        var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false, environment: 'stg' };

        cy.MockWs(userConditions)
        cy.FillFormCDT(pause)
        cy.WaitLoader()
        cy.Pause(pause)
        cy.AcceptPep()
        cy.get('#Amount').type('90000').tab()
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

        cy.get('#mat-radio-9').click()
        cy.get('#mat-radio-10').click()
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
        cy.get('#mat-input-17').type('1636')
        cy.get('#mat-input-21').type('1636')
        cy.Pause(pause)

        cy.get('#ChannelEnrollmentButton').click()
        cy.Pause(pause)
        cy.get('#savingTipsButton', { timeout: 30000 }).should('be.enabled')
        cy.get('#savingTipsButton').click()
    })
})
