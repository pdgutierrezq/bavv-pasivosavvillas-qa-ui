import {PHASE} from "../../../../../support/schema/phase";
import {
  CONDITION
} from "../../../../../support/model/entities/properties/customer/conditions";
import {
  INSURANCE
} from "../../../../../support/model/entities/properties/customer/insurance";
import {
  READE_ACTIVE_CHANNELS_SERVICE
} from "../../../../../support/model/services/customer/channels/read";
import {CDA} from "../../../../../support/schema/flow/cda";
import {BRANCH} from "../../../../../support/schema/branch";

let flow = {
  name: 'NO Cliente NO actualizado NO enrolado CON seguro',
  phases: [
    PHASE.CDA.INITIAL,
    PHASE.IDENTIFICATION,
    PHASE.CDA.NO_CLIENT,
    PHASE.CDA.FINAL
  ],
  mocks: {
    condition: CONDITION.NO_CLIENT.NO_UPDATED,
    insurance: INSURANCE.YES,
    channels: READE_ACTIVE_CHANNELS_SERVICE.RESPONSE.FALSE
  },
  branches: [
    BRANCH.DIGITAL_ACCOUNT_PRODUCT
  ]
}

describe(CDA.NAME, function () {
  it(flow.name, function () {
    cy.executeFlow(CDA, flow)
  })
})

