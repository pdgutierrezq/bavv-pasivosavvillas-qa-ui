/// <reference types="Cypress" />

describe('test pasivo', function () {
    beforeEach(function () {
        cy.server()
    })

    it.only('test', function () {
        cy.visit('')
    })

    it('PBA-1288 Integrar redux a la aplicación', function () {
        var userConditions = {client: true,updated: false,cat: true,channles: true,docs: 'Empleado',sqs: 'success',generateUrl: 'two docs',loadPresigned: 'any'};

        cy.MockWs(userConditions)

        cy.FillForm('stg')
        cy.AcceptPep()
        cy.SelectAccount('PRO')
        cy.AcceptInsurance('Si')
        
        for (var i = 0; i < 3; i++) {
            cy.OtpAuthentication()
            cy.get('.error > .ng-star-inserted').should('be.visible')
            cy.get('#OtpButton',{timeout:20000}).click()
            cy.WaitLoader()
            cy.get('.error').should('contain', 'La clave que ingresaste no corresponde a la enviada')
            cy.get('#OtpButton',{timeout:20000}).click()
            cy.WaitLoader()
            cy.get('.mat-input-element',{timeout:20000}).first().should('be.disabled')
            cy.get('.error',{timeout:20000}).should('contain', 'Excediste el número de intentos, solicita un nuevo código')
            cy.get('#GenerateNewOtpButton',{timeout:20000}).click()
            cy.WaitLoader()
         }    

        cy.get('#GenerateNewOtpButton').should('not.exist')
        cy.OtpAuthentication()
        cy.get('#OtpButton',{timeout:20000}).click()
            cy.WaitLoader()
            cy.get('.error').should('contain', 'La clave que ingresaste no corresponde a la enviada')
            cy.get('#OtpButton',{timeout:20000}).click()
            cy.WaitLoader()
        cy.url().should('include','general-error')

    })

    it('PBA-1233 Redireccion actualizado a PEP', function () {
        var userConditions = { client: true, updated: true, cat: false, channles: false, docs: 'Empleado', sqs: 'success' };

        cy.MockWs(userConditions)
        cy.FillForm()
        cy.get('#SubmitFormPEP', { timeout: 120000 }).should('be.visible')

    })
    
    it('PBA-1262 POP UP para cargue de solo cédula', function () {
        var userConditions = { client: true, updated: false, cat: false, channles: true, docs: 'cc', sqs: 'success' };
        var flowConditions = { accountType: 'SIMPLE', insurance: 'Si', gmf: false, declaring: true };

        cy.MockWs(userConditions)

        cy.FillForm()
        cy.AcceptPep()
        cy.SelectAccount('SIMPLE')
        cy.AcceptInsurance('Si')
        cy.OtpAuthentication()
        cy.SelectActivity('Empleado')
        cy.WaitLoader()
        cy.FillContactForm('Empleado')
        cy.FillSendAddress()
        cy.DeclaringOption(true)
        cy.WaitLoader()
        cy.get('#SubmitUploadDocumentsForm').should('be.disabled')
        cy.get('.btn-card').click()
        cy.get('#mat-dialog-0').as('popup')
        const titulo= 'Coloca el documento en posición vertical sobre un fondo blanco, apaga el flash y toma la foto con tu celular'
        const descr1= '- La cédula puedes subirla en formato JPG o PNG y el resto de documentos en PDF, JPG o PNG.'
        const descr2= ' - Sube archivos con formato  JPG o PNG que no tengan un peso mayor a 3 MB. '
        const descr3= ' - Ten en cuenta que no se vean brillos o sombras y que la información sea legible. '

        cy.get('@popup').should('contain', titulo)
        .and('not.contain', descr1)
        .and('contain', descr2)
        .and('contain', descr3)

        cy.get('ul > .ng-star-inserted').scrollIntoView()
        cy.get('ul > :nth-child(2)').scrollIntoView()
        
    })

    it('PBA-1262 POP UP para cargue de documento diferente a la cédula', function () {

        var userConditions = {
            client: true,
            updated: false,
            cat: true,
            channles: true,
            docs: 'no cc',
            sqs: 'success',
            generateUrl: 'two docs',
            loadPresigned: 'any'
        };

        cy.MockWs(userConditions)

        cy.FillForm()
        cy.AcceptPep()
        cy.SelectAccount('PRO')
        cy.AcceptInsurance('Si')
        cy.OtpAuthentication()
        cy.SelectActivity('Empleado')
        cy.WaitLoader()
        cy.FillContactForm('Empleado')
        cy.SelectForeignData()
        cy.SelectFinancialInformation(false)
        cy.FillSendAddress()
        cy.DeclaringOption(true)
        cy.WaitLoader()
        cy.get('#SubmitUploadDocumentsForm').should('be.disabled')
        cy.get('.btn-card').click()
        cy.get('#mat-dialog-0').as('popup')
        
        const titulo= 'Coloca el documento en posición vertical sobre un fondo blanco, apaga el flash y toma la foto con tu celular'
        const descr1= '- La cédula puedes subirla en formato JPG o PNG y el resto de documentos en PDF, JPG o PNG.'
        const descr2= '- Sube archivos con formato PDF, JPG o PNG que no tengan un peso mayor a 3 MB.'
        const descr3= ' - Ten en cuenta que no se vean brillos o sombras y que la información sea legible.'

        cy.get('ul > :nth-child(1)').scrollIntoView()
        cy.get('ul > :nth-child(2)').scrollIntoView()

        cy.get('@popup').should('contain', titulo)
        .and('not.contain', descr1)
        .and('contain', descr2)
        .and('contain', descr3)

    })

    it('PBA-1262 POP UP para cargue de cédula y otro documento', function () {

        var userConditions = {
            client: true,
            updated: false,
            cat: true,
            channles: true,
            docs: 'Empleado',
            sqs: 'success',
            generateUrl: 'two docs',
            loadPresigned: 'any'
        };

        cy.MockWs(userConditions)

        cy.FillForm()
        cy.AcceptPep()
        cy.SelectAccount('PRO')
        cy.AcceptInsurance('Si')
        cy.OtpAuthentication()
        cy.SelectActivity('Empleado')
        cy.WaitLoader()
        cy.FillContactForm('Empleado')
        cy.SelectForeignData()
        cy.SelectFinancialInformation(false)
        cy.FillSendAddress()
        cy.DeclaringOption(true)
        cy.WaitLoader()
        cy.get('#SubmitUploadDocumentsForm').should('be.disabled')
        cy.get('.btn-card').click()
        cy.get('#mat-dialog-0').as('popup')
        const titulo= 'Coloca el documento en posición vertical sobre un fondo blanco, apaga el flash y toma la foto con tu celular'
        const descr1= '- La cédula puedes subirla en formato JPG o PNG y el resto de documentos en PDF, JPG o PNG.'
        const descr2= 'Los archivos no pueden tener un peso mayor a 3 MB.'
        const descr3= ' - Ten en cuenta que no se vean brillos o sombras y que la información sea legible. '

        cy.get('ul > :nth-child(1)').scrollIntoView()
        cy.get('ul > :nth-child(2)').scrollIntoView()
        cy.get('ul > :nth-child(3)').scrollIntoView()

        cy.get('@popup').should('contain', titulo)
        .and('contain', descr1)
        .and('contain', descr2)
        .and('contain', descr3)

    })
})
