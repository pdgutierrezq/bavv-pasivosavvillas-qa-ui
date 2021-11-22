// <reference types="Cypress" />
// import { initServer } from "./server.js"

describe('Sprint 48', function () {
    beforeEach(function () {
        cy.server()
        cy.route('POST', '**/get-pdf').as('postUser')

    })


    it('Cdt flujo get pdf actualizado fondeo de cta y declarante', function () {
        var userConditions = { client: true, updated: true, cat: false, summary: "x", insurance: 'false', docs: 'Empleado'/*, generateUrl: 'fail'*/, sqs: 'fail' };
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

        cy.get('.avv-btn-primary').click()
        cy.waitLoader()
        cy.wait(time)

        cy.OtpAuthentication()
        cy.wait(time)

        cy.get('#mat-radio-9').click()
        cy.get('#mat-radio-11').click()
        cy.get('#mat-radio-7').click()

        cy.get('#SubmitAccountSettingsForm').click()
        cy.get('.avv-btn-primary').click()

        cy.wait(time)

        cy.DeclaringOption(true)

        cy.get('#DigitalSignatureCheck', { timeout: 20000 }).click()

        cy.wait('@postUser').its('responseBody').should('have.property', 'packageId', '1512')
        // cy.wait('@postUser').then((xhr) => {
        //     assert.equal(xhr.response.body.packageId,1512)
        //   })
        // cy.get('#DigitalSignatureButton').click()
        // cy.wait(100000)
        // cy.get('#Account', { timeout: 120000 }).should('be.visible')
    })

    it('Cdt flujo get pdf actualizado fondeo de cta y no declarante', function () {
        var userConditions = { client: true, updated: true, cat: false, summary: "x", insurance: 'false', docs: 'Empleado'/*, generateUrl: 'fail'*/ };
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
        cy.get('#mat-radio-6 > .mat-radio-label').click()
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

        cy.DeclaringOption(false)
        cy.get('#DigitalSignatureCheck', { timeout: 20000 }).click()
        cy.wait('@postUser').its('responseBody').should('have.property', 'packageId', '1513')

        // cy.get('#DigitalSignatureButton').click()
        // cy.wait(100000)
        // cy.get('#Account', { timeout: 120000 }).should('be.visible')
    })

    it('Cdt flujo get pdf fail', function () {
        var userConditions = { client: true, updated: true, cat: false, summary: "x", insurance: 'false', docs: 'Empleado'/*, generateUrl: 'fail'*/, getpdf: 'fail' };
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

        cy.get('.avv-btn-primary').click()
        cy.waitLoader()
        cy.wait(time)

        cy.OtpAuthentication()
        cy.wait(time)

        cy.get('#mat-radio-9').click()
        cy.get('#mat-radio-11').click()
        cy.get('#mat-radio-7').click()
        //cy.wait(time)
        cy.get('#SubmitAccountSettingsForm').click()
        cy.get('.avv-btn-primary').click()
        cy.wait(time)

        cy.DeclaringOption(false)
        cy.get('.error-container', { timeout: 20000 }).should('be.visible')

    })


    it('Modificaciones configuración CDT', function () {
        var userConditions = { client: true, updated: true, cat: false, summary: "x", insurance: 'false', docs: 'Empleado'/*, generateUrl: 'fail'*/ };
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
        // cy.get('#mat-radio-6 > .mat-radio-label').click()
        

    })

})
