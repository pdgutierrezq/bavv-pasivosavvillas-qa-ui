// <reference types="Cypress" />
// import { initServer } from "./server.js"

describe('Sprint 52', function () {
    beforeEach(function () {
        cy.server()
        cy.route('POST', '**/get-pdf').as('postUser')

    })
    it('control  otp cda', function () {
        var userConditions = { client: false, updated: false, cat: false,docs: 'Empleado'};
        var time = 0;
        cy.MockWs(userConditions)

        cy.FillForm('stg')
        cy.WaitLoader()
        cy.wait(time)

        cy.AcceptPep()
        //cy.WaitLoader()

        cy.SelectAccount('Digital',true)
       
    })

    it('PBA-1525 cda servicio  insurance falla cuenta simple', function () {
        var userConditions = { client: true, updated: true,channels:'FALSE'};
        var flowConditions = { accountType: 'Digital', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};
        var time = 0;

        cy.MockWs(userConditions)
        // Dado  el cliente está en la pantalla de PEP 
        cy.FillFormCDT()
        cy.WaitLoader()
        cy.wait(time)
        cy.AcceptPep()
        cy.wait(time)
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.get('.mat-radio-label').contains('Si').click()
        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.wait(time)

        cy.OtpAuthentication()
        cy.wait(time)

        cy.get('#mat-radio-9').click()
        cy.get('#mat-radio-11').click()
        //cy.wait(time)
        cy.get('#SubmitAccountSettingsForm').click()
        cy.get('.avv-btn-primary').click()
        cy.wait(time)

        cy.DeclaringOption(false)
    })

    it('Cdt rendimientos al vencimiento con renovacion auto', function () {
        var userConditions = { sds:'PASS',channels:'FALSE',client: true, updated: true, cat: false,summary:"x", insurance: 'false',getpdf:'PASS' };
        var time = 0;
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.WaitLoader()
        cy.wait(time)
        cy.AcceptPep()
        cy.wait(time)
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.wait(time)

        cy.get('#mat-radio-5').click()
        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.wait(time)

          cy.OtpAuthentication()
        cy.wait(time)

         cy.get('#mat-radio-9').click()
        cy.get('#mat-radio-11').click()
        //cy.wait(time)

        cy.get('#SubmitAccountSettingsForm').click()
        cy.get('.avv-btn-primary').click()

        cy.wait(time)

        cy.DeclaringOption(true)
        
        cy.get('.mat-checkbox-inner-container',{timeout:20000}).click()
        cy.get('#DigitalSignatureButton').click()
        cy.wait(20000)
    })
    
    it('Cdt rendimientos al vencimiento sin renovacion auto', function () {
        var userConditions = { sds:'PASS',channels:'FALSE',client: true, updated: true, cat: false,summary:"x", insurance: 'false',getpdf:'PASS' };
        var time = 4000;
        var pause = true;
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT(time)
        cy.WaitLoader()
cy.Pause(pause)
        // cy.wait(time)
        cy.AcceptPep()
        cy.pause()

        //cy.wait(time)
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('720')
        cy.get('#mat-select-1').click().get('mat-option').contains('Anual').click();
        cy.get('#mat-select-1').click().get('mat-option').contains('Anual').click();

         cy.get('.mat-radio-label').contains('No').click()
         //cy.wait(time)
         cy.pause()

        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        // cy.wait(time)
        cy.pause()


          cy.OtpAuthentication()
        // cy.wait(time)
        cy.pause()


         cy.get('#mat-radio-9').click()
        cy.get('#mat-radio-11').click()
        // cy.wait(time)
        cy.pause()


        cy.get('#SubmitAccountSettingsForm').click()
        // cy.wait(time)
        cy.pause()


        cy.get('.avv-btn-primary').click()

        // cy.wait(time)
        cy.pause()


        cy.DeclaringOption(true)
        
        cy.get('.mat-checkbox-inner-container',{timeout:20000}).click()
        cy.pause()

        cy.get('#DigitalSignatureButton').click()

        cy.get('.mat-form-field').first().type('1636')
        cy.xpath('(//mat-form-field)[5]').type('1636')
        cy.pause()

        cy.get('#ChannelEnrollmentButton').click()
    })
    
})