// <reference types="Cypress" />
// import { initServer } from "./server.js"

describe('Sprint 44', function () {
    beforeEach(function () {
        cy.server()
    })

    it.only('www', function () {

        var userConditions = { client: true, updated: true, cat: false, channels: true,insurance: 'false'};
        var flowConditions = { accountType: 'DIGITAL', insurance: 'Si', gmf: false, declaring: false,environment:'stg'};

        cy.MockWs(userConditions)
        // Dado  el cliente está en la pantalla de PEP 
        cy.PerformFlow(userConditions,flowConditions)

        // cy.visit("/", {
        //   onBeforeLoad(win) {
        //     initServer()
        //     cy.stub(win, "WebSocket", url => new MockSocket.WebSocket(url))
        //   }
        // })
        // cy.fixture('datosPasivo').then((user) => {
        //     cy.get('.btn').click()
        //     cy.get('#DNINumber').type(user.numdoc)
        //     cy.get('#MobileNumber').type(user.phone)
        //     cy.get('#MobileConfirmNumber').type(user.phone)
        //     cy.get('#FirstName').type(user.firstname)
        //     cy.get('#LastName').type(user.lastname)
        //     cy.get('#MonthlyIncomeInput').type(user.salary)
        //     cy.get('.mat-checkbox-inner-container').click()
        //     cy.wait(2000)
        //     cy.get('#SubmitFormUserIdentification').click()
        // })
        // cy.WaitLoader()
        // cy.AcceptPep()
    
        // cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)
    
        // if (userConditions.insurance == 'false') {
        //     cy.AcceptInsurance(flowConditions.insurance)
        // }
        // cy.WaitLoader()
        // cy.OtpAuthentication()
        // cy.FillSendAddress()

     })
    it('Pantalla de configuración de cuentas CDT', function () {

        // var userConditions = { client: true, updated: true, cat: false, channels: true,insurance: 'true',updateCrm:'127'};
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};        //cy.MockWs(userConditions)
        // Dado  el cliente está en la pantalla de PEP 
        //cy.PerformFlow(userConditions,flowConditions)
         cy.FillFormCDT()

        // cy.visit("/", {
        //   onBeforeLoad(win) {
        //     initServer()
        //     cy.stub(win, "WebSocket", url => new MockSocket.WebSocket(url))
        //   }
        // })
        // cy.fixture('datosPasivo').then((user) => {
        //     cy.get('.btn').click()
        //     cy.get('#DNINumber').type(user.numdoc)
        //     cy.get('#MobileNumber').type(user.phone)
        //     cy.get('#MobileConfirmNumber').type(user.phone)
        //     cy.get('#FirstName').type(user.firstname)
        //     cy.get('#LastName').type(user.lastname)
        //     cy.get('#MonthlyIncomeInput').type(user.salary)
        //     cy.get('.mat-checkbox-inner-container').click()
        //     cy.wait(2000)
        //     cy.get('#SubmitFormUserIdentification').click()
        // })
        cy.WaitLoader()
        cy.AcceptPep()
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.OtpAuthentication()
     })


})