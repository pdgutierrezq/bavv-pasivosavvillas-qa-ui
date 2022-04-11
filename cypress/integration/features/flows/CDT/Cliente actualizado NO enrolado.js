const {CDT} = require("../../../../support/schema/flow/cdt");
const {PHASE} = require("../../../../support/schema/phase");
const {READE_ACTIVE_CHANNELS_SERVICE} = require(
    "../../../../support/model/services/customer/channels/read");
const {CREATE_SDS_USER_SERVICE} = require(
    "../../../../support/model/services/customer/sds/create");

let flow = {
  name: 'NO Cliente actualizado enrolado NO enrolado',
  phases: [
    PHASE.CDT.INITIAL,
    PHASE.IDENTIFICATION,
    PHASE.CDT.FINAL,
    PHASE.ENROLLMENT
  ],
  mocks: {
    channels: READE_ACTIVE_CHANNELS_SERVICE.RESPONSE.FALSE,
    sdsUserService: CREATE_SDS_USER_SERVICE.RESPONSE.OK,
  }
}

describe(CDT.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDT, flow)
  })
})
