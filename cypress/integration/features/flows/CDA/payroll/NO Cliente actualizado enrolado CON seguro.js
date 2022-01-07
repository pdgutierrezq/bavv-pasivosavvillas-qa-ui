import {PHASE} from "../../../../../support/schema/phase";
import {CONDITION} from "../../../../../support/model/entities/properties/customer/conditions";
import {CDA_PAYROLL} from "../../../../../support/schema/flow/cdaPayroll";

let flow = {
  name: 'NO Cliente actualizado enrolado CON seguro',
  phases: [
    PHASE.CDA.INITIAL_PAYROLL,
    PHASE.IDENTIFICATION,
    PHASE.CDA.NO_CLIENT,
    PHASE.CDA.FINAL
  ],
  mocks: {
    condition: CONDITION.NO_CLIENT.UPDATED,
  }
}

describe(CDA_PAYROLL.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA_PAYROLL, flow)
  })
})

