import {PHASE} from "../../../../../support/schema/phase";
import {
  CONDITION
} from "../../../../../support/model/entities/properties/customer/conditions";
import {CDA_PAYROLL} from "../../../../../support/schema/flow/cdaPayroll";
import {
  INSURANCE
} from "../../../../../support/model/entities/properties/customer/insurance";
import {BRANCH} from "../../../../../support/schema/branch";

let flow = {
  name: 'NO Cliente NO actualizado NO enrolado SIN seguro',
  phases: [
    PHASE.CDA.PRODUCT.PAYROLL,
    PHASE.INSURANCE,
    PHASE.IDENTIFICATION,
    PHASE.CDA.INFO.PAYROLL.CLIENT.NO,
    PHASE.CDA.SETUP.CLIENT.NO,
    PHASE.CDA.SUMMARY
  ],
  mocks: {
    condition: CONDITION.NO_CLIENT.NO_UPDATED,
    insurance: INSURANCE.NO,
  },
  braches: [
    BRANCH.PRODUCT.PAYROLL
  ]
}

describe(CDA_PAYROLL.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA_PAYROLL, flow)
  })
})

