/// <reference types="Cypress" />

describe('test pasivo', function () {
    beforeEach(function () {
        cy.server()
    })

    it('PBA-1350 pep que es', function () {

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

        cy.setMocks(userConditions)

        cy.fillBasicInformationPage()
        cy.get('.more-info').should('have.text', '¿Qué es?')

    })

    it('PBA-778 1-tipo doc solo cc- Formulario identificación usuario - CDT ', function () {

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

        cy.setMocks(userConditions)

        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()
        cy.get('#DocumentType').should('contain', 'Cédula de Ciudadanía')

    })

    it('PBA-778- 2-solo  numeros en numero cc- Formulario identificación usuario - CDT ', function () {

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

        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()

        cy.get('#DNINumber').type('texto')
        cy.get('#DNINumber').should('have.value', '')


    })

    it('PBA-778- 3-tamaño min  en numero cc- Formulario identificación usuario - CDT ', function () {

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

        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()
        cy.get('#SubmitFormUserIdentification').should('be.disabled')


        const mensajeMinimoCc = ' Este campo debe tener mínimo 4 caracteres '
        cy.get('#DNINumber').type('123').tab()


        cy.get('#FirstName').type('jhoan')
        cy.get('#LastName').type('garcia')
        cy.get('#MobileNumber').type('3167778888')
        cy.get('#MobileConfirmNumber').type('3167778888')
        cy.get('#CheckHabeasData').click()

        cy.get('mat-error').should('have.text', mensajeMinimoCc)
        cy.get('#SubmitFormUserIdentification').should('be.disabled')

    })

    it('PBA-778- 4-Longitud superior a 10 no permitida en campo número de documento - Formulario identificación usuario - CDT ', function () {

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

        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()

        cy.get('#DNINumber').type('31000000001')
        cy.get('#DNINumber').should('have.value', '3100000000')

    })

    it('PBA-778-5- Campo obligatorio numero documento - Formulario identificación usuario - CDT ', function () {

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
        const msjError = ' Este campo es obligatorio '

        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()
        cy.get('#SubmitFormUserIdentification').should('be.disabled')

        cy.get('#DNINumber').click().tab()

        cy.get('#FirstName').type('jhoan')
        cy.get('#LastName').type('garcia')
        cy.get('#MobileNumber').type('3167778888')
        cy.get('#MobileConfirmNumber').type('3167778888')
        cy.get('#CheckHabeasData').click()

        cy.get('mat-error').should('have.text', msjError)
        cy.get('#SubmitFormUserIdentification').should('be.disabled')
    })

    it('PBA-778-6- Longitud menor a 10 no permitida en campo número de telefono - Formulario identificación usuario - CDT ', function () {

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

        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()
        const msjError = ' El número de celular no es válido '

        cy.get('#MobileNumber').type('310000000')
        cy.get('#DNINumber').click()
        cy.get('mat-error').should('have.text', msjError)
    })

    it('PBA-778-7- Longitud superior a 10 no permitida en campo número de telefono - Formulario identificación usuario - CDT ', function () {

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

        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()

        cy.get('#MobileNumber').type('31000000001')
        cy.get('#MobileNumber').should('have.value', '3100000000')

    })

    it('PBA-778-8- solo  numeros en campo número de telefono - Formulario identificación usuario - CDT ', function () {

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

        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()

        cy.get('#MobileNumber').type('texto')
        cy.get('#MobileNumber').should('have.value', '')
    })

    it('PBA-778-9- numero inicial diferente de 3 en campo número de telefono - Formulario identificación usuario - CDT ', function () {

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

        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()
        cy.get('#SubmitFormUserIdentification').should('be.disabled')

        const msjError = ' El número de celular no es válido '

        cy.get('#FirstName').type('jhoan')
        cy.get('#LastName').type('garcia')
        cy.get('#DNINumber').type('86876786')
        cy.get('#MobileNumber').type('2110000000').tab()
        cy.get('#CheckHabeasData').click()

        cy.get('mat-error').should('have.text', msjError)
        cy.get('#SubmitFormUserIdentification').should('be.disabled')
    })

    it('PBA-778-10- obligatorio campo número de telefono - Formulario identificación usuario - CDT ', function () {

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

        const msjError = ' Este campo es obligatorio '

        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()
        cy.get('#SubmitFormUserIdentification').should('be.disabled')

        cy.get('#DNINumber').type('89687768')
        cy.get('#FirstName').type('jhoan')
        cy.get('#LastName').type('garcia')
        cy.get('#MobileNumber').type('texto').tab()
        cy.get('#CheckHabeasData').click()

        cy.get('mat-error').should('have.text', msjError)
        cy.get('#SubmitFormUserIdentification').should('be.disabled')
    })

    it('PBA-778-11- campo confirma celular activado - Formulario identificación usuario - CDT ', function () {

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


        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()
        cy.get('#MobileConfirmNumber').should('be.disabled')
        cy.get('#MobileNumber').type('3101110000')
        cy.get('#DNINumber').click()
        cy.get('#MobileConfirmNumber').should('be.enabled')
    })

    it('PBA-778-12- solo  numeros campo confirma  - Formulario identificación usuario - CDT ', function () {

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

        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()
        cy.get('#MobileNumber').type('3101110000')
        cy.get('#MobileConfirmNumber').type('texto')
        cy.get('#MobileConfirmNumber').should('have.value', '')
    })

    it('PBA-778-13- no coincide confirmacion  - Formulario identificación usuario - CDT ', function () {

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

        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()
        cy.get('#SubmitFormUserIdentification').should('be.disabled')

        const msjError = ' Este celular no coincide '

        cy.get('#FirstName').type('jhoan')
        cy.get('#LastName').type('garcia')
        cy.get('#DNINumber').type('89687768')
        cy.get('#MobileNumber').type('3101110000')
        cy.get('#MobileConfirmNumber').type('3101110002').tab()

        cy.get('#CheckHabeasData').click()

        cy.get('mat-error').should('have.text', msjError)
        cy.get('#SubmitFormUserIdentification').should('be.disabled')
    })

    it.skip('PBA-778-14- pegar  - Formulario identificación usuario - CDT ', function () {

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

        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()
        cy.get('#MobileNumber').type('3101110000')
        cy.get('#MobileNumber').type('{cmd}a')
        cy.get('#MobileNumber').type('{cmd}c')
        cy.get('#DNINumber').type('{cmd}v')

    })

    it('PBA-778-15- Caracteres texto sin caracteres especiales - Formulario identificación usuario - CDT ', function () {

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

        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()
        cy.get('#FirstName').type('.,?&/%')
        cy.get('#FirstName').should('have.value', '')


    })

    it('PBA-778-16- obligatorio campo nombre - Formulario identificación usuario - CDT ', function () {

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

        const msjError = ' Este campo es obligatorio '

        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()
        cy.get('#SubmitFormUserIdentification').should('be.disabled')

        cy.get('#FirstName').click().tab()
        cy.get('#LastName').type('garcia')
        cy.get('#DNINumber').type('89687768')
        cy.get('#MobileNumber').type('3101110000')
        cy.get('#MobileConfirmNumber').type('3101110000')

        cy.get('#CheckHabeasData').click()

        cy.get('mat-error').should('have.text', msjError)
        cy.get('#SubmitFormUserIdentification').should('be.disabled')
    })

    it('PBA-778-17- Longitud max de 20 caracteres- Formulario identificación usuario - CDT ', function () {

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


        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()

        cy.get('#FirstName').type('aeiouaeiouaeiouaeiouw')
            .should('have.value', 'aeiouaeiouaeiouaeiou')
            .and('not.have.value', 'aeiouaeiouaeiouaeiouw')
    })

    it('PBA-778-18- apellido Caracteres texto sin caracteres especiales - Formulario identificación usuario - CDT ', function () {

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

        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()
        cy.get('#LastName').type('.,?&/%')
        cy.get('#LastName').should('have.value', '')


    })

    it('PBA-778-19- Longitud max de 20 caracteres- Formulario identificación usuario - CDT ', function () {

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


        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()

        cy.get('#LastName').type('aeiouaeiouaeiouaeiouw')
            .should('have.value', 'aeiouaeiouaeiouaeiou')
            .and('not.have.value', 'aeiouaeiouaeiouaeiouw')
    })

    it('PBA-778-20- obligatorio campo nombre - Formulario identificación usuario - CDT ', function () {

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

        const msjError = ' Este campo es obligatorio '

        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()
        cy.get('#SubmitFormUserIdentification').should('be.disabled')

        cy.get('#FirstName').type('Jhoan')
        cy.get('#LastName').click().tab()
        cy.get('#DNINumber').type('89687768')
        cy.get('#MobileNumber').type('3101110000')
        cy.get('#MobileConfirmNumber').type('3101110000')
        cy.get('#CheckHabeasData').click()

        cy.get('mat-error').should('have.text', msjError)
        cy.get('#SubmitFormUserIdentification').should('be.disabled')
    })

    it('PBA-778-21- activacion boton continuar- CDT ', function () {

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


        cy.visit('https://d1dfr99ji52n7p.cloudfront.net/')
        cy.get('a').click()
        cy.get('#SubmitFormUserIdentification').should('be.disabled')
        cy.get('#FirstName').type('jhoan')
        cy.get('#LastName').type('garcia')
        cy.get('#DNINumber').type('10988777')
        cy.get('#MobileNumber').type('3167778888')
        cy.get('#MobileConfirmNumber').type('3167778888')
        cy.get('#CheckHabeasData').click()
        cy.get('#SubmitFormUserIdentification').should('be.enabled')


    })




})
