const {CDT} = require("../../../../../support/schema/flow/cdt");
const {CONDITION} = require(
    "../../../../../support/model/entities/properties/customer/conditions");

let flow = CDT.CLIENT.UPDATED.INSURANCE.YES
flow.mocks.condition= CONDITION.CODE_99

describe(CDT.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDT, flow)
  })
})

