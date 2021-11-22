// <reference types="Cypress" />
// import { initServer } from "./server.js"

describe('Sprint 51', function () {
    beforeEach(function () {
        cy.server()
        cy.route('POST', '**/get-pdf').as('postUser')

    })
    it('Cdt flujo actualizado enrolamiento', function () {
        var userConditions = { channels:500,client: true, updated: true, cat: false,summary:"x", insurance: 'false', docs: 'Empleado'/*, generateUrl: 'fail'*/, sqs: 'fail' };
        var time = 0;
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.waitLoader()
        cy.wait(time)
        cy.AcceptPep()
        cy.wait(time)
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.wait(time)

        cy.get('#mat-radio-5').click()
        cy.get('.avv-btn-primary').click()
        cy.waitLoader()
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
        
        cy.get('.mat-checkbox-inner-container').click()
        cy.get('#DigitalSignatureButton').click()
    })
    it.only('contadcontrol otpor CDT', function () {
        var userConditions = { channels:'true',client: true, updated: true, cat: false, summary: "x", insurance: 'false', docs: 'Empleado'/*, generateUrl: 'fail'*/ };
        var time = 0;

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.waitLoader()
        cy.wait(time)
        cy.AcceptPep()
        cy.wait(time)
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.wait(time)
        cy.get('#mat-radio-5 > .mat-radio-label').click()
        cy.get('.avv-btn-primary').click()
        //cy.waitLoader()
        
        cy.get('.time-copy').should('contain','5:00')
        cy.wait(30000000)
       
    })
    it('contador CDT', function () {
        var userConditions = { otp:"PASS",client: true, updated: true, cat: false, summary: "x", insurance: 'false', docs: 'Empleado'/*, generateUrl: 'fail'*/ };
        var time = 0;

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.waitLoader()
        cy.wait(time)
        cy.AcceptPep()
        cy.wait(time)
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.wait(time)
        cy.get('#mat-radio-5 > .mat-radio-label').click()
        cy.get('.avv-btn-primary').click()
        //cy.waitLoader()
        cy.get('.time-copy').should('contain','5:00')
       
    })

    it('control  otp cda', function () {
        var userConditions = { client: true, updated: true, cat: false, summary: "x", insurance: 'false', docs: 'Empleado'/*, generateUrl: 'fail'*/ };
        var time = 0;
        cy.MockWs(userConditions)

        cy.fillBasicInformationPage('dev')
        cy.waitLoader()
        cy.wait(time)

        cy.AcceptPep()
        //cy.waitLoader()

        cy.SelectAccount('Digital',true)
        cy.wait(time)

        if (userConditions.insurance == 'false') {
        cy.AcceptInsurance('Si')
        }

        //cy.waitLoader()
        cy.wait(time)

        //cy.waitLoader()
        cy.get('.time-copy').should('contain','5:00')
       
    })

    it('contador cda', function () {
        var userConditions = { otp:"PASS",client: true, updated: true, cat: false, summary: "x", insurance: 'false', docs: 'Empleado'/*, generateUrl: 'fail'*/ };
        var time = 0;
        cy.MockWs(userConditions)

        cy.fillBasicInformationPage('dev')
        cy.waitLoader()
        cy.wait(time)

        cy.AcceptPep()
        //cy.waitLoader()

        cy.SelectAccount('Digital',true)
        cy.wait(time)

        if (userConditions.insurance == 'false') {
        cy.AcceptInsurance('Si')
        }

        //cy.waitLoader()
        cy.wait(time)

        //cy.waitLoader()
        cy.get('.time-copy').should('contain','5:00')
        cy.get('.time-copy').should('contain','4:59')
       
    })

})
