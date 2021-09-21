// <reference types="Cypress" />

describe('Sprint 39', function () {
    beforeEach(function () {
        cy.server()
    })

    // it('PBA-1290 otp errada', function () {
    //     var userConditions = { client: true, updated: true }
    //     cy.MockWs(userConditions)
    //     cy.FillFormCDT()
    //     cy.WaitLoader()

    //     cy.AcceptPep()
    //     cy.get('.mat-input-element', { timeout: 20000 }).first().type('12345678')
    //     // Cuando la validación no sea exitosa por clave errada
    //     cy.UserIdentityValidate('WRONG_PASS')
    //     cy.get('#OtpButton', { timeout: 20000 }).click()
    //     // Entonces  se le informará en un mensaje de error que la información proporcionada es incorrecta dejando la OTP ingresada. (MSJ: El código que ingresaste no corresponde al enviado.)
    //     cy.get('.error').should('have.text', ' El código que ingresaste no corresponde al enviado. ')
    //     cy.get('.mat-input-element').each(($el, index, $list) => {
    //         cy.wrap($el).should('not.have.value', '')
    //     })

    // })
    // it('PBA-1290 otp anulada', function () {
    //     var userConditions = { client: true, updated: true }
    //     cy.MockWs(userConditions)
    //     cy.FillFormCDT()
    //     cy.WaitLoader()

    //     cy.AcceptPep()
    //     cy.get('.mat-input-element', { timeout: 20000 }).first().type('12345678')
    //     // Cuando la validación responda status code 200 pero no sea exitosa por una causa diferente a clave errada
    //     // cy.UserIdentityValidate('UTILIZADA')
    //     cy.UserIdentityValidate('ANULADA')
    //     cy.get('#OtpButton', { timeout: 20000 }).click()
    //     // Entonces  se le informará en un mensaje de error que la información proporcionada es incorrecta dejando la OTP ingresada. (MSJ: El código que ingresaste no corresponde al enviado.)
    //     cy.get('.error').should('have.text', ' Hubo un inconveniente con el código que ingresaste, solicítalo de nuevo. ')
    //     cy.get('.mat-input-element').each(($el, index, $list) => {
    //         cy.wrap($el).should('be.disabled')
    //     })
    // })
    // it('PBA-1290 otp habilitar boton', function () {
    //     var userConditions = { client: true, updated: true }
    //     cy.MockWs(userConditions)
    //     cy.FillFormCDT()
    //     cy.WaitLoader()

    //     cy.AcceptPep()
    //     cy.get('#OtpButton').should('be.disabled')
    //     cy.WaitLoader()
    //     cy.get('.mat-input-element', { timeout: 20000 }).first().type('12345678')
    //     cy.get('#OtpButton').should('be.enabled')

    // })

    // it('PBA-1290 limite validacion otp', function () {
    //     var userConditions = { client: true, updated: true }
    //     cy.MockWs(userConditions)
    //     cy.FillFormCDT()
    //     cy.WaitLoader()

    //     cy.AcceptPep()
    //     cy.get('.mat-input-element', { timeout: 20000 }).first().type('12345678')
    //     // el cliente ingrese el código de forma incorrecta por tercera vez
    //     cy.UserIdentityValidate('WRONG_PASS')
    //     cy.get('#OtpButton', { timeout: 20000 }).click()
    //     cy.get('#OtpButton', { timeout: 20000 }).click()
    //     cy.get('#OtpButton', { timeout: 20000 }).click()
    //     // se deshabilita el campo para ingresar el código, se limpia el campo y se muestra el siguiente mensaje de error “Excediste el número de intentos, solicita un nuevo código”
    //     cy.get('.error').should('have.text', ' Excediste el número de intentos, solicita un nuevo código. ')
    //     cy.get('.mat-input-element').each(($el, index, $list) => {
    //         cy.wrap($el).should('be.disabled')
    //         cy.wrap($el).should('have.value', '')
    //     })

    // })

    // it('PBA-1290 limite generacion otp', function () {
    //     var userConditions = { client: true, updated: true }
    //     cy.MockWs(userConditions)
    //     cy.FillFormCDT()
    //     cy.WaitLoader()

    //     cy.AcceptPep()
    //     // cuando el cliente seleccione la opción de “solicitar nuevo código” por tercera vez
    //     cy.get('#GenerateNewOtpButton', { timeout: 20000 }).click()
    //     cy.get('#GenerateNewOtpButton').click()
    //     cy.get('#GenerateNewOtpButton').click()
    //     // Entonces se oculta la opción de “solicitar nuevo código”
    //     //, se envía la otp y se habilitan los campos para ingresar la otp
    //     cy.get('#GenerateNewOtpButton').should('not.be.visible')
    //     cy.get('.mat-input-element').each(($el, index, $list) => {
    //         cy.wrap($el).should('have.value', '')
    //     })
    // })
    // it('PBA-1290 limite generacion otp', function () {
    //     var userConditions = { client: true, updated: true }
    //     cy.MockWs(userConditions)
    //     cy.FillFormCDT()
    //     cy.WaitLoader()

    //     cy.AcceptPep()
    //     // Dado que el usuario esta la pantalla de autenticación 
    //     //y seleccionó la opción de “solicitar nuevo código” por tercera vez
    //     cy.get('#GenerateNewOtpButton', { timeout: 20000 }).click()
    //     cy.get('#GenerateNewOtpButton').click()
    //     cy.get('#GenerateNewOtpButton').click()
    //     //cuando ingrese el código de forma incorrecta por tercera vez
    //     cy.get('.mat-input-element', { timeout: 20000 }).first().type('12345678')
    //     cy.UserIdentityValidate('WRONG_PASS')

    //     cy.get('#OtpButton', { timeout: 20000 }).click()
    //     cy.get('#OtpButton', { timeout: 20000 }).click()
    //     cy.get('#OtpButton', { timeout: 20000 }).click()

    //     //Entonces se muestra la pantalla de error inténtalo mas tarde.
    //     cy.url().should('contain', 'error-tecnico')
    // })
    // it('PBA-1290 restablecer validacion otp', function () {
    //     var userConditions = { client: true, updated: true }
    //     cy.MockWs(userConditions)
    //     cy.FillFormCDT()
    //     cy.WaitLoader()

    //     cy.AcceptPep()
    //     // Dado que el usuario esta la pantalla de autenticación 

    //     //cuando el cliente seleccione la opción de “solicitar nuevo código”
    //             //Entonces se restablece los intentos de la validación de OTP.

    //     //llamado de validacion otp con clave errada
    //     cy.UserIdentityValidate('WRONG_PASS')
    //     cy.get('.mat-input-element', { timeout: 20000 }).first().type('12345678')
    //     cy.get('#OtpButton', { timeout: 20000 }).click()
    //     //generar nueva otp 
    //     cy.UserIdentityGenerate('PASS')
    //     cy.get('#GenerateNewOtpButton', { timeout: 20000 }).click()

    //     //llamado de validacion otp con clave errada
    //     cy.UserIdentityValidate('WRONG_PASS')
    //     cy.get('.mat-input-element', { timeout: 20000 }).first().type('12345678')

    //     cy.get('#OtpButton', { timeout: 20000 }).click()
    //     cy.get('#OtpButton').click()
    //     cy.get('#OtpButton').click()
    //     cy.get('.error').should('have.text', ' Excediste el número de intentos, solicita un nuevo código. ')
    //     //generar nueva otp 
    //     cy.UserIdentityGenerate('PASS')
    //     cy.get('#GenerateNewOtpButton', { timeout: 20000 }).click()

    //     //llamado de validacion otp con clave errada
    //     cy.UserIdentityValidate('WRONG_PASS')
    //     cy.get('.mat-input-element', { timeout: 20000 }).first().type('12345678')

    //     cy.get('#OtpButton', { timeout: 20000 }).click()
    //     cy.get('#OtpButton').click()
    //     cy.get('#OtpButton').click()
    //     cy.get('.error').should('have.text', ' Excediste el número de intentos, solicita un nuevo código. ')
    //     //generar nueva otp 
    //     cy.UserIdentityGenerate('PASS')
    //     cy.get('#GenerateNewOtpButton', { timeout: 20000 }).click()

    //     //llamado de validacion otp con clave errada
    //     cy.UserIdentityValidate('WRONG_PASS')
    //     cy.get('.mat-input-element', { timeout: 20000 }).first().type('12345678')
    //     cy.get('#OtpButton', { timeout: 20000 }).click()
    //     cy.get('#OtpButton').click()
    //     cy.get('#OtpButton').click()
    //     cy.url().should('contain', 'error-tecnico')

    // })

    // it('PBA-1148 redireccion identificacion', function () {
    //     cy.visit('https://rb-pasivo-dev-cdt-front.avaldigitallabs.com/')
    //     cy.get('.avv-btn-primary').should('be.enabled')
    //     cy.get('.avv-btn-primary').click()
    //     cy.url().should('contain','validacion-datos')
    // })

    it('PBA-1148 calculo tasa y rendimientos 500K 9.9M', function () {

        var amount = 500000
        var term = 90

        cy.visit('https://rb-pasivo-dev-cdt-front.avaldigitallabs.com/')

        cy.get('.cdt-form').scrollIntoView()
        cy.get('#Amount').type(amount)
        cy.get('#Term').type(term)
        cy.get('.rate').should('contains.text', '2.4%')
        cy.ValidateRend(amount, term)

        term = 179
        cy.get('#Term').clear().type(term)
        cy.get('.rate').should('have.text', '2.4%')
        cy.ValidateRend(amount, term)

        amount = 500000
        cy.get('#Amount').clear().type(amount)
        cy.get('.rate').should('have.text', '2.4%')
        cy.ValidateRend(amount, term)

        term = 180
        cy.get('#Term').clear().type(term)
        cy.get('.rate').should('have.text', '2.6%')
        cy.ValidateRend(amount, term)

        term = 359
        cy.get('#Term').clear().type(term)
        cy.get('.rate').should('have.text', '2.6%')
        cy.ValidateRend(amount, term)

        term = 360
        cy.get('#Term').clear().type(term)
        cy.get('.rate').should('have.text', '2.7%')
        cy.ValidateRend(amount, term)

        term = 539
        cy.get('#Term').clear().type(term)
        cy.get('.rate').should('have.text', '2.7%')
        cy.ValidateRend(amount, term)

        term = 540
        cy.get('#Term').clear().type(term)
        cy.get('.rate').should('have.text', '2.9%')
        cy.ValidateRend(amount, term)

        term = 540
        cy.get('#Term').clear().type(term)
        cy.get('.rate').should('have.text', '2.9%')
        cy.ValidateRend(amount, term)

        term = 999
        cy.get('#Term').clear().type(term)
        cy.get('.rate').should('have.text', '2.9%')
        cy.ValidateRend(amount, term)
    })

    it('PBA-1148 calculo tasa y rendimientos 10M 19.9M', function () {
        cy.visit('https://rb-pasivo-dev-cdt-front.avaldigitallabs.com/')
        cy.get('#Amount').type('10000000')
        cy.get('#Term').type('90')
        cy.get('.rate').should('have.text', '2.5%')
        cy.get('#Term').clear().type('179')
        cy.get('.rate').should('have.text', '2.5%')
        cy.get('#Amount').clear().type('19999999')
        cy.get('.rate').should('have.text', '2.5%')

        cy.get('#Term').clear().type('180')
        cy.get('.rate').should('have.text', '2.7%')
        cy.get('#Term').clear().type('359')
        cy.get('.rate').should('have.text', '2.7%')

        cy.get('#Term').clear().type('360')
        cy.get('.rate').should('have.text', '2.85%')
        cy.get('#Term').clear().type('539')
        cy.get('.rate').should('have.text', '2.85%')

        cy.get('#Term').clear().type('540')
        cy.get('.rate').should('have.text', '3%')
        cy.get('#Term').clear().type('541')
        cy.get('.rate').should('have.text', '3%')
        cy.get('#Term').clear().type('999')
        cy.get('.rate').should('have.text', '3%')
    })

    it.only('PBA-1148 calculo tasa y rendimientos 20M 49.9M', function () {
        cy.visit('https://rb-pasivo-dev-cdt-front.avaldigitallabs.com/')
        cy.get('#Amount').type('20000000')
        cy.get('#Term').type('90')
        cy.get('.rate').should('have.text', '2.55%')
        cy.get('#Term').clear().type('179')
        cy.get('.rate').should('have.text', '2.55%')
        cy.get('#Amount').clear().type('49999999')
        cy.get('.rate').should('have.text', '2.55%')

        cy.get('#Term').clear().type('180')
        cy.get('.rate').should('have.text', '2.75%')
        cy.get('#Term').clear().type('359')
        cy.get('.rate').should('have.text', '2.75%')

        cy.get('#Term').clear().type('360')
        cy.get('.rate').should('have.text', '2.9%')
        cy.get('#Term').clear().type('539')
        cy.get('.rate').should('have.text', '2.9%')

        cy.get('#Term').clear().type('540')
        cy.get('.rate').should('have.text', '3.05%')
        cy.get('#Term').clear().type('541')
        cy.get('.rate').should('have.text', '3.05%')
        cy.get('#Term').clear().type('999')
        cy.get('.rate').should('have.text', '3.05%')
    })

    it('PBA-1148 calculo tasa y rendimientos 50M 99.9M', function () {
        cy.visit('https://rb-pasivo-dev-cdt-front.avaldigitallabs.com/')
        cy.get('#Amount').type('50000000')
        cy.get('#Term').type('90')
        cy.get('.rate').should('have.text', '2.55%')
        cy.get('#Term').clear().type('179')
        cy.get('.rate').should('have.text', '2.55%')
        cy.get('#Amount').clear().type('99999999')
        cy.get('.rate').should('have.text', '2.55%')

        cy.get('#Term').clear().type('180')
        cy.get('.rate').should('have.text', '2.75%')
        cy.get('#Term').clear().type('359')
        cy.get('.rate').should('have.text', '2.75%')

        cy.get('#Term').clear().type('360')
        cy.get('.rate').should('have.text', '2.9%')
        cy.get('#Term').clear().type('539')
        cy.get('.rate').should('have.text', '2.9%')

        cy.get('#Term').clear().type('540')
        cy.get('.rate').should('have.text', '3.05%')
        cy.get('#Term').clear().type('541')
        cy.get('.rate').should('have.text', '3.05%')
        cy.get('#Term').clear().type('999')
        cy.get('.rate').should('have.text', '3.05%')
    })

    it('PBA-1148 calculo tasa y rendimientos 100M 249.9M', function () {
        cy.visit('https://rb-pasivo-dev-cdt-front.avaldigitallabs.com/')
        cy.get('#Amount').type('100000000')
        cy.get('#Term').type('90')
        cy.get('.rate').should('have.text', '2.6%')
        cy.get('#Term').clear().type('179')
        cy.get('.rate').should('have.text', '2.6%')
        cy.get('#Amount').clear().type('249999999')
        cy.get('.rate').should('have.text', '2.6%')

        cy.get('#Term').clear().type('180')
        cy.get('.rate').should('have.text', '2.8%')
        cy.get('#Term').clear().type('359')
        cy.get('.rate').should('have.text', '2.8%')

        cy.get('#Term').clear().type('360')
        cy.get('.rate').should('have.text', '2.95%')
        cy.get('#Term').clear().type('539')
        cy.get('.rate').should('have.text', '2.95%')

        cy.get('#Term').clear().type('540')
        cy.get('.rate').should('have.text', '3.1%')
        cy.get('#Term').clear().type('541')
        cy.get('.rate').should('have.text', '3.1%')
        cy.get('#Term').clear().type('999')
        cy.get('.rate').should('have.text', '3.1%')
    })

    it('PBA-1148 calculo tasa y rendimientos 250M 499.9M', function () {
        cy.visit('https://rb-pasivo-dev-cdt-front.avaldigitallabs.com/')
        cy.get('#Amount').type('250000000')
        cy.get('#Term').type('90')
        cy.get('.rate').should('have.text', '2.65%')
        cy.get('#Term').clear().type('179')
        cy.get('.rate').should('have.text', '2.65%')
        cy.get('#Amount').clear().type('499999999')
        cy.get('.rate').should('have.text', '2.65%')

        cy.get('#Term').clear().type('180')
        cy.get('.rate').should('have.text', '2.85%')
        cy.get('#Term').clear().type('359')
        cy.get('.rate').should('have.text', '2.85%')

        cy.get('#Term').clear().type('360')
        cy.get('.rate').should('have.text', '3%')
        cy.get('#Term').clear().type('539')
        cy.get('.rate').should('have.text', '3%')

        cy.get('#Term').clear().type('540')
        cy.get('.rate').should('have.text', '3.15%')
        cy.get('#Term').clear().type('541')
        cy.get('.rate').should('have.text', '3.15%')
        cy.get('#Term').clear().type('999')
        cy.get('.rate').should('have.text', '3.15%')
    })

    it('PBA-1148 calculo tasa y rendimientos > 499.9M', function () {
        cy.visit('https://rb-pasivo-dev-cdt-front.avaldigitallabs.com/')
        cy.get('#Amount').type('500000000')
        cy.get('#Term').type('90')
        cy.get('.rate').should('have.text', '2.7%')
        cy.get('#Term').clear().type('119')
        cy.get('.rate').should('have.text', '2.7%')

        cy.get('#Term').clear().type('120')
        cy.get('.rate').should('have.text', '2.75%')
        cy.get('#Term').clear().type('179')
        cy.get('.rate').should('have.text', '2.75%')

        cy.get('#Term').clear().type('180')
        cy.get('.rate').should('have.text', '2.9%')
        cy.get('#Term').clear().type('359')
        cy.get('.rate').should('have.text', '2.9%')

        cy.get('#Term').clear().type('360')
        cy.get('.rate').should('have.text', '3.05%')
        cy.get('#Term').clear().type('539')
        cy.get('.rate').should('have.text', '3.05%')

        cy.get('#Term').clear().type('540')
        cy.get('.rate').should('have.text', '3.2%')
        cy.get('#Term').clear().type('541')
        cy.get('.rate').should('have.text', '3.2%')
        cy.get('#Term').clear().type('999')
        cy.get('.rate').should('have.text', '3.2%')

        cy.get('#Amount').clear().type('1000000000')
        cy.get('#Term').clear().type('90')
        cy.get('.rate').should('have.text', '2.7%')
        cy.get('#Term').clear().type('119')
        cy.get('.rate').should('have.text', '2.7%')

        cy.get('#Term').clear().type('120')
        cy.get('.rate').should('have.text', '2.75%')
        cy.get('#Term').clear().type('179')
        cy.get('.rate').should('have.text', '2.75%')

        cy.get('#Term').clear().type('180')
        cy.get('.rate').should('have.text', '2.9%')
        cy.get('#Term').clear().type('359')
        cy.get('.rate').should('have.text', '2.9%')

        cy.get('#Term').clear().type('360')
        cy.get('.rate').should('have.text', '3.05%')
        cy.get('#Term').clear().type('539')
        cy.get('.rate').should('have.text', '3.05%')

        cy.get('#Term').clear().type('540')
        cy.get('.rate').should('have.text', '3.2%')
        cy.get('#Term').clear().type('541')
        cy.get('.rate').should('have.text', '3.2%')
        cy.get('#Term').clear().type('999')
        cy.get('.rate').should('have.text', '3.2%')
    })
})