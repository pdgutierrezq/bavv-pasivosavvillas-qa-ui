import 'cypress-file-upload';
import ContactDataForm from '../integration/pageObjects/ContactDataForm'
import ENUM from './enums'

Cypress.Commands.add("Pause", (option) => {

  if (option) {
    cy.pause()
  }
})

Cypress.Commands.add("PerformFlow", (userConditions, flowConditions) => {
  cy.FillForm(flowConditions.environment)
  cy.WaitLoader()
  cy.AcceptPep()

  cy.SelectAccount(flowConditions.accountType, flowConditions.gmf)

  if (userConditions.insurance == 'false') {
    cy.AcceptInsurance(flowConditions.insurance)
  }

  //cy.WaitLoader()
  cy.OtpAuthentication()

  if (userConditions.client && !userConditions.updated) {
    cy.SelectActivity('Empleado')
    cy.WaitLoader()
    cy.FillContactForm('Empleado')
    if (flowConditions.accountType == 'DIGITAL') {
      cy.SelectForeignData()
      cy.SelectFinancialInformation(false)
    }
  }
  cy.pause()
  cy.FillSendAddress()
  cy.DeclaringOption(flowConditions.declaring)
  cy.ElectronicSignature()

  if (userConditions.channels) {
    cy.SavingTips()
  } else {
    cy.get('#mat-input-16').type('1636')
    cy.get('#mat-input-20').type('1636')
    cy.get('#ChannelEnrollmentButton').click()
  }
  cy.ValidateResume(flowConditions.accountType, flowConditions.insurance)
})

Cypress.Commands.add("enroll", (pause) => {
  cy.WaitLoader()
  cy.get('input').eq(0).type('1')
  cy.get('input').eq(1).type('3')
  cy.get('input').eq(2).type('2')
  cy.get('input').eq(3).type('4')
  cy.get('input').eq(4).type('1')
  cy.get('input').eq(5).type('3')
  cy.get('input').eq(6).type('2')
  cy.get('input').eq(7).type('4')
  cy.Pause(pause)
  cy.get('#ChannelEnrollmentButton').click()
  cy.WaitLoader()
  cy.get('button').eq(1).click()
})

Cypress.Commands.add("FillForm", (environment, scr, pause=Cypress.env().screen.information.basic.pause) => {
  var homePage = Cypress.config().baseUrl
  cy.Pause(Cypress.env().screen.home.pause)
  cy.visit(homePage)
  cy.fixture('datosPasivo').then((user) => {
    cy.get('.btn').click()
    cy.get('#DNINumber').type(user.numdoc)
    cy.get('#MobileNumber').type(user.phone)
    cy.get('#MobileConfirmNumber').type(user.phone)
    cy.get('#FirstName').type(user.firstname)
    cy.get('#SecondName').type(user.secondname)
    cy.get('#LastName').type(user.lastname)
    cy.get('#SecondLastName').type(user.secondlastname)
    cy.get('#MonthlyIncomeInput').type(user.salary)
    cy.get('.mat-checkbox-inner-container').click()
    cy.wait(2000)
    cy.Pause(pause)
    cy.ScreenShot(scr)
    cy.get('#SubmitFormUserIdentification').click()
  })

})

Cypress.Commands.add("ScreenShot", (option) => {
  if (option) {
    cy.screenshot()
  }
})

Cypress.Commands.add("ValidateErrorMessage", (errorMessage) => {
  cy.get('mat-error[role="alert"]', {timeout: 20000}).should('contain',
      errorMessage)
})

Cypress.Commands.add("ValidateErrorPage", (errorType) => {
  if ('tech' == errorType) {
    cy.url().should('contain', 'error-tecnico')
  } else if ('user' == errorType) {
    cy.url().should('contain', 'error-usuario')
  }
})

Cypress.Commands.add("AcceptPep", (pause) => {
  cy.get('#mat-radio-2 > .mat-radio-label', {timeout: 10000}).click()
  cy.get('#mat-radio-5 > .mat-radio-label').click()
  cy.Pause(pause)
  cy.get('#SubmitFormPEP').click()

})

Cypress.Commands.add("ValidateCard", (cardType, visible) => {
  if (cardType == ('PRO') && visible) {
    cy.get('.mat-radio-label', {timeout: 10000}).contains('PRO').should(
        'be.visible')
  } else if (cardType == ('SIMPLE') && visible) {
    cy.get('.mat-radio-label', {timeout: 10000}).contains('SIMPLE').should(
        'be.visible')
  } else if (cardType == ('PRO') && !visible) {
    cy.get('.mat-radio-label', {timeout: 10000}).contains('PRO').should(
        'be.not.visible')
  } else if (cardType == ('SIMPLE') && !visible) {
    cy.get('.mat-radio-label', {timeout: 10000}).contains('SIMPLE').should(
        'be.not.visible')
  }
})

