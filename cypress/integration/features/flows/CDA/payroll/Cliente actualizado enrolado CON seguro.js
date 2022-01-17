import {PHASE} from "../../../../../support/schema/phase";
import {CDA_PAYROLL} from "../../../../../support/schema/flow/cdaPayroll";
import {PAGES} from "../../../../../support/schema/pages";

let flow = {
  name: 'Cliente actualizado enrolado CON seguro',
  phases: [
    PHASE.CDA.INITIAL_PAYROLL,
    PHASE.IDENTIFICATION,
    PHASE.CDA.FINAL
  ],
  mocks: {},
  pages: [
    {
      page: PAGES.ACCOUNT,
      data: {
        account: true,
        deposit: false,
        continue: 0
      }

    }
  ]
}

describe(CDA_PAYROLL.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA_PAYROLL, flow)
  })
})

