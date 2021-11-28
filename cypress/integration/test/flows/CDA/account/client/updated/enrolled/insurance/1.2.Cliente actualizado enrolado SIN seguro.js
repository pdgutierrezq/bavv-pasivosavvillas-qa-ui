const {FLOW} = require("../../../../../../../../../support/schema/flow");
const user = require("../../../../../../../../../support/schema/user");

let flow = FLOW.CLIENT.UPDATED.INSURANCE.NO

describe(user.APP.CDA, function () {
  it(flow.name, function () {
    cy.executeFlow(flow)
  })
})
