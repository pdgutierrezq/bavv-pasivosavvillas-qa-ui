/// <reference types="Cypress" />

describe('Sprint 38', function () {
    beforeEach(function () {
        cy.server()
    })

    it('PBA-1010 Pantalla para definir si es o no PEP', function () {
        var userConditions = { client: true, updated: true }
        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.waitLoader()
        cy.url().should('include', 'pep')

        var userConditions = { client: true, updated: false }
        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.waitLoader()
        cy.url().should('include', 'pep')
    })

    it('PBA-1010 Re dirección al no cliente-1-updated', function () {

        var userConditions = { client: false, updated: true }
        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.waitLoader()

        cy.url().should('contain', 'error-usuario')
    })

    it('PBA-1010 Re dirección al no cliente-1-not updated', function () {

        var userConditions = { client: false, updated: false }
        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.waitLoader()

        cy.url().should('contain', 'error-usuario')
    })

    it('PBA-1010 Detalle de lo que es un PEP', function () {

        var userConditions = { client: true, updated: false }
        cy.MockWs(userConditions)
        cy.FillFormCDT()

        cy.get('.more-info').click()
        cy.contains('¿Qué es ser públicamente expuesto?').should('be.visible')
    })

    it('PBA-1019 Formato de Campo Cuanto quieres invertir ', function () {
        // Dado que el usuario esta en la pantalla de landing
        // cuando seleccione la opción para escribir monto de inversión
        // Entonces solo podrá ingresar números
        cy.visit('https://rb-pasivo-dev-cdt-front.avaldigitallabs.com/')
        cy.get('#Amount').type('texto')
        cy.get('#Amount').should('have.value', '')
    })

    it('PBA-1019 Dar formato al campo de Cuanto quieres invertir ', function () {
        // Dado que estoy en pantalla pantalla de landing
        // Cuando este digitando el monto de inversión
        // Entonces la información que se va ingresando quedará con el signo pesos como primer posición y los puntos de miles y/o millones segun el mock.
        cy.visit('https://rb-pasivo-dev-cdt-front.avaldigitallabs.com/')
        cy.get('#Amount').type('8')
        cy.get('#Amount').should('have.value', '$ 8')
        cy.get('#Amount').type('000')
        cy.get('#Amount').should('have.value', '$ 8.000')
        cy.get('#Amount').type('000')
        cy.get('#Amount').should('have.value', '$ 8.000.000')

    })

    it('PBA-1019 Longitud mínima de Campo Cuanto quieres invertir  ', function () {
        // Dado que el usuario está en la pantalla de landing
        cy.visit('https://rb-pasivo-dev-cdt-front.avaldigitallabs.com/')
        // cuando  ingrese un monto de inversión menor a $500.000
        cy.get('#Amount').type('499000').tab().tab()
        // Entonces se mostrará el mensaje “El monto mínimo es de $500.000.“
        cy.get('mat-error').should('have.text', ' El monto mínimo es de $500.000. ')
    })

    it('PBA-1019 Formato de Campo Elige plazo o tiempo  ', function () {
        // Dado que el usuario esta en la pantalla de landing
        cy.visit('https://rb-pasivo-dev-cdt-front.avaldigitallabs.com/')
        // cuando seleccione la opción para elegir el plazo o tiempo
        cy.get('#Term').type('texto')
        // Entonces solo podrá ingresar números
        cy.get('#Term').should('have.value', '')
    })

    it('PBA-1019 Incorporar limite de plazo máximo y mínimo', function () {
        // Dado que el usuario esta en la pantalla de landing
        cy.visit('https://rb-pasivo-dev-cdt-front.avaldigitallabs.com/')
        // cuando ingrese un plazo que no esté en el rango de  90 y 999 días
        cy.get('#Term').type('89').tab()
        // Entonces se mostrará el mensaje “El plazo debe estar entre 90 y 999 días“     
        cy.get('mat-error').should('have.text', ' El plazo debe estar entre 90 y 999 días. ')

        // cuando ingrese un plazo que no esté en el rango de  90 y 999 días
        cy.get('#Term').clear().type('90').tab()
        // Entonces se mostrará el mensaje “El plazo debe estar entre 90 y 999 días“     
        cy.get('mat-error').should('not.be.visible')

        // cuando ingrese un plazo que no esté en el rango de  90 y 999 días
        cy.get('#Term').clear().type('1000').tab()
        // Entonces se mostrará el mensaje “El plazo debe estar entre 90 y 999 días“     
        cy.get('mat-error').should('have.text', ' El plazo debe estar entre 90 y 999 días. ')

        // cuando ingrese un plazo que no esté en el rango de  90 y 999 días
        cy.get('#Term').clear().type('999').tab()
        // Entonces se mostrará el mensaje “El plazo debe estar entre 90 y 999 días“     
        cy.get('mat-error').should('not.be.visible')


    })

    it('PBA-1019 Incluir zona de documentos por actividad económica.-Incluir información de documentos por actividad económica.', function () {
        // Dado que estoy en pantalla de landing
        cy.visit('https://rb-pasivo-dev-cdt-front.avaldigitallabs.com/')
        // Cuando cuando de click en el recuadro de alguna actividad económica (Empleado, independiente, pensionado, hogar o estudiante)
        // Entonces se despliegan los documentos que se pueden cargar según esa actividad económica.

        //Empleado
        cy.get('.list-title').contains('Empleado').click()
        cy.get('#cdk-accordion-child-0 > .mat-expansion-panel-body').should('have.text', 'Uno de los cuatro:Certificación laboral no mayor a 30 días.Certificado de ingresos y retenciones.3 últimos comprobantes de nómina.Declaración de renta.')

        //Independiente
        cy.get('.list-title').contains('Independiente').click()
        cy.get('#cdk-accordion-child-1 > .mat-expansion-panel-body').should('have.text', 'Uno de los cuatro:Estados financieros.Declaración de renta.Certificación de ingresos.Contrato de prestación de servicios. Si eres propietario de establecimiento de comercio adicionalmente debes adjuntar: Cámara de comercio y/o RUT. ')

        //Pensionado
        cy.get('.list-title').contains('Pensionado').click()
        cy.get('#cdk-accordion-child-2 > .mat-expansion-panel-body').should('have.text', 'Uno de los tres:Resolución de liquidación.2 últimos comprobantes de pensión.Declaración de renta.')

        //Hogar o estudiante
        cy.get('.list-title').contains('Hogar o estudiante').click()
        cy.get('#cdk-accordion-child-3 > .mat-expansion-panel-body').should('have.text', 'Uno de los dos:Certificación de ingresos.Declaración de renta.')

    })

    it('PBA-1019 Incluir información de documentos por actividad económica.', function () {
        // Dado que estoy en pantalla de landing y que se encuentra abierta una actividad económica
        cy.visit('https://rb-pasivo-dev-cdt-front.avaldigitallabs.com/')
        //EMpleado
        // Cuando cuando de click en el recuadro de otra actividad económica
        cy.get('.list-title').contains('Empleado').click()
        // Entonces se cerrará la que tenia abierta y se desplegaran los documentos de la que estoy abriendo, esto según el mock up.       
        cy.get('#cdk-accordion-child-0 > .mat-expansion-panel-body').should('be.visible')
        cy.get('#cdk-accordion-child-1 > .mat-expansion-panel-body').should('not.be.visible')
        cy.get('#cdk-accordion-child-2 > .mat-expansion-panel-body').should('not.be.visible')
        cy.get('#cdk-accordion-child-3 > .mat-expansion-panel-body').should('not.be.visible')
        //Independiente
        // Cuando cuando de click en el recuadro de otra actividad económica
        cy.get('.list-title').contains('Independiente').click()
        // Entonces se cerrará la que tenia abierta y se desplegaran los documentos de la que estoy abriendo, esto según el mock up.       
        cy.get('#cdk-accordion-child-0 > .mat-expansion-panel-body').should('not.be.visible')
        cy.get('#cdk-accordion-child-1 > .mat-expansion-panel-body').should('be.visible')
        cy.get('#cdk-accordion-child-2 > .mat-expansion-panel-body').should('not.be.visible')
        cy.get('#cdk-accordion-child-3 > .mat-expansion-panel-body').should('not.be.visible')
        // //Pensionado
        // Cuando cuando de click en el recuadro de otra actividad económica
        cy.get('.list-title').contains('Pensionado').click()
        // Entonces se cerrará la que tenia abierta y se desplegaran los documentos de la que estoy abriendo, esto según el mock up.       
        cy.get('#cdk-accordion-child-0 > .mat-expansion-panel-body').should('not.be.visible')
        cy.get('#cdk-accordion-child-1 > .mat-expansion-panel-body').should('not.be.visible')
        cy.get('#cdk-accordion-child-2 > .mat-expansion-panel-body').should('be.visible')
        cy.get('#cdk-accordion-child-3 > .mat-expansion-panel-body').should('not.be.visible')

        // //Hogar o estudiante
        // Cuando cuando de click en el recuadro de otra actividad económica
        cy.get('.list-title').contains('Hogar o estudiante').click()
        // Entonces se cerrará la que tenia abierta y se desplegaran los documentos de la que estoy abriendo, esto según el mock up.       
        cy.get('#cdk-accordion-child-0 > .mat-expansion-panel-body').should('not.be.visible')
        cy.get('#cdk-accordion-child-1 > .mat-expansion-panel-body').should('not.be.visible')
        cy.get('#cdk-accordion-child-2 > .mat-expansion-panel-body').should('not.be.visible')
        cy.get('#cdk-accordion-child-3 > .mat-expansion-panel-body').should('be.visible')
    })

    it('PBA-507 Validación no exitosa por código errado y muestra de mensaje.', function () {
        var flowConditions = { accountType: 'PRO', insurance: 'Si', gmf: false, environment: 'dev' };
        var userConditions = { client: true, updated: false, cat: false };
         cy.MockWs(userConditions)

        // Dado que soy un usuario y estoy en la pantalla de validación de OTP
        cy.fillBasicInformationPage()
        cy.waitLoader()
        cy.AcceptPep()
        cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)
        cy.AcceptInsurance(flowConditions.insurance)

        cy.get('.mat-input-element', { timeout: 20000 }).first().type('12345678')
        // Cuando la validación no sea exitosa por clave errada
        cy.UserIdentityValidate('WRONG_PASS')
        cy.get('#OtpButton', { timeout: 20000 }).click()
        // Entonces  se le informará en un mensaje de error que la información proporcionada es incorrecta dejando la OTP ingresada. (MSJ: El código que ingresaste no corresponde al enviado.)
        cy.get('.error').should('have.text', ' El código que ingresaste no corresponde al enviado. ')
        cy.get('.mat-input-element').each(($el, index, $list) => {           
              cy.wrap($el).should('not.have.value','')        
          })
         
    })

    it('PBA-507 Validación no exitosa por falla distinta a clave errada', function () {
        var flowConditions = { accountType: 'PRO', insurance: 'Si', gmf: false, environment: 'dev' };
        var userConditions = { client: true, updated: false, cat: false };
         cy.MockWs(userConditions)

        // Dado que soy un usuario y estoy en la pantalla de validación de OTP
        cy.fillBasicInformationPage()
        cy.waitLoader()
        cy.AcceptPep()
        cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)
        cy.AcceptInsurance(flowConditions.insurance)

        cy.get('.mat-input-element', { timeout: 20000 }).first().type('12345678')
        // Cuando la validación responda status code 200 pero no sea exitosa por una causa diferente a clave errada
        // cy.UserIdentityValidate('UTILIZADA')
        cy.UserIdentityValidate('ANULADA')
        cy.get('#OtpButton', { timeout: 20000 }).click()
        // Entonces  se le informará en un mensaje de error que la información proporcionada es incorrecta dejando la OTP ingresada. (MSJ: El código que ingresaste no corresponde al enviado.)
        cy.get('.error').should('have.text', ' Hubo un inconveniente con el código que ingresaste, solicítalo de nuevo. ')
        cy.get('.mat-input-element').each(($el, index, $list) => {           
            cy.wrap($el).should('be.disabled')        
        })
    })

    it('PBA-507 Limite de validación de OTP', function () {
        var flowConditions = { accountType: 'PRO', insurance: 'Si', gmf: false, environment: 'dev' };
        var userConditions = { client: true, updated: false, cat: false };
         cy.MockWs(userConditions)
         
        //Dado que el usuario esta la pantalla de autenticación

        cy.fillBasicInformationPage()
        cy.waitLoader()
        cy.AcceptPep()
        cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)
        cy.AcceptInsurance(flowConditions.insurance)

        cy.get('.mat-input-element', { timeout: 20000 }).first().type('12345678')
        // cuando el cliente ingrese el código de forma incorrecta por tercera vez
        cy.UserIdentityValidate('WRONG_PASS')
        cy.get('#OtpButton', { timeout: 20000 }).click()
        cy.get('#OtpButton', { timeout: 20000 }).click()
        cy.get('#OtpButton', { timeout: 20000 }).click()
        // Entonces se deshabilita el campo para ingresar el código, se limpia el campo y se muestra el siguiente mensaje de error “Excediste el número de intentos, solicita un nuevo código.”
        cy.get('.error').should('have.text', ' Excediste el número de intentos, solicita un nuevo código. ')
        cy.get('.mat-input-element').each(($el, index, $list) => {           
              cy.wrap($el).should('be.disabled')        
          })
         
    })

    it('PBA-507 error tecnico', function () {
        var flowConditions = { accountType: 'PRO', insurance: 'Si', gmf: false, environment: 'dev' };
        var userConditions = { client: true, updated: false, cat: false };
         cy.MockWs(userConditions)

        // Dado que soy un usuario y estoy en la pantalla de validación de OTP
        cy.fillBasicInformationPage()
        cy.waitLoader()
        cy.AcceptPep()
        cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)
        cy.AcceptInsurance(flowConditions.insurance)

        cy.get('.mat-input-element', { timeout: 20000 }).first().type('12345678')
        // Cuando la validación responda status code 200 pero no sea exitosa por una causa diferente a clave errada
        // cy.UserIdentityValidate('UTILIZADA')
        cy.UserIdentityValidate('FAIL')
        cy.get('#OtpButton', { timeout: 20000 }).click()
        // Entonces  se le informará en un mensaje de error que la información proporcionada es incorrecta dejando la OTP ingresada. (MSJ: El código que ingresaste no corresponde al enviado.)
        cy.get('.error').should('have.text', ' Hubo un inconveniente con el código que ingresaste, solicítalo de nuevo. ')
        cy.get('.mat-input-element').each(($el, index, $list) => {           
            cy.wrap($el).should('be.disabled')        
        })
    })
})
