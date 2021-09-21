
describe('Sprint 62', function () {

    it('wss test', function () {
       
    cy.visit('https://www.loadview-testing.com/blog/load-testing-websocket-based-applications/')
    cy.visit('https://rb-pasivo-stg-cdt-front.avaldigitallabs.com/')

    
    cy.get('.avv-btn-primary').click()
    cy.fixture('datosPasivo').then((user) => {
        cy.get('#DNINumber').type(user.numdoc)
        cy.get('#MobileNumber').type(user.phone)
        cy.get('#MobileConfirmNumber').type(user.phone)
        cy.get('#FirstName').type(user.firstname)
        cy.get('#LastName').type(user.lastname)
        cy.get('.mat-checkbox-inner-container').click()
        cy.wait(2000)
        cy.get('#SubmitFormUserIdentification').click()

    })
})

    })


