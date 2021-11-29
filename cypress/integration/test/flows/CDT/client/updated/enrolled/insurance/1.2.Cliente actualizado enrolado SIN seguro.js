const {CDT} = require("../../../../../../../../support/schema/flow/cdt");

let flow = CDT.CLIENT.UPDATED.INSURANCE.NO

describe(CDT.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDT, flow)
  })
})
