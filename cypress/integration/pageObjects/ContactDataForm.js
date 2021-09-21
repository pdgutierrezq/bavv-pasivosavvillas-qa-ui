class ContactDataForm{

    fillEmail(){
        const email=cy.get('#Email', { timeout: 30000 })
        
        email
        .invoke('val')
        .then(
            emailtext => {
                if (emailtext == '') {
                    cy.get('#Email').type('correo@correo.com')
                    cy.get('#EmailConfirm').type('correo@correo.com')
                }
            }
        );
        return this
    }

    fillPhone(){
        const phone=cy.get('#LandlinePhone')
        
        phone
        .invoke('val')
        .then(
            phonetext => {
                if (phonetext === '' || phonetext == '0') {
                    cy.get('#LandlinePhone').clear().type('6776655')
                }
            }
        );
        return this

    }

    fillAddress(){
        const address=cy.get('#HomeAddress')
        
        address
        .invoke('val')
        .then(
            addresstext => {
                if (addresstext === '') {
                    cy.get('#HomeAddress').clear().type('direccion de envio de tarjeta')
                }
            }
        );
        return this
    }
    fillNeighborhood(){
        const address=cy.get('#HomeDistrict')
        
        address
        .invoke('val')
        .then(
            neighborhoodText => {
                if (neighborhoodText === '') {
                    cy.get('#HomeDistrict').clear().type('adlBarriotest')
                }
            }
        );
        return this
    }

    fillCity(){
        const city=cy.get('#HomeCity')
        
        city
        .invoke('val')
        .then(
            citytext => {
                if (citytext === '') {
                    cy.get('#HomeCity').type("bogo{downarrow}{enter}")
                }
            }
        );
        return this
    }

    fillCompanyName(){
        const name=cy.get('#CompanyName')
        
        name
        .invoke('val')
        .then(
            citytext => {
                if (citytext === '') {
                    cy.get('#CompanyName').type('adltestpasivo')
                }
            }
        );
        return this
    }

    fillCompanyPhone(){
        const phone=cy.get('#WorkPhone')
        
        phone
        .invoke('val')
        .then(
            phonetext => {
                if (phonetext === '' || phonetext == '0') {
                    cy.get('#WorkPhone').clear().type('6677990')
                }
            }
        );
        return this
    }

    fillCompanyAddress(){
        const phone=cy.get('#WorkAddress')
        
        phone
        .invoke('val')
        .then(
            addresstext => {
                if (addresstext === '') {
                    cy.get('#WorkAddress').type('direccion de prueba empresa')
                }
            }
        );
        return this
    }

    fillCompanyCity(){
        const city=cy.get('#WorkCity')
        
        city
        .invoke('val')
        .then(
            citytext => {
                if (citytext === '') {
                    cy.get('#WorkCity')
                        .type("bogo{downarrow}{enter}")
                }
            }
        );
        return this
    }
}
export default ContactDataForm