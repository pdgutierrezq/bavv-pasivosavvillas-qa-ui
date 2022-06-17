import {CDA} from "../../../../../support/schema/flow/cda";
import {PHASE} from "../../../../../support/schema/phase";
import {
  READE_ACTIVE_CHANNELS_SERVICE
} from "../../../../../support/model/services/customer/channels/read";
import {BRANCH} from "../../../../../support/schema/branch";

let flow = {
  name: 'Cliente actualizado enrolado CON seguro',
  phases: [
    PHASE.CDA.PRODUCT.DEFAULT,
    PHASE.IDENTIFICATION,
    PHASE.CDA.SETUP.CLIENT.YES,
    PHASE.ENROLLMENT,
    PHASE.CDA.SUMMARY
  ],
  mocks: {
    channels: READE_ACTIVE_CHANNELS_SERVICE.RESPONSE.FALSE,
  },
  braches: [
    BRANCH.PRODUCT.DEPOSIT,
    BRANCH.CARD.CLIENT.YES.DEPOSIT
  ]
}

describe(CDA.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA, flow)
  })
})

