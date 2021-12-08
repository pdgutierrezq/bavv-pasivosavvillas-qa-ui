const {CDT} = require("../../../../support/schema/flow/cdt");

let flow = CDT.CLIENT.YES.UPDATED.YES.ENROLLED.NO

describe(CDT.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDT, flow)
  })
})