Cypress.Commands.add("SelectAccount", (accountType, gmf, pause) => {
  if (accountType == ENUM.ACCOUNT_TYPE.DEPOSIT)
    cy.get('.mat-radio-label').contains(accountType).click()
  cy.Pause(pause)
  cy.get('#SelectAccountTypeButton').click()
  // if (accountType == 'DIGITAL') {
  //     cy.SelectGmf(gmf, pause)
  // }
})

Cypress.Commands.add("SelectActivity", (activity, scr, pause) => {
  cy.get('.mat-radio-label').contains(activity).click()
  if (activity == 'Independiente con negocio' || activity == 'Independiente') {
    cy.get('#CIIUCode').click().type('{downarrow}').type('{enter}')
  }
  cy.ScreenShot(scr)
  cy.Pause(pause)
  cy.get('#SubmitEconomicActivityForm').click()
})

Cypress.Commands.add("SelectGmf", (acceptGmf, pause) => {
  if (acceptGmf) {
    cy.get('.mat-checkbox-inner-container').click()
  }
  cy.Pause(pause)
  cy.get('#ProfessionalAccountPackage').click()
})

Cypress.Commands.add("AcceptInsurance", (accept, pause) => {
  cy.get('.mat-radio-label').contains(accept).click()
  cy.Pause(pause)
  cy.get('#InsuranceOfferButton').click()
  // cy.WaitLoader()
})

Cypress.Commands.add("OtpAuthentication", (scr, pause) => {

  cy.get('.mat-input-element', {timeout: 20000}).first().type('12345678')
  cy.ScreenShot(scr)
  cy.Pause(pause)
  cy.get('#OtpButton', {timeout: 20000}).click()
  cy.WaitLoader()

})

Cypress.Commands.add("WaitLoader", () => {
  // cy.get('.blobs').should('be.visible')
  // cy.get('.blobs',{timeout:60000}).should('not.exist')

  cy.get("body").then($body => {
    if ($body.find(".blobs").length > 0) {
      //evaluates as true if button exists at all
      cy.get('.blobs').then(($el) => {
        if (Cypress.dom.isVisible($el)) {
          cy.get('.blobs', {timeout: 60000}).should('not.exist')
        }
      })
    } else {
      //you get here if the button DOESN'T EXIST
      assert.isOk('everything', 'everything is OK');
    }
  });

})

Cypress.Commands.add("FillSendAddress", (pause) => {
  cy.get('#DeliveryCity', {timeout: 30000}).as('ciudad')
  cy.get('#DeliveryAddress').as('direccion')

  cy.get('@ciudad').clear().type("bogo{downarrow}{enter}")

  cy.get('@direccion').clear().type('Cll 156 # 24 -36')
  cy.get('#DeliveryNeighborhood').clear().type('Colina')
  cy.Pause(pause)
  cy.get('#DeliveryAddressButton').click()
  cy.get('#AcceptChangeDeliveryAddressButton').click()

})

Cypress.Commands.add("FillContactForm", (activity, scr, pause) => {
  const contactForm = new ContactDataForm()
  contactForm.fillEmail()
  contactForm.fillPhone()
  contactForm.fillAddress()
  contactForm.fillNeighborhood()
  contactForm.fillCity()
  if (activity === 'Empleado' || activity === 'Independiente con negocio') {

    contactForm.fillCompanyName()
    contactForm.fillCompanyPhone()
    contactForm.fillCompanyAddress()
    contactForm.fillCompanyCity()
  }
  cy.ScreenShot(scr)
  cy.Pause(pause)
  cy.get('#SubmitContactInformationForm').click()

})

Cypress.Commands.add("FillContactFormOnly", (activity) => {
  const contactForm = new ContactDataForm()
  if (activity === 'Empleado') {
    cy.log('Datos de contacto para empleado')
    contactForm.fillEmail()
    contactForm.fillPhone()
    contactForm.fillAddress()
    contactForm.fillCity()
    contactForm.fillCompanyName()
    contactForm.fillCompanyPhone()
    contactForm.fillCompanyAddress()
    contactForm.fillCompanyCity()
  }
})

Cypress.Commands.add("SelectForeignData", (scr, pause) => {

  cy.get('mat-radio-button')
  .each(($el) => {
    cy.wrap($el).click()
  })
  cy.ScreenShot(scr)

  cy.Pause(pause)
  cy.get('#SuplementaryDataQuestionFormSubmitButton').click()
})

Cypress.Commands.add("SelectFinancialInformation",
    (option, scr, pause, income = '8765477') => {
      cy.get('#monthlyIncomeInput').clear().type(income)

      cy.get('#OperationType').click()
      cy.get('mat-option[role="option"]').contains('Ninguna').click()

      if (option) {
        cy.get('mat-radio-button[value="true"]').click()
      } else {
        cy.get('mat-radio-button[value="false"]').click()
      }
      cy.ScreenShot(scr)
      cy.Pause(pause)
      cy.get('#SubmitContactInformationForm').click()
    })

Cypress.Commands.add("DeclaringOption", (option, scr, pause) => {
  if (option) {
    cy.get('mat-radio-button[value="true"]').click()
  } else {
    cy.get('mat-radio-button[value="false"]').click()
  }
  cy.ScreenShot(scr)
  cy.Pause(pause)
  cy.get('#NonDeclaratingQuestionFormSubmitButton').click()
})

