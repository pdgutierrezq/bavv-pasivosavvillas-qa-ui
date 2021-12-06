Cypress.Commands.add("interceptService", (service) => {
  cy.route2({
    url: service.URL,response:{status:200}
  }).as(getAlias(service))
})
Cypress.Commands.add("waitService", (service) => {
  cy.wait('@' + getAlias(service),{
    requestTimeout:30000,
    responseTimeout: 30000,
  })
})

Cypress.Commands.add("mockService", (service, response) => {
  // let endpoint = {
  //   method: service.METHOD,
  //   url: service.URL
  // }
  // cy.route2(
  //     endpoint, (req) => {
  //       if (req.body.includes(USER_IDENTITY_VALIDATE_SERVICE.MATCHER)) {
  //         req.reply({
  //           statusCode: USER_IDENTITY_VALIDATE_SERVICE.RESPONSE.OK.STATUS,
  //           fixture: OTP.VALIDATE.OK
  //         })
  //       } else {
  //         req.reply({statusCode: status, fixture: response})
  //       }
  //     }).as(service.URL)
  if (response !== false) {
    cy.route({
      method: service.METHOD,
      url: service.URL,
      response: 'fixture:' + response.BODY,
      status: response.STATUS,
    }).as(getAlias(service))
  }
})

function getAlias(service) {
  let alias = service.URL
  if (service.hasOwnProperty('NAME')) {
    alias = service.NAME
  }
  return alias
}

Cypress.Commands.add("mockServiceByMatcher",
    (service, matcher, ...responses) => {
      let reqBody = {}
      let response = responses[0]
      matcherData = matcher
      responsesData = responses
      cy.route({
        method: service.METHOD,
        url: service.URL,
        onRequest(xhr) {
          reqBody = xhr.request.body
          response = getResponseForService(reqBody, matcherData, responsesData)
        },
        // onResponse(xhr) {
        //   xhr.response.body = response.BODY
        // },
        response: 'fixture:' + response.BODY,
        status: response.STATUS
      }).as(getAlias(service))
    })

function getResponseForService(reqBody, matcher, responses) {
  let response = responses[0]
  if (reqBody.hasOwnProperty(matcher)) {
    response = responses[1]
  }
  return response
}

