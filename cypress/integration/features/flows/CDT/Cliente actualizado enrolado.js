const {CDT} = require("../../../../support/schema/flow/cdt");
const {PHASE} = require("../../../../support/schema/phase");
const {CONDITION} = require(
    "../../../../support/model/entities/properties/customer/conditions");

let flow = {
  name: 'Cliente actualizado enrolado',
  phases: [
    PHASE.CDT.INITIAL,
    PHASE.IDENTIFICATION,
    PHASE.CDT.FINAL
  ],
  mocks: {
  }
}

describe(CDT.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDT, flow)
  })
})

