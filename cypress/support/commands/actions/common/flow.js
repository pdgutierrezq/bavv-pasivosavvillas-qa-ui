import {PAGES} from "../../../base/pages";

Cypress.Commands.add("pauseAndScreenshot",
    (page) => {
      cy.Pause(page.pause)
      if (page.screenshot) {
        cy.screenshot()
      }
    })

Cypress.Commands.add("nextPage",
    (automationId, timeout) => {
      for (let page in PAGES) {
        let selector = PAGES[page].selector
        if (selector === automationId) {
          console.log("page:" + PAGES[page].status)
          cy.pauseAndScreenshot(PAGES[page].status)
          cy.get(automationId, {timeout: timeout}).should('be.enabled')
          cy.get(automationId).click()
        }
      }
    })

Cypress.Commands.add("waitLoader", () => {
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
