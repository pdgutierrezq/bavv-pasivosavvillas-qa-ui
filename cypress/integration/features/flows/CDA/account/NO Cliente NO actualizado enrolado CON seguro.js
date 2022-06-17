import {CDA} from "../../../../../support/schema/flow/cda";
import {PHASE} from "../../../../../support/schema/phase";
import {
  CONDITION
} from "../../../../../support/model/entities/properties/customer/conditions";

let flow = {
  name: 'NO Cliente actualizado enrolado CON seguro',
  phases: [
    PHASE.CDA.PRODUCT.DEFAULT,
    PHASE.IDENTIFICATION,
    PHASE.CDA.INFO.DEFAULT.CLIENT.NO,
    PHASE.CDA.SETUP.CLIENT.NO,
    PHASE.CDA.SUMMARY
  ],
  mocks: {
    condition: CONDITION.NO_CLIENT.NO_UPDATED,
  }
}

describe(CDA.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA, flow)
  })
})

