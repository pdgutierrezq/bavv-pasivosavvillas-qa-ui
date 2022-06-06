import {PHASE} from "../../../../../../../../support/schema/phase";
import {CDA} from "../../../../../../../../support/schema/flow/cda";
import {CONDITION} from "../../../../../../../../support/model/entities/properties/customer/conditions";

let flow = {
  name: 'Error 90003',
  phases: [
    PHASE.CDA.INITIAL,
    PHASE.IDENTIFICATION,
    PHASE.CDA.FINAL
  ],
  mocks: {
    condition: CONDITION.USER_ERROR_CODE_90003,
  }
}

describe(CDA.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA, flow)
  })
})

