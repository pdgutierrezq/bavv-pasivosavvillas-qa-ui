// <reference types="Cypress" />

describe('Sprint 41', function () {
    beforeEach(function () {
        cy.server()
    })

    it('PBA-1525 cda servicio  insurance falla cuenta simple', function () {
        var userConditions = { client: true, updated: true, cat: false, channles: true,insurance: 'fail'};
        var flowConditions = { accountType: 'SIMPLE', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        // Dado  el cliente está en la pantalla de PEP 
        cy.PerformFlow(userConditions,flowConditions)
    })

    it.only('PBA-1525 cda servicio  insurance true cuenta pro', function () {
        var userConditions = { client: true, updated: true, cat: false, channles: true,insurance: 'true'};
        var flowConditions = { accountType: 'PRO', insurance: 'true', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        // Dado  el cliente está en la pantalla de PEP 
        cy.PerformFlow(userConditions,flowConditions)
    })

    it('PBA-1525 cda servicio  insurance false cuenta pro', function () {
        var userConditions = { client: true, updated: true, cat: false, channles: true,insurance: 'false'};
        var flowConditions = { accountType: 'PRO', insurance: 'Si', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        // Dado  el cliente está en la pantalla de PEP 
        cy.PerformFlow(userConditions,flowConditions)
    })

    it('PBA-1525 cda servicio  insurance true cuenta simple', function () {
        var userConditions = { client: true, updated: true, cat: false, channles: true,insurance: 'false'};
        var flowConditions = { accountType: 'SIMPLE', insurance: 'Si', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        // Dado  el cliente está en la pantalla de PEP 
        cy.PerformFlow(userConditions,flowConditions)
    })
})