const {CDA} = require("../../../../../support/schema/flow/cda");
const {PHASE} = require("../../../../../support/schema/phase");
const {INSURANCE} = require(
    "../../../../../support/model/entities/properties/customer/insurance");

let flow = {
  name: 'Cliente actualizado enrolado SIN seguro',
  phases: [
    PHASE.CDA.INITIAL,
    PHASE.INSURANCE,
    PHASE.IDENTIFICATION,
    PHASE.CDA.FINAL
  ],
  mocks: {
    insurance: INSURANCE.NO,
  }
}

describe(CDA.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA, flow)
  })
})
