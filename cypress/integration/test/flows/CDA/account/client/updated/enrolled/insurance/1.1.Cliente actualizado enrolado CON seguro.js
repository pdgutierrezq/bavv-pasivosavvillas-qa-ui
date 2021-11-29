import {CDA} from "../../../../../../../../../support/schema/flow/cda";

let flow = CDA.CLIENT.UPDATED.INSURANCE.YES

describe(CDA.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA,flow)
  })
})

