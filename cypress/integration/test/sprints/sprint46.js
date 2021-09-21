// <reference types="Cypress" />
// import { initServer } from "./server.js"

describe('Sprint 46', function () {
    beforeEach(function () {
        cy.server()
    })

    it('www', function () {

        var userConditions = { client: true, updated: true, cat: false, channels: true, insurance: 'true', updateCrm: '127' };
        var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false, environment: 'dev' };

        cy.MockWs(userConditions)
        // Dado  el cliente está en la pantalla de PEP 
        cy.PerformFlow(userConditions, flowConditions)

        // cy.visit("/", {
        //   onBeforeLoad(win) {
        //     initServer()
        //     cy.stub(win, "WebSocket", url => new MockSocket.WebSocket(url))
        //   }
        // })
        // cy.fixture('datosPasivo').then((user) => {
        //     cy.get('.btn').click()
        //     cy.get('#DNINumber').type(user.numdoc)
        //     cy.get('#MobileNumber').type(user.phone)
        //     cy.get('#MobileConfirmNumber').type(user.phone)
        //     cy.get('#FirstName').type(user.firstname)
        //     cy.get('#LastName').type(user.lastname)
        //     cy.get('#MonthlyIncomeInput').type(user.salary)
        //     cy.get('.mat-checkbox-inner-container').click()
        //     cy.wait(2000)
        //     cy.get('#SubmitFormUserIdentification').click()
        // })
        // cy.WaitLoader()
        // cy.AcceptPep()

        // cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)

        // if (userConditions.insurance == 'false') {
        //     cy.AcceptInsurance(flowConditions.insurance)
        // }
        // cy.WaitLoader()
        // cy.OtpAuthentication()
        // cy.FillSendAddress()

    })

    it.only('Pantalla de configuración de cuentas CDT', function () {
        var userConditions = { client: true, updated: true, cat: false ,docs: 'Empleado'};
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.WaitLoader()
        cy.wait(3000)

        cy.AcceptPep()
        cy.wait(3000)
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.wait(3000)

        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.wait(3000)

        cy.OtpAuthentication()
    
    })
    it('Pantalla cargue documentos CDT Empleado', function () {
        var userConditions = { client: true, updated: false, cat: false ,docs: 'Empleado'};
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.WaitLoader()

        cy.wait(3000)
        cy.AcceptPep()
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.wait(3000)

        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.wait(3000)

        cy.OtpAuthentication()
        cy.wait(3000)

        cy.SelectActivity('Empleado')
        cy.WaitLoader()
        cy.wait(3000)

        cy.FillContactForm('Empleado')
        cy.wait(3000)

            cy.SelectForeignData()
            cy.wait(3000)

            cy.SelectFinancialInformation(false)
        cy.get('#activeExpensesInput').type('2000000')
        cy.get('#passiveExpensesInput').type('2000000')
        cy.get('#monthlyExpensesInput').type('2000000')
        cy.get('#monthlyIncomeInput').type('2000000')
        cy.get('#SubmitContactInformationForm').click()
        cy.get('#mat-radio-28').click()
        cy.get('#mat-radio-30').click()
        cy.get('#mat-radio-26 ').click()
        cy.wait(3000)

        cy.get('#SubmitAccountSettingsForm').click()
        cy.wait(3000)

        cy.DeclaringOption(true)
    })

    it.only('Pantalla cargue documentos CDT Empleado- Sprint 87', function () {
        var userConditions = { client: true, updated: false, cat: false ,docs: 'Empleado'};
        var flowConditions = { accountType: 'DIGITAL', insurance: 'Si', gmf: false, declaring: false,environment:'stg'};
        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.WaitLoader()

        cy.wait(3000)
        cy.AcceptPep()
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.wait(3000)

        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.wait(3000)

        cy.OtpAuthentication()
        cy.wait(3000)

        cy.SelectActivity('Empleado')
        cy.WaitLoader()
        cy.wait(3000)

        cy.FillContactForm('Empleado')
        cy.wait(3000)

        cy.SelectForeignData()
        cy.wait(3000)

        cy.SelectFinancialInformation(false)
        cy.get('#activeExpensesInput').type('2000000')
        cy.get('#passiveExpensesInput').type('2000000')
        cy.get('#monthlyExpensesInput').type('2000000')
        cy.get('#monthlyIncomeInput').type('2000000')
        cy.get('#SubmitContactInformationForm').click()
        cy.get('#mat-radio-28').click()
        cy.get('#mat-radio-30').click()
        cy.get('#mat-radio-26 ').click()
        cy.wait(3000)

        cy.get('#SubmitAccountSettingsForm').click()
        cy.wait(3000)

        cy.DeclaringOption(true)
    })
    it('Pantalla cargue documentos CDT Independiente', function () {
        var userConditions = { client: true, updated: false, cat: false ,docs: 'no docs'};
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.WaitLoader()
        cy.AcceptPep()
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.OtpAuthentication()
        cy.SelectActivity('Independiente')
        cy.WaitLoader()
        cy.FillContactForm('Independiente')
            cy.SelectForeignData()
            cy.SelectFinancialInformation(false)
        cy.get('#activeExpensesInput').type('2000000')
        cy.get('#passiveExpensesInput').type('2000000')
        cy.get('#monthlyExpensesInput').type('2000000')
        cy.get('#monthlyIncomeInput').type('2000000')
        cy.get('#SubmitContactInformationForm').click()
        cy.get('#mat-radio-28').click()
        cy.get('#mat-radio-30').click()
        cy.get('#mat-radio-26 ').click()
        cy.get('#SubmitAccountSettingsForm').click()

        cy.DeclaringOption(false)
    })

    it('Pantalla cargue documentos CDT cc', function () {
        var userConditions = { client: true, updated: false, cat: false ,docs: 'cc'};
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.WaitLoader()
        cy.AcceptPep()
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.OtpAuthentication()
        cy.SelectActivity('Independiente')
        cy.WaitLoader()
        cy.FillContactForm('Independiente')
            cy.SelectForeignData()
            cy.SelectFinancialInformation(false)
        cy.get('#activeExpensesInput').type('2000000')
        cy.get('#passiveExpensesInput').type('2000000')
        cy.get('#monthlyExpensesInput').type('2000000')
        cy.get('#monthlyIncomeInput').type('2000000')
        cy.get('#SubmitContactInformationForm').click()
        cy.get('#mat-radio-28').click()
        cy.get('#mat-radio-30').click()
        cy.get('#mat-radio-26 ').click()
        cy.get('#SubmitAccountSettingsForm').click()

        cy.DeclaringOption(false)
    })

    
    it('Pantalla cargue documentos CDT Pensionado', function () {
        var userConditions = { client: true, updated: false, cat: false ,docs: 'Empleado'};
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.WaitLoader()
        cy.AcceptPep()
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.OtpAuthentication()
        cy.SelectActivity('Pensionado')
        cy.WaitLoader()
        cy.FillContactForm('Pensionado')
            cy.SelectForeignData()
            cy.SelectFinancialInformation(false)
        cy.get('#activeExpensesInput').type('2000000')
        cy.get('#passiveExpensesInput').type('2000000')
        cy.get('#monthlyExpensesInput').type('2000000')
        cy.get('#monthlyIncomeInput').type('2000000')
        cy.get('#SubmitContactInformationForm').click()
        cy.get('#mat-radio-28').click()
        cy.get('#mat-radio-30').click()
        cy.get('#mat-radio-26 ').click()
        cy.get('#SubmitAccountSettingsForm').click()

        cy.DeclaringOption(true)
    })

    it('Pantalla cargue documentos CDT Estudiante declarante', function () {
        var userConditions = { client: true, updated: false, cat: false ,docs: 'Empleado'};
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.WaitLoader()
        cy.AcceptPep()
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.OtpAuthentication()
        cy.SelectActivity('Hogar')
        cy.WaitLoader()
        cy.FillContactForm('Estudiante')
            cy.SelectForeignData()
            cy.SelectFinancialInformation(false)
        cy.get('#activeExpensesInput').type('2000000')
        cy.get('#passiveExpensesInput').type('2000000')
        cy.get('#monthlyExpensesInput').type('2000000')
        cy.get('#monthlyIncomeInput').type('2000000')
        cy.get('#SubmitContactInformationForm').click()
        cy.get('#mat-radio-28').click()
        cy.get('#mat-radio-30').click()
        cy.get('#mat-radio-26 ').click()
        cy.get('#SubmitAccountSettingsForm').click()

        cy.DeclaringOption(true)
    })

    it('Pantalla cargue documentos CDT  Independiente declarante', function () {
        var userConditions = { client: true, updated: false, cat: false ,docs: 'Empleado'};
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.WaitLoader()
        cy.AcceptPep()
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.OtpAuthentication()
        cy.SelectActivity('Independiente con negocio')
        cy.WaitLoader()
        cy.FillContactForm('Independiente con negocio')
            cy.SelectForeignData()
            cy.SelectFinancialInformation(false)
        cy.get('#activeExpensesInput').type('2000000')
        cy.get('#passiveExpensesInput').type('2000000')
        cy.get('#monthlyExpensesInput').type('2000000')
        cy.get('#monthlyIncomeInput').type('2000000')
        cy.get('#SubmitContactInformationForm').click()
        cy.get('#mat-radio-28').click()
        cy.get('#mat-radio-30').click()
        cy.get('#mat-radio-26 ').click()
        cy.get('#SubmitAccountSettingsForm').click()

        cy.DeclaringOption(true)
    })

    
    it('Pantalla cargue update crm', function () {
        var userConditions = { client: true, updated: false, cat: false ,docs: 'Empleado'};
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.WaitLoader()
        cy.AcceptPep()
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.OtpAuthentication()
        cy.SelectActivity('Empleado')
        cy.WaitLoader()
        cy.FillContactForm('Empleado')
            cy.SelectForeignData()
            cy.SelectFinancialInformation(false)
        cy.get('#activeExpensesInput').type('2000000')
        cy.get('#passiveExpensesInput').type('2000000')
        cy.get('#monthlyExpensesInput').type('2000000')
        cy.get('#monthlyIncomeInput').type('2000000')
        cy.get('#SubmitContactInformationForm').click()
        cy.get('#mat-radio-28').click()
        cy.get('#mat-radio-30').click()
        cy.get('#mat-radio-26 ').click()
        cy.get('#SubmitAccountSettingsForm').click()

        cy.DeclaringOption(true)
    })

    
    it('Pantalla cargue update crm actualizado esc2', function () {
        var userConditions = { client: true, updated: true, cat: false ,docs: 'Empleado'};
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.WaitLoader()
        cy.AcceptPep()
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.OtpAuthentication()
      
        cy.get('.mat-radio-label').first().click()
        cy.get('#mat-radio-14').click()
        cy.get('.mat-radio-label').last().click()
        cy.get('#SubmitAccountSettingsForm').click()

        cy.DeclaringOption(true)
    })
    
    it('Pantalla cargue documentos CDT  desactualizado ws iniciar', function () {
        var userConditions = { client: true, updated: false, cat: false ,docs: 'Empleado'};
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.WaitLoader()
        cy.AcceptPep()
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.OtpAuthentication()
        cy.SelectActivity('Independiente con negocio')
        cy.WaitLoader()
        cy.FillContactForm('Independiente con negocio')
            cy.SelectForeignData()
            cy.SelectFinancialInformation(false)
        cy.get('#activeExpensesInput').type('2000000')
        cy.get('#passiveExpensesInput').type('2000000')
        cy.get('#monthlyExpensesInput').type('2000000')
        cy.get('#monthlyIncomeInput').type('2000000')
        cy.get('#SubmitContactInformationForm').click()
        cy.get('#mat-radio-28').click()
        cy.get('#mat-radio-30').click()
        cy.get('#mat-radio-26 ').click()
        cy.get('#SubmitAccountSettingsForm').click()

        cy.DeclaringOption(true)
    })
    
    it('Pantalla cargue documentos CDT  iniciar fail', function () {
        var userConditions = { client: true, updated: false, cat: false ,docs: 'fail'};
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.WaitLoader()
        cy.AcceptPep()
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.OtpAuthentication()
        cy.SelectActivity('Independiente con negocio')
        cy.WaitLoader()
        cy.FillContactForm('Independiente con negocio')
            cy.SelectForeignData()
            cy.SelectFinancialInformation(false)
        cy.get('#activeExpensesInput').type('2000000')
        cy.get('#passiveExpensesInput').type('2000000')
        cy.get('#monthlyExpensesInput').type('2000000')
        cy.get('#monthlyIncomeInput').type('2000000')
        cy.get('#SubmitContactInformationForm').click()
        cy.get('#mat-radio-28').click()
        cy.get('#mat-radio-30').click()
        cy.get('#mat-radio-26 ').click()
        cy.get('#SubmitAccountSettingsForm').click()

        cy.DeclaringOption(true)
    })
     
    it('Pantalla cargue documentos CDT  iniciar exitoso', function () {
        var userConditions = { client: true, updated: false, cat: false ,docs: 'no docs'};
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.WaitLoader()
        cy.AcceptPep()
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.OtpAuthentication()
        cy.SelectActivity('Independiente con negocio')
        cy.WaitLoader()
        cy.FillContactForm('Independiente con negocio')
            cy.SelectForeignData()
            cy.SelectFinancialInformation(false)
        cy.get('#activeExpensesInput').type('2000000')
        cy.get('#passiveExpensesInput').type('2000000')
        cy.get('#monthlyExpensesInput').type('2000000')
        cy.get('#monthlyIncomeInput').type('2000000')
        cy.get('#SubmitContactInformationForm').click()
        cy.get('#mat-radio-28').click()
        cy.get('#mat-radio-30').click()
        cy.get('#mat-radio-26 ').click()
        cy.get('#SubmitAccountSettingsForm').click()

        cy.DeclaringOption(true)
    })
     
    it('Pantalla cargue documentos CDT  listas restrictivas', function () {
        var userConditions = { client: true, updated: false, cat: false ,updateCrm: '127'};
        // var flowConditions = { accountType: 'PRO', insurance: 'fail', gmf: false, declaring: false,environment:'dev'};

        cy.MockWs(userConditions)
        cy.FillFormCDT()
        cy.WaitLoader()
        cy.AcceptPep()
        cy.get('#Amount').type('1000000')
        cy.get('#Term').type('365')
        cy.get('.avv-btn-primary').click()
        cy.WaitLoader()
        cy.OtpAuthentication()
        cy.SelectActivity('Independiente con negocio')
        cy.WaitLoader()
        cy.FillContactForm('Independiente con negocio')
            cy.SelectForeignData()
            cy.SelectFinancialInformation(false)
        cy.get('#activeExpensesInput').type('2000000')
        cy.get('#passiveExpensesInput').type('2000000')
        cy.get('#monthlyExpensesInput').type('2000000')
        cy.get('#monthlyIncomeInput').type('2000000')
        cy.get('#SubmitContactInformationForm').click()
        cy.get('#mat-radio-28').click()
        cy.get('#mat-radio-30').click()
        cy.get('#mat-radio-26 ').click()
        cy.get('#SubmitAccountSettingsForm').click()

        cy.DeclaringOption(true)
    })

})
