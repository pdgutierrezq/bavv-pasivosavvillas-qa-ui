import {PHASE} from "../../../../../../../support/schema/phase";
import {CDA} from "../../../../../../../support/schema/flow/cda";
import {
  CONDITION
} from "../../../../../../../support/model/entities/properties/customer/conditions";

let flow = {
  name: 'Cliente PEP',
  phases: [
    PHASE.CDA.PRODUCT.DEFAULT,
    PHASE.IDENTIFICATION,
    PHASE.CDA.SETUP.CLIENT.NO, PHASE.CDA.SUMMARY
  ],
  mocks: {
    condition: CONDITION.PEP,
  }
}

describe(CDA.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA, flow)
  })
})

