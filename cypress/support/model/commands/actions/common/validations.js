Cypress.Commands.add(
    "ValidateFields",
    (automationId, typeOption, expectedValue) => {
      switch (typeOption) {
        case "inputRaw":
          cy.get(automationId).should("have.value", expectedValue);
          break;
        case "selectRaw":
          cy.get(automationId)
          .find("option:selected")
          .should("have.text", expectedValue);
          break;
        case "select":
          cy.get(automationId).click();
          cy.get(automationId).within(() => {
            cy.contains("option", expectedValue).should("be.visible");
          });
          break;
        case "div":
          cy.get(automationId).within(() => {
            cy.get(".sr__content").should("have.text", expectedValue);
          });
          break;
        default:
          cy.get(automationId).within(() => {
            cy.get(typeOption).should("have.value", expectedValue);
          });
      }
    }
);

Cypress.Commands.add(
    "ValidateDropdown",
    (automationId, typeOption, expectedValue) => {
      cy.get(automationId).within(() => {
        cy.contains(typeOption, expectedValue)
        .scrollIntoView()
        .should("be.visible")
        .and("not.equal", "0");
      });
    }
);
