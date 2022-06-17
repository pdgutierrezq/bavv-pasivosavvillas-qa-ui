import {PHASE} from "../../../../../../../support/schema/phase";
import {CDA} from "../../../../../../../support/schema/flow/cda";
import {
  CONDITION
} from "../../../../../../../support/model/entities/properties/customer/conditions";

let flow = {
  name: 'Error 90002',
  phases: [
    PHASE.CDA.PRODUCT.DEFAULT,
    PHASE.IDENTIFICATION,
    PHASE.CDA.SETUP.CLIENT.NO, PHASE.CDA.SUMMARY
  ],
  mocks: {
    condition: CONDITION.USER_ERROR_CODE_90002,
  }
}

describe(CDA.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA, flow)
  })
})

