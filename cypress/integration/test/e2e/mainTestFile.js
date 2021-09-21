/// <reference types="Cypress" />

describe('test pasivo', function () {
    beforeEach(function () {
        cy.server()
    })

    
    it('form datos contacto', function () {
        var userConditions = { client: false, updated: false, cat: false, channles: false, docs: 'Empleado', sqs: 'success' };
        var flowConditions = { accountType: 'PRO', insurance: 'Si', gmf: false, declaring: true };

        cy.MockWs(userConditions)

        cy.FillForm()
        cy.AcceptPep()
        cy.SelectAccount(flowConditions.accountType)
        //cy.SelectGmf(true)
        cy.AcceptInsurance(flowConditions.insurance)
        cy.OtpAuthentication()
        cy.SelectActivity('Empleado')
        cy.WaitLoader()
        cy.FillContactForm('Empleado')
        // cy.SelectForeignData()
        // cy.SelectFinancialInformation(false)
        cy.FillSendAddress()
        cy.DeclaringOption(true)
        cy.WaitLoader()
        cy.get('#SubmitUploadDocumentsForm').should('be.disabled')
        cy.get('#SubmitUploadDocumentsForm', { timeout: 120000 }).should('be.enabled')
        cy.get('#SubmitUploadDocumentsForm').click()
        cy.ElectronicSignature()
        cy.PerformFlow(userConditions,flowConditions)

    })

    it('pep para actualizado', function () {
        var userConditions = { client: true, updated: true, cat: false, channles: false, docs: 'Empleado', sqs: 'success' };
        var flowConditions = { accountType: 'PRO', insurance: 'Si', gmf: false, declaring: true };

        cy.MockWs(userConditions)

        cy.FillForm()
        cy.get('#SubmitFormPEP', { timeout: 120000 }).should('be.visible')

        //cy.AcceptPep()
        // cy.SelectAccount(flowConditions.accountType)
        // //cy.SelectGmf(true)
        // cy.AcceptInsurance(flowConditions.insurance)
        // cy.OtpAuthentication()
        // cy.SelectActivity('Empleado')
        // cy.WaitLoader()
        // cy.FillContactForm('Empleado')
        // // cy.SelectForeignData()
        // // cy.SelectFinancialInformation(false)
        // cy.FillSendAddress()
        // cy.DeclaringOption(true)
        // cy.WaitLoader()
        // cy.get('#SubmitUploadDocumentsForm').should('be.disabled')
        // cy.get('#SubmitUploadDocumentsForm', { timeout: 120000 }).should('be.enabled')
        // cy.get('#SubmitUploadDocumentsForm').click()
        // cy.ElectronicSignature()
        // cy.PerformFlow(userConditions,flowConditions)

    })

    it('test habilitacion de ruta para no cliente y cliente descatualizado', function () {
        cy.visit('https://rb-pasivo-stg-front.avaldigitallabs.com/')
        // cy.CustomerConditions(true, false)

        // cy.fixture('valid-user-otp').then((user) => {
        //     cy.get('.btn').click()
        //     cy.get('#DNINumber').type(user.numdoc)
        //     cy.get('#MobileNumber').type(user.phone)
        //     cy.get('#MobileConfirmNumber').type(user.phone)
        //     cy.get('#FirstName').type(user.firstname)
        //     cy.get('#LastName').type(user.lastname)
        //     cy.get('#MonthlyIncomeInput').type(user.salary)
        //     cy.get('.mat-checkbox-inner-container').click()
        //     cy.get('#SubmitFormUserIdentification').click()
        //     cy.AcceptPep()
        //     cy.SelectAccount('PRO')
        //      cy.AcceptInsurance('Si')
        // })
    })

    it('cargue docs solo cc', function () {
        var userConditions = { client: true, updated: false, cat: false, channles: true, docs: 'cc', sqs: 'success' };
        var flowConditions = { accountType: 'SIMPLE', insurance: 'Si', gmf: false, declaring: true };
        cy.Sqs('success')

        cy.MockWs(userConditions)

        cy.FillForm()
        cy.AcceptPep()
        cy.SelectAccount('SIMPLE')
        //cy.SelectGmf(true)
        cy.AcceptInsurance('Si')
        cy.OtpAuthentication()
        cy.SelectActivity('Empleado')
        cy.WaitLoader()
        cy.FillContactForm('Empleado')
        // cy.SelectForeignData()
        // cy.SelectFinancialInformation(false)
        cy.FillSendAddress()
        cy.DeclaringOption(true)
        cy.WaitLoader()
        cy.get('#SubmitUploadDocumentsForm').should('be.disabled')
        cy.get('#SubmitUploadDocumentsForm', { timeout: 120000 }).should('be.enabled')
        cy.get('#SubmitUploadDocumentsForm').click()
        cy.ElectronicSignature()
        cy.PerformFlow(userConditions,flowConditions)

    })

    it('cargue docs pro empleado ', function () {

        var userConditions = {
            client: true,
            updated: false,
            cat: true,
            channles: true,
            docs: 'Empleado',
            sqs: 'success',
            //generateUrl: 'success',
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
        cy.get('#SubmitUploadDocumentsForm', { timeout: 120000 }).should('be.enabled')
        cy.get('#SubmitUploadDocumentsForm').click()
        cy.ElectronicSignature()
    })

    it('cargue docs pro sin cc ', function () {

        var userConditions = {
            client: true,
            updated: false,
            cat: true,
            channles: true,
            docs: 'no cc',
            sqs: 'success',
            //generateUrl: 'success',
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
        cy.get('#SubmitUploadDocumentsForm', { timeout: 120000 }).should('be.enabled')
        cy.get('#SubmitUploadDocumentsForm').click()
        cy.ElectronicSignature()
    })

    it('flujo cliente actualizado con simple sin seguro', function () {
        var userConditions = { client: true, updated: true, cat: false, channels: true, docs: 'skip', sqs: 'success', updateCrm:true };
        var flowConditions = { accountType: 'SIMPLE', insurance: 'No', gmf: false, declaring: true };

        cy.MockWs(userConditions)
        cy.PerformFlow(userConditions,flowConditions)
    })

     it.only('flujo cliente actualizado con simple sin seguro', function () {
        var userConditions = { client: true, updated: true, cat: false, channels: false, docs: 'skip', sqs: 'success', updateCrm:true };
        var flowConditions = { accountType: 'SIMPLE', insurance: 'No', gmf: false, declaring: true };

        cy.MockWs(userConditions)
        cy.PerformFlow(userConditions,flowConditions)
    })
/*
    it('flujo cliente actualizado con simple con seguro', function () {
        var userConditions = { client: true, updated: true, cat: false, channels: true, docs: 'skip', sqs: 'success' };
        var flowConditions = { accountType: 'SIMPLE', insurance: 'Si', gmf: false, declaring: true };

        cy.MockWs(userConditions)
        cy.PerformFlow(userConditions,flowConditions)
    })

    it('flujo cliente actualizado con pro con seguro', function () {
        var userConditions = { client: true, updated: true, cat: false, channels: true, docs: 'skip', sqs: 'success' };
        var flowConditions = { accountType: 'PRO', insurance: 'Si', gmf: true, declaring: true };

        cy.MockWs(userConditions)
        cy.PerformFlow(userConditions,flowConditions)
    })

    it('flujo cliente actualizado con pro sin seguro', function () {
        var userConditions = { client: true, updated: true, cat: false, channels: true, docs: 'skip', sqs: 'success' };
        var flowConditions = { accountType: 'PRO', insurance: 'No', gmf: false, declaring: false };

        cy.MockWs(userConditions)
        cy.PerformFlow(userConditions,flowConditions)
    })

    it('flujo cliente desactualizado con simple sin seguro', function () {
        var userConditions = { client: true, updated: false, cat: false, channels: true, docs: 'skip', sqs: 'success' };
        var flowConditions = { accountType: 'SIMPLE', insurance: 'No', gmf: false, declaring: true };

        cy.MockWs(userConditions)
        cy.PerformFlow(userConditions,flowConditions)
    })

    it('flujo cliente desactualizado con simple con seguro', function () {
        var userConditions = { client: true, updated: false, cat: false, channels: true, docs: 'skip', sqs: 'success' };
        var flowConditions = { accountType: 'SIMPLE', insurance: 'Si', gmf: false, declaring: true };

        cy.MockWs(userConditions)
        cy.PerformFlow(userConditions,flowConditions)
    })

    it('flujo cliente desactualizado con pro con seguro', function () {
        var userConditions = { client: true, updated: false, cat: false, channels: true, docs: 'skip', sqs: 'success' };
        var flowConditions = { accountType: 'PRO', insurance: 'Si', gmf: true, declaring: true };

        cy.MockWs(userConditions)
        cy.PerformFlow(userConditions,flowConditions)
    })

    it('flujo cliente desactualizado con pro sin seguro', function () {
        var userConditions = { client: true, updated: false, cat: false, channels: true, docs: 'skip', sqs: 'success' };
        var flowConditions = { accountType: 'PRO', insurance: 'No', gmf: false, declaring: false };

        cy.MockWs(userConditions)
        cy.PerformFlow(userConditions,flowConditions)
    }) */



    it.skip('test cargue de archivo', function () {
        var userConditions = { client: true, updated: false, cat: false, channles: true, docs: 'cc', sqs: 'success' };
        var flowConditions = { accountType: 'SIMPLE', insurance: 'Si', gmf: false, declaring: true };
        const fileName = 'cc2.jpeg';
        //const fileName = 'files/cc1.jpeg';

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
        //cy.WaitLoader()
        cy.get('#SubmitUploadDocumentsForm').should('be.disabled')

        // cy.fixture('cc2.jpeg').as('cc')
        // .get('#FrontIDPic').then(function(el) {
        //   return Cypress.Blob.base64StringToBlob(this.cc, 'image/jpeg')
        //     .then(blob => {
        //       el[0].files[0] = blob
        //       el[0].dispatchEvent(new Event('change', {bubbles: true}))
        //     })
        // })

    //    cy.get('#FrontIDPic').then(
    //        (file)=>{
    //             console.log(file)
    //               console.log(file[0].files[0])
    //        }
    //    )
       
       cy.get('#FrontIDPic').attachFile(fileName, { force: true }).then(
           (file)=>{
               cy.debug()
                console.log(file);
                file[0].dispatchEvent(new Event('change'));
                var adj = document.getElementById('FrontIDPic');
                console.log(adj) 
                cy.wrap(file).trigger('change', { force: true });

           }
       ).trigger('change');

        cy.wait(20000)
    })

})
