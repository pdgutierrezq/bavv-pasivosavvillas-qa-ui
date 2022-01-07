import {PHASE} from "../../../../../support/schema/phase";
import {CDA_PAYROLL} from "../../../../../support/schema/flow/cdaPayroll";

let flow = {
  name: 'Cliente actualizado enrolado CON seguro',
  phases: [
    PHASE.CDA.INITIAL_PAYROLL,
    PHASE.IDENTIFICATION,
    PHASE.CDA.FINAL
  ],
  mocks: {}
}

describe(CDA_PAYROLL.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA_PAYROLL, flow)
  })
})

