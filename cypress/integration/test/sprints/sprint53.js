// <reference types="Cypress" />
// import { initServer } from "./server.js"

describe('Sprint 53', function () {
    beforeEach(function () {
        cy.server()
        cy.route('POST', '**/get-pdf').as('postUser')

    })
   

    it('Cdt rendimientos al vencimiento con renovacion auto', function () {
        var userConditions = { sds:'PASS',channels:'TRUE',client: true, updated: true, cat: false,summary:"x", insurance: 'false',getpdf:'PASS' };
        var time = 0;
        var pause=false;
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.setMocks(userConditions)
        cy.FillFormCDT()
        cy.waitLoader()
        cy.Pause(pause)
        cy.AcceptPep()
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.Pause(pause)

        cy.get('#mat-radio-5').click()
        cy.get('.avv-btn-primary').click()
        cy.waitLoader()
        cy.Pause(pause)

          cy.OtpAuthentication()
          cy.Pause(pause)

         cy.get('#mat-radio-9').click()
        cy.get('#mat-radio-10').click()
        cy.Pause(pause)

        cy.get('#SubmitAccountSettingsForm').click()
        cy.Pause(pause)

        cy.get('.avv-btn-primary').click()

        cy.Pause(pause)

        cy.DeclaringOption(true)
        
        cy.get('.mat-checkbox-inner-container',{timeout:20000}).click()
        cy.Pause(pause)

        cy.get('#DigitalSignatureButton').click()
        // cy.get('#mat-input-17').type('1636')
        // cy.get('#mat-input-21').type('1636')
        // cy.Pause(pause)

        // cy.get('#ChannelEnrollmentButton').click()   
        cy.Pause(pause)
        cy.get('#savingTipsButton', { timeout: 30000 }).should('be.enabled')
        cy.get('#savingTipsButton').click()    })
    
    it('Cdt rendimientos al vencimiento sin renovacion auto', function () {
        var userConditions = { sds:'PASS',channels:'FALSE',client: true, updated: true, cat: false,summary:"x", insurance: 'false' };
        var time = 4000;
        var pause = false;
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.setMocks(userConditions)
        cy.FillFormCDT(time)
        cy.waitLoader()
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
        cy.waitLoader()
        // cy.wait(time)
        cy.Pause(pause)


          cy.OtpAuthentication()
        // cy.wait(time)
        cy.Pause(pause)


         cy.get('#mat-radio-9').click()
        cy.get('#mat-radio-10').click()
        // cy.wait(time)
        cy.Pause(pause)


        cy.get('#SubmitAccountSettingsForm').click()
        // cy.wait(time)
        cy.Pause(pause)


        cy.get('.avv-btn-primary').click()

        // cy.wait(time)
        cy.Pause(pause)


        cy.DeclaringOption(true)
        
        cy.get('.mat-checkbox-inner-container',{timeout:20000}).click()
        cy.Pause(pause)

        cy.get('#DigitalSignatureButton').click()

        cy.get('.mat-form-field').first().type('1636')
        cy.xpath('(//mat-form-field)[5]').type('1636')
        cy.Pause(pause)        
    

        cy.get('#ChannelEnrollmentButton').click()
    })
    
})
