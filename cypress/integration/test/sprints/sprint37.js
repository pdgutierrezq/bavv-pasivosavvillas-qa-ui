/// <reference types="Cypress" />

describe('Sprint 37', function () {
 

    beforeEach(function () {
        cy.server()
    })

    it('PBA-1392 Recaptcha fallido por puntaje CDA', function () {           
        var userConditions = { captcha: 'lowscore' }
        cy.MockWs(userConditions)

        cy.FillForm(userConditions.environment)
        cy.ValidateEmptyFieldsCDA()
    })

    it('PBA-1392 Recaptcha fallido por timeout CDA', function () {

        var userConditions = { captcha: Cypress.env('CAPCTHA_TIME_OUT') };
        cy.MockWs(userConditions)
        cy.wait(2000)

        cy.FillForm()

        cy.fixture('datosPasivo').then((user) => {
            cy.get('#FirstName').should('have.value', user.firstname)
            cy.get('#LastName').should('have.value', user.lastname)
            cy.get('#DNINumber').should('have.value', user.numdoc)
            cy.get('#MobileNumber').should('have.value', user.phone)
            cy.get('#MobileConfirmNumber').should('have.value', user.phone)
        })
    })

    it('PBA-1174 Creación de loading ', function () {

        var userConditions = { captcha: Cypress.env('CAPTCHA_OK') };

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.get('.loading-general').should('be.visible')


    })

    it('PBA-1293 Recaptcha fallido por puntaje bajo CDT', function () {

        var userConditions = { captcha: Cypress.env('CAPCTHA_LOW_SCORE') }
        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.ValidateEmptyFieldsCDT()
    })

    it('PBA-1293 Recaptcha fallido por razones diferentes a puntaje bajo CDT-timeout', function () {

        var userConditions = { captcha: Cypress.env('CAPCTHA_TIME_OUT') }
        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.ValidateNotCleanedFieldsCDT()
    })

    it('PBA-1293 Recaptcha fallido por razones diferentes a puntaje bajo CDT-error 500', function () {

        var userConditions = { captcha: Cypress.env('CAPCTHA_500') }
        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.ValidateNotCleanedFieldsCDT()
    })

    it('PBA-1293 Validación de listas restrictivas', function () {
        var userConditions = { restrictList: true, captcha: Cypress.env('CAPCTHA_OK') }
        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.url().should('contain', 'error-usuario')
    })

    it('PBA-1033 Pantalla de “Lo sentimos, no podemos atender tu solicitud.”', function () {
        var userConditions = { restrictList: true, captcha: Cypress.env('CAPCTHA_OK') }
        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.url().should('contain', 'error-usuario')
    })

    it('PBA-1033 Pantalla de “Estamos presentando inconvenientes, por favor intenta más tarde.”', function () {
        var userConditions = { client: 'error', captcha: Cypress.env('CAPCTHA_OK') }
        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.url().should('contain', 'error-tecnico')
    })

})
