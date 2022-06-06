import {CDT} from "../../../../../../../support/schema/flow/cdt";
import {PHASE} from "../../../../../../../support/schema/phase";
import {
  CONDITION
} from "../../../../../../../support/model/entities/properties/customer/conditions";

let flow = {
  name: 'Cliente PEP',
  phases: [
    PHASE.CDT.INITIAL,
    PHASE.IDENTIFICATION,
    PHASE.CDT.FINAL
  ],
  mocks: {
    condition: CONDITION.PEP,
  }
}

describe(CDT.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDT, flow)
  })
})

