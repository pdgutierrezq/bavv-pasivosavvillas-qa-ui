import {PHASE} from "../../../../../support/schema/phase";
import {
  CONDITION
} from "../../../../../support/model/entities/properties/customer/conditions";
import {CDA_PAYROLL} from "../../../../../support/schema/flow/cdaPayroll";
import {BRANCH} from "../../../../../support/schema/branch";

let flow = {
  name: 'Cliente NO actualizado enrolado CON seguro',
  phases: [
    PHASE.CDA.PRODUCT.PAYROLL,
    PHASE.IDENTIFICATION,
    PHASE.CDA.INFO.PAYROLL.CLIENT.YES.UPDATED.NO,
    PHASE.CDA.SETUP.CLIENT.YES,
    PHASE.CDA.SUMMARY
  ],
  mocks: {
    condition: CONDITION.CLIENT.NO_UPDATED
  },
  braches: [
    BRANCH.PRODUCT.PAYROLL,
    BRANCH.CONTACT_INFORMATION.CLIENT.YES.UPDATED.NO,
    BRANCH.CARD.CLIENT.YES.ACCOUNT
  ]
}

describe(CDA_PAYROLL.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA_PAYROLL, flow)
  })
})

