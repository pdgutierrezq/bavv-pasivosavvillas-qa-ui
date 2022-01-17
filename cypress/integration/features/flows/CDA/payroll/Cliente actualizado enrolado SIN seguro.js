const {CDA} = require("../../../../../support/schema/flow/cda");
const {PHASE} = require("../../../../../support/schema/phase");
const {INSURANCE} = require(
    "../../../../../support/model/entities/properties/customer/insurance");
const {CDA_PAYROLL} = require("../../../../../support/schema/flow/cdaPayroll");
const {PAGES} = require("../../../../../support/schema/pages");

let flow = {
  name: 'Cliente actualizado enrolado SIN seguro',
  phases: [
    PHASE.CDA.INITIAL_PAYROLL,
    PHASE.INSURANCE,
    PHASE.IDENTIFICATION,
    PHASE.CDA.FINAL
  ],
  mocks: {
    insurance: INSURANCE.NO,
  },
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
