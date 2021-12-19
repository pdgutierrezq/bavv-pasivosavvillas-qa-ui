import {CDA} from "../../../../../support/schema/flow/cda";
import {PHASE} from "../../../../../support/schema/phase";

let flow = {
  name: 'Cliente actualizado enrolado CON seguro',
  phases: [
    PHASE.CDA.INITIAL,
    PHASE.IDENTIFICATION,
    PHASE.CDA.FINAL
  ],
  mocks: {}
}

describe(CDA.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA, flow)
  })
})

