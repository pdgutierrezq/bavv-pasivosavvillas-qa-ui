Cypress.Commands.add("mockService", (service, response) => {
  let status = service.RESPONSE.OK.STATUS
  if (!(typeof response === 'string')) {
    status = response.STATUS
    response = response.BODY
  }
  cy.route2({
    method: service.METHOD,
    url: service.URL
  }, {status: status, fixture: response})
})
