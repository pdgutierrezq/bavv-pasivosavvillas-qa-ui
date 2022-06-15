import {CDA} from "../../../../../support/schema/flow/cda";
import {PHASE} from "../../../../../support/schema/phase";
import {CONDITION} from "../../../../../support/model/entities/properties/customer/conditions";
import {PAGES} from "../../../../../support/schema/pages";
import {CDA_PAYROLL} from "../../../../../support/schema/flow/cdaPayroll";

let flow = {
  name: 'Cliente NO actualizado enrolado CON seguro',
  phases: [
    PHASE.CDA.INITIAL_PAYROLL,
    PHASE.IDENTIFICATION,
    PHASE.CDA.CLIENT_NO_UPDATED_PAYROLL,
    PHASE.CDA.FINAL
  ],
  mocks: {
    condition: CONDITION.CLIENT.NO_UPDATED
  }
}

describe(CDA_PAYROLL.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA_PAYROLL, flow)
  })
})

