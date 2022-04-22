const {CDT} = require("../../../../support/schema/flow/cdt");
const {PHASE} = require("../../../../support/schema/phase");
const {CONDITION} = require(
    "../../../../support/model/entities/properties/customer/conditions");
const {PRODUCT_CONFIGURATION_SERVICE} = require(
    "../../../../support/model/services/configuration/configuration");


let flow = {
  name: 'Cliente con retoma',
  phases: [
    PHASE.CDT.INITIAL,
    PHASE.IDENTIFICATION,
    PHASE.CDT.FINAL
  ],
  mocks: {
    condition: CONDITION.RETAKE,
    configuration: PRODUCT_CONFIGURATION_SERVICE.RESPONSE.KO
  }
}

describe(CDT.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDT, flow)
  })
})

