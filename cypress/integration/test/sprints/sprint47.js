// <reference types="Cypress" />
// import { initServer } from "./server.js"

describe('Sprint 47', function () {
    beforeEach(function () {
        cy.server()
    })


    it.only('Cdt', function () {
        var userConditions = { client: true, updated: false, cat: false, docs: 'Empleado'/*, generateUrl: 'fail'*/, sqs: 'fail' };
        var time = 4000;
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

        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.wait(time)

        // cy.get('.mat-input-element', { timeout: 20000 }).first().type('12345678')
        // // Cuando la validación no sea exitosa por clave errada
        // cy.UserIdentityValidate('VENCIDA')
        // cy.get('#OtpButton', { timeout: 20000 }).click()
          cy.OtpAuthentication()
        cy.wait(time)

        cy.SelectActivity('Empleado')
        // cy.WaitLoader()
        cy.wait(time)

        cy.FillContactForm('Empleado')
        cy.wait(time)

        cy.SelectForeignData()
        cy.wait(time)

        cy.SelectFinancialInformation(false)
        cy.get('#activeExpensesInput').type('2000000')
        cy.get('#passiveExpensesInput').type('2000000')
        cy.get('#monthlyExpensesInput').type('2000000')
        cy.get('#monthlyIncomeInput').type('2000000')
        cy.wait(time)

        cy.get('#SubmitContactInformationForm').click()
        cy.get('#mat-radio-28').click()
        cy.get('#mat-radio-30').click()
        cy.get('#mat-radio-26 ').click()
        cy.wait(time)

        cy.get('#SubmitAccountSettingsForm').click()
        cy.wait(time)

        cy.DeclaringOption(true)
    })

    it('cda', function () {
        var userConditions = { client: true, updated: false, cat: false, docs: 'Empleado',insurance:'false'/*, generateUrl: 'fail'*/, sqs: 'fail' };
        var time = 5000;

        var flowConditions = { accountType: 'PRO', insurance: 'false', gmf: false, declaring: false, environment: 'stg' };
        cy.MockWs(userConditions)

        cy.FillBasicInformationPage('dev')
        cy.WaitLoader()
        cy.wait(time)

        cy.AcceptPep()
        cy.WaitLoader()
        cy.wait(time)

        cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)
        cy.wait(time)

        if (userConditions.insurance == 'false') {
        cy.AcceptInsurance('Si')
        }

        cy.WaitLoader()
        cy.wait(time)

         cy.OtpAuthentication()

        if (userConditions.client && !userConditions.updated) {
            cy.wait(time)

            cy.SelectActivity('Empleado')
            cy.WaitLoader()
            cy.wait(time)

            cy.FillContactForm('Empleado')
            if (flowConditions.accountType == 'PRO') {
                cy.wait(time)

                cy.SelectForeignData()
                cy.wait(time)

                cy.SelectFinancialInformation(false)
            }
        }

    })


})
