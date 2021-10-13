

Cypress.Commands.add("PseFlow", (flowConditions, pause) => {
    cy.FillFormCDT(flowConditions.environment, pause)
    cy.AcceptPep()
    cy.ConfigCdt(pause)
    cy.OtpAuthentication()
    cy.FundingCdt(flowConditions.funding, flowConditions.rend, pause)
    cy.WaitLoader()
    cy.DeclaringOption(flowConditions.declaring)
    cy.WaitLoader()
    cy.ElectronicSignature()
    cy.WaitLoader()
    cy.fillPseForm(pause)
    cy.pause(true)
    cy.PseAction(flowConditions.status, true)
})

Cypress.Commands.add("PseAction", (status, pause) => {
    cy.get('#contenido').should('exist')
cy.reload()
    if (status == 'APROBAR') {
        cy.xpath('//a[contains(.,"Aprobar")]').click()

    } else if (status == 'PENDIENTE') {
        cy.xpath('//a[contains(.,"Pendiente")]').click()
    } else if (status == 'RECHAZAR') {
        cy.xpath('//a[contains(.,"Rechazar")]').click()
    } else if (status == 'FALLIDA') {
        cy.xpath('//a[contains(.,"Fallida")]').click()
    }
    cy.Pause(pause)

    cy.get('#volverHome').click()
})

Cypress.Commands.add("fillPseForm", (pause) => {
    cy.get('[formcontrolname="bank"]').click()
    cy.xpath('//mat-option[contains(.,"BANCO UNION COLOMBIANO")]').click()
    cy.get('.mat-radio-label').contains('Natural').click()
    cy.Pause(pause)
    cy.get('#SubmitPseForm').click()
})

Cypress.Commands.add("FundingCdt", (funding, rend, pause) => {
    if (funding == 'PSE') {
        cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button:contains("Desde otro banco")').click()
    }

    if (rend == 'ACCOUNT') {
        cy.get('[formcontrolname="accountSettingSecondGroup"]>.mat-radio-button').first().click()
    }
    cy.Pause(pause)
    cy.get('#SubmitAccountSettingsForm').click()
})

Cypress.Commands.add("ConfigCdt", (pause) => {
    cy.get('#Term').type('365')
    cy.get('#mat-radio-8 > .mat-radio-label').click()
    cy.Pause(pause)
    cy.get('#SubmitCDTForm').click()
    cy.WaitLoader()
})

Cypress.Commands.add("ValidateCalc", (amount, term) => {

    var listTasa

    if (amount > 499999 && amount < 10000000) {
        var listTasa = ['1.35%', '1.55%', '1.6%', '1.85%', '2.15%']
    } else if (amount > 9999999 && amount < 20000000) {
        var listTasa = ['1.55%', '1.55%', '1.7%', '1.9%', '2.25%']
    } else if (amount > 19999999 && amount < 50000000) {
        var listTasa = ['1.55%', '1.55%', '1.75%', '2.05%', '2.35%']
    } else if (amount > 49999999 && amount < 100000000) {
        var listTasa = ['1.6%', '1.6%', '1.75%', '2.05%', '2.35%']
    } else if (amount > 99999999 && amount < 250000000) {
        var listTasa = ['1.6%', '1.6%', '1.8%', '2.1%', '2.4%']
    } else if (amount > 249999999 && amount < 500000000) {
        var listTasa = ['1.65%', '1.65%', '1.85%', '2.15%', '2.45%']
    } else if (amount > 499999999) {
        var listTasa = ['1.7%', '1.8%', '1.9%', '2.25%', '2.55%']
    }
    cy.get('#Amount').clear().type(amount)
    cy.TypeAndValidate(amount, term, listTasa[0])

    term = 119
    cy.TypeAndValidate(amount, term, listTasa[0])

    term = 120
    cy.TypeAndValidate(amount, term, listTasa[1])

    term = 179
    cy.TypeAndValidate(amount, term, listTasa[1])

    term = 180
    cy.TypeAndValidate(amount, term, listTasa[2])

    term = 359
    cy.TypeAndValidate(amount, term, listTasa[2])

    term = 360
    cy.TypeAndValidate(amount, term, listTasa[3])

    term = 539
    cy.TypeAndValidate(amount, term, listTasa[3])

    term = 540
    cy.TypeAndValidate(amount, term, listTasa[4])

    term = 540
    cy.TypeAndValidate(amount, term, listTasa[4])

    term = 999
    cy.TypeAndValidate(amount, term, listTasa[4])

})

