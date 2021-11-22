/// <reference types="Cypress" />

describe('test pasivo', function () {
    beforeEach(function () {
        cy.server()
    })

    
    it.only('cargue docs Independiente con negocio', function () {
        var userConditions = { docs:'x',client: true, updated: false, insurance:'false'};
        var flowConditions = { accountType: 'DIGITAL', insurance: 'Si', gmf: false, declaring: true,environment:'stg'};

        cy.MockWs(userConditions)

        cy.fillBasicInformationPage(flowConditions.environment)
        cy.AcceptPep()
        cy.SelectAccount(flowConditions.accountType)
        //cy.SelectGmf(true)
        cy.AcceptInsurance(flowConditions.insurance)
        cy.waitLoader()

        cy.OtpAuthentication(flowConditions.environment)
        cy.SelectActivity('Empleado')
        cy.waitLoader()
        cy.FillContactForm('Empleado')
        cy.SelectForeignData()
        cy.SelectFinancialInformation(false)
        cy.FillSendAddress()
    //     cy.DeclaringOption(true)
    //     cy.waitLoader()
    //     cy.get('#SubmitUploadDocumentsForm').should('be.disabled')
    //    cy.wait(100000)
        //cy.PerformFlow(userConditions,flowConditions)

    })
    
    it('cargue docs empleado', function () {
        var userConditions = { insurance:'false',client: true, updated: true, cat: false, channels: false, docs: 'Empleado', sqs: 'success' };
        var flowConditions = { accountType: 'DIGITAL', insurance: 'Si', gmf: false, declaring: true,environment:'dev'};
        var pause=true
        cy.MockWs(userConditions)

        cy.fillBasicInformationPage(flowConditions.environment)
         cy.AcceptPep()
      cy.SelectAccount(flowConditions.accountType)
         cy.AcceptInsurance(flowConditions.insurance)
         cy.OtpAuthentication()
        //  cy.SelectActivity('Empleado')
        //  cy.waitLoader()
        // // cy.Pause(pause)
        //  cy.FillContactForm('Empleado')
        //   cy.SelectForeignData()
        //   cy.SelectFinancialInformation(false)
        // //  cy.Pause(pause)

        //  cy.FillSendAddress()
        //  cy.DeclaringOption(true)
        // cy.waitLoader()
        // cy.get('#SubmitUploadDocumentsForm').should('be.disabled')
       
        //cy.PerformFlow(userConditions,flowConditions)

    })

})
