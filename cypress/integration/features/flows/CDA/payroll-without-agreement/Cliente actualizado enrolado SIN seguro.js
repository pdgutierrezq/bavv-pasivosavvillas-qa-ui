const {CDA} = require("../../../../../support/schema/flow/cda");
const {PHASE} = require("../../../../../support/schema/phase");
const {INSURANCE} = require(
    "../../../../../support/model/entities/properties/customer/insurance");
const {BRANCH} = require("../../../../../support/schema/branch");

let flow = {
  name: 'Cliente actualizado enrolado SIN seguro',
  phases: [
    PHASE.CDA.PRODUCT.DEFAULT,
    PHASE.INSURANCE,
    PHASE.IDENTIFICATION,
    PHASE.CDA.INFO.PAYROLL.CLIENT.YES.UPDATED.YES,
    PHASE.CDA.SETUP.CLIENT.YES,
    PHASE.CDA.SUMMARY
  ],
  mocks: {
    insurance: INSURANCE.NO,
  },
  braches: [
    BRANCH.PRODUCT.PAYROLL_WITHOUT_AGREEMENT,
    BRANCH.CONTACT_INFORMATION.PAYROLL.CLIENT.YES,
    BRANCH.CARD.CLIENT.YES.ACCOUNT
  ]
}

describe(CDA.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA, flow)
  })
})