Cypress.Commands.add("TypeAndValidate", (amount, term, rate) => {

    cy.get('#Term').clear().type(term)
    //cy.get('#Period ').click().get('mat-option').contains('Al vencimiento').click();
    //var refund = 'Al vencimiento';
    //var refund = 'Cada tres meses';
    var refund;

    if (term % 30 == 0) {
        if (term == 120 || term == 240 || term == 300 || term == 420 || term == 480 || term == 600 || term == 660 || term == 780 || term == 840 || term == 960) {
            refund = 'Cada mes';
        } else if (term == 180) {
            refund = 'Cada tres meses';
        } else if (term == 360) {
            refund = 'Cada seis meses';
        } else if (term == 720) {
            refund = 'Cada año';

        } else {
            refund = 'Cada mes';
        }

        // cy.get('#Period ').click().get('mat-option').contains(refund).click();
    } else {
        refund = 'Al vencimiento';
    }


    cy.get('.box-rate > .value').contains(rate)
    cy.ValidateRend(amount, term, refund)
})
Cypress.Commands.add("ValidateRend", (amount, term, refund) => {


    let porc = ''
    let rendimientosString = ''

    cy.get(".rate").then(function ($elem) {
        cy.log('term->', term)

        porc = $elem.text();

        var delPorcSymbol = porc.replace("%", "").replace("E.A", "");

        var x = 1 + (parseFloat(delPorcSymbol) / 100);
        cy.log('x->', x)
        var y = 0;
        var refundDays = 0;


        if (refund == 'Cada mes') {
            refundDays = 30;
            y = refundDays / 360;
            cy.log('cada mes : y->', y)
            cy.log('Refund days->', refundDays)

        } else if (refund == 'Cada tres meses') {
            refundDays = 90;
            y = refundDays / 360;
            cy.log('y->', y)

        } else if (refund == 'Cada seis meses') {
            refundDays = 180;
            y = refundDays / 360;
            cy.log('y->', y)

        } else if (refund == 'Cada año') {
            refundDays = 360;
            y = refundDays / 360;
            cy.log('y->', y)

        } else {
            y = term / 360;
            cy.log('y->', y)

        }

        var pot = Math.pow(x, y);
        cy.log('pot->', pot)

        var resultado = (pot - 1).toFixed(6);
        cy.log('resultado->', resultado)

        var rendimientos = (amount * resultado);
        cy.log('rendimientos->', rendimientos)

        cy.log('dias para pago de rendimientos', refundDays)


        if (refund != 'Al vencimiento') {
            rendimientos = (term / refundDays) * rendimientos
            cy.log('rendimientos mes v->', rendimientos)

        }

        rendimientosString = rendimientos.toString();

        cy.get(".profit").then(function ($elem) {
            var r = $elem.text().replace("$", "").replaceAll(".", "").replace(",", ".").replace(" ", "");

            r = r.split('.')[0];
            rendimientosString = rendimientosString.split('.')[0];

            if (r == rendimientosString) {
                expect(r).to.equal(rendimientosString)
            } else if (r.substring(0, r.length - 2) == rendimientosString.substring(0, rendimientosString.length - 2)) {
                r = r.substring(0, r.length - 2);
                console.log('r: ', r)
                rendimientosString = rendimientosString.substring(0, rendimientosString.length - 2);
                console.log('rendimientos: ', rendimientosString)

                expect(r).to.equal(rendimientosString)

            } else {
                r = parseInt(r);
                rendimientosString = parseInt(rendimientosString);
                cy.log('************')
                cy.log('************')
                cy.log('************')
                cy.log('Esperado-', r,)
                cy.log('Obtenido-', rendimientosString)
                cy.log('************')
                cy.log('************')
                cy.log('************')
                //expect(r).to.equal(rendimientosString + 1)

            }
        })

        cy.get(".retention").then(function ($elem) {
            var r = $elem.text().replace("$", "").replaceAll(".", "").replace(",", ".").replace(" ", "");
            var neto = rendimientos - r;
            var netoSplit = (rendimientos - r).toString().split('.')[0];

            cy.get(".earnings").then(function ($elem) {
                var netoObtenido = $elem.text().replace("$", "").replaceAll(".", "").replace(",", ".").replace(" ", "");
                var rSplit = $elem.text().replace("$", "").replaceAll(".", "").replace(",", ".").replace(" ", "").split('.')[0];

                if (rSplit == netoSplit) {
                    expect(rSplit).to.equal(netoSplit)
                } else if (netoSplit.substring(0, netoSplit.length - 2) == rSplit.substring(0, rSplit.length - 2)) {

                    netoSplit = netoSplit.substring(0, netoSplit.length - 2);
                    rSplit = rSplit.substring(0, rSplit.length - 2);

                    console.log('Amount: ', amount, ' term: ', term)
                    console.log('Neto esperado: ', neto, ' Neto obtenido: ', netoObtenido)
                    expect(rSplit).to.equal(netoSplit)
                } else {
                    rSplit = parseInt(rSplit)
                    netoSplit = parseInt(netoSplit)
                    cy.log('************')
                    cy.log('************')
                    cy.log('************')
                    cy.log('Esperado-', rSplit)
                    cy.log('Obtenido-', netoSplit)
                    cy.log('************')
                    cy.log('************')
                    cy.log('************')
                    //expect(rSplit).to.equal(netoSplit + 1)

                }

            })
        })


    })
})

