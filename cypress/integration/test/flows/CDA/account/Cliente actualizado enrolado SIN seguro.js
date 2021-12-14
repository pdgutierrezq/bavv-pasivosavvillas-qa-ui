const {CDA} = require("../../../../../support/schema/flow/cda");

let flow = CDA.CLIENT.YES.UPDATED.YES.INSURANCE.NO

describe(CDA.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA,flow)
  })
})
