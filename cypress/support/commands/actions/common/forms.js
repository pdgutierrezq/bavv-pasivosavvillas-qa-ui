import {backend} from "../../../../../a.cypress.ll/selectors/common/backend";

Cypress.Commands.add("datePickToday", (automationId, trigger) => {
  cy.get(automationId).should("be.visible").click();
  cy.get(trigger).within(() => {
    cy.get(backend.datePìcker.day).within(() => {
      cy.get(backend.datePìcker.today).click();
    });
  });
});

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
    (operation, id, typeOption, setValue) => {
      if (setValue != undefined) {
        if (operation == "fill") {
          cy.fillForm(id, typeOption, setValue);
        }
        if (operation == "validate") {
          cy.ValidateFields(id, typeOption,
              setValue);
        }
      }
    }
);

Cypress.Commands.add("formOperation", (operation, selectors, data) => {
  const types = ["input", "select", "textarea", "inputRaw", "selectRaw", "div",
    "checkbox",'nextPage','radio','inputsContainer'];
  if (data != undefined) {
    if (`${selectors.tab}` != "undefined") {
      cy.get(`${selectors.tab}`).click();
    }
    for (const property in data) {
      for (const type of types) {
        if (
            `${selectors[type]}` != "undefined" &&
            `${selectors[type][property]}` != "undefined"
        ) {
          cy.fieldOperation(
              operation,
              `${selectors[type][property]}`,
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
        case 'radio':
        case 'checkbox':
          if (setValue === 'true') {
            cy.get(automationId).click();
          }
          break;
        case 'nextPage':
            cy.nextPage(automationId)
          break;
        case 'inputsContainer':
          cy.get(automationId).first().type(setValue);
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

Cypress.Commands.add("selectFirstRowInTable", () => {
  cy.get(backend.table.checkbox).first().click();
});

Cypress.Commands.add("tableIsNotEmpty", () => {
  cy.get(backend.table.tableBody).should("not.be.empty");
});

Cypress.Commands.add("mainLoaderIsNotVisible", () => {
  cy.get(backend.loader.mainLoader).should("not.exist");
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
