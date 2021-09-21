// <reference types="Cypress" />
// import { initServer } from "./server.js"

describe('Sprint 59', function () {
    beforeEach(function () {
        cy.server()
        

    })
   
    it('Cda ', function () {
        var userConditions = { sds: 'PASS', channels: 'TRUE', client: true, updated: true, cat: false, summary: "x", insurance: 'false', getpdf: 'PASS' };
        var pause = true;
        var flowConditions = { accountType: 'DIGITAL', insurance: 'Si', gmf: false, declaring: false,environment:'stg'};
        cy.MockWs(userConditions)
        cy.FillForm(flowConditions.environment)
        cy.WaitLoader()
        cy.AcceptPep()
    
        cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)
        cy.pause()
       
        cy.AcceptInsurance(flowConditions.insurance)
        
    
        //cy.WaitLoader()
        cy.OtpAuthentication()
    
            cy.SelectActivity('Empleado')
            cy.WaitLoader()
            cy.FillContactForm('Empleado')
            if (flowConditions.accountType == 'DIGITAL') {
                cy.SelectForeignData()
                cy.SelectFinancialInformation(false)
             }
        
    
    })
   
    it('Cdt ', function () {
        var userConditions = { sds: 'PASS', channels: 'TRUE', client: true, updated: true, cat: false, summary: "x", insurance: 'false', getpdf: 'PASS' };
        var pause = false;
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

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
      
    })
   
    it.only('Cdt ', function () {
        var userConditions = { sds: 'PASS', channels: 'TRUE', client: true, updated: true, cat: false, summary: "x", insurance: 'false', getpdf: 'PASS' };
        var pause = false;
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

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
    })

})