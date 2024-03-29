// Cypress.Commands.add("datePickToday", (automationId, trigger) => {
//   cy.get(automationId).should("be.visible").click();
//   cy.get(trigger).within(() => {
//     cy.get(backend.datePìcker.day).within(() => {
//       cy.get(backend.datePìcker.today).click();
//     });
//   });
// });

const {USER_IDENTITY_VALIDATE_SERVICE} = require(
    "../../../services/security/user/identity/validate");
const {OTP} = require(
    "../../../entities/properties/security/user/identity/otp");

Cypress.Commands.add("ddPick", (automationId, typeOption, row) => {
  cy.get(automationId).find(typeOption).focus();
  cy.get(automationId).find(row).click();
});

Cypress.Commands.add(
    "fillFoundFormControl",
    (automationId, typeOption, setValue) => {
      if (typeOption == "input" || typeOption == "textarea") {
        cy.get(automationId)
        .find(typeOption)
        .type("{selectall}")
        .type("{backspace}")
        .type(setValue);
      } else if (typeOption == "select") {
        cy.get(automationId).find(typeOption).select(setValue);
      } else {
        cy.get(automationId).find(typeOption).contains(setValue).click();
      }
    }
);

Cypress.Commands.add(
    "fieldOperation",
    (operation, id, typeOption, value) => {
      let selector = id
      let interceptors
      if (typeof selector !== 'string') {
        selector = id.selector
        interceptors = id.interceptors
        // cy.interceptService(interceptors)
      }
      if (value != undefined) {
        if (operation == "fill") {
          cy.fillForm(selector, typeOption, value);
          if (interceptors !== undefined) {
            // cy.waitService(interceptors)
          }
        }
        if (operation == "validate") {
          cy.ValidateFields(selector, typeOption,
              value);
        }
      }
    }
);

Cypress.Commands.add("formOperation", (operation, selectors, data) => {
  const types = ["input", "select", "textarea", "inputRaw", "selectRaw", "div",
    "checkbox", 'nextPage', 'radio', 'inputsContainer', "waitEvent",
    'calendar', 'radioOption','radioValue','type','validateOtp'];
  if (data != undefined) {
    if (`${selectors.tab}` != "undefined") {
      cy.get(`${selectors.tab}`).click();
    }
    for (const property in data) {
      for (const type of types) {
        if (
            `${selectors[type]}` != "undefined" &&
            `${selectors[type][property]}` != "undefined" &&
            `${data[property]}` !== "undefined"
        ) {
          cy.fieldOperation(
              operation,
              selectors[type][property],
              type,
              `${data[property]}`
          );
        }
      }
    }
  }
});

Cypress.Commands.add("selectFirstOption",
    (automationId, typeOption, setValue) => {
      cy.get(automationId).within(() => {
        cy.contains("option", setValue).first().then(($element) => {
          cy.get(typeOption).select($element.val());
        });
      });
    });

Cypress.Commands.add("fillForm",
    (automationId, typeOption, setValue, delayValue) => {
      const delayType = delayValue === undefined ? 0 : 800
      switch (typeOption) {
        case 'input':
          cy.get(automationId).clear().type(setValue);
          break;
        case 'select':
          cy.get(automationId).select(setValue);
          break;
        case 'type':
          cy.get(automationId).type(setValue);
          break;
        case 'radio':
        case 'checkbox':
          if (setValue === 'true') {
            cy.get(automationId).click();
          }
          break;
        case 'nextPage':
          cy.nextPage(automationId, setValue)
          break;
        case 'validateOtp':
          cy.setMock(USER_IDENTITY_VALIDATE_SERVICE, OTP.VALIDATE.OK)
          cy.nextPage(automationId, setValue)
          break;
        case 'waitEvent':
          cy.waitEvent(automationId, Number(setValue))
          break;
        case 'inputsContainer':
          cy.get(automationId).first().type(setValue);
          break;
        case 'button':
          cy.clickWithTimeout(automationId, setValue)
          break;
        case 'calendar':
          cy.calendar(automationId, setValue)
          break;
        case 'radioOption':
          cy.get(automationId+':contains("'+setValue+'"):last').click();
          break;
        case 'radioValue':
          cy.get(automationId+'[value="'+setValue+'"]').click();
          break;
        default:
          cy.get(automationId).within(() => {
            if (typeOption == "input" || typeOption == "textarea") {
              cy.get(typeOption)
              .first()
              .type("{selectall}")
              .type("{backspace}")
              .type(setValue, {delay: delayType});
            } else if (typeOption == "select") {
              cy.get(typeOption).first().select(setValue);
            } else {
              cy.get(typeOption).first().contains(setValue).click();
            }
          });
      }
    });

Cypress.Commands.add("calendar", (automationId, pastDate) => {
  cy.get(automationId).click()
  if (pastDate === 'true') {
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
  } else{
    cy.get('.mat-focus-indicator').eq(7).click()
  }
});

//receives the div.row where the datePicker is on it and then you can send a number
//that will correspond with a calendar day inside the current month, and the second number
// you send correspond with the year
Cypress.Commands.add("datePicker", (divRow, day, year) => {
  cy.get(divRow).within(() => {
    cy.get("input.flatpickr-input.form-control").click();
  });
  cy.get("div.flatpickr-calendar.open")
  .should("be.visible")
  .within(() => {
    if (year != undefined) {
      cy.get("input.numInput.cur-year").type(year);
    }
    cy.contains("span.flatpickr-day", day).click();
  });
  Cypress.Commands.add("clickConfirm", () => {
    cy.contains("button", "Confirm").should("be.visible").click();
  });
});

Cypress.Commands.add("datePickerToday", (divRow) => {
  cy.get(divRow).within(() => {
    cy.get("input.flatpickr-input.form-control").click();
  });
  cy.get("div.flatpickr-calendar.open")
  .should("be.visible")
  .within(() => {
    cy.get("span.flatpickr-day.today").click();
  });

  Cypress.Commands.add("clickConfirm", () => {
    cy.contains("button", "Confirm").should("be.visible").click();
  });
});

Cypress.Commands.add("verifyInput", (locator, input) => {
  cy.get(locator).within(() => {
    cy.get("input").should("contain.value", input);
  });
});
