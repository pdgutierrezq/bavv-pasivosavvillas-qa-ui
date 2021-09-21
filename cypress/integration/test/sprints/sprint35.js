/// <reference types="Cypress" />

describe('test pasivo', function () {
    beforeEach(function () {
        cy.server()
    })

    it('PBA-1350 POP UP para cargue de solo cédula', function () {
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
        const titulo = 'Coloca tu cédula en posición horizontal sobre un fondo blanco, apaga el flash y toma la foto con tu celular.'
        const descr1 = '- La cédula puedes subirla en formato JPG o PNG y el resto de documentos en PDF, JPG o PNG.'
        const descr2 = ' Sube archivos con formato JPG o PNG que no tengan un peso mayor a 3 MB.'
        const descr3 = ' Ten en cuenta que no se vean brillos o sombras y que la información sea legible.'

        cy.get('@popup').should('contain', titulo)
            .and('not.contain', descr1)
            .and('contain', descr2)
            .and('contain', descr3)

        cy.get('.mat-dialog-content > .ng-star-inserted > :nth-child(1)').scrollIntoView()
        cy.get('.mat-dialog-content > .ng-star-inserted > :nth-child(2)').scrollIntoView()

    })

    it('PBA-1350 POP UP para cargue de documento diferente a la cédula', function () {

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

        const titulo = 'Coloca el documento en posición vertical sobre un fondo blanco, apaga el flash y toma la foto con tu celular'
        const descr1 = 'La cédula puedes subirla en formato JPG o PNG y el resto de documentos en PDF, JPG o PNG.'
        const descr2 = 'Sube archivos con formato PDF, JPG o PNG que no tengan un peso mayor a 3 MB.'
        const descr3 = 'Ten en cuenta que no se vean brillos o sombras y que la información sea legible.'

        cy.get('.mat-dialog-content > .ng-star-inserted > :nth-child(1)').scrollIntoView()
        cy.get('.mat-dialog-content > .ng-star-inserted > :nth-child(2)').scrollIntoView()

        cy.get('@popup').should('contain', titulo)
            .and('not.contain', descr1)
            .and('contain', descr2)
            .and('contain', descr3)

    })

    it.only('PBA-1350 POP UP para cargue de cédula y otro documento', function () {

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
        cy.SelectActivity('Independiente con negocio')
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
        const titulo = 'Coloca el documento en posición vertical y la cédula en posición horizontal sobre un fondo blanco, apaga el flash y toma la foto con tu celular (una por cada documento).'
        const descr1 = ' La cédula puedes subirla en formato JPG o PNG y el resto de documentos en PDF, JPG o PNG.'
        const descr2 = ' Los archivos no pueden tener un peso mayor a 3 MB.'
        const descr3 = ' Ten en cuenta que no se vean brillos o sombras y que la información sea legible.'

        cy.get('.mat-dialog-content > .ng-star-inserted > :nth-child(1)').scrollIntoView()
        cy.get('.mat-dialog-content > .ng-star-inserted > :nth-child(2)').scrollIntoView()
        cy.get('.mat-dialog-content > .ng-star-inserted > :nth-child(3)').scrollIntoView()


        cy.get('@popup').should('contain', titulo)
            .and('contain', descr1)
            .and('contain', descr2)
            .and('contain', descr3)

    })

})