Cypress.Commands.add("ElectronicSignature", (scr) => {
  cy.WaitLoader()
  // cy.get('#CheckProductConditions').click()
  cy.get('#DigitalSignatureCheck').click()
  cy.get('#CheckUnderConsent').click()
  cy.ScreenShot(scr)

  cy.get('#DigitalSignatureButton').click()
})

Cypress.Commands.add("PersonalInformation", (app) => {
  cy.get('#BirthCity').type('Bogota')
  cy.get('.mat-input-element').last().type('Bogota')
  cy.get('.mat-radio-button:contains("Masculino")').click()
  switch (app) {
    case ENUM.APP.CDA:
      cy.get('#PersonalInformationForm > div:nth-child(1) > span').click()
      cy.get(
          '#mat-datepicker-0 > mat-calendar-header > div > div > button.mat-focus-indicator.mat-calendar-period-button.mat-button.mat-button-base').click()
      cy.get(
          '#mat-datepicker-0 > mat-calendar-header > div > div > button.mat-focus-indicator.mat-calendar-previous-button.mat-icon-button.mat-button-base').click()
      cy.get(
          '#mat-datepicker-0 > div > mat-multi-year-view > table > tbody > tr:nth-child(1) > td:nth-child(1) > div.mat-calendar-body-cell-content.mat-focus-indicator').click()
      cy.get(
          '#mat-datepicker-0 > div > mat-year-view > table > tbody > tr:nth-child(2) > td:nth-child(1) > div.mat-calendar-body-cell-content.mat-focus-indicator').click()
      cy.get(
          '#mat-datepicker-0 > div > mat-month-view > table > tbody > tr:nth-child(1) > td:nth-child(2) > div.mat-calendar-body-cell-content.mat-focus-indicator').click()
      cy.get('#PersonalInformationForm > div:nth-child(5) > span').click()
      cy.get(
          '#mat-datepicker-1 > div > mat-month-view > table > tbody > tr:nth-child(1) > td:nth-child(2) > div.mat-calendar-body-cell-content.mat-focus-indicator').click()
      // cy.get('#mat-datepicker-0 > mat-calendar-header > div > div').then((dtp) => {
      // cy.wrap(dtp).click()
      // .get('.mat-button-base').get(0).click()
      // .get('.mat-button-base').get(1).click()
      // .get('.years').contains('2000').click()
      // .get('.months').contains('January').click()
      // .get('.days').contains('1').click() //.invoke('text')
      // .then((item) => {
      //     cy.wrap(item).click(); // Click on the option
      // });
      // });
      break;
    default:
      // cy.get('#CheckProductConditions').click()
      cy.get('.mat-input-element').eq(0).type('14')
      cy.get('.mat-select').eq(0).type('F')
      cy.get('.mat-option').eq(0).click()
      cy.get('.mat-input-element').eq(1).type('1965')
      cy.get('.mat-input-element').eq(3).type('11')
      cy.get('.mat-select').eq(1).type('F')
      cy.get('.mat-option').eq(5).click()
      cy.get('.mat-input-element').eq(4).type('2020')
      break;
  }
  cy.get('#PersonalInformationSubmitButton').click()
})

Cypress.Commands.add("SavingTips", (scr) => {
  cy.get('#savingTipsButton', {timeout: 30000}).should('be.enabled')
  cy.ScreenShot(scr)
  cy.get('#savingTipsButton').click()
})

Cypress.Commands.add("ValidateResume", (accountType, insurance) => {
  cy.WaitLoader()
  cy.get('#Account', {timeout: 20000}).should('contain', '$ 0,00')

  if (accountType == 'PRO') {
    cy.get('#Account').should('contain', 'Pro')
  } else if (accountType == 'SIMPLE') {
    cy.get('#Account').should('contain', 'Simple')
  }

  if (insurance == 'Si') {
    cy.get('#Insurance').should('contain', 'Cuenta Protegida')
    cy.get('#Insurance').should('contain', '$ 14.600,')
    cy.get('#debitTotal').should('contain', '$ 14.600,')
  } else {
    cy.get('#Insurance').should('not.exist')
    cy.get('#debitTotal').should('contain', '$ 0,00')
  }
})

Cypress.Commands.add("ValidateEmptyFieldsCDA", () => {
  cy.get('#FirstName').should('have.value', '')
  cy.get('#LastName').should('have.value', '')
  cy.get('#DNINumber').should('have.value', '')
  cy.get('#MobileNumber').should('have.value', '')
  cy.get('#MobileConfirmNumber').should('have.value', '')
  cy.get('#MonthlyIncomeInput').should('have.value', '')
  cy.get('#SubmitFormUserIdentification').should('be.disabled')
  cy.get('#CheckHabeasData-input').should('have.attr', 'aria-checked', 'false')
  cy.get('mat-error').should('have.text', ' Por favor inténtalo de nuevo ')
})

Cypress.Commands.add("DeleteDecimal", () => {

})


