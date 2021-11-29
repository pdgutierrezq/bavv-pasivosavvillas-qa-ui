const {CDT} = require("../../../../../../../../support/schema/flow/cdt");

let flow = CDT.CLIENT.UPDATED.INSURANCE.YES

describe(CDT.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDT, flow)
  })
})

