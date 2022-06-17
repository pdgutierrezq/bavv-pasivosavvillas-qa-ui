import {PHASE} from "../../../../../../../support/schema/phase";
import {CDA} from "../../../../../../../support/schema/flow/cda";
import {
  CONDITION
} from "../../../../../../../support/model/entities/properties/customer/conditions";

let flow = {
  name: 'Error 500',
  phases: [
    PHASE.CDA.PRODUCT.DEFAULT,
    PHASE.IDENTIFICATION,
    PHASE.CDA.SETUP.CLIENT.NO, PHASE.CDA.SUMMARY
  ],
  mocks: {
    condition: CONDITION.TECH_ERROR_CODE_500,
  }
}

describe(CDA.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA, flow)
  })
})

