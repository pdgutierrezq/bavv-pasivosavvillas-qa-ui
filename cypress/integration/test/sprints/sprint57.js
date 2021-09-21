// <reference types="Cypress" />
// import { initServer } from "./server.js"

describe('Sprint 57', function () {
    beforeEach(function () {
        cy.server()
        cy.route('POST', '**/get-pdf').as('postUser')

    })
    it('cda', function () {
        var userConditions = { channels:'FALSE',updateCrm:'pass',client: false, updated: false, cat: false, docs: 'Pensionado',insurance:'fail'/*, generateUrl: 'fail'*/, sqs: 'fail' };
        var flowConditions = { accountType: 'DIGITAL', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        // Dado  el cliente está en la pantalla de PEP 
        cy.PerformFlow(userConditions,flowConditions)
    
    
    })
    it.only('Cdt precarga', function () {
        var userConditions = { sds: 'PASS', channels: 'TRUE', client: true, updated: true, cat: false, summary: "x", insurance: 'false', getpdf: 'PASS' };
        var time = 0;
        var pause = false;
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT(pause)
        cy.WaitLoader()
        cy.Pause(pause)
        cy.AcceptPep()
        cy.get('#Amount').type('10000')
        cy.get('#Term').type('365')
        cy.Pause(pause)

        cy.get('#mat-radio-5').click()
        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.Pause(pause)

        cy.OtpAuthentication()
        cy.Pause(pause)

        // cy.SelectActivity('Empleado')
        // cy.WaitLoader()
        // cy.Pause(pause)
        // cy.FillContactForm('Empleado')
        // cy.Pause(pause)
        // cy.SelectForeignData()
        // cy.Pause(pause)


        // cy.get('#activeExpensesInput').type('2000000')
        // cy.get('#passiveExpensesInput').type('2000000')
        // cy.get('#monthlyExpensesInput').type('2000000')
        // cy.get('#monthlyIncomeInput').type('2000000')
        // cy.SelectFinancialInformation(false)



        // cy.xpath('(//*[@formcontrolname="accountSettingFirstGroup"]//mat-radio-button[contains(*,"Cuenta")])[1]').click()
        // cy.xpath('(//*[@formcontrolname="accountSettingSecondGroup"]//mat-radio-button[contains(*,"Cuenta")])[1]').click()

        // //cy.get('#mat-radio-9').click()
        // //cy.get('#mat-radio-10').click()
        // cy.Pause(pause)

        // cy.get('#SubmitAccountSettingsForm').click()
        // cy.Pause(pause)

        // cy.get('.avv-btn-primary').click()

        // cy.Pause(pause)

        // cy.DeclaringOption(true)

        // cy.get('#DigitalSignatureCheck', { timeout: 20000 }).click()
        // cy.get('#CheckUnderConsent').click()
        // cy.Pause(pause)

        // cy.get('#DigitalSignatureButton').click()
        // // cy.get('#mat-input-17').type('1636')
        // // cy.get('#mat-input-21').type('1636')
        // // cy.Pause(pause)

        // // cy.get('#ChannelEnrollmentButton').click()   
        // cy.Pause(pause)
        // cy.get('#savingTipsButton', { timeout: 30000 }).should('be.enabled')
        // cy.get('#savingTipsButton').click()
    })

    it('Cdt pse', function () {
        var userConditions = { client: true, updated: true };
        var pause = true;
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT(pause)
        cy.WaitLoader()
        cy.Pause(pause)
        // cy.wait(time)
        cy.AcceptPep()
        cy.Pause(pause)

        //cy.wait(time)
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('720')
        cy.get('#mat-select-1').click().get('mat-option').contains('Anual').click();

        cy.get('.mat-radio-label').contains('No').click()
        //cy.wait(time)
        cy.Pause(pause)

        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        // cy.wait(time)
        cy.Pause(pause)
        cy.OtpAuthentication()

        

        //mock de get list bank
        // cy.route({
        //     method: 'GET',
        //     url: '**/pse-get-bank-list',
        //     status: 500,
        //     response: 'fixture:get-bank-list-fail.json'
        // })
        cy.Pause(pause)
        cy.get('a').click()

    })
    it('Cdt pse error', function () {
        var userConditions = { client: true, updated: true };
        var pause = true;
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT(pause)
        cy.WaitLoader()
        cy.Pause(pause)
        // cy.wait(time)
        cy.AcceptPep()
        cy.Pause(pause)

        //cy.wait(time)
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('720')
        cy.get('#mat-select-1').click().get('mat-option').contains('Anual').click();

        cy.get('.mat-radio-label').contains('No').click()
        //cy.wait(time)
        cy.Pause(pause)

        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        // cy.wait(time)
        cy.Pause(pause)
        cy.OtpAuthentication()

        

        //mock de get list bank
        cy.route({
            method: 'GET',
            url: '**/pse-get-bank-list',
            status: 500,
            response: 'fixture:get-bank-list-fail.json'
        })
        cy.Pause(pause)

        cy.get('a').click()

    })

})