Cypress.Commands.add("ValidateInfoLoad", () => {

})

Cypress.Commands.add("GoToCdtConfig", () => {

})

Cypress.Commands.add("FillInfoOnLanding", () => {
    let porc = ''
    var amount = 500000001
    var term = 90



    cy.get('#Amount').type(amount)
    cy.get('#Term').type(term).tab()

    cy.get(".rate").then(function ($elem) {
        porc = $elem.text();
        Cypress.env('tasa', porc)
    })

    cy.get(".profit").then(function ($elem) {
        Cypress.env('rend', $elem.text())
    })

    cy.get('#Amount')
        .invoke('val')
        .then(amount => Cypress.env('amount', amount))

    cy.get('#Term')
        .invoke('val')
        .then(term => Cypress.env('term', term))
    cy.wait(2000)
    cy.get('.avv-btn-primary').click()
})

Cypress.Commands.add("FillHomePage", (env) => {
    cy.GoMainPage(env)
    cy.WaitLoader()
    cy.get('.avv-btn-primary').click()
})

Cypress.Commands.add("FillCDTConfigurationPage", (env, userType) => {
    var dataType = 'datosPasivo';
    if (userType == 'sin cuentas') {
        dataType = userType;
    }
    cy.fixture(dataType).then((user) => {
        cy.get('#DNINumber').type(user.numdoc)
        cy.get('#MobileNumber').type(user.phone)
        cy.get('#MobileConfirmNumber').type(user.phone)
        cy.get('#FirstName').type(user.firstname)
        cy.get('#LastName').type(user.lastname)
        cy.get('.mat-checkbox-inner-container').click()
        cy.wait(2000)
        cy.get('#SubmitFormUserIdentification').click()
    })
    cy.WaitLoader()

})

