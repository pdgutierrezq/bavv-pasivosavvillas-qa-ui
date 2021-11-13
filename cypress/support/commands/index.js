import {OTP} from "../entities/properties/security/user/identity/otp";
import {USER_IDENTITY_VALIDATE_SERVICE} from "../services/security/user/identity/validate";

Cypress.Commands.add("mockService", (service, response) => {
  let status = service.RESPONSE.OK.STATUS
  let endpoint = {
    method: service.METHOD,
    url: service.URL
  }
  if (!(typeof response === 'string')) {
    status = response.STATUS
    response = response.BODY
  }
  cy.route2(
      endpoint, (req) => {
        if (req.body.includes(USER_IDENTITY_VALIDATE_SERVICE.MATCHER)) {
          req.reply({
            statusCode: USER_IDENTITY_VALIDATE_SERVICE.RESPONSE.OK.STATUS,
            fixture: OTP.VALIDATE.OK
          })
        } else {
          req.reply({statusCode: status, fixture: response})
        }
      }).as(service.URL)
})

