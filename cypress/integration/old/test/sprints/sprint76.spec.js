// <reference types="Cypress" />
// import { initServer } from "./server.js"

describe('Sprint 74', function () {
    beforeEach(function () {
        cy.server()
    })
    it('Cdt prueba de creacion de cdt abriendo cuenta', function () {
        var userConditions = { captcha:'ok',client: true, updated: false, return: false };
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

       


       
        // cy.get('[formcontrolname="bank"]').click()
        // cy.get('mat-option[role="option"]').first().click()

        // cy.get('.mat-radio-label').contains('Natural').click()
        // cy.get('#SubmitPseForm').click()
        // cy.get('#savingTipsButton',{timeout:20000}).should('be.enabled').click()


    })



})
