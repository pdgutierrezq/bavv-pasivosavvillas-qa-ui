Cypress.Commands.add("navigateTo", (menu, submenu) => {
  cy.get(menu).should("be.visible").click();
  cy.get(submenu).scrollIntoView().click();
});

Cypress.Commands.add(
    "navigateAndInterceptTo",
    (menu, submenu, interceptName) => {
      cy.interceptEndpoint(interceptName.path, interceptName.alias);
      cy.navigateTo(menu, submenu);
      cy.waitOnEndpoint(interceptName.alias);
    }
);

Cypress.Commands.add("navigateToOption", (option) => {
  cy.get(option).click();
});

Cypress.Commands.add("text", {prevSubject: true}, (subject, options) => {
  return subject.text();
});

Cypress.Commands.add("closeWeMoveIfExist", (element) => {
  cy.get("body").then(($body) => {
    if ($body.find(element).length > 0) {
      cy.get(element).click();
    }
  });
});
