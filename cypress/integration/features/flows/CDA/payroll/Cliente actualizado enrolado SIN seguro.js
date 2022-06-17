const {PHASE} = require("../../../../../support/schema/phase");
const {INSURANCE} = require(
    "../../../../../support/model/entities/properties/customer/insurance");
const {CDA_PAYROLL} = require("../../../../../support/schema/flow/cdaPayroll");
const {BRANCH} = require("../../../../../support/schema/branch");

let flow = {
  name: 'Cliente actualizado enrolado SIN seguro',
  phases: [
    PHASE.CDA.PRODUCT.PAYROLL,
    PHASE.INSURANCE,
    PHASE.IDENTIFICATION,
    PHASE.CDA.SETUP.CLIENT.YES,
    PHASE.CDA.SUMMARY
  ],
  mocks: {
    insurance: INSURANCE.NO,
  },
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
