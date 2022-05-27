import {CDA} from "../../../../../support/schema/flow/cda";
import {PHASE} from "../../../../../support/schema/phase";
import {PAGES} from "../../../../../support/schema/pages";
import {
  READE_ACTIVE_CHANNELS_SERVICE
} from "../../../../../support/model/services/customer/channels/read";

let flow = {
  name: 'Cliente actualizado enrolado CON seguro',
  phases: [
    PHASE.CDA.INITIAL,
    PHASE.IDENTIFICATION,
    PHASE.CDA.FINAL_DEPOSIT
  ],
  mocks: {
    channels: READE_ACTIVE_CHANNELS_SERVICE.RESPONSE.FALSE,
  },
  pages: [
    {
      page: PAGES.ACCOUNT,
      data: {
        account: false,
        deposit: true,
        continue: 0
      }

    }
  ]
}

describe(CDA.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA, flow)
  })
})

