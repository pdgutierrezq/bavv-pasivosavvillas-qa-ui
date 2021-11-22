const PAGE_STATUS = 'flow/status'

Cypress.Commands.add("pauseAndScreenshot",
    (page) => {
      cy.Pause(page.pause)
      if (page.screenshot) {
        cy.screenshot()
      }
    })

Cypress.Commands.add("nextPage",
    (automationId) => {
      cy.fixture(PAGE_STATUS).then((data) => {
        let page = data.screen.find(function (item) {
          return item.key === automationId
        })
        cy.pauseAndScreenshot(page.status)
        cy.get(automationId).click()
      })
    })
