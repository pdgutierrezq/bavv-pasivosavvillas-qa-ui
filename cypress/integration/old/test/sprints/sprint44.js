// <reference types="Cypress" />
// import { initServer } from "./server.js"

describe('Sprint 44', function () {
    beforeEach(function () {
        cy.server()
    })

    it('www', function () {

        var userConditions = { client: true, updated: true, cat: false, channels: true,insurance: 'true',updateCrm:'127'};
        var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.setMocks(userConditions)
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
        // cy.waitLoader()
        // cy.AcceptPep()
    
        // cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)
    
        // if (userConditions.insurance == 'false') {
        //     cy.AcceptInsurance(flowConditions.insurance)
        // }
        // cy.waitLoader()
        // cy.OtpAuthentication()
        // cy.FillSendAddress()

     })
    it.only('cdt', function () {

        var userConditions = { client: true, updated: true, cat: false, channels: true,insurance: 'true',updateCrm:'127'};
        var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        //cy.setMocks(userConditions)
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
        // cy.waitLoader()
        // cy.AcceptPep()
    
        // cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)
    
        // if (userConditions.insurance == 'false') {
        //     cy.AcceptInsurance(flowConditions.insurance)
        // }
        // cy.waitLoader()
        // cy.OtpAuthentication()
        // cy.FillSendAddress()

     })


})
