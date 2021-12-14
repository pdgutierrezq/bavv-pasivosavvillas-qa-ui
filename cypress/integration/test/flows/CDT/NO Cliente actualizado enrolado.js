const {CDT} = require("../../../../support/schema/flow/cdt");

let flow = CDT.CLIENT.NO.UPDATED.YES.ENROLLED.YES

describe(CDT.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDT, flow)
  })
})

