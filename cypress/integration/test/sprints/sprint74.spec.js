// <reference types="Cypress" />
// import { initServer } from "./server.js"

describe('Sprint 74', function () {
    beforeEach(function () {
        cy.server()
    })
    it('Cda ', function () {
        var pause = false;
        var flowConditions = { environment: 'stg' };
        var userConditions = { restrictList: true, captcha: 'ok', client: true, updated: true, return: false };

        cy.MockWs(userConditions)
        cy.fillBasicInformationPage(flowConditions.environment,userConditions.scr,pause)
        cy.waitLoader()
      
    
    })
    it.only('Cdt prueba lista rstictiva', function () {
        var userConditions = { restrictList: false, captcha: 'ok', client: true, updated: true, return: false };
        var pause = false;
        var flowConditions = { environment: 'loc' };

        cy.MockWs(userConditions)
        cy.FillFormCDT(flowConditions.environment, pause)


    })



})
