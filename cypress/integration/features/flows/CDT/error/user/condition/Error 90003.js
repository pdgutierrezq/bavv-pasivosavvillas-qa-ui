import {CDT} from "../../../../../../../support/schema/flow/cdt";
import {PHASE} from "../../../../../../../support/schema/phase";
import {
  CONDITION
} from "../../../../../../../support/model/entities/properties/customer/conditions";

let flow = {
  name: 'Error 90003',
  phases: [
    PHASE.CDT.INITIAL,
    PHASE.IDENTIFICATION,
    PHASE.CDT.FINAL
  ],
  mocks: {
    condition: CONDITION.USER_ERROR_CODE_90003,
  }
}

describe(CDT.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDT, flow)
  })
})

