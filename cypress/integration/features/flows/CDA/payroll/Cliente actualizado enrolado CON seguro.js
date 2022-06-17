import {PHASE} from "../../../../../support/schema/phase";
import {CDA_PAYROLL} from "../../../../../support/schema/flow/cdaPayroll";
import {BRANCH} from "../../../../../support/schema/branch";

let flow = {
  name: 'Cliente actualizado enrolado CON seguro',
  phases: [
    PHASE.CDA.PRODUCT.PAYROLL,
    PHASE.IDENTIFICATION,
    PHASE.CDA.SETUP.CLIENT.YES,
    PHASE.CDA.SUMMARY
  ],
  mocks: {},
  braches: [
    BRANCH.PRODUCT.PAYROLL,
    BRANCH.CARD.CLIENT.YES.ACCOUNT
  ]
}

describe(CDA_PAYROLL.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA_PAYROLL, flow)
  })
})

