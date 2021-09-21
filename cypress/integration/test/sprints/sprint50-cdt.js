// <reference types="Cypress" />

describe('Sprint 50', function () {
    beforeEach(function () {
        cy.server()
    })

    it('PBA-1294 calculo 500K 9.9M', function () {
        var userConditions = { client: true, updated: true }

        cy.MockWs(userConditions)
        //Dado que el usuario esta en la pantalla de configuración de CDT
        var amount = 500000
        var term = 90

        cy.GoMainPage('stg')
        cy.get('#Amount').type(amount)
        cy.get('#Term').type(term).tab()
        
        cy.ValidateCalc(amount, term)
        amount = 9999999
        term = 90
        cy.ValidateCalc(amount, term)

    })
    it('PBA-1294 calculo 10M-19.9M', function () {
        var userConditions = { client: true, updated: true }

        cy.MockWs(userConditions)
        //Dado que el usuario esta en la pantalla de configuración de CDT
        var amount = 10000000
        var term = 90

        cy.GoMainPage('stg')
        cy.get('#Amount').type(amount)
        cy.get('#Term').type(term).tab()

        cy.ValidateCalc(amount, term)
        amount = 19999999
        term = 90
        cy.ValidateCalc(amount, term)

    })
  
    it('PBA-1294 calculo 20M-49.9M', function () {
        var userConditions = { client: true, updated: true }

        cy.MockWs(userConditions)
        //Dado que el usuario esta en la pantalla de configuración de CDT
        var amount = 20000000
        var term = 90

        cy.GoMainPage('stg')
        cy.get('#Amount').type(amount)
        cy.get('#Term').type(term).tab()
        cy.ValidateCalc(amount, term)
        amount = 49999999
        term = 90
        cy.ValidateCalc(amount, term)

    })

    it('PBA-1294 calculo 50M-99.9M', function () {
        var userConditions = { client: true, updated: true }

        cy.MockWs(userConditions)
        //Dado que el usuario esta en la pantalla de configuración de CDT
        var amount = 50000000
        var term = 90

        cy.GoMainPage('stg')
        cy.get('#Amount').type(amount)
        cy.get('#Term').type(term).tab()
        cy.ValidateCalc(amount, term)
        amount = 99999999
        term = 90
        cy.ValidateCalc(amount, term)

    })
    it('PBA-1294 calculo 100M-249.9M', function () {
        var userConditions = { client: true, updated: true }

        cy.MockWs(userConditions)
        //Dado que el usuario esta en la pantalla de configuración de CDT
        var amount = 100000000
        var term = 90

        cy.GoMainPage('stg')
        cy.get('#Amount').type(amount)
        cy.get('#Term').type(term).tab()

        cy.ValidateCalc(amount, term)
        amount = 249999999
        term = 90
        cy.ValidateCalc(amount, term)

    })

    it('PBA-1294 calculo 250-499.9M', function () {
        var userConditions = { client: true, updated: true }

        cy.MockWs(userConditions)
        //Dado que el usuario esta en la pantalla de configuración de CDT
        var amount = 250000000
        var term = 90

        cy.GoMainPage('stg')
        cy.get('#Amount').type(amount)
        cy.get('#Term').type(term).tab()

        cy.ValidateCalc(amount, term)
        amount = 499999999
        term = 90
        cy.ValidateCalc(amount, term)

    })

    it('PBA-1294 calculo >499.9M', function () {
        var userConditions = { client: true, updated: true }

        cy.MockWs(userConditions)
        //Dado que el usuario esta en la pantalla de configuración de CDT
        var amount = 500000000
        var term = 90

        cy.GoMainPage('stg')
        cy.get('#Amount').type(amount)
        cy.get('#Term').type(term).tab()

        cy.ValidateCalc(amount, term)
        amount = 1000000000
        term = 90
        cy.ValidateCalc(amount, term)

    })


})