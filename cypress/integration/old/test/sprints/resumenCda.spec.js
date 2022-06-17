
describe('Cargue de documentos CDA', function () {
    beforeEach(function () {
        cy.server()
    })
    it('Cda cargue con cedula', function () {
        var pause = true;
        var flowConditions = { scr:false,accountType: 'DIGITAL', insurance: 'Si', gmf: false, declaring: false, environment: 'stg' };
        var userConditions = { captcha:'ok',client: true, updated: true };

        cy.setMocks(userConditions)
        cy.fillBasicInformationPage(flowConditions.environment,userConditions.scr,pause)
        cy.waitLoader()
        cy.AcceptPep()
        //cy.ScreenShot(userConditions.scr)
        cy.waitLoader()

        cy.SelectAccount(flowConditions.accountType, flowConditions.gmf,userConditions.scr)
        cy.Pause(userConditions.pause)
    
        //cy.AcceptInsurance(flowConditions.insurance,userConditions.scr)
        //cy.waitLoader()
        cy.OtpAuthentication(userConditions.scr)
    
        //  cy.SelectActivity('Empleado',userConditions.scr)
        //  cy.waitLoader()
        //  cy.FillContactForm('Empleado',userConditions.scr)
        //  if (flowConditions.accountType == 'DIGITAL') {
        //      cy.SelectForeignData(userConditions.scr)
        //      cy.SelectFinancialInformation(false,userConditions.scr)
        //  }
         cy.FillSendAddress(userConditions.scr)
         cy.DeclaringOption(flowConditions.declaring,userConditions.scr)
         cy.ElectronicSignature()

    })
 

})