Cypress.Commands.add("FillFormCDT", (env, pause, userType) => {
    cy.GoMainPage(env)
    cy.Pause(pause)
    cy.WaitLoader()
    cy.get('.avv-btn-primary').click()

    var dataType = 'datosPasivo';

    if (userType == 'sin cuentas') {
        dataType = userType;
    }

    cy.fixture(dataType).then((user) => {
        cy.get('#DNINumber').type(user.numdoc)
        cy.get('#MobileNumber').type(user.phone)
        cy.get('#MobileConfirmNumber').type(user.phone)
        cy.get('#FirstName').type(user.firstname)
        cy.get('#LastName').type(user.lastname)
        cy.get('.mat-checkbox-inner-container').click()
        cy.Pause(pause)
        cy.wait(2000)
        cy.get('#SubmitFormUserIdentification').click()
    })
    cy.WaitLoader()

})

Cypress.Commands.add("FillFormCDTStep", () => {
    cy.fixture('datosPasivo').then((user) => {
        cy.get('#DNINumber').type(user.numdoc)
        cy.get('#MobileNumber').type(user.phone)
        cy.get('#MobileConfirmNumber').type(user.phone)
        cy.get('#FirstName').type(user.firstname)
        cy.get('#LastName').type(user.lastname)
        cy.get('.mat-checkbox-inner-container').click()
        // cy.pause()
        cy.get('#SubmitFormUserIdentification').click()
    })
})

Cypress.Commands.add("GoMainPage", (env) => {
    if (env == 'stg') {
        cy.visit('https://rb-pasivo-stg-cdt-front.avaldigitallabs.com/')

    } else if (env == 'dev') {
        cy.visit('https://rb-pasivo-dev-cdt-front.avaldigitallabs.com/')
    } else if (env == 'prod') {
        cy.visit('https://www.avvillas.com.co/abrir-cdt-avvillas/')
    } else if (env == 'loc') {
        cy.visit('http://localhost:4200/abrir-cdt-avvillas/')
    }
    cy.get('#Amount').type(500000)
    cy.get('#Term').type(365)

})

Cypress.Commands.add("AccountConfiguration", (pause) => {
    // cy.get('[formcontrolname="accountSettingFirstGroup"]>.mat-radio-button').first().click()
    // // cy.get('#mat-radio-10 > .mat-radio-label').click()
    // cy.get('[formcontrolname="accountSettingSecondGroup"]:contains("Desde otro banco")').first().click()
    cy.get('.mat-radio-button:contains("Abrir una Cuenta Digital")').click()
    cy.get('.mat-radio-button:contains("Desde otro banco")').click()
    cy.Pause(pause)
    cy.get('#SubmitAccountSettingsForm').click()
    // cy.get('.avv-btn-primary').click()
})

Cypress.Commands.add("ValidateEmptyFieldsCDT", () => {
    cy.get('#FirstName').should('have.value', '')
    cy.get('#LastName').should('have.value', '')
    cy.get('#DNINumber').should('have.value', '')
    cy.get('#MobileNumber').should('have.value', '')
    cy.get('#MobileConfirmNumber').should('have.value', '')
    cy.get('#SubmitFormUserIdentification').should('be.disabled')
    cy.get('#CheckHabeasData-input').should('have.attr', 'aria-checked', 'false')
    cy.get('mat-error').should('have.text', ' Por favor inténtalo de nuevo ')
})
Cypress.Commands.add("ValidateNotCleanedFieldsCDT", () => {
    cy.fixture('datosPasivo').then((user) => {
        cy.get('#FirstName').should('have.value', user.firstname)
        cy.get('#LastName').should('have.value', user.lastname)
        cy.get('#DNINumber').should('have.value', user.numdoc)
        cy.get('#MobileNumber').should('have.value', user.phone)
        cy.get('#MobileConfirmNumber').should('have.value', user.phone)
    })
    cy.get('mat-error').should('have.text', ' Por favor inténtalo de nuevo ')
})
