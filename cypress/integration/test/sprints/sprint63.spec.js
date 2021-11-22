// <reference types="Cypress" />
// import { initServer } from "./server.js"

describe('Sprint 62', function () {
    beforeEach(function () {
        cy.server()
    })
    //www.colserauto.com/sede

    it.only('Cdt Redirección a pantalla de PSE 2346 esc 1', function () {
        //         Escenario 1- Cliente enrolado redirección a tips 

        // Dado que se llamó el servicio para saber si el usuario está enrolado 

        // Cuando sea un cliente enrolado y fondeó por Cuenta AV Villas 

        // Entonces se redirecciona al cliente a pantalla de tips CDT
        var userConditions = { captcha:'ok',cpp:'FAIL',updateCrm:'pass',scr: false, sds: 'PASS', channels: 'TRUE', client: true, updated: false, insurance: 'false', getpdf: 'PASS' };
        var pause = false;
        var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false, environment: 'prod' };

        cy.MockWs(userConditions)
        cy.fillBasicInformationPage(flowConditions.environment, pause)
        cy.WaitLoader()
        cy.Pause(pause)
        // cy.AcceptPep()
        // cy.get('#Amount').type('90000').tab()
        // cy.get('#Term').type('365')
        // cy.Pause(pause)

        // cy.get('#mat-radio-5').click()
        // cy.get('.avv-btn-primary').click()
        // cy.WaitLoader()
        // cy.Pause(pause)

        // cy.OtpAuthentication()
        // cy.Pause(pause)

        //  cy.AccountConfiguration(true)
        //  cy.get('#DeliveryAddressButton').click()
        //  cy.DeclaringOption(flowConditions.declaring)
        // cy.ElectronicSignature()


    })

    it('Cdt Redirección a pantalla de PSE 2346 esc 2', function () {
        //         Escenario 2- Cliente enrolado redirección a PSE flujo

        // Dado que se llamó el servicio para saber si el usuario está enrolado 

        // Cuando sea un cliente enrolado y va a fondear por PSE 

        // Entonces se redirecciona al cliente a pantalla de PSE en el flujo
        var userConditions = { scr: false, sds: 'PASS', channels: 'TRUE', client: false, updated: false, cat: false, summary: "x", insurance: 'false', getpdf: 'PASS' };
        var pause = false;
        var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false, environment: 'dev' };

        cy.MockWs(userConditions)
        cy.FillFormCDT(flowConditions.environment, pause)
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
        cy.Pause(pause)

        // cy.AccountConfiguration(pause)
        cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button:contains("Desde otro banco")').click()
        cy.get('[formcontrolname="accountSettingSecondGroup"]>.mat-radio-button').first().click()
        cy.pause()
        cy.Pause(pause)
        cy.get('#SubmitAccountSettingsForm').click()
        cy.DeclaringOption(flowConditions.declaring)
        cy.ElectronicSignature()


    })

    it('Cdt Redirección a pantalla de PSE 2346 esc 3', function () {

        //         Escenario 3- Cliente no enrolado redirección a PSE

        // Dado que se llamó el servicio de guardar clave en SDS y va a fondear por PSE

        // Cuando sea exitoso  

        // Entonces se redirecciona al cliente a pantalla de PSE flujo


        var userConditions = { scr: false, sds: 'PASS', channels: 'FALSE', client: true, updated: true, cat: false, summary: "x", insurance: 'false', getpdf: 'PASS' };
        var pause = false;
        var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false, environment: 'dev' };

        cy.MockWs(userConditions)
        cy.FillFormCDT(flowConditions.environment, pause)
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
        cy.Pause(pause)

        // cy.AccountConfiguration(pause)
        cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button:contains("Desde otro banco")').click()
        cy.get('[formcontrolname="accountSettingSecondGroup"]>.mat-radio-button').first().click()
        cy.Pause(true)
        cy.get('#SubmitAccountSettingsForm').click()
        cy.DeclaringOption(flowConditions.declaring)
        cy.ElectronicSignature()


        cy.get('[formarrayname="firstPassword"]>.mat-form-field:first-child').type('1626')
        cy.get('[formarrayname="secondPassword"]>.mat-form-field:first-child').type('1626')
        cy.get('#ChannelEnrollmentButton').click()


    })

    it('Cdt Redirección a pantalla de PSE 2346 esc 4', function () {

        //         Escenario 4- Cliente no enrolado fallido redirección a PSE

        // Dado que estoy en el POP UP que informa que el enrolamiento fue fallido y voy a fondear por PSE

        // Cuando seleccione la opción de entendido 

        // Entonces se redirecciona al cliente a pantalla de PSE
        var userConditions = { scr: false, sds: 'FAIL', channels: 'FALSE', client: true, updated: false, cat: false, summary: "x", insurance: 'false', getpdf: 'PASS' };
        var pause = false;
        var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false, environment: 'stg' };

        cy.MockWs(userConditions)
        cy.FillFormCDT(flowConditions.environment, pause)
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
        cy.Pause(pause)

        // cy.AccountConfiguration(pause)
        cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button:contains("Desde otro banco")').click()
        cy.get('[formcontrolname="accountSettingSecondGroup"]>.mat-radio-button').first().click()
        cy.Pause(true)
        cy.get('#SubmitAccountSettingsForm').click()
        // cy.get('.avv-btn-primary').click()
        cy.DeclaringOption(flowConditions.declaring)
        cy.ElectronicSignature()


        cy.get('[formarrayname="firstPassword"]>.mat-form-field:first-child').type('1626')
        cy.get('[formarrayname="secondPassword"]>.mat-form-field:first-child').type('1626')
        cy.get('#ChannelEnrollmentButton').click()
        cy.get('button:contains("ENTENDIDO")').click()

    })

    it('Cdt Redirección a pantalla de PSE 2346 esc 5', function () {

        //         Escenario 5- Cliente no enrolado fallido redirección a resumen

        // Dado que estoy en el POP UP que informa que el enrolamiento fue fallido y no voy a fondear por PSE

        // Cuando seleccione la opción de entendido 

        // Entonces se redirecciona al cliente a pantalla de resumen
        var userConditions = { scr: false, sds: 'FAIL', channels: 'FALSE', client: true, updated: true, cat: false, summary: "x", insurance: 'false', getpdf: 'PASS' };
        var pause = false;
        var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false, environment: 'dev' };

        cy.MockWs(userConditions)
        cy.FillFormCDT(flowConditions.environment, pause)
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
        cy.Pause(pause)

        cy.AccountConfiguration(true)
        cy.DeclaringOption(flowConditions.declaring)
        cy.ElectronicSignature()


        cy.get('[formarrayname="firstPassword"]>.mat-form-field:first-child').type('1626')
        cy.get('[formarrayname="secondPassword"]>.mat-form-field:first-child').type('1626')
        cy.get('#ChannelEnrollmentButton').click()
        cy.get('button:contains("ENTENDIDO")').click()

    })

    it('Cdt Redirección a pantalla de PSE 2346 esc 6', function () {
        //         Escenario 6- Cliente no enrolado exitoso redirección a resumen y no fondeo por PSE

// Dado que se llamó el servicio de guardar clave en SDS y no voy a fondear por PSE

// Cuando sea exitoso  

// Entonces se redirecciona al cliente a pantalla de resumen
        var userConditions = { scr: false, sds: 'PASS', channels: 'FALSE', client: true, updated: true, cat: false, summary: "x", insurance: 'false', getpdf: 'PASS' };
        var pause = false;
        var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false, environment: 'dev' };

        cy.MockWs(userConditions)
        cy.FillFormCDT(flowConditions.environment, pause)
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
        cy.Pause(pause)

        cy.AccountConfiguration(true)
        cy.DeclaringOption(flowConditions.declaring)
        cy.ElectronicSignature()


        cy.get('[formarrayname="firstPassword"]>.mat-form-field:first-child').type('1626')
        cy.get('[formarrayname="secondPassword"]>.mat-form-field:first-child').type('1626')
        cy.get('#ChannelEnrollmentButton').click()

    })

    it('Cdt Redirección a pantalla de PSE 2349 esc 1', function () {

        var userConditions = { pseCreate: 'FAIL', scr: false, sds: 'PASS', channels: 'TRUE', client: true, updated: true, cat: false, summary: "x", insurance: 'false', getpdf: 'PASS' };
        var pause = false;
        var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false, environment: 'stg' };

        cy.MockWs(userConditions)
        cy.FillFormCDT(flowConditions.environment, pause)
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
        cy.Pause(pause)

        // cy.AccountConfiguration(pause)
        cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button:contains("Desde otro banco")').click()
        cy.get('[formcontrolname="accountSettingSecondGroup"]>.mat-radio-button').first().click()
        cy.Pause(pause)
        cy.get('#SubmitAccountSettingsForm').click()
        cy.DeclaringOption(flowConditions.declaring)
        cy.ElectronicSignature()

        cy.WaitLoader()
        cy.get('#Bank').click()
        cy.get('.mat-option').first().click()
        cy.get('.mat-radio-button:contains("Natural")').click()
        cy.get('#SubmitPseForm').click()
    })




})
