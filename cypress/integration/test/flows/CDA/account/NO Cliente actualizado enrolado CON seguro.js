import {CDA} from "../../../../../support/schema/flow/cda";
import {PHASE} from "../../../../../support/schema/phase";
import {CONDITION} from "../../../../../support/model/entities/properties/customer/conditions";

let flow = {
  name: 'NO Cliente actualizado enrolado CON seguro',
  phases: [
    PHASE.CDA.INITIAL,
    PHASE.IDENTIFICATION,
    PHASE.CDA.NO_CLIENT,
    PHASE.CDA.FINAL
  ],
  mocks: {
    condition: CONDITION.NO_CLIENT.UPDATED,
  }
}

describe(CDA.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA, flow)
  })
})

